"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.addEventListener = addEventListener;
exports.clearNowPlayingMetadata = clearNowPlayingMetadata;
exports.getActiveTrack = getActiveTrack;
exports.getActiveTrackIndex = getActiveTrackIndex;
exports.getBufferedPosition = getBufferedPosition;
exports.getCurrentTrack = getCurrentTrack;
exports.getDuration = getDuration;
exports.getPlayWhenReady = getPlayWhenReady;
exports.getPlaybackState = getPlaybackState;
exports.getPosition = getPosition;
exports.getProgress = getProgress;
exports.getQueue = getQueue;
exports.getRate = getRate;
exports.getRepeatMode = getRepeatMode;
exports.getState = getState;
exports.getTrack = getTrack;
exports.getVolume = getVolume;
exports.isServiceRunning = isServiceRunning;
exports.load = load;
exports.move = move;
exports.pause = pause;
exports.play = play;
exports.registerPlaybackService = registerPlaybackService;
exports.remove = remove;
exports.removeUpcomingTracks = removeUpcomingTracks;
exports.reset = reset;
exports.retry = retry;
exports.seekBy = seekBy;
exports.seekTo = seekTo;
exports.setPlayWhenReady = setPlayWhenReady;
exports.setQueue = setQueue;
exports.setRate = setRate;
exports.setRepeatMode = setRepeatMode;
exports.setVolume = setVolume;
exports.setupPlayer = setupPlayer;
exports.skip = skip;
exports.skipToNext = skipToNext;
exports.skipToPrevious = skipToPrevious;
exports.stop = stop;
exports.updateMetadataForTrack = updateMetadataForTrack;
exports.updateNowPlayingMetadata = updateNowPlayingMetadata;
exports.updateOptions = updateOptions;
var _reactNative = require("react-native");
var _NativeTPMusicModule = _interopRequireDefault(require("./NativeTPMusicModule.js"));
var _index = require("./constants/index.js");
var _resolveAssetSource = _interopRequireDefault(require("./resolveAssetSource"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const emitter = new _reactNative.NativeEventEmitter(_NativeTPMusicModule.default ?? undefined);

// MARK: - Helpers

function resolveImportedAssetOrPath(pathOrAsset) {
  return pathOrAsset === undefined ? undefined : typeof pathOrAsset === 'string' ? pathOrAsset : resolveImportedAsset(pathOrAsset);
}
function resolveImportedAsset(id) {
  return id ? (0, _resolveAssetSource.default)(id) ?? undefined : undefined;
}

// MARK: - General API

/**
 * Initializes the player with the specified options.
 *
 * Note that on Android this method must only be called while the app is in the
 * foreground, otherwise it will throw an error with code
 * `'android_cannot_setup_player_in_background'`. In this case you can wait for
 * the app to be in the foreground and try again.
 *
 * @param options The options to initialize the player with.
 * @see https://rntp.dev/docs/api/functions/lifecycle
 */
async function setupPlayer(options = {}) {
  return _NativeTPMusicModule.default?.setupPlayer(options);
}

/**
 * Register the playback service. The service will run as long as the player runs.
 */
function registerPlaybackService(factory) {
  if (_reactNative.Platform.OS === 'android') {
    // Registers the headless task
    _reactNative.AppRegistry.registerHeadlessTask('TrackPlayer', factory);
  } else if (_reactNative.Platform.OS === 'web') {
    factory()();
  } else {
    // Initializes and runs the service in the next tick
    setImmediate(factory());
  }
}
function addEventListener(event, listener) {
  return emitter.addListener(event, listener);
}

/**
 * @deprecated This method should not be used, most methods reject when service is not bound.
 */
function isServiceRunning() {
  return _NativeTPMusicModule.default?.isServiceRunning() ?? Promise.resolve(false);
}

// MARK: - Queue API

/**
 * Adds one or more tracks to the queue.
 *
 * @param tracks The tracks to add to the queue.
 * @param insertBeforeIndex (Optional) The index to insert the tracks before.
 * By default the tracks will be added to the end of the queue.
 */

/**
 * Adds a track to the queue.
 *
 * @param track The track to add to the queue.
 * @param insertBeforeIndex (Optional) The index to insert the track before.
 * By default the track will be added to the end of the queue.
 */

async function add(tracks, insertBeforeIndex = -1) {
  const resolvedTracks = (Array.isArray(tracks) ? tracks : [tracks]).map(track => ({
    ...track,
    url: resolveImportedAssetOrPath(track.url),
    artwork: resolveImportedAssetOrPath(track.artwork)
  }));
  return resolvedTracks.length < 1 ? undefined : _NativeTPMusicModule.default?.add(resolvedTracks, insertBeforeIndex);
}

/**
 * Replaces the current track or loads the track as the first in the queue.
 *
 * @param track The track to load.
 */
async function load(track) {
  return _NativeTPMusicModule.default?.load(track);
}

/**
 * Move a track within the queue.
 *
 * @param fromIndex The index of the track to be moved.
 * @param toIndex The index to move the track to. If the index is larger than
 * the size of the queue, then the track is moved to the end of the queue.
 */
async function move(fromIndex, toIndex) {
  return _NativeTPMusicModule.default?.move(fromIndex, toIndex);
}

/**
 * Removes multiple tracks from the queue by their indexes.
 *
 * If the current track is removed, the next track will activated. If the
 * current track was the last track in the queue, the first track will be
 * activated.
 *
 * @param indexes The indexes of the tracks to be removed.
 */

/**
 * Removes a track from the queue by its index.
 *
 * If the current track is removed, the next track will activated. If the
 * current track was the last track in the queue, the first track will be
 * activated.
 *
 * @param index The index of the track to be removed.
 */

async function remove(indexOrIndexes) {
  return _NativeTPMusicModule.default?.remove(Array.isArray(indexOrIndexes) ? indexOrIndexes : [indexOrIndexes]);
}

/**
 * Clears any upcoming tracks from the queue.
 */
async function removeUpcomingTracks() {
  return _NativeTPMusicModule.default?.removeUpcomingTracks();
}

/**
 * Skips to a track in the queue.
 *
 * @param index The index of the track to skip to.
 * @param initialPosition (Optional) The initial position to seek to in seconds.
 */
async function skip(index, initialPosition = -1) {
  return _NativeTPMusicModule.default?.skip(index, initialPosition);
}

/**
 * Skips to the next track in the queue.
 *
 * @param initialPosition (Optional) The initial position to seek to in seconds.
 */
async function skipToNext(initialPosition = -1) {
  return _NativeTPMusicModule.default?.skipToNext(initialPosition);
}

/**
 * Skips to the previous track in the queue.
 *
 * @param initialPosition (Optional) The initial position to seek to in seconds.
 */
async function skipToPrevious(initialPosition = -1) {
  return _NativeTPMusicModule.default?.skipToPrevious(initialPosition);
}

// MARK: - Control Center / Notifications API

/**
 * Updates the configuration for the components.
 *
 * @param options The options to update.
 * @see https://rntp.dev/docs/api/functions/player#updateoptionsoptions
 */
async function updateOptions({
  alwaysPauseOnInterruption,
  ...options
} = {}) {
  return _NativeTPMusicModule.default?.updateOptions({
    ...options,
    android: {
      // Handle deprecated alwaysPauseOnInterruption option:
      alwaysPauseOnInterruption: options.android?.alwaysPauseOnInterruption ?? alwaysPauseOnInterruption,
      ...options.android
    },
    icon: resolveImportedAsset(options.icon),
    playIcon: resolveImportedAsset(options.playIcon),
    pauseIcon: resolveImportedAsset(options.pauseIcon),
    stopIcon: resolveImportedAsset(options.stopIcon),
    previousIcon: resolveImportedAsset(options.previousIcon),
    nextIcon: resolveImportedAsset(options.nextIcon),
    rewindIcon: resolveImportedAsset(options.rewindIcon),
    forwardIcon: resolveImportedAsset(options.forwardIcon)
  });
}

/**
 * Updates the metadata of a track in the queue. If the current track is updated,
 * the notification and the Now Playing Center will be updated accordingly.
 *
 * @param trackIndex The index of the track whose metadata will be updated.
 * @param metadata The metadata to update.
 */
async function updateMetadataForTrack(trackIndex, metadata) {
  return _NativeTPMusicModule.default?.updateMetadataForTrack(trackIndex, {
    ...metadata,
    artwork: resolveImportedAssetOrPath(metadata.artwork)
  });
}

/**
 * @deprecated Nominated for removal in the next major version. If you object
 * to this, please describe your use-case in the following issue:
 * https://github.com/doublesymmetry/react-native-track-player/issues/1653
 */
function clearNowPlayingMetadata() {
  return _NativeTPMusicModule.default?.clearNowPlayingMetadata() ?? Promise.resolve();
}

/**
 * Updates the metadata content of the notification (Android) and the Now Playing Center (iOS)
 * without affecting the data stored for the current track.
 */
function updateNowPlayingMetadata(metadata) {
  return _NativeTPMusicModule.default?.updateNowPlayingMetadata({
    ...metadata,
    artwork: resolveImportedAssetOrPath(metadata.artwork)
  }) ?? Promise.resolve();
}

// MARK: - Player API

/**
 * Resets the player stopping the current track and clearing the queue.
 */
async function reset() {
  return _NativeTPMusicModule.default?.reset();
}

/**
 * Plays or resumes the current track.
 */
async function play() {
  return _NativeTPMusicModule.default?.play();
}

/**
 * Pauses the current track.
 */
async function pause() {
  return _NativeTPMusicModule.default?.pause();
}

/**
 * Stops the current track.
 */
async function stop() {
  return _NativeTPMusicModule.default?.stop();
}

/**
 * Sets whether the player will play automatically when it is ready to do so.
 * This is the equivalent of calling `TrackPlayer.play()` when `playWhenReady = true`
 * or `TrackPlayer.pause()` when `playWhenReady = false`.
 */
async function setPlayWhenReady(playWhenReady) {
  return _NativeTPMusicModule.default?.setPlayWhenReady(playWhenReady) ?? Promise.resolve(true);
}

/**
 * Gets whether the player will play automatically when it is ready to do so.
 */
async function getPlayWhenReady() {
  return _NativeTPMusicModule.default?.getPlayWhenReady() ?? Promise.resolve(true);
}

/**
 * Seeks to a specified time position in the current track.
 *
 * @param position The position to seek to in seconds.
 */
async function seekTo(position) {
  return _NativeTPMusicModule.default?.seekTo(position);
}

/**
 * Seeks by a relative time offset in the current track.
 *
 * @param offset The time offset to seek by in seconds.
 */
async function seekBy(offset) {
  return _NativeTPMusicModule.default?.seekBy(offset);
}

/**
 * Sets the volume of the player.
 *
 * @param volume The volume as a number between 0 and 1.
 */
async function setVolume(level) {
  return _NativeTPMusicModule.default?.setVolume(level);
}

/**
 * Sets the playback rate.
 *
 * @param rate The playback rate to change to, where 0.5 would be half speed,
 * 1 would be regular speed, 2 would be double speed etc.
 */
async function setRate(rate) {
  return _NativeTPMusicModule.default?.setRate(rate);
}

/**
 * Sets the queue.
 *
 * @param tracks The tracks to set as the queue.
 * @see https://rntp.dev/docs/api/constants/repeat-mode
 */
async function setQueue(tracks) {
  return _NativeTPMusicModule.default?.setQueue(tracks);
}

/**
 * Sets the queue repeat mode.
 *
 * @param repeatMode The repeat mode to set.
 * @see https://rntp.dev/docs/api/constants/repeat-mode
 */
async function setRepeatMode(mode) {
  return _NativeTPMusicModule.default?.setRepeatMode(mode) ?? Promise.resolve(_index.RepeatMode.Off);
}

// MARK: - Getters

/**
 * Gets the volume of the player as a number between 0 and 1.
 */
async function getVolume() {
  return _NativeTPMusicModule.default?.getVolume() ?? Promise.resolve(0);
}

/**
 * Gets the playback rate where 0.5 would be half speed, 1 would be
 * regular speed and 2 would be double speed etc.
 */
async function getRate() {
  return _NativeTPMusicModule.default?.getRate() ?? Promise.resolve(1.0);
}

/**
 * Gets a track object from the queue.
 *
 * @param index The index of the track.
 * @returns The track object or undefined if there isn't a track object at that
 * index.
 */
async function getTrack(index) {
  return _NativeTPMusicModule.default?.getTrack(index);
}

/**
 * Gets the whole queue.
 */
async function getQueue() {
  return _NativeTPMusicModule.default?.getQueue() ?? Promise.resolve([]);
}

/**
 * Gets the index of the active track in the queue or undefined if there is no
 * current track.
 */
async function getActiveTrackIndex() {
  return (await _NativeTPMusicModule.default?.getActiveTrackIndex()) ?? undefined;
}

/**
 * Gets the active track or undefined if there is no current track.
 */
async function getActiveTrack() {
  return (await _NativeTPMusicModule.default?.getActiveTrack()) ?? undefined;
}

/**
 * Gets the index of the current track or null if there is no current track.
 *
 * @deprecated use `TrackPlayer.getActiveTrackIndex()` instead.
 */
async function getCurrentTrack() {
  const activeTrackIndex = await _NativeTPMusicModule.default?.getActiveTrackIndex();
  return activeTrackIndex !== undefined ? activeTrackIndex : null;
}

/**
 * Gets the duration of the current track in seconds.
 * @deprecated Use `TrackPlayer.getProgress().then((progress) => progress.duration)` instead.
 */
async function getDuration() {
  return _NativeTPMusicModule.default?.getDuration() ?? Promise.resolve(0);
}

/**
 * Gets the buffered position of the current track in seconds.
 *
 * @deprecated Use `TrackPlayer.getProgress().then((progress) => progress.buffered)` instead.
 */
async function getBufferedPosition() {
  return _NativeTPMusicModule.default?.getBufferedPosition() ?? Promise.resolve(0);
}

/**
 * Gets the playback position of the current track in seconds.
 * @deprecated Use `TrackPlayer.getProgress().then((progress) => progress.position)` instead.
 */
async function getPosition() {
  return _NativeTPMusicModule.default?.getPosition() ?? Promise.resolve(0);
}

/**
 * Gets information on the progress of the currently active track, including its
 * current playback position in seconds, buffered position in seconds and
 * duration in seconds.
 */
async function getProgress() {
  return _NativeTPMusicModule.default?.getProgress() ?? {};
}

/**
 * @deprecated use (await getPlaybackState()).state instead.
 */
async function getState() {
  return (await _NativeTPMusicModule.default?.getPlaybackState())?.state ?? {};
}

/**
 * Gets the playback state of the player.
 *
 * @see https://rntp.dev/docs/api/constants/state
 */
async function getPlaybackState() {
  return _NativeTPMusicModule.default?.getPlaybackState() ?? {};
}

/**
 * Gets the queue repeat mode.
 *
 * @see https://rntp.dev/docs/api/constants/repeat-mode
 */
async function getRepeatMode() {
  return _NativeTPMusicModule.default?.getRepeatMode() ?? Promise.resolve(_index.RepeatMode.Off);
}

/**
 * Retries the current item when the playback state is `State.Error`.
 */
async function retry() {
  return _NativeTPMusicModule.default?.retry();
}
//# sourceMappingURL=trackPlayer.js.map
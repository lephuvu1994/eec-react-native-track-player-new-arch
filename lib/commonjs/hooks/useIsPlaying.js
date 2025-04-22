"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlaying = isPlaying;
exports.useIsPlaying = useIsPlaying;
var _index = _interopRequireDefault(require("../index.js"));
var _index2 = require("../constants/index.js");
var _usePlayWhenReady = require("./usePlayWhenReady.js");
var _usePlaybackState = require("./usePlaybackState.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Tells whether the TrackPlayer is in a mode that most people would describe
 * as "playing." Great for UI to decide whether to show a Play or Pause button.
 * @returns playing - whether UI should likely show as Playing, or undefined
 *   if this isn't yet known.
 * @returns bufferingDuringPlay - whether UI should show as Buffering, or
 *   undefined if this isn't yet known.
 */
function useIsPlaying() {
  const state = (0, _usePlaybackState.usePlaybackState)().state;
  const playWhenReady = (0, _usePlayWhenReady.usePlayWhenReady)();
  return determineIsPlaying(playWhenReady, state);
}
function determineIsPlaying(playWhenReady, state) {
  if (playWhenReady === undefined || state === undefined) {
    return {
      playing: undefined,
      bufferingDuringPlay: undefined
    };
  }
  const isLoading = state === _index2.State.Loading || state === _index2.State.Buffering;
  const isErrored = state === _index2.State.Error;
  const isEnded = state === _index2.State.Ended;
  const isNone = state === _index2.State.None;
  return {
    playing: playWhenReady && !(isErrored || isEnded || isNone),
    bufferingDuringPlay: playWhenReady && isLoading
  };
}

/**
 * This exists if you need realtime status on whether the TrackPlayer is
 * playing, whereas the hooks all have a delay because they depend on responding
 * to events before their state is updated.
 *
 * It also exists whenever you need to know the play state outside of a React
 * component, since hooks only work in components.
 *
 * @returns playing - whether UI should likely show as Playing, or undefined
 *   if this isn't yet known.
 * @returns bufferingDuringPlay - whether UI should show as Buffering, or
 *   undefined if this isn't yet known.
 */
async function isPlaying() {
  const [playbackState, playWhenReady] = await Promise.all([_index.default.getPlaybackState(), _index.default.getPlayWhenReady()]);
  return determineIsPlaying(playWhenReady, playbackState.state);
}
//# sourceMappingURL=useIsPlaying.js.map
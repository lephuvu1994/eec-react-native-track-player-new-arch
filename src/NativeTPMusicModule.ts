import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import { type UnsafeObject } from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  getConstants: () => {
    CAPABILITY_PLAY: number;
    CAPABILITY_PLAY_FROM_ID: number;
    CAPABILITY_PLAY_FROM_SEARCH: number;
    CAPABILITY_PAUSE: number;
    CAPABILITY_STOP: number;
    CAPABILITY_SEEK_TO: number;
    CAPABILITY_SKIP: number;
    CAPABILITY_SKIP_TO_NEXT: number;
    CAPABILITY_SKIP_TO_PREVIOUS: number;
    CAPABILITY_SET_RATING: number;
    CAPABILITY_JUMP_FORWARD: number;
    CAPABILITY_JUMP_BACKWARD: number;
    CAPABILITY_LIKE: number;
    CAPABILITY_DISLIKE: number;
    CAPABILITY_BOOKMARK: number;

    // States
    STATE_NONE: string;
    STATE_READY: string;
    STATE_PLAYING: string;
    STATE_PAUSED: string;
    STATE_STOPPED: string;
    STATE_BUFFERING: string;
    STATE_LOADING: string;

    // Rating Types
    RATING_HEART: number;
    RATING_THUMBS_UP_DOWN: number;
    RATING_3_STARS: number;
    RATING_4_STARS: number;
    RATING_5_STARS: number;
    RATING_PERCENTAGE: number;

    // Repeat Modes
    REPEAT_OFF: number;
    REPEAT_TRACK: number;
    REPEAT_QUEUE: number;

    PITCH_ALGORITHM_LINEAR: number;
    PITCH_ALGORITHM_MUSIC: number;
    PITCH_ALGORITHM_VOICE: number;
  };

  // Initialization and Configuration
  setupPlayer(options: UnsafeObject): Promise<void>;
  updateOptions(options: UnsafeObject): Promise<void>;

  // Playback Controls
  play(): Promise<void>;
  pause(): Promise<void>;
  stop(): Promise<void>;
  reset(): Promise<void>;
  retry(): Promise<void>;
  skip(index: number, initialPosition?: number): Promise<void>;
  skipToNext(initialPosition?: number): Promise<void>;
  skipToPrevious(initialPosition?: number): Promise<void>;
  seekTo(seconds: number): Promise<void>;
  seekBy(seconds: number): Promise<void>;
  setRate(rate: number): Promise<void>;

  // Queue Management
  add(
    tracks: UnsafeObject[],
    insertBeforeIndex?: number
  ): Promise<number | void>;
  load(track: UnsafeObject): Promise<void>;
  move(fromIndex: number, toIndex: number): Promise<void>;
  remove(indices: number[]): Promise<void>;
  setQueue(tracks: UnsafeObject[]): Promise<void>;
  setPlayWhenReady(playWhenReady: boolean): Promise<boolean>;
  getPlayWhenReady(): Promise<boolean>;

  // Track Metadata
  updateMetadataForTrack(
    trackIndex: number,
    metadata: UnsafeObject
  ): Promise<void>;
  updateNowPlayingMetadata(metadata: UnsafeObject): Promise<void>;
  clearNowPlayingMetadata(): Promise<void>;
  removeUpcomingTracks(): Promise<void>;
  getTrack(trackIndex: number): Promise<UnsafeObject | undefined>;
  getQueue(): Promise<UnsafeObject[]>;
  getActiveTrackIndex(): Promise<number | undefined>;
  getActiveTrack(): Promise<UnsafeObject | undefined>;
  getProgress(): Promise<UnsafeObject>;

  // Player State and Information
  getPlaybackState(): Promise<UnsafeObject>;
  getRate(): Promise<number>;
  getDuration(): Promise<number>;
  getPosition(): Promise<number>;
  getBufferedPosition(): Promise<number>;
  isServiceRunning(): Promise<boolean>;

  // Repeat and Shuffle Modes
  setRepeatMode(mode: number): Promise<number>;
  getRepeatMode(): Promise<number>;

  // Audio and Volume
  setVolume(volume: number): Promise<void>;
  getVolume(): Promise<number>;

  addListener: (eventType: string) => void;
  removeListeners: (count: number) => void;
}

const module = TurboModuleRegistry.getEnforcing<Spec>('TPMusicModule');
export const Constants = module?.getConstants();
export default module;

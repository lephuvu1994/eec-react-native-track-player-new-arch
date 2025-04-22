"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProgress = useProgress;
var _react = require("react");
var _trackPlayer = require("../trackPlayer.js");
var _index = require("../constants/index.js");
var _useTrackPlayerEvents = require("./useTrackPlayerEvents.js");
const INITIAL_STATE = {
  position: 0,
  duration: 0,
  buffered: 0
};

/**
 * Poll for track progress for the given interval (in miliseconds)
 * @param updateInterval - ms interval
 */
function useProgress(updateInterval = 1000) {
  const [state, setState] = (0, _react.useState)(INITIAL_STATE);
  (0, _useTrackPlayerEvents.useTrackPlayerEvents)([_index.Event.PlaybackActiveTrackChanged], () => {
    setState(INITIAL_STATE);
  });
  (0, _react.useEffect)(() => {
    let mounted = true;
    const update = async () => {
      try {
        const {
          position,
          duration,
          buffered
        } = await (0, _trackPlayer.getProgress)();
        if (!mounted) return;
        setState(state => position === state.position && duration === state.duration && buffered === state.buffered ? state : {
          position,
          duration,
          buffered
        });
      } catch {
        // these method only throw while you haven't yet setup, ignore failure.
      }
    };
    const poll = async () => {
      await update();
      if (!mounted) return;
      await new Promise(resolve => setTimeout(resolve, updateInterval));
      if (!mounted) return;
      poll();
    };
    poll();
    return () => {
      mounted = false;
    };
  }, [updateInterval]);
  return state;
}
//# sourceMappingURL=useProgress.js.map
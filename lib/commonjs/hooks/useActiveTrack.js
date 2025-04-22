"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useActiveTrack = void 0;
var _react = require("react");
var _trackPlayer = require("../trackPlayer.js");
var _index = require("../constants/index.js");
var _useTrackPlayerEvents = require("./useTrackPlayerEvents.js");
const useActiveTrack = () => {
  const [track, setTrack] = (0, _react.useState)();

  // Sets the initial index (if still undefined)
  (0, _react.useEffect)(() => {
    let unmounted = false;
    (0, _trackPlayer.getActiveTrack)().then(initialTrack => {
      if (unmounted) return;
      setTrack(track => track ?? initialTrack ?? undefined);
    }).catch(() => {
      // throws when you haven't yet setup, which is fine because it also
      // means there's no active track
    });
    return () => {
      unmounted = true;
    };
  }, []);
  (0, _useTrackPlayerEvents.useTrackPlayerEvents)([_index.Event.PlaybackActiveTrackChanged], async ({
    track
  }) => {
    setTrack(track ?? undefined);
  });
  return track;
};
exports.useActiveTrack = useActiveTrack;
//# sourceMappingURL=useActiveTrack.js.map
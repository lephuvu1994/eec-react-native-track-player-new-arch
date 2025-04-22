"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PitchAlgorithm = void 0;
var _NativeTPMusicModule = require("../NativeTPMusicModule.js");
let PitchAlgorithm = exports.PitchAlgorithm = function (PitchAlgorithm) {
  /**
   * A high-quality time pitch algorithm that doesn’t perform pitch correction.
   * */
  PitchAlgorithm[PitchAlgorithm["Linear"] = _NativeTPMusicModule.Constants?.PITCH_ALGORITHM_LINEAR ?? 1] = "Linear";
  /**
   * A highest-quality time pitch algorithm that’s suitable for music.
   **/
  PitchAlgorithm[PitchAlgorithm["Music"] = _NativeTPMusicModule.Constants?.PITCH_ALGORITHM_MUSIC ?? 2] = "Music";
  /**
   * A modest quality time pitch algorithm that’s suitable for voice.
   **/
  PitchAlgorithm[PitchAlgorithm["Voice"] = _NativeTPMusicModule.Constants?.PITCH_ALGORITHM_VOICE ?? 3] = "Voice";
  return PitchAlgorithm;
}({});
//# sourceMappingURL=PitchAlgorithm.js.map
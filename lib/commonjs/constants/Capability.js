"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Capability = void 0;
var _NativeTPMusicModule = require("../NativeTPMusicModule.js");
let Capability = exports.Capability = function (Capability) {
  Capability[Capability["Play"] = _NativeTPMusicModule.Constants?.CAPABILITY_PLAY ?? 1] = "Play";
  Capability[Capability["PlayFromId"] = _NativeTPMusicModule.Constants?.CAPABILITY_PLAY_FROM_ID ?? 2] = "PlayFromId";
  Capability[Capability["PlayFromSearch"] = _NativeTPMusicModule.Constants?.CAPABILITY_PLAY_FROM_SEARCH ?? 3] = "PlayFromSearch";
  Capability[Capability["Pause"] = _NativeTPMusicModule.Constants?.CAPABILITY_PAUSE ?? 4] = "Pause";
  Capability[Capability["Stop"] = _NativeTPMusicModule.Constants?.CAPABILITY_STOP ?? 5] = "Stop";
  Capability[Capability["SeekTo"] = _NativeTPMusicModule.Constants?.CAPABILITY_SEEK_TO ?? 6] = "SeekTo";
  Capability[Capability["Skip"] = _NativeTPMusicModule.Constants?.CAPABILITY_SKIP ?? 7] = "Skip";
  Capability[Capability["SkipToNext"] = _NativeTPMusicModule.Constants?.CAPABILITY_SKIP_TO_NEXT ?? 8] = "SkipToNext";
  Capability[Capability["SkipToPrevious"] = _NativeTPMusicModule.Constants?.CAPABILITY_SKIP_TO_PREVIOUS ?? 9] = "SkipToPrevious";
  Capability[Capability["JumpForward"] = _NativeTPMusicModule.Constants?.CAPABILITY_JUMP_FORWARD ?? 10] = "JumpForward";
  Capability[Capability["JumpBackward"] = _NativeTPMusicModule.Constants?.CAPABILITY_JUMP_BACKWARD ?? 11] = "JumpBackward";
  Capability[Capability["SetRating"] = _NativeTPMusicModule.Constants?.CAPABILITY_SET_RATING ?? 12] = "SetRating";
  Capability[Capability["Like"] = _NativeTPMusicModule.Constants?.CAPABILITY_LIKE ?? 13] = "Like";
  Capability[Capability["Dislike"] = _NativeTPMusicModule.Constants?.CAPABILITY_DISLIKE ?? 14] = "Dislike";
  Capability[Capability["Bookmark"] = _NativeTPMusicModule.Constants?.CAPABILITY_BOOKMARK ?? 15] = "Bookmark";
  return Capability;
}({});
//# sourceMappingURL=Capability.js.map
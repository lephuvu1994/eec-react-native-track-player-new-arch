"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RatingType = void 0;
var _NativeTPMusicModule = require("../NativeTPMusicModule.js");
let RatingType = exports.RatingType = function (RatingType) {
  RatingType[RatingType["Heart"] = _NativeTPMusicModule.Constants?.RATING_HEART ?? 1] = "Heart";
  RatingType[RatingType["ThumbsUpDown"] = _NativeTPMusicModule.Constants?.RATING_THUMBS_UP_DOWN ?? 2] = "ThumbsUpDown";
  RatingType[RatingType["ThreeStars"] = _NativeTPMusicModule.Constants?.RATING_3_STARS ?? 3] = "ThreeStars";
  RatingType[RatingType["FourStars"] = _NativeTPMusicModule.Constants?.RATING_4_STARS ?? 4] = "FourStars";
  RatingType[RatingType["FiveStars"] = _NativeTPMusicModule.Constants?.RATING_5_STARS ?? 5] = "FiveStars";
  RatingType[RatingType["Percentage"] = _NativeTPMusicModule.Constants?.RATING_PERCENTAGE ?? 6] = "Percentage";
  return RatingType;
}({});
//# sourceMappingURL=RatingType.js.map
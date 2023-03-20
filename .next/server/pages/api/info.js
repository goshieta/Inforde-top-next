"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/info";
exports.ids = ["pages/api/info"];
exports.modules = {

/***/ "(api)/./pages/api/info.js":
/*!***************************!*\
  !*** ./pages/api/info.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const trend = await fetch(\"https://trends.google.co.jp/trends/trendingsearches/daily/rss?geo=JP\"); //返す情報 - 天気,ニュース,トレンド\n\n  res.status(200).json({\n    copyright: \"2023 Inforde\"\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW5mby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsT0FBT0EsR0FBUCxFQUFXQyxHQUFYLEtBQWlCO0VBQzVCLE1BQU1DLEtBQUssR0FBQyxNQUFNQyxLQUFLLENBQUMsc0VBQUQsQ0FBdkIsQ0FENEIsQ0FFNUI7O0VBQ0FGLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0lBQ2pCQyxTQUFTLEVBQUM7RUFETyxDQUFyQjtBQUdILENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2FwaS9pbmZvLmpzPzA0M2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSxyZXMpPT57XG4gICAgY29uc3QgdHJlbmQ9YXdhaXQgZmV0Y2goXCJodHRwczovL3RyZW5kcy5nb29nbGUuY28uanAvdHJlbmRzL3RyZW5kaW5nc2VhcmNoZXMvZGFpbHkvcnNzP2dlbz1KUFwiKVxuICAgIC8v6L+U44GZ5oOF5aCxIC0g5aSp5rCXLOODi+ODpeODvOOCuSzjg4jjg6zjg7Pjg4lcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIGNvcHlyaWdodDpcIjIwMjMgSW5mb3JkZVwiLFxuICAgIH0pXG59Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsInRyZW5kIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwiY29weXJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/info.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/info.js"));
module.exports = __webpack_exports__;

})();
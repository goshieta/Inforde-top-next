"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_top_load_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/top/load.jsx */ \"./components/top/load.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/ishida/\\u30C7\\u30B9\\u30AF\\u30C8\\u30C3\\u30D7/node/inforde-top-next/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      displayMode = _useState[0],\n      setDisplayMode = _useState[1];\n\n  fetch('/api/info').then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    console.log(json);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"title\", {\n        children: \"Inforde Top\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      style: {\n        display: displayMode == 0 ? 'block' : 'none'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_top_load_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().top)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().bottom),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().left)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().middle)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().right)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"hOpzJVSEtJ3LDWvwwpm+WzzAXqw=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNJLElBQVQsR0FBZ0I7RUFBQTs7RUFDN0IsZ0JBQXNDRCwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7RUFBQSxJQUFPRSxXQUFQO0VBQUEsSUFBb0JDLGNBQXBCOztFQUNBQyxLQUFLLENBQUMsV0FBRCxDQUFMLENBQW1CQyxJQUFuQixDQUF3QixVQUFBQyxHQUFHLEVBQUU7SUFDM0IsT0FBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7RUFDRCxDQUZELEVBRUdGLElBRkgsQ0FFUSxVQUFBRSxJQUFJLEVBQUU7SUFDWkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7RUFDRCxDQUpEO0VBS0Esb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUFBLHVCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBSUU7TUFBSyxLQUFLLEVBQUU7UUFBRUcsT0FBTyxFQUFFUixXQUFXLElBQUksQ0FBZixHQUFtQixPQUFuQixHQUE2QjtNQUF4QyxDQUFaO01BQUEsdUJBQ0UsOERBQUMsZ0VBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFKRixlQVFFO01BQUssRUFBRSxFQUFFSix3RUFBVDtNQUFBLHdCQUNFO1FBQUssRUFBRSxFQUFFQSxvRUFBVWM7TUFBbkI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBRUU7UUFBSyxFQUFFLEVBQUVkLHVFQUFUO1FBQUEsd0JBQ0U7VUFBSyxFQUFFLEVBQUVBLHFFQUFXZ0I7UUFBcEI7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURGLGVBRUU7VUFBSyxFQUFFLEVBQUVoQix1RUFBYWlCO1FBQXRCO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFGRixlQUdFO1VBQUssRUFBRSxFQUFFakIsc0VBQVlrQjtRQUFyQjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBSEY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBUkY7RUFBQSxnQkFERjtBQW1CRDs7R0ExQnVCZjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBMb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvdG9wL2xvYWQuanN4JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGlzcGxheU1vZGUsIHNldERpc3BsYXlNb2RlXSA9IHVzZVN0YXRlKDEpO1xuICBmZXRjaCgnL2FwaS9pbmZvJykudGhlbihyZXM9PntcbiAgICByZXR1cm4ocmVzLmpzb24oKSlcbiAgfSkudGhlbihqc29uPT57XG4gICAgY29uc29sZS5sb2coanNvbilcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5JbmZvcmRlIFRvcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IGRpc3BsYXlNb2RlID09IDAgPyAnYmxvY2snIDogJ25vbmUnIH19PlxuICAgICAgICA8TG9hZCAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyrjgrPjg7Pjg4bjg7Pjg4Toh6rkvZMgKi99XG4gICAgICA8ZGl2IGlkPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy50b3B9PjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuYm90dG9tfT5cbiAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMubGVmdH0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD17c3R5bGVzLm1pZGRsZX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnJpZ2h0fT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiTG9hZCIsInVzZVN0YXRlIiwiSG9tZSIsImRpc3BsYXlNb2RlIiwic2V0RGlzcGxheU1vZGUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJjb250ZW50IiwidG9wIiwiYm90dG9tIiwibGVmdCIsIm1pZGRsZSIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_ishida_node_inforde_top_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_ishida_node_inforde_top_next_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_ishida_node_inforde_top_next_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_ishida_node_inforde_top_next_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_top_load_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/top/load.jsx */ \"./components/top/load.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/ishida/\\u30C7\\u30B9\\u30AF\\u30C8\\u30C3\\u30D7/node/inforde-top-next/pages/index.js\";\n\n\n\n\n\n\n\nfunction Home() {\n  return _Home.apply(this, arguments);\n}\n_c2 = Home;\n\nfunction _Home() {\n  var _s = $RefreshSig$();\n\n  _Home = _s((0,_home_ishida_node_inforde_top_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_s( /*#__PURE__*/_home_ishida_node_inforde_top_next_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var _useState, displayMode, setDisplayMode, _useState2, info, setInfo;\n\n    return _home_ishida_node_inforde_top_next_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _s();\n\n            _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1), displayMode = _useState[0], setDisplayMode = _useState[1]; //apiにリクエストを送り情報を受け取る\n\n            _context.t0 = react__WEBPACK_IMPORTED_MODULE_4__.useState;\n            _context.next = 5;\n            return fetch('/api/info').then(function (res) {\n              return res.json();\n            });\n\n          case 5:\n            _context.t1 = _context.sent;\n            _useState2 = (0, _context.t0)(_context.t1);\n            info = _useState2[0];\n            setInfo = _useState2[1];\n            return _context.abrupt(\"return\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n                  children: \"Inforde Top\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 15,\n                  columnNumber: 9\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 14,\n                columnNumber: 7\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                style: {\n                  display: displayMode == 0 ? 'block' : 'none'\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_top_load_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 18,\n                  columnNumber: 9\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 7\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                  id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().top)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 22,\n                  columnNumber: 9\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                  id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().bottom),\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().left)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 24,\n                    columnNumber: 11\n                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().middle)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 25,\n                    columnNumber: 11\n                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().right)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 26,\n                    columnNumber: 11\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 23,\n                  columnNumber: 9\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 21,\n                columnNumber: 7\n              }, this)]\n            }, void 0, true));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }), \"lvt8IqGVk6ctpKDVBzeyJcTqtrA=\")), \"lvt8IqGVk6ctpKDVBzeyJcTqtrA=\");\n  return _Home.apply(this, arguments);\n}\n\n_c = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQWVJLElBQTlCO0VBQUE7QUFBQTtNQUE4QkE7Ozs7OzZVQUFmO0lBQUE7O0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTs7WUFBQSxZQUN5QkQsK0NBQVEsQ0FBQyxDQUFELENBRGpDLEVBQ05FLFdBRE0saUJBQ09DLGNBRFAsaUJBRWI7O1lBRmEsY0FHUUgsMkNBSFI7WUFBQTtZQUFBLE9BR3VCSSxLQUFLLENBQUMsV0FBRCxDQUFMLENBQW1CQyxJQUFuQixDQUF3QixVQUFBQyxHQUFHLEVBQUU7Y0FDL0QsT0FBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7WUFDRCxDQUZtQyxDQUh2Qjs7VUFBQTtZQUFBO1lBQUE7WUFHTkMsSUFITTtZQUdEQyxPQUhDO1lBQUEsOENBT1g7Y0FBQSx3QkFDRSw4REFBQyxrREFBRDtnQkFBQSx1QkFDRTtrQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtjQURGO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsUUFERixlQUlFO2dCQUFLLEtBQUssRUFBRTtrQkFBRUMsT0FBTyxFQUFFUixXQUFXLElBQUksQ0FBZixHQUFtQixPQUFuQixHQUE2QjtnQkFBeEMsQ0FBWjtnQkFBQSx1QkFDRSw4REFBQyxnRUFBRDtrQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtjQURGO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsUUFKRixlQVFFO2dCQUFLLEVBQUUsRUFBRUosd0VBQVQ7Z0JBQUEsd0JBQ0U7a0JBQUssRUFBRSxFQUFFQSxvRUFBVWM7Z0JBQW5CO2tCQUFBO2tCQUFBO2tCQUFBO2dCQUFBLFFBREYsZUFFRTtrQkFBSyxFQUFFLEVBQUVkLHVFQUFUO2tCQUFBLHdCQUNFO29CQUFLLEVBQUUsRUFBRUEscUVBQVdnQjtrQkFBcEI7b0JBQUE7b0JBQUE7b0JBQUE7a0JBQUEsUUFERixlQUVFO29CQUFLLEVBQUUsRUFBRWhCLHVFQUFhaUI7a0JBQXRCO29CQUFBO29CQUFBO29CQUFBO2tCQUFBLFFBRkYsZUFHRTtvQkFBSyxFQUFFLEVBQUVqQixzRUFBWWtCO2tCQUFyQjtvQkFBQTtvQkFBQTtvQkFBQTtrQkFBQSxRQUhGO2dCQUFBO2tCQUFBO2tCQUFBO2tCQUFBO2dCQUFBLFFBRkY7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLFFBUkY7WUFBQSxnQkFQVzs7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztLQUFlZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IExvYWQgZnJvbSAnLi4vY29tcG9uZW50cy90b3AvbG9hZC5qc3gnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkaXNwbGF5TW9kZSwgc2V0RGlzcGxheU1vZGVdID0gdXNlU3RhdGUoMSk7XG4gIC8vYXBp44Gr44Oq44Kv44Ko44K544OI44KS6YCB44KK5oOF5aCx44KS5Y+X44GR5Y+W44KLXG4gIGNvbnN0IFtpbmZvLHNldEluZm9dPXVzZVN0YXRlKGF3YWl0IGZldGNoKCcvYXBpL2luZm8nKS50aGVuKHJlcz0+e1xuICAgIHJldHVybihyZXMuanNvbigpKVxuICB9KSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5JbmZvcmRlIFRvcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IGRpc3BsYXlNb2RlID09IDAgPyAnYmxvY2snIDogJ25vbmUnIH19PlxuICAgICAgICA8TG9hZCAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyrjgrPjg7Pjg4bjg7Pjg4Toh6rkvZMgKi99XG4gICAgICA8ZGl2IGlkPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy50b3B9PjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuYm90dG9tfT5cbiAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMubGVmdH0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD17c3R5bGVzLm1pZGRsZX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnJpZ2h0fT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiTG9hZCIsInVzZVN0YXRlIiwiSG9tZSIsImRpc3BsYXlNb2RlIiwic2V0RGlzcGxheU1vZGUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaW5mbyIsInNldEluZm8iLCJkaXNwbGF5IiwiY29udGVudCIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJtaWRkbGUiLCJyaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
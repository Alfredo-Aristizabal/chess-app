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

/***/ "./chess/table/tableDesign.tsx":
/*!*************************************!*\
  !*** ./chess/table/tableDesign.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tableDesign; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction tableDesign(IDES, typeTable) {\n    let count = 0;\n    let colorBoxesForBlack = [\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\"\n    ];\n    let colorBoxesForWhite = [\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\",\n        \"bg-black\",\n        \"bg-white\"\n    ];\n    let lettersForWhite = [\n        \"a\",\n        \"b\",\n        \"c\",\n        \"d\",\n        \"e\",\n        \"f\",\n        \"g\",\n        \"h\"\n    ];\n    let lettersForBlack = [\n        \"h\",\n        \"g\",\n        \"f\",\n        \"e\",\n        \"d\",\n        \"c\",\n        \"b\",\n        \"a\"\n    ];\n    let numbersForWhite = [\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8\n    ];\n    let numbersForBlack = [\n        8,\n        7,\n        6,\n        5,\n        4,\n        3,\n        2,\n        1\n    ];\n    let letters = typeTable == \"white\" ? lettersForWhite : lettersForBlack;\n    let letterCount = 0;\n    let numbers = typeTable == \"white\" ? numbersForWhite : numbersForBlack;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex items-center justify-center\",\n        style: {\n            marginTop: \"80px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                className: \"w-[500px] \",\n                children: [\n                    IDES.map((row)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"w-[500px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    style: {\n                                        width: \"2.5rem\"\n                                    },\n                                    children: letters[letterCount++]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\tableDesign.tsx\",\n                                    lineNumber: 173,\n                                    columnNumber: 17\n                                }, this),\n                                row.map((id)=>{\n                                    console.log(count);\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            width: \"3.5rem\"\n                                        },\n                                        className: \" \".concat(typeTable === \"white\" ? colorBoxesForWhite[count++] : colorBoxesForBlack[count++], \"  h-14\"),\n                                        id: \"box\" + id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\tableDesign.tsx\",\n                                        lineNumber: 177,\n                                        columnNumber: 21\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\tableDesign.tsx\",\n                            lineNumber: 172,\n                            columnNumber: 15\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\tableDesign.tsx\",\n                                lineNumber: 192,\n                                columnNumber: 13\n                            }, this),\n                            letters.map((letter)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    style: {\n                                        width: \"3.5rem\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-center\",\n                                        children: [\n                                            \" \",\n                                            letter\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\tableDesign.tsx\",\n                                        lineNumber: 195,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\tableDesign.tsx\",\n                                    lineNumber: 194,\n                                    columnNumber: 22\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\tableDesign.tsx\",\n                        lineNumber: 191,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\tableDesign.tsx\",\n                lineNumber: 169,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\tableDesign.tsx\",\n            lineNumber: 168,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\tableDesign.tsx\",\n        lineNumber: 164,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGVzcy90YWJsZS90YWJsZURlc2lnbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBRVgsU0FBU0MsWUFDdEJDLElBQWdCLEVBQ2hCQyxTQUFpQixFQUNKO0lBQ2IsSUFBSUMsUUFBZ0I7SUFFcEIsSUFBSUMscUJBQStCO1FBQ2pDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxJQUFJQyxxQkFBK0I7UUFDakM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELElBQUlDLGtCQUE0QjtRQUFDO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUN4RSxJQUFJQyxrQkFBNEI7UUFBQztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFFeEUsSUFBSUMsa0JBQTRCO1FBQUM7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztLQUFFO0lBQ3hELElBQUlDLGtCQUE0QjtRQUFDO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7S0FBRTtJQUV4RCxJQUFJQyxVQUNGUixhQUFhLFVBQVVJLGtCQUFrQkMsZUFBZTtJQUMxRCxJQUFJSSxjQUFzQjtJQUUxQixJQUFJQyxVQUNGVixhQUFhLFVBQVVNLGtCQUFrQkMsZUFBZTtJQUUxRCxxQkFDRSw4REFBQ0k7UUFDQ0MsV0FBVTtRQUNWQyxPQUFPO1lBQUVDLFdBQVc7UUFBTztrQkFFM0IsNEVBQUNDO1lBQU1ILFdBQVU7c0JBQ2YsNEVBQUNJO2dCQUFNSixXQUFVOztvQkFDZGIsS0FBS2tCLEdBQUcsQ0FBQyxDQUFDQyxNQUFRO3dCQUNqQixxQkFDRSw4REFBQ0M7NEJBQUdQLFdBQVU7OzhDQUNaLDhEQUFDUTtvQ0FBR1AsT0FBTzt3Q0FBRVEsT0FBTztvQ0FBUzs4Q0FBSWIsT0FBTyxDQUFDQyxjQUFjOzs7Ozs7Z0NBQ3REUyxJQUFJRCxHQUFHLENBQUMsQ0FBQ0ssS0FBTztvQ0FDZkMsUUFBUUMsR0FBRyxDQUFDdkI7b0NBQ1oscUJBQ0UsOERBQUNtQjt3Q0FDQ1AsT0FBTzs0Q0FBRVEsT0FBTzt3Q0FBUzt3Q0FDekJULFdBQVcsSUFJVixPQUhDWixjQUFjLFVBQ1ZHLGtCQUFrQixDQUFDRixRQUFRLEdBQzNCQyxrQkFBa0IsQ0FBQ0QsUUFBUSxFQUNoQzt3Q0FDRHFCLElBQUksUUFBUUE7Ozs7OztnQ0FHbEI7Ozs7Ozs7b0JBR047a0NBQ0EsOERBQUNIOzswQ0FDQyw4REFBQ0M7Ozs7OzRCQUNBWixRQUFRUyxHQUFHLENBQUMsQ0FBQ1EsU0FBVztnQ0FDdkIscUJBQU8sOERBQUNMO29DQUFHUCxPQUFPO3dDQUFFUSxPQUFPO29DQUFTOzhDQUNwQyw0RUFBQ0s7d0NBQUVkLFdBQVU7OzRDQUFjOzRDQUFFYTs7Ozs7Ozs7Ozs7OzRCQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NoZXNzL3RhYmxlL3RhYmxlRGVzaWduLnRzeD8wZTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhYmxlRGVzaWduKFxyXG4gIElERVM6IG51bWJlcltdW10sXHJcbiAgdHlwZVRhYmxlOiBzdHJpbmdcclxuKTogSlNYLkVsZW1lbnQge1xyXG4gIGxldCBjb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgbGV0IGNvbG9yQm94ZXNGb3JCbGFjazogc3RyaW5nW10gPSBbXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcblxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG5cclxuICAgIFwiYmctYmxhY2tcIixcclxuICAgIFwiYmctd2hpdGVcIixcclxuICAgIFwiYmctYmxhY2tcIixcclxuICAgIFwiYmctd2hpdGVcIixcclxuICAgIFwiYmctYmxhY2tcIixcclxuICAgIFwiYmctd2hpdGVcIixcclxuICAgIFwiYmctYmxhY2tcIixcclxuICAgIFwiYmctd2hpdGVcIixcclxuXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcblxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG5cclxuICAgIFwiYmctd2hpdGVcIixcclxuICAgIFwiYmctYmxhY2tcIixcclxuICAgIFwiYmctd2hpdGVcIixcclxuICAgIFwiYmctYmxhY2tcIixcclxuICAgIFwiYmctd2hpdGVcIixcclxuICAgIFwiYmctYmxhY2tcIixcclxuICAgIFwiYmctd2hpdGVcIixcclxuICAgIFwiYmctYmxhY2tcIixcclxuXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBcImJnLXdoaXRlXCIsXHJcblxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gIF07XHJcblxyXG4gIGxldCBjb2xvckJveGVzRm9yV2hpdGU6IHN0cmluZ1tdID0gW1xyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgXCJiZy1ibGFja1wiLFxyXG4gICAgXCJiZy13aGl0ZVwiLFxyXG4gIF07XHJcblxyXG4gIGxldCBsZXR0ZXJzRm9yV2hpdGU6IHN0cmluZ1tdID0gW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIl07XHJcbiAgbGV0IGxldHRlcnNGb3JCbGFjazogc3RyaW5nW10gPSBbXCJoXCIsIFwiZ1wiLCBcImZcIiwgXCJlXCIsIFwiZFwiLCBcImNcIiwgXCJiXCIsIFwiYVwiXTtcclxuXHJcbiAgbGV0IG51bWJlcnNGb3JXaGl0ZTogbnVtYmVyW10gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF07XHJcbiAgbGV0IG51bWJlcnNGb3JCbGFjazogbnVtYmVyW10gPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcblxyXG4gIGxldCBsZXR0ZXJzOiBzdHJpbmdbXSA9XHJcbiAgICB0eXBlVGFibGUgPT0gXCJ3aGl0ZVwiID8gbGV0dGVyc0ZvcldoaXRlIDogbGV0dGVyc0ZvckJsYWNrO1xyXG4gIGxldCBsZXR0ZXJDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgbGV0IG51bWJlcnM6IG51bWJlcltdID1cclxuICAgIHR5cGVUYWJsZSA9PSBcIndoaXRlXCIgPyBudW1iZXJzRm9yV2hpdGUgOiBudW1iZXJzRm9yQmxhY2s7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI4MHB4XCIgfX1cclxuICAgID5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJ3LVs1MDBweF0gXCI+XHJcbiAgICAgICAgICB7SURFUy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ3LVs1MDBweF1cIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogXCIyLjVyZW1cIiB9fT57bGV0dGVyc1tsZXR0ZXJDb3VudCsrXX08L3RkPlxyXG4gICAgICAgICAgICAgICAge3Jvdy5tYXAoKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMuNXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVRhYmxlID09PSBcIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbG9yQm94ZXNGb3JXaGl0ZVtjb3VudCsrXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY29sb3JCb3hlc0ZvckJsYWNrW2NvdW50KytdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9ICBoLTE0YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImJveFwiICsgaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICB7bGV0dGVycy5tYXAoKGxldHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8dGQgc3R5bGU9e3sgd2lkdGg6IFwiMy41cmVtXCIgfX0+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IHtsZXR0ZXJ9PC9wPjwvdGQ+O1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidGFibGVEZXNpZ24iLCJJREVTIiwidHlwZVRhYmxlIiwiY291bnQiLCJjb2xvckJveGVzRm9yQmxhY2siLCJjb2xvckJveGVzRm9yV2hpdGUiLCJsZXR0ZXJzRm9yV2hpdGUiLCJsZXR0ZXJzRm9yQmxhY2siLCJudW1iZXJzRm9yV2hpdGUiLCJudW1iZXJzRm9yQmxhY2siLCJsZXR0ZXJzIiwibGV0dGVyQ291bnQiLCJudW1iZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJ0YWJsZSIsInRib2R5IiwibWFwIiwicm93IiwidHIiLCJ0ZCIsIndpZHRoIiwiaWQiLCJjb25zb2xlIiwibG9nIiwibGV0dGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./chess/table/tableDesign.tsx\n"));

/***/ })

});
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

/***/ "./chess/table/table.tsx":
/*!*******************************!*\
  !*** ./chess/table/table.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Table\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Table {\n    orderIdes() {\n        let count = this.typeTable === \"white\" ? 1 : 64;\n        if (this.typeTable == \"white\") {\n            for(let i = 0; i <= 7; i++){\n                for(let j = 0; j <= 7; j++){\n                    this.IDES[i].push(count);\n                    count++;\n                }\n            }\n        } else if (this.typeTable == \"black\") {\n            for(let i = 0; i <= 7; i++){\n                for(let j = 0; j <= 7; j++){\n                    this.IDES[i].push(count);\n                    count--;\n                }\n            }\n        }\n    }\n    insertTable() {\n        this.orderIdes();\n        return this.tableDesign();\n    }\n    tableDesign() {\n        let count = 0;\n        let colorBoxesForBlack = [\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\"\n        ];\n        let colorBoxesForWhite = [\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\"\n        ];\n        let lettersForWhite = [\n            \"a\",\n            \"b\",\n            \"c\",\n            \"d\",\n            \"e\",\n            \"f\",\n            \"g\",\n            \"h\"\n        ];\n        let lettersForBlack = [\n            \"h\",\n            \"g\",\n            \"f\",\n            \"e\",\n            \"d\",\n            \"c\",\n            \"b\",\n            \"a\"\n        ];\n        let numbersForWhite = [\n            1,\n            2,\n            3,\n            4,\n            5,\n            6,\n            7,\n            8\n        ];\n        let numbersForBlack = [\n            8,\n            7,\n            6,\n            5,\n            4,\n            3,\n            2,\n            1\n        ];\n        let letters = this.typeTable == \"white\" ? lettersForWhite : lettersForBlack;\n        let letterCount = 0;\n        let numbers = this.typeTable == \"white\" ? numbersForWhite : numbersForBlack;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex items-center justify-center\",\n            style: {\n                marginTop: \"80px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    className: \"w-[500px]\",\n                    id: \"tbody\",\n                    children: [\n                        this.IDES.map((row)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"w-[500px] text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            width: \"2.5rem\"\n                                        },\n                                        children: letters[letterCount++]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                        lineNumber: 203,\n                                        columnNumber: 19\n                                    }, this),\n                                    row.map((id)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            style: {\n                                                width: \"3.5rem\"\n                                            },\n                                            className: \" \".concat(this.typeTable === \"white\" ? colorBoxesForWhite[count++] : colorBoxesForBlack[count++], \"  h-14 border-[2px] boxTable\"),\n                                            id: \"box\" + id\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                            lineNumber: 206,\n                                            columnNumber: 23\n                                        }, this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                lineNumber: 202,\n                                columnNumber: 17\n                            }, this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                    lineNumber: 221,\n                                    columnNumber: 15\n                                }, this),\n                                letters.map((letter)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            width: \"3.5rem\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center\",\n                                            children: [\n                                                \" \",\n                                                letter\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                            lineNumber: 225,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                        lineNumber: 224,\n                                        columnNumber: 19\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                            lineNumber: 220,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                    lineNumber: 199,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                lineNumber: 198,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n            lineNumber: 194,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(typeTable){\n        this.IDES = [\n            [],\n            [],\n            [],\n            [],\n            [],\n            [],\n            [],\n            []\n        ];\n        this.typeTable = typeTable;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEVBQUNDOzBCQUNDLDRFQUFDQztvQkFBTUosV0FBVTtvQkFBWUssSUFBRzs7d0JBQzdCLElBQUksQ0FBQ25CLElBQUksQ0FBQ29CLEdBQUcsQ0FBQyxDQUFDQyxNQUFROzRCQUN0QixxQkFDRSw4REFBQ0M7Z0NBQUdSLFdBQVU7O2tEQUNaLDhEQUFDUzt3Q0FBR1IsT0FBTzs0Q0FBRVMsT0FBTzt3Q0FBUztrREFBSWQsT0FBTyxDQUFDQyxjQUFjOzs7Ozs7b0NBQ3REVSxJQUFJRCxHQUFHLENBQUMsQ0FBQ0QsS0FBTzt3Q0FDZixxQkFDRSw4REFBQ0k7NENBQ0NSLE9BQU87Z0RBQUVTLE9BQU87NENBQVM7NENBQ3pCVixXQUFXLElBSVYsT0FIQyxJQUFJLENBQUNqQixTQUFTLEtBQUssVUFDZlEsa0JBQWtCLENBQUNULFFBQVEsR0FDM0JRLGtCQUFrQixDQUFDUixRQUFRLEVBQ2hDOzRDQUNEdUIsSUFBSSxRQUFRQTs7Ozs7O29DQUdsQjs7Ozs7Ozt3QkFHTjtzQ0FDQSw4REFBQ0c7OzhDQUNDLDhEQUFDQzs7Ozs7Z0NBQ0FiLFFBQVFVLEdBQUcsQ0FBQyxDQUFDSyxTQUFXO29DQUN2QixxQkFDRSw4REFBQ0Y7d0NBQUdSLE9BQU87NENBQUVTLE9BQU87d0NBQVM7a0RBQzNCLDRFQUFDRTs0Q0FBRVosV0FBVTs7Z0RBQWM7Z0RBQUVXOzs7Ozs7Ozs7Ozs7Z0NBR25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1aO0lBbk9BRSxZQUFZOUIsU0FBaUIsQ0FBRTthQUYvQkcsT0FBbUI7WUFBQyxFQUFFO1lBQUUsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtTQUFDO1FBR2pELElBQUksQ0FBQ0gsU0FBUyxHQUFHQTtJQUNuQjtBQWtPRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NoZXNzL3RhYmxlL3RhYmxlLnRzeD83OTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZSB7XHJcbiAgdHlwZVRhYmxlOiBzdHJpbmc7XHJcbiAgSURFUzogbnVtYmVyW11bXSA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0eXBlVGFibGU6IHN0cmluZykge1xyXG4gICAgdGhpcy50eXBlVGFibGUgPSB0eXBlVGFibGU7XHJcbiAgfVxyXG5cclxuICBvcmRlcklkZXMoKSB7XHJcbiAgICBsZXQgY291bnQ6IG51bWJlciA9IHRoaXMudHlwZVRhYmxlID09PSBcIndoaXRlXCIgPyAxIDogNjQ7XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZVRhYmxlID09IFwid2hpdGVcIikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA3OyBqKyspIHtcclxuICAgICAgICAgIHRoaXMuSURFU1tpXS5wdXNoKGNvdW50KTtcclxuICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZVRhYmxlID09IFwiYmxhY2tcIikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA3OyBqKyspIHtcclxuICAgICAgICAgIHRoaXMuSURFU1tpXS5wdXNoKGNvdW50KTtcclxuICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnNlcnRUYWJsZSgpOiBKU1guRWxlbWVudCB7XHJcbiAgICB0aGlzLm9yZGVySWRlcygpO1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVEZXNpZ24oKTtcclxuICB9XHJcblxyXG4gIHRhYmxlRGVzaWduKCk6IEpTWC5FbGVtZW50IHtcclxuICAgIGxldCBjb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBsZXQgY29sb3JCb3hlc0ZvckJsYWNrOiBzdHJpbmdbXSA9IFtcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcblxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG5cclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcblxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG5cclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcblxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgIF07XHJcblxyXG4gICAgbGV0IGNvbG9yQm94ZXNGb3JXaGl0ZTogc3RyaW5nW10gPSBbXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgIF07XHJcblxyXG4gICAgbGV0IGxldHRlcnNGb3JXaGl0ZTogc3RyaW5nW10gPSBbXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiLCBcImZcIiwgXCJnXCIsIFwiaFwiXTtcclxuICAgIGxldCBsZXR0ZXJzRm9yQmxhY2s6IHN0cmluZ1tdID0gW1wiaFwiLCBcImdcIiwgXCJmXCIsIFwiZVwiLCBcImRcIiwgXCJjXCIsIFwiYlwiLCBcImFcIl07XHJcblxyXG4gICAgbGV0IG51bWJlcnNGb3JXaGl0ZTogbnVtYmVyW10gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF07XHJcbiAgICBsZXQgbnVtYmVyc0ZvckJsYWNrOiBudW1iZXJbXSA9IFs4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXTtcclxuXHJcbiAgICBsZXQgbGV0dGVyczogc3RyaW5nW10gPVxyXG4gICAgICB0aGlzLnR5cGVUYWJsZSA9PSBcIndoaXRlXCIgPyBsZXR0ZXJzRm9yV2hpdGUgOiBsZXR0ZXJzRm9yQmxhY2s7XHJcbiAgICBsZXQgbGV0dGVyQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgbGV0IG51bWJlcnM6IG51bWJlcltdID1cclxuICAgICAgdGhpcy50eXBlVGFibGUgPT0gXCJ3aGl0ZVwiID8gbnVtYmVyc0ZvcldoaXRlIDogbnVtYmVyc0ZvckJsYWNrO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI4MHB4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJ3LVs1MDBweF1cIiBpZD1cInRib2R5XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLklERVMubWFwKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInctWzUwMHB4XSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6IFwiMi41cmVtXCIgfX0+e2xldHRlcnNbbGV0dGVyQ291bnQrK119PC90ZD5cclxuICAgICAgICAgICAgICAgICAge3Jvdy5tYXAoKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzLjVyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVUYWJsZSA9PT0gXCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbG9yQm94ZXNGb3JXaGl0ZVtjb3VudCsrXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2xvckJveGVzRm9yQmxhY2tbY291bnQrK11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgaC0xNCBib3JkZXItWzJweF0gYm94VGFibGVgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJib3hcIiArIGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAge2xldHRlcnMubWFwKChsZXR0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogXCIzLjVyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiB7bGV0dGVyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJvcmRlcklkZXMiLCJjb3VudCIsInR5cGVUYWJsZSIsImkiLCJqIiwiSURFUyIsInB1c2giLCJpbnNlcnRUYWJsZSIsInRhYmxlRGVzaWduIiwiY29sb3JCb3hlc0ZvckJsYWNrIiwiY29sb3JCb3hlc0ZvcldoaXRlIiwibGV0dGVyc0ZvcldoaXRlIiwibGV0dGVyc0ZvckJsYWNrIiwibnVtYmVyc0ZvcldoaXRlIiwibnVtYmVyc0ZvckJsYWNrIiwibGV0dGVycyIsImxldHRlckNvdW50IiwibnVtYmVycyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luVG9wIiwidGFibGUiLCJ0Ym9keSIsImlkIiwibWFwIiwicm93IiwidHIiLCJ0ZCIsIndpZHRoIiwibGV0dGVyIiwicCIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./chess/table/table.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Table\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Table {\n    orderIdes() {\n        let count = this.typeTable === \"white\" ? 1 : 64;\n        if (this.typeTable == \"white\") {\n            for(let i = 0; i <= 7; i++){\n                for(let j = 0; j <= 7; j++){\n                    this.IDES[i].push(count);\n                    count++;\n                }\n            }\n        } else if (this.typeTable == \"black\") {\n            for(let i = 0; i <= 7; i++){\n                for(let j = 0; j <= 7; j++){\n                    this.IDES[i].push(count);\n                    count--;\n                }\n            }\n        }\n    }\n    insertTable() {\n        this.orderIdes();\n        return this.tableDesign();\n    }\n    tableDesign() {\n        let count = 0;\n        let colorBoxesForBlack = [\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\"\n        ];\n        let colorBoxesForWhite = [\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\",\n            \"bg-black\",\n            \"bg-white\"\n        ];\n        let lettersForWhite = [\n            \"a\",\n            \"b\",\n            \"c\",\n            \"d\",\n            \"e\",\n            \"f\",\n            \"g\",\n            \"h\"\n        ];\n        let lettersForBlack = [\n            \"h\",\n            \"g\",\n            \"f\",\n            \"e\",\n            \"d\",\n            \"c\",\n            \"b\",\n            \"a\"\n        ];\n        let numbersForWhite = [\n            1,\n            2,\n            3,\n            4,\n            5,\n            6,\n            7,\n            8\n        ];\n        let numbersForBlack = [\n            8,\n            7,\n            6,\n            5,\n            4,\n            3,\n            2,\n            1\n        ];\n        let letters = this.typeTable == \"white\" ? lettersForWhite : lettersForBlack;\n        let letterCount = 0;\n        let numbers = this.typeTable == \"white\" ? numbersForWhite : numbersForBlack;\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            const tbody = document.getElementById(\"tbody\");\n            tbody === null || tbody === void 0 ? void 0 : tbody.addEventListener(\"click\", (e)=>{\n                const evt = e.target;\n                const isBoxOfTable = evt.className.includes(\"boxTable\");\n                if (isBoxOfTable) this.selectBox(evt);\n            });\n            return ()=>{\n                tbody === null || tbody === void 0 ? void 0 : tbody.removeEventListener(\"click\", ()=>{});\n            };\n        }, []);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex items-center justify-center\",\n            style: {\n                marginTop: \"80px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    className: \"w-[500px]\",\n                    id: \"tbody\",\n                    children: [\n                        this.IDES.map((row)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"w-[500px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            width: \"2.5rem\"\n                                        },\n                                        children: letters[letterCount++]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                        lineNumber: 216,\n                                        columnNumber: 19\n                                    }, this),\n                                    row.map((id)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            style: {\n                                                width: \"3.5rem\"\n                                            },\n                                            className: \" \".concat(this.typeTable === \"white\" ? colorBoxesForWhite[count++] : colorBoxesForBlack[count++], \"  h-14 border-[2px] boxTable\"),\n                                            id: \"box\" + id\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                            lineNumber: 219,\n                                            columnNumber: 23\n                                        }, this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                lineNumber: 215,\n                                columnNumber: 17\n                            }, this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                    lineNumber: 234,\n                                    columnNumber: 15\n                                }, this),\n                                letters.map((letter)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            width: \"3.5rem\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center\",\n                                            children: [\n                                                \" \",\n                                                letter\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                            lineNumber: 238,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                                        lineNumber: 237,\n                                        columnNumber: 19\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                            lineNumber: 233,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                    lineNumber: 212,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n                lineNumber: 211,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\chess\\\\table\\\\table.tsx\",\n            lineNumber: 207,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(typeTable){\n        this.IDES = [\n            [],\n            [],\n            [],\n            [],\n            [],\n            [],\n            [],\n            []\n        ];\n        this.typeTable = typeTable;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQiw0RUFBQ0U7NENBQUVmLFdBQVU7O2dEQUFjO2dEQUFFYzs7Ozs7Ozs7Ozs7O2dDQUduQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNWjtJQWhQQUUsWUFBWXhDLFNBQWlCLENBQUU7YUFGL0JHLE9BQW1CO1lBQUMsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtZQUFFLEVBQUU7WUFBRSxFQUFFO1lBQUUsRUFBRTtZQUFFLEVBQUU7U0FBQztRQUdqRCxJQUFJLENBQUNILFNBQVMsR0FBR0E7SUFDbkI7QUFpUEYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jaGVzcy90YWJsZS90YWJsZS50c3g/Nzk5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGUge1xyXG4gIHR5cGVUYWJsZTogc3RyaW5nO1xyXG4gIElERVM6IG51bWJlcltdW10gPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcclxuXHJcbiAgY29uc3RydWN0b3IodHlwZVRhYmxlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHlwZVRhYmxlID0gdHlwZVRhYmxlO1xyXG4gIH1cclxuXHJcbiAgb3JkZXJJZGVzKCkge1xyXG4gICAgbGV0IGNvdW50OiBudW1iZXIgPSB0aGlzLnR5cGVUYWJsZSA9PT0gXCJ3aGl0ZVwiID8gMSA6IDY0O1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGVUYWJsZSA9PSBcIndoaXRlXCIpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNzsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gNzsgaisrKSB7XHJcbiAgICAgICAgICB0aGlzLklERVNbaV0ucHVzaChjb3VudCk7XHJcbiAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGVUYWJsZSA9PSBcImJsYWNrXCIpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNzsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gNzsgaisrKSB7XHJcbiAgICAgICAgICB0aGlzLklERVNbaV0ucHVzaChjb3VudCk7XHJcbiAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5zZXJ0VGFibGUoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgdGhpcy5vcmRlcklkZXMoKTtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlRGVzaWduKCk7XHJcbiAgfVxyXG5cclxuICB0YWJsZURlc2lnbigpOiBKU1guRWxlbWVudCB7XHJcbiAgICBsZXQgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgbGV0IGNvbG9yQm94ZXNGb3JCbGFjazogc3RyaW5nW10gPSBbXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG5cclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcblxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG5cclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcblxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG5cclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBjb2xvckJveGVzRm9yV2hpdGU6IHN0cmluZ1tdID0gW1xyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICAgIFwiYmctYmxhY2tcIixcclxuICAgICAgXCJiZy13aGl0ZVwiLFxyXG4gICAgICBcImJnLWJsYWNrXCIsXHJcbiAgICAgIFwiYmctd2hpdGVcIixcclxuICAgICAgXCJiZy1ibGFja1wiLFxyXG4gICAgICBcImJnLXdoaXRlXCIsXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBsZXR0ZXJzRm9yV2hpdGU6IHN0cmluZ1tdID0gW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIl07XHJcbiAgICBsZXQgbGV0dGVyc0ZvckJsYWNrOiBzdHJpbmdbXSA9IFtcImhcIiwgXCJnXCIsIFwiZlwiLCBcImVcIiwgXCJkXCIsIFwiY1wiLCBcImJcIiwgXCJhXCJdO1xyXG5cclxuICAgIGxldCBudW1iZXJzRm9yV2hpdGU6IG51bWJlcltdID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdO1xyXG4gICAgbGV0IG51bWJlcnNGb3JCbGFjazogbnVtYmVyW10gPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcblxyXG4gICAgbGV0IGxldHRlcnM6IHN0cmluZ1tdID1cclxuICAgICAgdGhpcy50eXBlVGFibGUgPT0gXCJ3aGl0ZVwiID8gbGV0dGVyc0ZvcldoaXRlIDogbGV0dGVyc0ZvckJsYWNrO1xyXG4gICAgbGV0IGxldHRlckNvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGxldCBudW1iZXJzOiBudW1iZXJbXSA9XHJcbiAgICAgIHRoaXMudHlwZVRhYmxlID09IFwid2hpdGVcIiA/IG51bWJlcnNGb3JXaGl0ZSA6IG51bWJlcnNGb3JCbGFjaztcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCB0Ym9keTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0Ym9keVwiKTtcclxuICAgICAgdGJvZHk/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV2dCA9IGUudGFyZ2V0IGFzIEhUTUxUYWJsZUNlbGxFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGlzQm94T2ZUYWJsZSA9IGV2dC5jbGFzc05hbWUuaW5jbHVkZXMoXCJib3hUYWJsZVwiKTtcclxuICAgICAgICBpZiAoaXNCb3hPZlRhYmxlKSB0aGlzLnNlbGVjdEJveChldnQpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgdGJvZHk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7fSk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjgwcHhcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cInctWzUwMHB4XVwiIGlkPVwidGJvZHlcIj5cclxuICAgICAgICAgICAge3RoaXMuSURFUy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidy1bNTAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogXCIyLjVyZW1cIiB9fT57bGV0dGVyc1tsZXR0ZXJDb3VudCsrXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICB7cm93Lm1hcCgoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMuNXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZVRhYmxlID09PSBcIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29sb3JCb3hlc0ZvcldoaXRlW2NvdW50KytdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvbG9yQm94ZXNGb3JCbGFja1tjb3VudCsrXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBoLTE0IGJvcmRlci1bMnB4XSBib3hUYWJsZWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImJveFwiICsgaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICB7bGV0dGVycy5tYXAoKGxldHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiBcIjMuNXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IHtsZXR0ZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlRhYmxlIiwib3JkZXJJZGVzIiwiY291bnQiLCJ0eXBlVGFibGUiLCJpIiwiaiIsIklERVMiLCJwdXNoIiwiaW5zZXJ0VGFibGUiLCJ0YWJsZURlc2lnbiIsImNvbG9yQm94ZXNGb3JCbGFjayIsImNvbG9yQm94ZXNGb3JXaGl0ZSIsImxldHRlcnNGb3JXaGl0ZSIsImxldHRlcnNGb3JCbGFjayIsIm51bWJlcnNGb3JXaGl0ZSIsIm51bWJlcnNGb3JCbGFjayIsImxldHRlcnMiLCJsZXR0ZXJDb3VudCIsIm51bWJlcnMiLCJ0Ym9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImV2dCIsInRhcmdldCIsImlzQm94T2ZUYWJsZSIsImNsYXNzTmFtZSIsImluY2x1ZGVzIiwic2VsZWN0Qm94IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsInN0eWxlIiwibWFyZ2luVG9wIiwidGFibGUiLCJpZCIsIm1hcCIsInJvdyIsInRyIiwidGQiLCJ3aWR0aCIsImxldHRlciIsInAiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./chess/table/table.tsx\n"));

/***/ })

});
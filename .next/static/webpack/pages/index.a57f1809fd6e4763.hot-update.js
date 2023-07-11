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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _chess_table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chess/table/table */ \"./chess/table/table.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query Users {\\n    users {\\n      id\\n      name\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst GET_USERS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject());\nfunction Home() {\n    _s();\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_USERS);\n    let table = new _chess_table_table__WEBPACK_IMPORTED_MODULE_3__.Table(\"white\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const tbody = document.getElementById(\"tbody\");\n        tbody === null || tbody === void 0 ? void 0 : tbody.addEventListener(\"click\", (e)=>{\n            const evt = e.target;\n            const isBoxOfTable = evt.className.includes(\"boxTable\");\n            console.log(evt);\n            if (isBoxOfTable) table.selectBox(evt);\n        });\n        return ()=>{\n            tbody === null || tbody === void 0 ? void 0 : tbody.removeEventListener(\"click\", ()=>{});\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100 mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                    className: \"bg-gray-800 text-white p-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold\",\n                            children: \"My Next.js App\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\pages\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\pages\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\pages\\\\index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\pages\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            table.insertTable()\n        ]\n    }, void 0, true);\n}\n_s(Home, \"dlmKID3kyP6marj3u7xDctAKT7s=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTTtBQUNGO0FBRTdDLE1BQU1LLFlBQVlILG1EQUFHQTtBQVFyQixTQUFTSSxPQUFPOztJQUNkLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdKLHdEQUFRQSxDQUFDRTtJQUMxQixJQUFJRyxRQUFRLElBQUlKLHFEQUFLQSxDQUFDO0lBRXRCSCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVEsUUFBNEJDLFNBQVNDLGNBQWMsQ0FBQztRQUMxREYsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUNDLElBQWtCO1lBQ2xELE1BQU1DLE1BQU1ELEVBQUVFLE1BQU07WUFDcEIsTUFBTUMsZUFBZUYsSUFBSUcsU0FBUyxDQUFDQyxRQUFRLENBQUM7WUFDNUNDLFFBQVFDLEdBQUcsQ0FBQ047WUFDWixJQUFJRSxjQUFjUixNQUFNYSxTQUFTLENBQUNQO1FBQ3BDO1FBRUEsT0FBTyxJQUFNO1lBQ1hMLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT2EsbUJBQW1CLENBQUMsU0FBUyxJQUFNLENBQUM7UUFDN0M7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJTixXQUFVOzBCQUNiLDRFQUFDTztvQkFBSVAsV0FBVTs4QkFDYiw0RUFBQ007d0JBQUlOLFdBQVU7a0NBQ2IsNEVBQUNROzRCQUFHUixXQUFVO3NDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS3ZDVCxNQUFNa0IsV0FBVzs7O0FBR3hCO0dBOUJTcEI7O1FBQ1VILG9EQUFRQTs7O0tBRGxCRztBQWdDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vY2hlc3MvdGFibGUvdGFibGVcIjtcclxuXHJcbmNvbnN0IEdFVF9VU0VSUyA9IGdxbGBcclxuICBxdWVyeSBVc2VycyB7XHJcbiAgICB1c2VycyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShHRVRfVVNFUlMpO1xyXG4gIGxldCB0YWJsZSA9IG5ldyBUYWJsZShcIndoaXRlXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGJvZHk6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGJvZHlcIik7XHJcbiAgICB0Ym9keT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGV2dCA9IGUudGFyZ2V0IGFzIEhUTUxUYWJsZUNlbGxFbGVtZW50O1xyXG4gICAgICBjb25zdCBpc0JveE9mVGFibGUgPSBldnQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYm94VGFibGVcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2dCk7XHJcbiAgICAgIGlmIChpc0JveE9mVGFibGUpIHRhYmxlLnNlbGVjdEJveChldnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdGJvZHk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7fSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBtYi01XCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHAtNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5NeSBOZXh0LmpzIEFwcDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7dGFibGUuaW5zZXJ0VGFibGUoKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImdxbCIsInVzZVF1ZXJ5IiwiVGFibGUiLCJHRVRfVVNFUlMiLCJIb21lIiwiZGF0YSIsInRhYmxlIiwidGJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJldnQiLCJ0YXJnZXQiLCJpc0JveE9mVGFibGUiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RCb3giLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwibmF2IiwiaDEiLCJpbnNlcnRUYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
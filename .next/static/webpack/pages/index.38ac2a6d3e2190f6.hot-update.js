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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _chess_table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chess/table/table */ \"./chess/table/table.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query Users {\\n    users {\\n      id\\n      name\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst GET_USERS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject());\nfunction Home() {\n    _s();\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_USERS);\n    let table = new _chess_table_table__WEBPACK_IMPORTED_MODULE_3__.Table(\"white\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const tbody = document.getElementById(\"tbody\");\n        console.log(tbody);\n        tbody === null || tbody === void 0 ? void 0 : tbody.addEventListener(\"click\", (e)=>{\n            const evt = e.target;\n            const isBoxOfTable = evt.className === \"boxTable\";\n            if (isBoxOfTable) table.selectBox(evt);\n        });\n        return ()=>{\n            tbody === null || tbody === void 0 ? void 0 : tbody.removeEventListener(\"click\", ()=>{});\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100 mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                    className: \"bg-gray-800 text-white p-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold\",\n                            children: \"My Next.js App\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\pages\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\pages\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\pages\\\\index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\chessV2\\\\pages\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            table.insertTable()\n        ]\n    }, void 0, true);\n}\n_s(Home, \"dlmKID3kyP6marj3u7xDctAKT7s=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTTtBQUVGO0FBRTdDLE1BQU1LLFlBQVlILG1EQUFHQTtBQVFyQixTQUFTSSxPQUFPOztJQUNkLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdKLHdEQUFRQSxDQUFDRTtJQUMxQixJQUFJRyxRQUFRLElBQUlKLHFEQUFLQSxDQUFDO0lBRXRCSCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVEsUUFBNEJDLFNBQVNDLGNBQWMsQ0FBQztRQUUxREMsUUFBUUMsR0FBRyxDQUFDSjtRQUNaQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9LLGdCQUFnQixDQUFDLFNBQVMsQ0FBQ0MsSUFBa0I7WUFDbEQsTUFBTUMsTUFBTUQsRUFBRUUsTUFBTTtZQUNwQixNQUFNQyxlQUFlRixJQUFJRyxTQUFTLEtBQUs7WUFDdkMsSUFBSUQsY0FBY1YsTUFBTVksU0FBUyxDQUFDSjtRQUNwQztRQUVBLE9BQU8sSUFBTTtZQUNYUCxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9ZLG1CQUFtQixDQUFDLFNBQVMsSUFBTSxDQUFDO1FBQzdDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUgsV0FBVTswQkFDYiw0RUFBQ0k7b0JBQUlKLFdBQVU7OEJBQ2IsNEVBQUNHO3dCQUFJSCxXQUFVO2tDQUNiLDRFQUFDSzs0QkFBR0wsV0FBVTtzQ0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUt2Q1gsTUFBTWlCLFdBQVc7OztBQUd4QjtHQS9CU25COztRQUNVSCxvREFBUUE7OztLQURsQkc7QUFpQ1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHRhYmxlIH0gZnJvbSBcImNvbnNvbGVcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vY2hlc3MvdGFibGUvdGFibGVcIjtcclxuXHJcbmNvbnN0IEdFVF9VU0VSUyA9IGdxbGBcclxuICBxdWVyeSBVc2VycyB7XHJcbiAgICB1c2VycyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShHRVRfVVNFUlMpO1xyXG4gIGxldCB0YWJsZSA9IG5ldyBUYWJsZShcIndoaXRlXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGJvZHk6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGJvZHlcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2codGJvZHkpO1xyXG4gICAgdGJvZHk/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBldnQgPSBlLnRhcmdldCBhcyBIVE1MVGFibGVDZWxsRWxlbWVudDtcclxuICAgICAgY29uc3QgaXNCb3hPZlRhYmxlID0gZXZ0LmNsYXNzTmFtZSA9PT0gXCJib3hUYWJsZVwiO1xyXG4gICAgICBpZiAoaXNCb3hPZlRhYmxlKSB0YWJsZS5zZWxlY3RCb3goZXZ0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHRib2R5Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge30pO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgbWItNVwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZSBwLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+TXkgTmV4dC5qcyBBcHA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3RhYmxlLmluc2VydFRhYmxlKCl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJncWwiLCJ1c2VRdWVyeSIsIlRhYmxlIiwiR0VUX1VTRVJTIiwiSG9tZSIsImRhdGEiLCJ0YWJsZSIsInRib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImV2dCIsInRhcmdldCIsImlzQm94T2ZUYWJsZSIsImNsYXNzTmFtZSIsInNlbGVjdEJveCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJuYXYiLCJoMSIsImluc2VydFRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
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

/***/ "./chess/controller/ControllerChess.ts":
/*!*********************************************!*\
  !*** ./chess/controller/ControllerChess.ts ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ControllerChess\": function() { return /* binding */ ControllerChess; }\n/* harmony export */ });\nclass ControllerChess {\n    selectBox(box) {\n        console.log(box);\n    }\n    putPieces() {}\n    constructor(tbody){\n        this.WHITE_PIECES = [\n            \"♖\",\n            \"♘\",\n            \"♗\",\n            \"♔\",\n            \"♕\",\n            \"♗\",\n            \"♘\",\n            \"♖\",\n            \"♙\",\n            \"♙\",\n            \"♙\",\n            \"♙\",\n            \"♙\",\n            \"♙\",\n            \"♙\",\n            \"♙\"\n        ];\n        this.BLACK_PIECES = [\n            \"♜\",\n            \"♞\",\n            \"♝\",\n            \"♚\",\n            \"♛\",\n            \"♝\",\n            \"♞\",\n            \"♜\",\n            \"♟\",\n            \"♟\",\n            \"♟\",\n            \"♟\",\n            \"♟\",\n            \"♟\",\n            \"♟\",\n            \"♟\"\n        ];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGVzcy9jb250cm9sbGVyL0NvbnRyb2xsZXJDaGVzcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUE7SUEwQ0pDLFVBQVVDLEdBQWdCLEVBQVE7UUFDdkNDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtJQUVBRyxZQUFZLENBQUM7SUFOYkMsWUFBWUMsS0FBa0IsQ0FBRTthQXRDaENDLGVBQXlCO1lBQ3ZCO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7YUFFREMsZUFBeUI7WUFDdkI7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUVnQztBQU9uQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NoZXNzL2NvbnRyb2xsZXIvQ29udHJvbGxlckNoZXNzLnRzP2Y3M2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJDaGVzcyB7XHJcbiAgdGJvZHk6IEhUTUxFbGVtZW50O1xyXG4gIFdISVRFX1BJRUNFUzogc3RyaW5nW10gPSBbXHJcbiAgICBcIuKZllwiLFxyXG4gICAgXCLimZhcIixcclxuICAgIFwi4pmXXCIsXHJcbiAgICBcIuKZlFwiLFxyXG4gICAgXCLimZVcIixcclxuICAgIFwi4pmXXCIsXHJcbiAgICBcIuKZmFwiLFxyXG4gICAgXCLimZZcIixcclxuICAgIFwi4pmZXCIsXHJcbiAgICBcIuKZmVwiLFxyXG4gICAgXCLimZlcIixcclxuICAgIFwi4pmZXCIsXHJcbiAgICBcIuKZmVwiLFxyXG4gICAgXCLimZlcIixcclxuICAgIFwi4pmZXCIsXHJcbiAgICBcIuKZmVwiLFxyXG4gIF07XHJcblxyXG4gIEJMQUNLX1BJRUNFUzogc3RyaW5nW10gPSBbXHJcbiAgICBcIuKZnFwiLFxyXG4gICAgXCLimZ5cIixcclxuICAgIFwi4pmdXCIsXHJcbiAgICBcIuKZmlwiLFxyXG4gICAgXCLimZtcIixcclxuICAgIFwi4pmdXCIsXHJcbiAgICBcIuKZnlwiLFxyXG4gICAgXCLimZxcIixcclxuICAgIFwi4pmfXCIsXHJcbiAgICBcIuKZn1wiLFxyXG4gICAgXCLimZ9cIixcclxuICAgIFwi4pmfXCIsXHJcbiAgICBcIuKZn1wiLFxyXG4gICAgXCLimZ9cIixcclxuICAgIFwi4pmfXCIsXHJcbiAgICBcIuKZn1wiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRib2R5OiBIVE1MRWxlbWVudCkge31cclxuXHJcbiAgcHVibGljIHNlbGVjdEJveChib3g6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhib3gpO1xyXG4gIH1cclxuXHJcbiAgcHV0UGllY2VzKCkge31cclxufVxyXG4iXSwibmFtZXMiOlsiQ29udHJvbGxlckNoZXNzIiwic2VsZWN0Qm94IiwiYm94IiwiY29uc29sZSIsImxvZyIsInB1dFBpZWNlcyIsImNvbnN0cnVjdG9yIiwidGJvZHkiLCJXSElURV9QSUVDRVMiLCJCTEFDS19QSUVDRVMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./chess/controller/ControllerChess.ts\n"));

/***/ })

});
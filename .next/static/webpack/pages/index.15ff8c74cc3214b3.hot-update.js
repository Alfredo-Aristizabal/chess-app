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

/***/ "./chess/pieces/pieces.ts":
/*!********************************!*\
  !*** ./chess/pieces/pieces.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pieces\": function() { return /* binding */ Pieces; }\n/* harmony export */ });\nclass Pieces {\n    setPiece(box) {\n        box.textContent = this.piece;\n        this.location = box;\n    }\n    setMove(toMove) {\n        this.location.textContent = \"\";\n        this.location = toMove;\n    }\n    constructor(piece, colorPiece){\n        this.piece = piece;\n        this.colorPiece = colorPiece;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGVzcy9waWVjZXMvcGllY2VzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFlQTtJQVNwQkMsU0FBU0MsR0FBZ0IsRUFBUTtRQUMvQkEsSUFBSUMsV0FBVyxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUM1QixJQUFJLENBQUNDLFFBQVEsR0FBR0g7SUFDbEI7SUFFQUksUUFBUUMsTUFBbUIsRUFBQztRQUMxQixJQUFJLENBQUNGLFFBQVEsQ0FBQ0YsV0FBVyxHQUFHO1FBQzVCLElBQUksQ0FBQ0UsUUFBUSxHQUFHRTtJQUNsQjtJQWJBQyxZQUFZSixLQUFhLEVBQUVLLFVBQWtCLENBQUU7UUFDN0MsSUFBSSxDQUFDTCxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDSyxVQUFVLEdBQUdBO0lBQ3BCO0FBV0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jaGVzcy9waWVjZXMvcGllY2VzLnRzPzI5OTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBpZWNlcyB7XHJcbiAgcGllY2U6IHN0cmluZztcclxuICBjb2xvclBpZWNlOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IEhUTUxFbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKHBpZWNlOiBzdHJpbmcsIGNvbG9yUGllY2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5waWVjZSA9IHBpZWNlO1xyXG4gICAgdGhpcy5jb2xvclBpZWNlID0gY29sb3JQaWVjZTtcclxuICB9XHJcblxyXG4gIHNldFBpZWNlKGJveDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGJveC50ZXh0Q29udGVudCA9IHRoaXMucGllY2U7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gYm94O1xyXG4gIH1cclxuXHJcbiAgc2V0TW92ZSh0b01vdmU6IEhUTUxFbGVtZW50KXtcclxuICAgIHRoaXMubG9jYXRpb24udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IHRvTW92ZTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBpZWNlcyIsInNldFBpZWNlIiwiYm94IiwidGV4dENvbnRlbnQiLCJwaWVjZSIsImxvY2F0aW9uIiwic2V0TW92ZSIsInRvTW92ZSIsImNvbnN0cnVjdG9yIiwiY29sb3JQaWVjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./chess/pieces/pieces.ts\n"));

/***/ })

});
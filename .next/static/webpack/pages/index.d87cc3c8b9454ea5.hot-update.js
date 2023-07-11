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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ControllerChess\": function() { return /* binding */ ControllerChess; }\n/* harmony export */ });\n/* harmony import */ var _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pawn/pawn */ \"./chess/pawn/pawn.ts\");\n\nclass ControllerChess {\n    selectBox(box) {\n        console.log(box);\n    }\n    setPieces() {\n        this.setPawns();\n        this.setBishops();\n        this.setTowers();\n        this.setHorses();\n        this.setQueens();\n        this.setKings();\n    }\n    setPawns() {\n        for(let i = 8; i <= 15; i++){\n            const box = document.getElementById(\"box\" + i + 1);\n            this.BLACK_PIECES[i].setPiece(box);\n        }\n    }\n    setBishops() {}\n    setTowers() {}\n    setHorses() {}\n    setQueens() {}\n    setKings() {}\n    constructor(tbody){\n        /*\r\n    \"♖\",\r\n    \"♘\",\r\n    \"♗\",\r\n    \"♔\",\r\n    \"♕\",\r\n    \"♗\",\r\n    \"♘\",\r\n    \"♖\",\r\n     */ this.WHITE_PIECES = [\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\")\n        ];\n        /*\r\n    \"♜\",\r\n    \"♞\",\r\n    \"♝\",\r\n    \"♚\",\r\n    \"♛\",\r\n    \"♝\",\r\n    \"♞\",\r\n    \"♜\",\r\n  */ this.BLACK_PIECES = [\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\")\n        ];\n        this.tbody = tbody;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGVzcy9jb250cm9sbGVyL0NvbnRyb2xsZXJDaGVzcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQUU3QixNQUFNQztJQWlFSkMsVUFBVUMsR0FBZ0IsRUFBUTtRQUN2Q0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBRUFHLFlBQVk7UUFDVixJQUFJLENBQUNDLFFBQVE7UUFDYixJQUFJLENBQUNDLFVBQVU7UUFDZixJQUFJLENBQUNDLFNBQVM7UUFDZCxJQUFJLENBQUNDLFNBQVM7UUFDZCxJQUFJLENBQUNDLFNBQVM7UUFDZCxJQUFJLENBQUNDLFFBQVE7SUFDZjtJQUVRTCxXQUFXO1FBQ2pCLElBQUssSUFBSU0sSUFBSSxHQUFHQSxLQUFLLElBQUlBLElBQUs7WUFDNUIsTUFBTVYsTUFBTVcsU0FBU0MsY0FBYyxDQUFDLFFBQVFGLElBQUk7WUFDaEQsSUFBSSxDQUFDRyxZQUFZLENBQUNILEVBQUUsQ0FBQ0ksUUFBUSxDQUFDZDtRQUNoQztJQUNGO0lBRVFLLGFBQWEsQ0FBQztJQUVkQyxZQUFZLENBQUM7SUFFYkMsWUFBWSxDQUFDO0lBRWJDLFlBQVksQ0FBQztJQUViQyxXQUFXLENBQUM7SUFoQ3BCTSxZQUFZQyxLQUFrQixDQUFFO1FBMURoQzs7Ozs7Ozs7O0tBU0csUUFDSEMsZUFBeUI7WUFDdkIsSUFBSXBCLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1NBQ1Y7UUFFRDs7Ozs7Ozs7O0VBU0EsUUFDQWdCLGVBQXlCO1lBQ3ZCLElBQUloQiw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztTQUNWO1FBR0MsSUFBSSxDQUFDbUIsS0FBSyxHQUFHQTtJQUNmO0FBK0JGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2hlc3MvY29udHJvbGxlci9Db250cm9sbGVyQ2hlc3MudHM/ZjczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXduIH0gZnJvbSBcIi4uL3Bhd24vcGF3blwiO1xyXG5pbXBvcnQgeyBQaWVjZXMgfSBmcm9tIFwiLi4vcGllY2VzL3BpZWNlc1wiO1xyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlckNoZXNzIHtcclxuICB0Ym9keTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qXHJcbiAgICBcIuKZllwiLFxyXG4gICAgXCLimZhcIixcclxuICAgIFwi4pmXXCIsXHJcbiAgICBcIuKZlFwiLFxyXG4gICAgXCLimZVcIixcclxuICAgIFwi4pmXXCIsXHJcbiAgICBcIuKZmFwiLFxyXG4gICAgXCLimZZcIixcclxuICAgICAqL1xyXG4gIFdISVRFX1BJRUNFUzogUGllY2VzW10gPSBbXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiKSxcclxuICBdO1xyXG5cclxuICAvKlxyXG4gICAgXCLimZxcIixcclxuICAgIFwi4pmeXCIsXHJcbiAgICBcIuKZnVwiLFxyXG4gICAgXCLimZpcIixcclxuICAgIFwi4pmbXCIsXHJcbiAgICBcIuKZnVwiLFxyXG4gICAgXCLimZ5cIixcclxuICAgIFwi4pmcXCIsXHJcbiAgKi9cclxuICBCTEFDS19QSUVDRVM6IFBpZWNlc1tdID0gW1xyXG4gICAgbmV3IFBhd24oXCLimZ9cIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiksXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IodGJvZHk6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLnRib2R5ID0gdGJvZHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0Qm94KGJveDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGJveCk7XHJcbiAgfVxyXG5cclxuICBzZXRQaWVjZXMoKSB7XHJcbiAgICB0aGlzLnNldFBhd25zKCk7XHJcbiAgICB0aGlzLnNldEJpc2hvcHMoKTtcclxuICAgIHRoaXMuc2V0VG93ZXJzKCk7XHJcbiAgICB0aGlzLnNldEhvcnNlcygpO1xyXG4gICAgdGhpcy5zZXRRdWVlbnMoKTtcclxuICAgIHRoaXMuc2V0S2luZ3MoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UGF3bnMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gODsgaSA8PSAxNTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm94XCIgKyBpICsgMSk7XHJcbiAgICAgIHRoaXMuQkxBQ0tfUElFQ0VTW2ldLnNldFBpZWNlKGJveCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEJpc2hvcHMoKSB7fVxyXG5cclxuICBwcml2YXRlIHNldFRvd2VycygpIHt9XHJcblxyXG4gIHByaXZhdGUgc2V0SG9yc2VzKCkge31cclxuXHJcbiAgcHJpdmF0ZSBzZXRRdWVlbnMoKSB7fVxyXG5cclxuICBwcml2YXRlIHNldEtpbmdzKCkge31cclxufVxyXG4iXSwibmFtZXMiOlsiUGF3biIsIkNvbnRyb2xsZXJDaGVzcyIsInNlbGVjdEJveCIsImJveCIsImNvbnNvbGUiLCJsb2ciLCJzZXRQaWVjZXMiLCJzZXRQYXducyIsInNldEJpc2hvcHMiLCJzZXRUb3dlcnMiLCJzZXRIb3JzZXMiLCJzZXRRdWVlbnMiLCJzZXRLaW5ncyIsImkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQkxBQ0tfUElFQ0VTIiwic2V0UGllY2UiLCJjb25zdHJ1Y3RvciIsInRib2R5IiwiV0hJVEVfUElFQ0VTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./chess/controller/ControllerChess.ts\n"));

/***/ })

});
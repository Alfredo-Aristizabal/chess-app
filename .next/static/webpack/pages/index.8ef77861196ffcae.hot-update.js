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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ControllerChess\": function() { return /* binding */ ControllerChess; }\n/* harmony export */ });\n/* harmony import */ var _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pawn/pawn */ \"./chess/pawn/pawn.ts\");\n\nclass ControllerChess {\n    selectBox(box) {\n        console.log(box);\n    }\n    setPieces() {\n        this.setPawns();\n        this.setBishops();\n        this.setTowers();\n        this.setHorses();\n        this.setQueens();\n        this.setKings();\n    }\n    setPawns() {\n        for(let i = 9; i <= 16; i++){\n            this.BLACK_PIECES[i];\n        }\n    }\n    setBishops() {}\n    setTowers() {}\n    setHorses() {}\n    setQueens() {}\n    setKings() {}\n    constructor(tbody){\n        this.WHITE_PIECES = [\n            \"♖\",\n            \"♘\",\n            \"♗\",\n            \"♔\",\n            \"♕\",\n            \"♗\",\n            \"♘\",\n            \"♖\",\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\")\n        ];\n        this.BLACK_PIECES = [\n            \"♜\",\n            \"♞\",\n            \"♝\",\n            \"♚\",\n            \"♛\",\n            \"♝\",\n            \"♞\",\n            \"♜\",\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\")\n        ];\n        this.tbody = tbody;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGVzcy9jb250cm9sbGVyL0NvbnRyb2xsZXJDaGVzcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQUM3QixNQUFNQztJQTZDSkMsVUFBVUMsR0FBZ0IsRUFBUTtRQUN2Q0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBRUFHLFlBQVk7UUFDVixJQUFJLENBQUNDLFFBQVE7UUFDYixJQUFJLENBQUNDLFVBQVU7UUFDZixJQUFJLENBQUNDLFNBQVM7UUFDZCxJQUFJLENBQUNDLFNBQVM7UUFDZCxJQUFJLENBQUNDLFNBQVM7UUFDZCxJQUFJLENBQUNDLFFBQVE7SUFDZjtJQUVBTCxXQUFXO1FBQ1QsSUFBSyxJQUFJTSxJQUFJLEdBQUdBLEtBQUssSUFBSUEsSUFBSztZQUMxQixJQUFJLENBQUNDLFlBQVksQ0FBQ0QsRUFBRTtRQUN4QjtJQUNGO0lBRUFMLGFBQWEsQ0FBQztJQUVkQyxZQUFZLENBQUM7SUFFYkMsWUFBWSxDQUFDO0lBRWJDLFlBQVksQ0FBQztJQUViQyxXQUFXLENBQUM7SUEvQlpHLFlBQVlDLEtBQWtCLENBQUU7YUF0Q2hDQyxlQUFlO1lBQ2I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBLElBQUlqQiw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1NBQ1Y7YUFFRGMsZUFBZTtZQUNiO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQSxJQUFJZCw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1lBQ1QsSUFBSUEsNENBQUlBLENBQUM7WUFDVCxJQUFJQSw0Q0FBSUEsQ0FBQztZQUNULElBQUlBLDRDQUFJQSxDQUFDO1NBQ1Y7UUFHQyxJQUFJLENBQUNnQixLQUFLLEdBQUdBO0lBQ2Y7QUE4QkYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jaGVzcy9jb250cm9sbGVyL0NvbnRyb2xsZXJDaGVzcy50cz9mNzNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhd24gfSBmcm9tIFwiLi4vcGF3bi9wYXduXCI7XHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyQ2hlc3Mge1xyXG4gIHRib2R5OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgV0hJVEVfUElFQ0VTID0gW1xyXG4gICAgXCLimZZcIixcclxuICAgIFwi4pmYXCIsXHJcbiAgICBcIuKZl1wiLFxyXG4gICAgXCLimZRcIixcclxuICAgIFwi4pmVXCIsXHJcbiAgICBcIuKZl1wiLFxyXG4gICAgXCLimZhcIixcclxuICAgIFwi4pmWXCIsXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIpLFxyXG4gIF07XHJcblxyXG4gIEJMQUNLX1BJRUNFUyA9IFtcclxuICAgIFwi4pmcXCIsXHJcbiAgICBcIuKZnlwiLFxyXG4gICAgXCLimZ1cIixcclxuICAgIFwi4pmaXCIsXHJcbiAgICBcIuKZm1wiLFxyXG4gICAgXCLimZ1cIixcclxuICAgIFwi4pmeXCIsXHJcbiAgICBcIuKZnFwiLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiKSxcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0Ym9keTogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMudGJvZHkgPSB0Ym9keTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RCb3goYm94OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coYm94KTtcclxuICB9XHJcblxyXG4gIHNldFBpZWNlcygpIHtcclxuICAgIHRoaXMuc2V0UGF3bnMoKTtcclxuICAgIHRoaXMuc2V0QmlzaG9wcygpO1xyXG4gICAgdGhpcy5zZXRUb3dlcnMoKTtcclxuICAgIHRoaXMuc2V0SG9yc2VzKCk7XHJcbiAgICB0aGlzLnNldFF1ZWVucygpO1xyXG4gICAgdGhpcy5zZXRLaW5ncygpO1xyXG4gIH1cclxuXHJcbiAgc2V0UGF3bnMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gOTsgaSA8PSAxNjsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5CTEFDS19QSUVDRVNbaV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEJpc2hvcHMoKSB7fVxyXG5cclxuICBzZXRUb3dlcnMoKSB7fVxyXG5cclxuICBzZXRIb3JzZXMoKSB7fVxyXG5cclxuICBzZXRRdWVlbnMoKSB7fVxyXG5cclxuICBzZXRLaW5ncygpIHt9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhd24iLCJDb250cm9sbGVyQ2hlc3MiLCJzZWxlY3RCb3giLCJib3giLCJjb25zb2xlIiwibG9nIiwic2V0UGllY2VzIiwic2V0UGF3bnMiLCJzZXRCaXNob3BzIiwic2V0VG93ZXJzIiwic2V0SG9yc2VzIiwic2V0UXVlZW5zIiwic2V0S2luZ3MiLCJpIiwiQkxBQ0tfUElFQ0VTIiwiY29uc3RydWN0b3IiLCJ0Ym9keSIsIldISVRFX1BJRUNFUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./chess/controller/ControllerChess.ts\n"));

/***/ })

});
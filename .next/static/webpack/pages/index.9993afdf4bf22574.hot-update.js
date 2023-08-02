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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ControllerChess\": function() { return /* binding */ ControllerChess; }\n/* harmony export */ });\n/* harmony import */ var _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pawn/pawn */ \"./chess/pawn/pawn.ts\");\n\nclass ControllerChess {\n    colorPiece(box) {\n        if (this.piecesBlack.includes(box.textContent)) {\n            return \"#779556\";\n        } else if (this.pieceWhite.includes(box.textContent)) {\n            return \"white\";\n        }\n    }\n    colorBox(box) {\n        this.colorBoxSelect = box.style.backgroundColor;\n    }\n    selectBox(box) {\n        const turnConditions = this.turn == \"WHITE\" && this.colorPiece(box) == \"white\" || this.turn == \"BLACK\" && this.colorPiece(box) == \"#779556\";\n        if (turnConditions) {\n            if (!!this.pieceSelect) {\n                this.movePiece(box);\n            } else if (this.colorPiece(box) != \"\") {\n                this.colorBoxSelect = box.style.backgroundColor;\n                box.style.backgroundColor = this.colorSelect;\n                this.pieceSelect = box;\n            }\n        }\n    }\n    setPieces() {\n        this.setPawns();\n        this.setBishops();\n        this.setTowers();\n        this.setHorses();\n        this.setQueens();\n        this.setKings();\n    }\n    movePiece(toMove) {\n        for(let i = 8; i < 16; i++){\n            if (this.WHITE_PIECES[i].location == this.pieceSelect) {\n                this.WHITE_PIECES[i].setLocation(toMove);\n                break;\n            }\n        }\n        this.pieceSelect.style.backgroundColor = this.colorBoxSelect;\n        this.pieceSelect = undefined;\n        for(let i = 8; i < 16; i++){\n            console.log(this.WHITE_PIECES[i].location);\n        }\n    }\n    // The next functions deal with the placement of the pieces on the board.\n    setPawns() {\n        //white pawns\n        for(let i = 9; i <= 16; i++){\n            const box = document.getElementById(\"box\" + (i + 40));\n            this.WHITE_PIECES[i - 1].setPiece(box);\n        }\n        //black pawns\n        for(let i = 9; i <= 16; i++){\n            const box = document.getElementById(\"box\" + i);\n            this.BLACK_PIECES[i - 1].setPiece(box);\n        }\n    }\n    setBishops() {}\n    setTowers() {}\n    setHorses() {}\n    setQueens() {}\n    setKings() {}\n    constructor(tbody){\n        this.colorSelect = \"#F6F669\";\n        this.isBoxSelect = false;\n        this.turn = \"WHITE\";\n        this.piecesBlack = [\n            \"♜\",\n            \"♞\",\n            \"♝\",\n            \"♚\",\n            \"♛\",\n            \"♟\"\n        ];\n        this.pieceWhite = [\n            \"♖\",\n            \"♘\",\n            \"♗\",\n            \"♔\",\n            \"♕\",\n            \"♙\"\n        ];\n        this.WHITE_PIECES = [\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\")\n        ];\n        this.BLACK_PIECES = [\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\")\n        ];\n        this.tbody = tbody;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGVzcy9jb250cm9sbGVyL0NvbnRyb2xsZXJDaGVzcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQUU3QixNQUFNQztJQXFEWEMsV0FBV0MsR0FBZ0IsRUFBVTtRQUNuQyxJQUFJLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxRQUFRLENBQUNGLElBQUlHLFdBQVcsR0FBRztZQUM5QyxPQUFPO1FBQ1QsT0FBTyxJQUFJLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixRQUFRLENBQUNGLElBQUlHLFdBQVcsR0FBRztZQUNwRCxPQUFPO1FBQ1QsQ0FBQztJQUNIO0lBRUFFLFNBQVNMLEdBQWdCLEVBQVE7UUFDL0IsSUFBSSxDQUFDTSxjQUFjLEdBQUdOLElBQUlPLEtBQUssQ0FBQ0MsZUFBZTtJQUNqRDtJQUVPQyxVQUFVVCxHQUFnQixFQUFRO1FBQ3ZDLE1BQU1VLGlCQUNKLElBQUssQ0FBQ0MsSUFBSSxJQUFJLFdBQVcsSUFBSSxDQUFDWixVQUFVLENBQUNDLFFBQVEsV0FDaEQsSUFBSSxDQUFDVyxJQUFJLElBQUksV0FBVyxJQUFJLENBQUNaLFVBQVUsQ0FBQ0MsUUFBUTtRQUVuRCxJQUFJVSxnQkFDRjtZQUFBLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0UsV0FBVyxFQUFFO2dCQUN0QixJQUFJLENBQUNDLFNBQVMsQ0FBQ2I7WUFDakIsT0FBTyxJQUFJLElBQUksQ0FBQ0QsVUFBVSxDQUFDQyxRQUFRLElBQUk7Z0JBQ3JDLElBQUksQ0FBQ00sY0FBYyxHQUFHTixJQUFJTyxLQUFLLENBQUNDLGVBQWU7Z0JBQy9DUixJQUFJTyxLQUFLLENBQUNDLGVBQWUsR0FBRyxJQUFJLENBQUNNLFdBQVc7Z0JBQzVDLElBQUksQ0FBQ0YsV0FBVyxHQUFHWjtZQUNyQixDQUFDO1FBQUQsQ0FBQztJQUNMO0lBRUFlLFlBQVk7UUFDVixJQUFJLENBQUNDLFFBQVE7UUFDYixJQUFJLENBQUNDLFVBQVU7UUFDZixJQUFJLENBQUNDLFNBQVM7UUFDZCxJQUFJLENBQUNDLFNB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SUFBSUEsNENBQUlBLENBQUMsS0FBSztZQUNkLElBQUlBLDRDQUFJQSxDQUFDLEtBQUs7WUFDZCxJQUFJQSw0Q0FBSUEsQ0FBQyxLQUFLO1lBQ2QsSUFBSUEsNENBQUlBLENBQUMsS0FBSztZQUNkLElBQUlBLDRDQUFJQSxDQUFDLEtBQUs7WUFDZCxJQUFJQSw0Q0FBSUEsQ0FBQyxLQUFLO1lBQ2QsSUFBSUEsNENBQUlBLENBQUMsS0FBSztZQUNkLElBQUlBLDRDQUFJQSxDQUFDLEtBQUs7U0FDZjtRQUdDLElBQUksQ0FBQ3NDLEtBQUssR0FBR0E7SUFDZjtBQThFRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NoZXNzL2NvbnRyb2xsZXIvQ29udHJvbGxlckNoZXNzLnRzP2Y3M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF3biB9IGZyb20gXCIuLi9wYXduL3Bhd25cIjtcclxuaW1wb3J0IHsgUGllY2VzIH0gZnJvbSBcIi4uL3BpZWNlcy9waWVjZXNcIjtcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJDaGVzcyB7XHJcbiAgdGJvZHk6IEhUTUxFbGVtZW50O1xyXG4gIGNvbG9yU2VsZWN0OiBzdHJpbmcgPSBcIiNGNkY2NjlcIjtcclxuICBpc0JveFNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGxhc3RCb3g6IEhUTUxFbGVtZW50O1xyXG4gIHBpZWNlU2VsZWN0OiBIVE1MRWxlbWVudDtcclxuICBjb2xvckJveFNlbGVjdDogc3RyaW5nO1xyXG4gIHR1cm46IHN0cmluZyA9IFwiV0hJVEVcIjtcclxuICBwaWVjZXNCbGFjazogc3RyaW5nW10gPSBbXCLimZxcIiwgXCLimZ5cIiwgXCLimZ1cIiwgXCLimZpcIiwgXCLimZtcIiwgXCLimZ9cIl07XHJcbiAgcGllY2VXaGl0ZTogc3RyaW5nW10gPSBbXCLimZZcIiwgXCLimZhcIiwgXCLimZdcIiwgXCLimZRcIiwgXCLimZVcIiwgXCLimZlcIl07XHJcblxyXG4gIFdISVRFX1BJRUNFUzogUGllY2VzW10gPSBbXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gIF07XHJcblxyXG4gIEJMQUNLX1BJRUNFUzogUGllY2VzW10gPSBbXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRib2R5OiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy50Ym9keSA9IHRib2R5O1xyXG4gIH1cclxuXHJcbiAgY29sb3JQaWVjZShib3g6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnBpZWNlc0JsYWNrLmluY2x1ZGVzKGJveC50ZXh0Q29udGVudCkpIHtcclxuICAgICAgcmV0dXJuIFwiIzc3OTU1NlwiO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnBpZWNlV2hpdGUuaW5jbHVkZXMoYm94LnRleHRDb250ZW50KSkge1xyXG4gICAgICByZXR1cm4gXCJ3aGl0ZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29sb3JCb3goYm94OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb2xvckJveFNlbGVjdCA9IGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0Qm94KGJveDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHR1cm5Db25kaXRpb25zOiBib29sZWFuID1cclxuICAgICAgKHRoaXMudHVybiA9PSBcIldISVRFXCIgJiYgdGhpcy5jb2xvclBpZWNlKGJveCkgPT0gXCJ3aGl0ZVwiKSB8fFxyXG4gICAgICAodGhpcy50dXJuID09IFwiQkxBQ0tcIiAmJiB0aGlzLmNvbG9yUGllY2UoYm94KSA9PSBcIiM3Nzk1NTZcIik7XHJcblxyXG4gICAgaWYgKHR1cm5Db25kaXRpb25zKVxyXG4gICAgICBpZiAoISF0aGlzLnBpZWNlU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlUGllY2UoYm94KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbG9yUGllY2UoYm94KSAhPSBcIlwiKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvckJveFNlbGVjdCA9IGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JTZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5waWVjZVNlbGVjdCA9IGJveDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UGllY2VzKCkge1xyXG4gICAgdGhpcy5zZXRQYXducygpO1xyXG4gICAgdGhpcy5zZXRCaXNob3BzKCk7XHJcbiAgICB0aGlzLnNldFRvd2VycygpO1xyXG4gICAgdGhpcy5zZXRIb3JzZXMoKTtcclxuICAgIHRoaXMuc2V0UXVlZW5zKCk7XHJcbiAgICB0aGlzLnNldEtpbmdzKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlUGllY2UodG9Nb3ZlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDg7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLldISVRFX1BJRUNFU1tpXS5sb2NhdGlvbiA9PSB0aGlzLnBpZWNlU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5XSElURV9QSUVDRVNbaV0uc2V0TG9jYXRpb24odG9Nb3ZlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5waWVjZVNlbGVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9yQm94U2VsZWN0O1xyXG4gICAgdGhpcy5waWVjZVNlbGVjdCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gODsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5XSElURV9QSUVDRVNbaV0ubG9jYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVGhlIG5leHQgZnVuY3Rpb25zIGRlYWwgd2l0aCB0aGUgcGxhY2VtZW50IG9mIHRoZSBwaWVjZXMgb24gdGhlIGJvYXJkLlxyXG5cclxuICBwcml2YXRlIHNldFBhd25zKCkge1xyXG4gICAgLy93aGl0ZSBwYXduc1xyXG4gICAgZm9yIChsZXQgaSA9IDk7IGkgPD0gMTY7IGkrKykge1xyXG4gICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveFwiICsgKGkgKyA0MCkpO1xyXG4gICAgICB0aGlzLldISVRFX1BJRUNFU1tpIC0gMV0uc2V0UGllY2UoYm94KTtcclxuICAgIH1cclxuICAgIC8vYmxhY2sgcGF3bnNcclxuXHJcbiAgICBmb3IgKGxldCBpID0gOTsgaSA8PSAxNjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm94XCIgKyBpKTtcclxuICAgICAgdGhpcy5CTEFDS19QSUVDRVNbaSAtIDFdLnNldFBpZWNlKGJveCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEJpc2hvcHMoKSB7fVxyXG5cclxuICBwcml2YXRlIHNldFRvd2VycygpIHt9XHJcblxyXG4gIHByaXZhdGUgc2V0SG9yc2VzKCkge31cclxuXHJcbiAgcHJpdmF0ZSBzZXRRdWVlbnMoKSB7fVxyXG5cclxuICBwcml2YXRlIHNldEtpbmdzKCkge31cclxufVxyXG4iXSwibmFtZXMiOlsiUGF3biIsIkNvbnRyb2xsZXJDaGVzcyIsImNvbG9yUGllY2UiLCJib3giLCJwaWVjZXNCbGFjayIsImluY2x1ZGVzIiwidGV4dENvbnRlbnQiLCJwaWVjZVdoaXRlIiwiY29sb3JCb3giLCJjb2xvckJveFNlbGVjdCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic2VsZWN0Qm94IiwidHVybkNvbmRpdGlvbnMiLCJ0dXJuIiwicGllY2VTZWxlY3QiLCJtb3ZlUGllY2UiLCJjb2xvclNlbGVjdCIsInNldFBpZWNlcyIsInNldFBhd25zIiwic2V0QmlzaG9wcyIsInNldFRvd2VycyIsInNldEhvcnNlcyIsInNldFF1ZWVucyIsInNldEtpbmdzIiwidG9Nb3ZlIiwiaSIsIldISVRFX1BJRUNFUyIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldFBpZWNlIiwiQkxBQ0tfUElFQ0VTIiwiY29uc3RydWN0b3IiLCJ0Ym9keSIsImlzQm94U2VsZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./chess/controller/ControllerChess.ts\n"));

/***/ })

});
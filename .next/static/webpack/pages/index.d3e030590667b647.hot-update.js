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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ControllerChess\": function() { return /* binding */ ControllerChess; }\n/* harmony export */ });\n/* harmony import */ var _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pawn/pawn */ \"./chess/pawn/pawn.ts\");\n\nclass ControllerChess {\n    colorPiece(box) {\n        if (this.piecesBlack.includes(box.textContent)) {\n            return \"#779556\";\n        } else if (this.pieceWhite.includes(box.textContent)) {\n            return \"white\";\n        }\n    }\n    colorBox(box) {\n        this.colorBoxSelect = box.style.backgroundColor;\n    }\n    selectBox(box) {\n        if (this.turn == \"WHITE\" && this.colorPiece(box) == \"white\" || this.turn == \"BLACK\" && this.colorPiece(boc) == \"#779556\") {\n            if (!!this.pieceSelect) {\n                this.movePiece(box);\n            } else if (this.colorPiece(box) != \"\") {\n                this.colorBoxSelect = box.style.backgroundColor;\n                box.style.backgroundColor = this.colorSelect;\n                this.pieceSelect = box;\n            }\n        }\n    }\n    setPieces() {\n        this.setPawns();\n        this.setBishops();\n        this.setTowers();\n        this.setHorses();\n        this.setQueens();\n        this.setKings();\n    }\n    movePiece(toMove) {\n        for(let i = 8; i < 16; i++){\n            if (this.WHITE_PIECES[i].location == this.pieceSelect) {\n                this.WHITE_PIECES[i].setLocation(toMove);\n                break;\n            }\n        }\n        this.pieceSelect.style.backgroundColor = this.colorBoxSelect;\n        this.pieceSelect = undefined;\n        for(let i = 8; i < 16; i++){\n            console.log(this.WHITE_PIECES[i].location);\n        }\n    }\n    // The next functions deal with the placement of the pieces on the board.\n    setPawns() {\n        //white pawns\n        for(let i = 9; i <= 16; i++){\n            const box = document.getElementById(\"box\" + (i + 40));\n            this.WHITE_PIECES[i - 1].setPiece(box);\n        }\n        //black pawns\n        for(let i = 9; i <= 16; i++){\n            const box = document.getElementById(\"box\" + i);\n            this.BLACK_PIECES[i - 1].setPiece(box);\n        }\n    }\n    setBishops() {}\n    setTowers() {}\n    setHorses() {}\n    setQueens() {}\n    setKings() {}\n    constructor(tbody){\n        this.colorSelect = \"#F6F669\";\n        this.isBoxSelect = false;\n        this.turn = \"WHITE\";\n        this.piecesBlack = [\n            \"♜\",\n            \"♞\",\n            \"♝\",\n            \"♚\",\n            \"♛\",\n            \"♟\"\n        ];\n        this.pieceWhite = [\n            \"♖\",\n            \"♘\",\n            \"♗\",\n            \"♔\",\n            \"♕\",\n            \"♙\"\n        ];\n        this.WHITE_PIECES = [\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\")\n        ];\n        this.BLACK_PIECES = [\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\")\n        ];\n        this.tbody = tbody;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO1lBQ2QsSUFBSUEsNENBQUlBLENBQUMsS0FBSztZQUNkLElBQUlBLDRDQUFJQSxDQUFDLEtBQUs7WUFDZCxJQUFJQSw0Q0FBSUEsQ0FBQyxLQUFLO1lBQ2QsSUFBSUEsNENBQUlBLENBQUMsS0FBSztZQUNkLElBQUlBLDRDQUFJQSxDQUFDLEtBQUs7WUFDZCxJQUFJQSw0Q0FBSUEsQ0FBQyxLQUFLO1lBQ2QsSUFBSUEsNENBQUlBLENBQUMsS0FBSztTQUNmO1FBR0MsSUFBSSxDQUFDc0MsS0FBSyxHQUFHQTtJQUNmO0FBNkVGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2hlc3MvY29udHJvbGxlci9Db250cm9sbGVyQ2hlc3MudHM/ZjczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXduIH0gZnJvbSBcIi4uL3Bhd24vcGF3blwiO1xyXG5pbXBvcnQgeyBQaWVjZXMgfSBmcm9tIFwiLi4vcGllY2VzL3BpZWNlc1wiO1xyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlckNoZXNzIHtcclxuICB0Ym9keTogSFRNTEVsZW1lbnQ7XHJcbiAgY29sb3JTZWxlY3Q6IHN0cmluZyA9IFwiI0Y2RjY2OVwiO1xyXG4gIGlzQm94U2VsZWN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgbGFzdEJveDogSFRNTEVsZW1lbnQ7XHJcbiAgcGllY2VTZWxlY3Q6IEhUTUxFbGVtZW50O1xyXG4gIGNvbG9yQm94U2VsZWN0OiBzdHJpbmc7XHJcbiAgdHVybjogc3RyaW5nID0gXCJXSElURVwiO1xyXG4gIHBpZWNlc0JsYWNrOiBzdHJpbmdbXSA9IFtcIuKZnFwiLCBcIuKZnlwiLCBcIuKZnVwiLCBcIuKZmlwiLCBcIuKZm1wiLCBcIuKZn1wiXTtcclxuICBwaWVjZVdoaXRlOiBzdHJpbmdbXSA9IFtcIuKZllwiLCBcIuKZmFwiLCBcIuKZl1wiLCBcIuKZlFwiLCBcIuKZlVwiLCBcIuKZmVwiXTtcclxuXHJcbiAgV0hJVEVfUElFQ0VTOiBQaWVjZXNbXSA9IFtcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgXTtcclxuXHJcbiAgQkxBQ0tfUElFQ0VTOiBQaWVjZXNbXSA9IFtcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IodGJvZHk6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLnRib2R5ID0gdGJvZHk7XHJcbiAgfVxyXG5cclxuICBjb2xvclBpZWNlKGJveDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMucGllY2VzQmxhY2suaW5jbHVkZXMoYm94LnRleHRDb250ZW50KSkge1xyXG4gICAgICByZXR1cm4gXCIjNzc5NTU2XCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGllY2VXaGl0ZS5pbmNsdWRlcyhib3gudGV4dENvbnRlbnQpKSB7XHJcbiAgICAgIHJldHVybiBcIndoaXRlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xvckJveChib3g6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbG9yQm94U2VsZWN0ID0gYm94LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RCb3goYm94OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICAodGhpcy50dXJuID09IFwiV0hJVEVcIiAmJiB0aGlzLmNvbG9yUGllY2UoYm94KSA9PSBcIndoaXRlXCIpIHx8XHJcbiAgICAgICh0aGlzLnR1cm4gPT0gXCJCTEFDS1wiICYmIHRoaXMuY29sb3JQaWVjZShib2MpID09IFwiIzc3OTU1NlwiKVxyXG4gICAgKVxyXG4gICAgICBpZiAoISF0aGlzLnBpZWNlU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlUGllY2UoYm94KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbG9yUGllY2UoYm94KSAhPSBcIlwiKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvckJveFNlbGVjdCA9IGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JTZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5waWVjZVNlbGVjdCA9IGJveDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UGllY2VzKCkge1xyXG4gICAgdGhpcy5zZXRQYXducygpO1xyXG4gICAgdGhpcy5zZXRCaXNob3BzKCk7XHJcbiAgICB0aGlzLnNldFRvd2VycygpO1xyXG4gICAgdGhpcy5zZXRIb3JzZXMoKTtcclxuICAgIHRoaXMuc2V0UXVlZW5zKCk7XHJcbiAgICB0aGlzLnNldEtpbmdzKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlUGllY2UodG9Nb3ZlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDg7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLldISVRFX1BJRUNFU1tpXS5sb2NhdGlvbiA9PSB0aGlzLnBpZWNlU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5XSElURV9QSUVDRVNbaV0uc2V0TG9jYXRpb24odG9Nb3ZlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5waWVjZVNlbGVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9yQm94U2VsZWN0O1xyXG4gICAgdGhpcy5waWVjZVNlbGVjdCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gODsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5XSElURV9QSUVDRVNbaV0ubG9jYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVGhlIG5leHQgZnVuY3Rpb25zIGRlYWwgd2l0aCB0aGUgcGxhY2VtZW50IG9mIHRoZSBwaWVjZXMgb24gdGhlIGJvYXJkLlxyXG5cclxuICBwcml2YXRlIHNldFBhd25zKCkge1xyXG4gICAgLy93aGl0ZSBwYXduc1xyXG4gICAgZm9yIChsZXQgaSA9IDk7IGkgPD0gMTY7IGkrKykge1xyXG4gICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveFwiICsgKGkgKyA0MCkpO1xyXG4gICAgICB0aGlzLldISVRFX1BJRUNFU1tpIC0gMV0uc2V0UGllY2UoYm94KTtcclxuICAgIH1cclxuICAgIC8vYmxhY2sgcGF3bnNcclxuXHJcbiAgICBmb3IgKGxldCBpID0gOTsgaSA8PSAxNjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm94XCIgKyBpKTtcclxuICAgICAgdGhpcy5CTEFDS19QSUVDRVNbaSAtIDFdLnNldFBpZWNlKGJveCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEJpc2hvcHMoKSB7fVxyXG5cclxuICBwcml2YXRlIHNldFRvd2VycygpIHt9XHJcblxyXG4gIHByaXZhdGUgc2V0SG9yc2VzKCkge31cclxuXHJcbiAgcHJpdmF0ZSBzZXRRdWVlbnMoKSB7fVxyXG5cclxuICBwcml2YXRlIHNldEtpbmdzKCkge31cclxufVxyXG4iXSwibmFtZXMiOlsiUGF3biIsIkNvbnRyb2xsZXJDaGVzcyIsImNvbG9yUGllY2UiLCJib3giLCJwaWVjZXNCbGFjayIsImluY2x1ZGVzIiwidGV4dENvbnRlbnQiLCJwaWVjZVdoaXRlIiwiY29sb3JCb3giLCJjb2xvckJveFNlbGVjdCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic2VsZWN0Qm94IiwidHVybiIsImJvYyIsInBpZWNlU2VsZWN0IiwibW92ZVBpZWNlIiwiY29sb3JTZWxlY3QiLCJzZXRQaWVjZXMiLCJzZXRQYXducyIsInNldEJpc2hvcHMiLCJzZXRUb3dlcnMiLCJzZXRIb3JzZXMiLCJzZXRRdWVlbnMiLCJzZXRLaW5ncyIsInRvTW92ZSIsImkiLCJXSElURV9QSUVDRVMiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRQaWVjZSIsIkJMQUNLX1BJRUNFUyIsImNvbnN0cnVjdG9yIiwidGJvZHkiLCJpc0JveFNlbGVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./chess/controller/ControllerChess.ts\n"));

/***/ })

});
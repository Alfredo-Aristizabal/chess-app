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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ControllerChess\": function() { return /* binding */ ControllerChess; }\n/* harmony export */ });\n/* harmony import */ var _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pawn/pawn */ \"./chess/pawn/pawn.ts\");\n\nclass ControllerChess {\n    colorPiece(box) {\n        if (this.piecesBlack.includes(box.textContent)) {\n            return \"#779556\";\n        } else if (this.pieceWhite.includes(box.textContent)) {\n            return \"white\";\n        }\n    }\n    colorBox(box) {\n        this.colorBoxSelect = box.style.backgroundColor;\n    }\n    selectBox(box) {\n        const turnConditions = this.turn == \"WHITE\" && this.colorPiece(box) == \"white\" || this.turn == \"BLACK\" && this.colorPiece(box) == \"#779556\";\n        if (turnConditions) {\n            if (!!this.pieceSelect) {\n                this.movePiece(box);\n            } else if (this.colorPiece(box) != \"\") {\n                this.colorBoxSelect = box.style.backgroundColor;\n                box.style.backgroundColor = this.colorSelect;\n                this.pieceSelect = box;\n            }\n        }\n    }\n    setPieces() {\n        this.setPawns();\n        this.setBishops();\n        this.setTowers();\n        this.setHorses();\n        this.setQueens();\n        this.setKings();\n    }\n    movePiece(toMove) {\n        const pieces = this.turn == \"WHITE\" ? this.WHITE_PIECES : this.BLACK_PIECES;\n        for(let i = 8; i < 16; i++){\n            if (this.WHITE_PIECES[i].location == this.pieceSelect) {\n                this.WHITE_PIECES[i].setLocation(toMove);\n                break;\n            }\n        }\n        this.turn = \"BLACK\";\n        this.pieceSelect.style.backgroundColor = this.colorBoxSelect;\n        this.pieceSelect = undefined;\n        for(let i = 8; i < 16; i++){\n            console.log(this.WHITE_PIECES[i].location);\n        }\n    }\n    // The next functions deal with the placement of the pieces on the board.\n    setPawns() {\n        //white pawns\n        for(let i = 9; i <= 16; i++){\n            const box = document.getElementById(\"box\" + (i + 40));\n            this.WHITE_PIECES[i - 1].setPiece(box);\n        }\n        //black pawns\n        for(let i = 9; i <= 16; i++){\n            const box = document.getElementById(\"box\" + i);\n            this.BLACK_PIECES[i - 1].setPiece(box);\n        }\n    }\n    setBishops() {}\n    setTowers() {}\n    setHorses() {}\n    setQueens() {}\n    setKings() {}\n    constructor(tbody){\n        this.colorSelect = \"#F6F669\";\n        this.isBoxSelect = false;\n        this.turn = \"WHITE\";\n        this.piecesBlack = [\n            \"♜\",\n            \"♞\",\n            \"♝\",\n            \"♚\",\n            \"♛\",\n            \"♟\"\n        ];\n        this.pieceWhite = [\n            \"♖\",\n            \"♘\",\n            \"♗\",\n            \"♔\",\n            \"♕\",\n            \"♙\"\n        ];\n        this.WHITE_PIECES = [\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♙\", \"white\")\n        ];\n        this.BLACK_PIECES = [\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\"),\n            new _pawn_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(\"♟\", \"black\")\n        ];\n        this.tbody = tbody;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGVzcy9jb250cm9sbGVyL0NvbnRyb2xsZXJDaGVzcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQUU3QixNQUFNQztJQXFEWEMsV0FBV0MsR0FBZ0IsRUFBVTtRQUNuQyxJQUFJLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxRQUFRLENBQUNGLElBQUlHLFdBQVcsR0FBRztZQUM5QyxPQUFPO1FBQ1QsT0FBTyxJQUFJLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixRQUFRLENBQUNGLElBQUlHLFdBQVcsR0FBRztZQUNwRCxPQUFPO1FBQ1QsQ0FBQztJQUNIO0lBRUFFLFNBQVNMLEdBQWdCLEVBQVE7UUFDL0IsSUFBSSxDQUFDTSxjQUFjLEdBQUdOLElBQUlPLEtBQUssQ0FBQ0MsZUFBZTtJQUNqRDtJQUVPQyxVQUFVVCxHQUFnQixFQUFRO1FBQ3ZDLE1BQU1VLGlCQUNKLElBQUssQ0FBQ0MsSUFBSSxJQUFJLFdBQVcsSUFBSSxDQUFDWixVQUFVLENBQUNDLFFBQVEsV0FDaEQsSUFBSSxDQUFDVyxJQUFJLElBQUksV0FBVyxJQUFJLENBQUNaLFVBQVUsQ0FBQ0MsUUFBUTtRQUVuRCxJQUFJVSxnQkFDRjtZQUFBLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0UsV0FBVyxFQUFFO2dCQUN0QixJQUFJLENBQUNDLFNBQVMsQ0FBQ2I7WUFDakIsT0FBTyxJQUFJLElBQUksQ0FBQ0QsVUFBVSxDQUFDQyxRQUFRLElBQUk7Z0JBQ3JDLElBQUksQ0FBQ00sY0FBYyxHQUFHTixJQUFJTyxLQUFLLENBQUNDLGVBQWU7Z0JBQy9DUixJQUFJTyxLQUFLLENBQUNDLGVBQWUsR0FBRyxJQUFJLENBQUNNLFdBQVc7Z0JBQzVDLElBQUksQ0FBQ0YsV0FBVyxHQUFHWjtZQUNyQixDQUFDO1FBQUQsQ0FBQztJQUNMO0lBRUFlLFlBQVk7UUFDVixJQUFJLENBQUNDLFFBQVE7UUFDYixJQUFJLENBQUNDLFVBQVU7UUFDZixJQUFJLENBQUNDLFNBQVM7UUFDZCxJQUFJLENBQUNDLFNB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LDRDQUFJQSxDQUFDLEtBQUs7WUFDZCxJQUFJQSw0Q0FBSUEsQ0FBQyxLQUFLO1lBQ2QsSUFBSUEsNENBQUlBLENBQUMsS0FBSztZQUNkLElBQUlBLDRDQUFJQSxDQUFDLEtBQUs7WUFDZCxJQUFJQSw0Q0FBSUEsQ0FBQyxLQUFLO1lBQ2QsSUFBSUEsNENBQUlBLENBQUMsS0FBSztZQUNkLElBQUlBLDRDQUFJQSxDQUFDLEtBQUs7WUFDZCxJQUFJQSw0Q0FBSUEsQ0FBQyxLQUFLO1lBQ2QsSUFBSUEsNENBQUlBLENBQUMsS0FBSztZQUNkLElBQUlBLDRDQUFJQSxDQUFDLEtBQUs7WUFDZCxJQUFJQSw0Q0FBSUEsQ0FBQyxLQUFLO1lBQ2QsSUFBSUEsNENBQUlBLENBQUMsS0FBSztTQUNmO1FBR0MsSUFBSSxDQUFDdUMsS0FBSyxHQUFHQTtJQUNmO0FBaUZGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2hlc3MvY29udHJvbGxlci9Db250cm9sbGVyQ2hlc3MudHM/ZjczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXduIH0gZnJvbSBcIi4uL3Bhd24vcGF3blwiO1xyXG5pbXBvcnQgeyBQaWVjZXMgfSBmcm9tIFwiLi4vcGllY2VzL3BpZWNlc1wiO1xyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlckNoZXNzIHtcclxuICB0Ym9keTogSFRNTEVsZW1lbnQ7XHJcbiAgY29sb3JTZWxlY3Q6IHN0cmluZyA9IFwiI0Y2RjY2OVwiO1xyXG4gIGlzQm94U2VsZWN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgbGFzdEJveDogSFRNTEVsZW1lbnQ7XHJcbiAgcGllY2VTZWxlY3Q6IEhUTUxFbGVtZW50O1xyXG4gIGNvbG9yQm94U2VsZWN0OiBzdHJpbmc7XHJcbiAgdHVybjogc3RyaW5nID0gXCJXSElURVwiO1xyXG4gIHBpZWNlc0JsYWNrOiBzdHJpbmdbXSA9IFtcIuKZnFwiLCBcIuKZnlwiLCBcIuKZnVwiLCBcIuKZmlwiLCBcIuKZm1wiLCBcIuKZn1wiXTtcclxuICBwaWVjZVdoaXRlOiBzdHJpbmdbXSA9IFtcIuKZllwiLCBcIuKZmFwiLCBcIuKZl1wiLCBcIuKZlFwiLCBcIuKZlVwiLCBcIuKZmVwiXTtcclxuXHJcbiAgV0hJVEVfUElFQ0VTOiBQaWVjZXNbXSA9IFtcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZmVwiLCBcIndoaXRlXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZlcIiwgXCJ3aGl0ZVwiKSxcclxuICAgIG5ldyBQYXduKFwi4pmZXCIsIFwid2hpdGVcIiksXHJcbiAgXTtcclxuXHJcbiAgQkxBQ0tfUElFQ0VTOiBQaWVjZXNbXSA9IFtcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgICBuZXcgUGF3bihcIuKZn1wiLCBcImJsYWNrXCIpLFxyXG4gICAgbmV3IFBhd24oXCLimZ9cIiwgXCJibGFja1wiKSxcclxuICAgIG5ldyBQYXduKFwi4pmfXCIsIFwiYmxhY2tcIiksXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IodGJvZHk6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLnRib2R5ID0gdGJvZHk7XHJcbiAgfVxyXG5cclxuICBjb2xvclBpZWNlKGJveDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMucGllY2VzQmxhY2suaW5jbHVkZXMoYm94LnRleHRDb250ZW50KSkge1xyXG4gICAgICByZXR1cm4gXCIjNzc5NTU2XCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGllY2VXaGl0ZS5pbmNsdWRlcyhib3gudGV4dENvbnRlbnQpKSB7XHJcbiAgICAgIHJldHVybiBcIndoaXRlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xvckJveChib3g6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbG9yQm94U2VsZWN0ID0gYm94LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RCb3goYm94OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgdHVybkNvbmRpdGlvbnM6IGJvb2xlYW4gPVxyXG4gICAgICAodGhpcy50dXJuID09IFwiV0hJVEVcIiAmJiB0aGlzLmNvbG9yUGllY2UoYm94KSA9PSBcIndoaXRlXCIpIHx8XHJcbiAgICAgICh0aGlzLnR1cm4gPT0gXCJCTEFDS1wiICYmIHRoaXMuY29sb3JQaWVjZShib3gpID09IFwiIzc3OTU1NlwiKTtcclxuXHJcbiAgICBpZiAodHVybkNvbmRpdGlvbnMpXHJcbiAgICAgIGlmICghIXRoaXMucGllY2VTZWxlY3QpIHtcclxuICAgICAgICB0aGlzLm1vdmVQaWVjZShib3gpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29sb3JQaWVjZShib3gpICE9IFwiXCIpIHtcclxuICAgICAgICB0aGlzLmNvbG9yQm94U2VsZWN0ID0gYm94LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvclNlbGVjdDtcclxuICAgICAgICB0aGlzLnBpZWNlU2VsZWN0ID0gYm94O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRQaWVjZXMoKSB7XHJcbiAgICB0aGlzLnNldFBhd25zKCk7XHJcbiAgICB0aGlzLnNldEJpc2hvcHMoKTtcclxuICAgIHRoaXMuc2V0VG93ZXJzKCk7XHJcbiAgICB0aGlzLnNldEhvcnNlcygpO1xyXG4gICAgdGhpcy5zZXRRdWVlbnMoKTtcclxuICAgIHRoaXMuc2V0S2luZ3MoKTtcclxuICB9XHJcblxyXG4gIG1vdmVQaWVjZSh0b01vdmU6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCBwaWVjZXM6IFBpZWNlc1tdID1cclxuICAgICAgdGhpcy50dXJuID09IFwiV0hJVEVcIiA/IHRoaXMuV0hJVEVfUElFQ0VTIDogdGhpcy5CTEFDS19QSUVDRVM7XHJcbiAgICBmb3IgKGxldCBpID0gODsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuV0hJVEVfUElFQ0VTW2ldLmxvY2F0aW9uID09IHRoaXMucGllY2VTZWxlY3QpIHtcclxuICAgICAgICB0aGlzLldISVRFX1BJRUNFU1tpXS5zZXRMb2NhdGlvbih0b01vdmUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnR1cm4gPSBcIkJMQUNLXCI7XHJcbiAgICB0aGlzLnBpZWNlU2VsZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JCb3hTZWxlY3Q7XHJcbiAgICB0aGlzLnBpZWNlU2VsZWN0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSA4OyBpIDwgMTY7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLldISVRFX1BJRUNFU1tpXS5sb2NhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBUaGUgbmV4dCBmdW5jdGlvbnMgZGVhbCB3aXRoIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHBpZWNlcyBvbiB0aGUgYm9hcmQuXHJcblxyXG4gIHByaXZhdGUgc2V0UGF3bnMoKSB7XHJcbiAgICAvL3doaXRlIHBhd25zXHJcbiAgICBmb3IgKGxldCBpID0gOTsgaSA8PSAxNjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm94XCIgKyAoaSArIDQwKSk7XHJcbiAgICAgIHRoaXMuV0hJVEVfUElFQ0VTW2kgLSAxXS5zZXRQaWVjZShib3gpO1xyXG4gICAgfVxyXG4gICAgLy9ibGFjayBwYXduc1xyXG5cclxuICAgIGZvciAobGV0IGkgPSA5OyBpIDw9IDE2OyBpKyspIHtcclxuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3hcIiArIGkpO1xyXG4gICAgICB0aGlzLkJMQUNLX1BJRUNFU1tpIC0gMV0uc2V0UGllY2UoYm94KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QmlzaG9wcygpIHt9XHJcblxyXG4gIHByaXZhdGUgc2V0VG93ZXJzKCkge31cclxuXHJcbiAgcHJpdmF0ZSBzZXRIb3JzZXMoKSB7fVxyXG5cclxuICBwcml2YXRlIHNldFF1ZWVucygpIHt9XHJcblxyXG4gIHByaXZhdGUgc2V0S2luZ3MoKSB7fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQYXduIiwiQ29udHJvbGxlckNoZXNzIiwiY29sb3JQaWVjZSIsImJveCIsInBpZWNlc0JsYWNrIiwiaW5jbHVkZXMiLCJ0ZXh0Q29udGVudCIsInBpZWNlV2hpdGUiLCJjb2xvckJveCIsImNvbG9yQm94U2VsZWN0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RCb3giLCJ0dXJuQ29uZGl0aW9ucyIsInR1cm4iLCJwaWVjZVNlbGVjdCIsIm1vdmVQaWVjZSIsImNvbG9yU2VsZWN0Iiwic2V0UGllY2VzIiwic2V0UGF3bnMiLCJzZXRCaXNob3BzIiwic2V0VG93ZXJzIiwic2V0SG9yc2VzIiwic2V0UXVlZW5zIiwic2V0S2luZ3MiLCJ0b01vdmUiLCJwaWVjZXMiLCJXSElURV9QSUVDRVMiLCJCTEFDS19QSUVDRVMiLCJpIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0UGllY2UiLCJjb25zdHJ1Y3RvciIsInRib2R5IiwiaXNCb3hTZWxlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./chess/controller/ControllerChess.ts\n"));

/***/ })

});
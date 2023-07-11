import { Pawn } from "../pawn/pawn";
import { Pieces } from "../pieces/pieces";
export class ControllerChess {
  tbody: HTMLElement;

  /*
    "♖",
    "♘",
    "♗",
    "♔",
    "♕",
    "♗",
    "♘",
    "♖",
     */
  WHITE_PIECES: Pieces[] = [
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
    new Pawn("♙"),
  ];

  /*
    "♜",
    "♞",
    "♝",
    "♚",
    "♛",
    "♝",
    "♞",
    "♜",
  */
  BLACK_PIECES: Pieces[] = [
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
    new Pawn("♟"),
  ];

  constructor(tbody: HTMLElement) {
    this.tbody = tbody;
  }

  public selectBox(box: HTMLElement): void {
    console.log(box);
  }

  setPieces() {
    this.setPawns();
    this.setBishops();
    this.setTowers();
    this.setHorses();
    this.setQueens();
    this.setKings();
  }

  private setPawns() {
    //white pawns
    for (let i = 9; i <= 16; i++) {
      const box = document.getElementById("box" + (i + 40));
      this.WHITE_PIECES[i - 1].setPiece(box);
    }
    //black pawns

    for (let i = 9; i <= 16; i++) {
      const box = document.getElementById("box" + i);
      this.BLACK_PIECES[i - 1].setPiece(box);
    }
  }

  private setBishops() {}

  private setTowers() {}

  private setHorses() {}

  private setQueens() {}

  private setKings() {}
}

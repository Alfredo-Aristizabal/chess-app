import { Pawn } from "../pawn/pawn";
import { Pieces } from "../pieces/pieces";
export class ControllerChess {
  tbody: HTMLElement;
  colorSelect: string = "#F6F669";
  isBoxSelect: boolean = false;
  lastBox: HTMLElement;
  pieceSelect: HTMLElement;
  colorBoxSelect: string;
  turn: string = "WHITE";
  piecesBlack: string[] = ["♜", "♞", "♝", "♚", "♛", "♟"];
  pieceWhite: string[] = ["♖", "♘", "♗", "♔", "♕", "♙"];

  WHITE_PIECES: Pieces[] = [
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
    new Pawn("♙", "white"),
  ];

  BLACK_PIECES: Pieces[] = [
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
    new Pawn("♟", "black"),
  ];

  constructor(tbody: HTMLElement) {
    this.tbody = tbody;
  }

  colorPiece(box: HTMLElement): string {
    if (this.piecesBlack.includes(box.textContent)) {
      return "#779556";
    } else if (this.pieceWhite.includes(box.textContent)) {
      return "white";
    }
  }

  colorBox(box: HTMLElement): void {
    this.colorBoxSelect = box.style.backgroundColor;
  }

  public selectBox(box: HTMLElement): void {
    const turnConditions: boolean =
      (this.turn == "WHITE" && this.colorPiece(box) == "white") ||
      (this.turn == "BLACK" && this.colorPiece(box) == "#779556");

    if (!!this.pieceSelect) {
      this.movePiece(box);
    } else if (this.colorPiece(box) != "" && turnConditions) {
      this.colorBoxSelect = box.style.backgroundColor;
      box.style.backgroundColor = this.colorSelect;
      this.pieceSelect = box;
    }
  }

  setPieces() {
    this.setPawns();
    this.setBishops();
    this.setTowers();
    this.setHorses();
    this.setQueens();
    this.setKings();
  }

  movePiece(toMove: HTMLElement) {
    console.log("hola");
    const pieces: Pieces[] =
      this.turn == "WHITE" ? this.WHITE_PIECES : this.BLACK_PIECES;
    for (let i = 8; i < 16; i++) {
      if (pieces[i].location == this.pieceSelect) {
        if (this.turn == "WHITE") {
          this.WHITE_PIECES[i].setLocation(toMove);
        } else if (this.turn == "BLACK") {
          this.BLACK_PIECES[i].setLocation(toMove);
        }
        break;
      }
    }
    this.turn = "BLACK";
    this.pieceSelect.style.backgroundColor = this.colorBoxSelect;
    this.pieceSelect = undefined;
  }


  
  // The next functions deal with the placement of the pieces on the board.

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

import { Pieces } from "../pieces/pieces";

export class Pawn extends Pieces {
  piece: string;
  colorPiece: string;
  singleSpaceMove: number;
  doubleSpaceMove: number;
  eatMove: number[];
  constructor(piece: string, colorPiece: string) {
    super(piece, colorPiece);
    this.singleSpaceMove = this.colorPiece == "white" ? -8 : 8;
    this.doubleSpaceMove = this.colorPiece == "white" ? -16 : 16;
    this.eatMove = this.colorPiece == "white" ? [-9, -7] : [9, 7];
  }
}

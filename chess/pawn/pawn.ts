import { Pieces } from "../pieces/pieces";

export class Pawn extends Pieces {
  piece: string;

  constructor(piece: string) {
    super(piece);
  }
  
  setPiece(box: HTMLElement):void  {
    box.textContent = this.piece;
  }
}

import { Pieces } from "../pieces/pieces";

export class Pawn extends Pieces {
  piece: string;

  constructor(piece: string, colorPiece: string) {
    super(piece, colorPiece);
  }
}

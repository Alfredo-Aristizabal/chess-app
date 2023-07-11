export abstract class Pieces {
  piece: string;

  constructor(piece: string) {
    this.piece = piece;
  }

  abstract setPiece(box: HTMLElement): void;
}

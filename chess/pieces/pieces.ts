export abstract class Pieces {
  piece: string;
  colorPiece: string;

  constructor(piece: string, colorPiece: string) {
    this.piece = piece;
    this.colorPiece = colorPiece;
  }

  setPiece(box: HTMLElement): void {
    box.textContent = this.piece;
  }
}

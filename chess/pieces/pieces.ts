export abstract class Pieces {
  piece: string;
  colorPiece: string;
  location: HTMLElement;
  constructor(piece: string, colorPiece: string) {
    this.piece = piece;
    this.colorPiece = colorPiece;
  }

  setPiece(box: HTMLElement): void {
    box.textContent = this.piece;
    this.location = box;
  }

  setLocation(toMove: HTMLElement) {
    this.location.textContent = "";
    this.location = toMove;
    this.location.textContent = this.piece;
  }
}

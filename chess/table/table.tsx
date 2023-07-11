import tableDesign from "./tableDesign";
import React from "react";

export class TableController {
  typeTable: string;
  IDES: number[][] = [[], [], [], [], [], [], [], []];

  constructor(typeTable: string) {
    this.typeTable = typeTable;
  }

  orderIdes() {
    let count: number = this.typeTable === "white" ? 1 : 64;

    if (this.typeTable == "white") {
      for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
          this.IDES[i].push(count);
          count++;
        }
      }
    } else if (this.typeTable == "black") {
      for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
          this.IDES[i].push(count);
          count--;
        }
      }
    }
  }

  insertTable(): JSX.Element {
    this.orderIdes();
    return tableDesign(this.IDES, this.typeTable);
  }
}

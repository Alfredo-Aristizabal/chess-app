import React, { useEffect } from "react";

export class Table {
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
    return this.tableDesign();
  }

  tableDesign(): JSX.Element {
    let count: number = 0;

    let colorBoxesForBlack: string[] = [
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",

      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",

      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",

      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",

      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",

      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",

      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",

      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
    ];

    let colorBoxesForWhite: string[] = [
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
      "#779556",
      "white",
    ];

    let lettersForWhite: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let lettersForBlack: string[] = ["h", "g", "f", "e", "d", "c", "b", "a"];

    let numbersForWhite: number[] = [8, 7, 6, 5, 4, 3, 2, 1];
    let numbersForBlack: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

    let letters: string[] =
      this.typeTable == "white" ? lettersForWhite : lettersForBlack;
    let letterCount: number = 0;

    let numbers: number[] =
      this.typeTable == "white" ? numbersForWhite : numbersForBlack;

    return (
      <div
        className="w-full flex items-center justify-center"
        style={{ marginTop: "80px" }}
      >
        <table>
          <tbody className="w-[500px]" id="tbody">
            {this.IDES.map((row, index) => {
              return (
                <tr
                  key={"row" + index}
                  className="w-[500px] text-center cursor-pointer select-none"
                >
                  <td style={{ width: "2.5rem" }}>{numbers[index]}</td>
                  {row.map((id) => {
                    return (
                      <td
                        key={id}
                        style={{
                          width: "3.5rem",
                          fontSize: "40px",
                          backgroundColor: `${
                            this.typeTable === "white"
                              ? colorBoxesForWhite[count++]
                              : colorBoxesForBlack[count++]
                          }`,
                        }}
                        className={`h-14 border-[2px] boxTable font-roboto `}
                        id={"box" + id}
                      ></td>
                    );
                  })}
                </tr>
              );
            })}
            <tr>
              <td></td>
              {letters.map((letter) => {
                return (
                  <td key={letter} style={{ width: "3.5rem" }}>
                    <p className="text-center"> {letter}</p>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

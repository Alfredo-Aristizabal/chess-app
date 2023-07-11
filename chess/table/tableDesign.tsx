import React from "react";

export default function tableDesign(
  IDES: number[][],
  typeTable: string
): JSX.Element {
  let count: number = 0;

  let colorBoxesForBlack: string[] = [
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",

    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",

    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",

    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",

    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",

    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",

    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",

    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
  ];

  let colorBoxesForWhite: string[] = [
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
    "bg-black",
    "bg-white",
  ];

  let lettersForWhite: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let lettersForBlack: string[] = ["h", "g", "f", "e", "d", "c", "b", "a"];

  let numbersForWhite: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  let numbersForBlack: number[] = [8, 7, 6, 5, 4, 3, 2, 1];

  let letters: string[] =
    typeTable == "white" ? lettersForWhite : lettersForBlack;
  let letterCount: number = 0;

  let numbers: number[] =
    typeTable == "white" ? numbersForWhite : numbersForBlack;

  return (
    <div
      className="w-full flex items-center justify-center"
      style={{ marginTop: "80px" }}
    >
      <table>
        <tbody className="w-[500px]">
          {IDES.map((row) => {
            return (
              <tr className="w-[500px]">
                <td style={{ width: "2.5rem" }}>{letters[letterCount++]}</td>
                {row.map((id) => {
                  return (
                    <td
                      style={{ width: "3.5rem" }}
                      className={` ${
                        typeTable === "white"
                          ? colorBoxesForWhite[count++]
                          : colorBoxesForBlack[count++]
                      }  h-14 border-[2px]`}
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
                <td style={{ width: "3.5rem" }}>
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

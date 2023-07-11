import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Table } from "../chess/table/table";
import { ControllerChess } from "../chess/controller/ControllerChess";

const GET_USERS = gql`
  query Users {
    users {
      id
      name
    }
  }
`;
function Home() {
  const { data } = useQuery(GET_USERS);
  let table = new Table("white");

  useEffect(() => {
    const tbody: HTMLElement | null = document.getElementById("tbody");
    const controllerChess = new ControllerChess(tbody);
    controllerChess.setPieces();
    tbody?.addEventListener("click", (e: MouseEvent) => {
      const evt = e.target as HTMLTableCellElement;
      const isBoxOfTable = evt.className.includes("boxTable");
      if (isBoxOfTable) controllerChess.selectBox(evt);
    });

    return () => {
      tbody?.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
      <div className="bg-gray-100 mb-5">
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">My Next.js App</h1>
          </div>
        </nav>
      </div>

      {table.insertTable()}
    </>
  );
}

export default Home;

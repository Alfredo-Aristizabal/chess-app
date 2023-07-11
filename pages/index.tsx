import React from "react";
import { gql, useQuery } from "@apollo/client";
import { table } from "console";
import { TableController } from "../chess/table/table";

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
  let table = new TableController("white");
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

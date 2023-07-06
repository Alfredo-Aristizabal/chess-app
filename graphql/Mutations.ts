import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation ($name: String!, $password: String!) {
    addUser(name: $name, password: $password) {
      name
    }
  }
`;

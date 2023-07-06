import { gql } from "@apollo/client";

export const VERIFY_USERNAME_QUERY = gql`
  query ($name: String!) {
    verifyUsernameExist(name: $name)
  }
`;

export const VERIFY_PASSWORD_QUERY = gql`
  query ($name: String!, $password: String!) {
    verifyPassword(name: $name, password: $password) {
      userFound
      passwordCorrect
    }
  }
`;

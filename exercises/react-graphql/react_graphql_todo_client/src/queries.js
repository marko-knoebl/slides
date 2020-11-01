import gql from "graphql-tag";

export const GET_TODOS = gql`
  query Todos {
    todos {
      id
      title
      completed
    }
  }
`;

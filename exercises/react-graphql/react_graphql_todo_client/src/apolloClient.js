import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://fakeql.com/graphql/0d8eaa35ac55db3dc7b2b67ad21fbe3b"
});

const client = new ApolloClient({
  cache,
  link
});

const TODOS_QUERY = gql`
  query get_all_todos {
    todos {
      id
      title
    }
  }
`;

// similar to React's setState
client.writeData({ data: { newTitle: "" } });

client
  .query({
    query: TODOS_QUERY
  })
  .then(result => console.log(result));

export default client;

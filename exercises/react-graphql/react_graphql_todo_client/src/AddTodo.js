import React from "react";
import gql from "graphql-tag";
import { useQuery, useMutation, useApolloClient } from "react-apollo";

import { GET_TODOS } from "./queries";

const GET_NEW_TITLE = gql`
  query NewTitle {
    newTitle @client
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    createTodo(input: { user_id: "usid", title: $title, completed: false }) {
      id
      title
      completed
    }
  }
`;

function addTodoUpdater(cache, reply) {
  const oldTodos = cache.readQuery({ query: GET_TODOS }).todos;
  const newTodos = [...oldTodos, reply.data.createTodo];
  cache.writeQuery({ query: GET_TODOS, data: { todos: newTodos } });
}

export default function AddTodo() {
  const newTitle = useQuery(GET_NEW_TITLE).data.newTitle;
  const [addTodo, addTodoQuery] = useMutation(ADD_TODO, {
    update: addTodoUpdater
  });
  const client = useApolloClient();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        addTodo({ variables: { title: newTitle } });
        client.writeData({ data: { newTitle: "" } });
      }}
    >
      <input
        value={newTitle}
        onChange={event =>
          client.writeData({ data: { newTitle: event.target.value } })
        }
      />
      {addTodoQuery.loading && "ADDING TODO"}
    </form>
  );
}

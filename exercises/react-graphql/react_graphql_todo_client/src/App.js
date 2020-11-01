import React from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo";

import AddTodo from "./AddTodo";
import { GET_TODOS } from "./queries";
import TodoList from "./TodoList";

const SET_COMPLETED = gql`
  mutation SetCompleted($id: ID!, $completed: Boolean!) {
    updateTodo(id: $id, input: { completed: $completed }) {
      id
      completed
    }
  }
`;

export default function App() {
  const todosQuery = useQuery(GET_TODOS);
  const [setCompleted, setCompletedQuery] = useMutation(SET_COMPLETED);

  if (todosQuery.loading) return <div>Loading...</div>;
  if (todosQuery.error) return <div>Network error</div>;
  return (
    <div>
      <h1>Todo</h1>
      <div style={{ maxHeight: "20em", overflow: "auto" }}>
        <TodoList
          todos={todosQuery.data.todos}
          onToggle={(todoId, newCompleted) => {
            setCompleted({
              variables: { id: todoId, completed: newCompleted }
            });
          }}
        />
      </div>
      {setCompletedQuery.loading && "TOGGLING TODO"}
      <AddTodo />
    </div>
  );
}

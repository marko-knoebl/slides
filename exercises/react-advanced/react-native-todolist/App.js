import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./components/AddTodo";

import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "abc", completed: false },
    { id: 2, title: "def", completed: true }
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo</Text>
      <TodoList
        todos={todos}
        onToggle={id =>
          setTodos(
            todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          )
        }
      />
      <AddTodo
        onAddTodo={newTitle => {
          console.log(todos);
          setTodos([
            ...todos,
            { id: Math.random(), title: newTitle, completed: false }
          ]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    marginTop: 20
  },
  heading: {
    fontSize: 36
  }
});

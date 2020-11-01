import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TodoItem = ({ title, completed, onToggle }) => (
  <View style={[styles.todoItem, completed && styles.completedView]}>
    <Text onPress={onToggle} style={[completed && styles.completedText]}>
      {completed ? "DONE: " : "TODO: "}
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  todoItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "salmon"
  },
  completedView: {
    backgroundColor: "lightgrey"
  },
  completedText: {
    textDecorationLine: "line-through"
  }
});

const TodoList = ({ todos, onToggle }) => (
  <View>
    {todos.map(todo => (
      <TodoItem
        title={todo.title}
        completed={todo.completed}
        onToggle={() => onToggle(todo.id)}
        key={todo.id}
      />
    ))}
  </View>
);

export default TodoList;

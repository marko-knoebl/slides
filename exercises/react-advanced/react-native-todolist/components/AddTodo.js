import React, { useState } from "react";

import { Button, View, TextInput, StyleSheet } from "react-native";

const AddTodo = ({ onAddTodo }) => {
  const [newTitle, setNewTitle] = useState("");
  return (
    <View>
      <TextInput
        style={[styles.textInput]}
        value={newTitle}
        onChangeText={newTitle => setNewTitle(newTitle)}
      />
      <Button
        title="Add"
        onPress={() => {
          onAddTodo(newTitle);
          setNewTitle("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: "grey"
  }
});

export default AddTodo;

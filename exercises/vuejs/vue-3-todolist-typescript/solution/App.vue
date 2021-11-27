<template>
  <div id="app">
    <h1>Todo</h1>
    <add-todo @add="addTodo($event)" />
    <todo-list @delete="deleteTodo" @toggle="toggleTodo" />
    <stats :todo="todos" />
    {{ todos[0] }}
  </div>
</template>

<script lang="ts">
import AddTodo from "./AddTodo.vue";
import TodoList from "./TodoList.vue";
import Stats from "./Stats.vue";
import { Todo } from "./types";
import { defineComponent } from "vue";

type AppState = {
  todos: Array<Todo>;
};

export default defineComponent({
  name: "App",
  components: {
    AddTodo,
    TodoList,
    Stats,
  },
  data(): AppState {
    return {
      todos: [
        { id: 1, title: "groceries", completed: false },
        { id: 2, title: "taxes", completed: true },
      ],
    };
  },
  methods: {
    addTodo(newTitle: string) {
      this.todos.push({
        id: Math.max(0, ...this.todos.map((t) => t.id)) + 1,
        title: newTitle,
        completed: false,
      });
    },
    deleteTodo(todoId: number): void {
      this.todos.splice(
        this.todos.findIndex((t) => t.id === todoId),
        1
      );
    },
    toggleTodo(todoId: number): void {
      const todo = this.todos.find((t) => t.id === todoId);
      if (todo === undefined) {
        throw new Error("no such todo");
      }
      todo.completed = !todo.completed;
    },
  },
});
</script>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
#app {
  height: 100vh;
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
}
ul {
  overflow: auto;
}
</style>

<template>
  <div id="app">
    <h1>Todo</h1>
    <add-todo @add="addTodo($event)" />
    <todo-list :todos="todos" @delete="deleteTodo" @toggle="toggleTodo" />
    <stats :todos="todos" />
  </div>
</template>

<script>
import AddTodo from "./AddTodo.vue";
import TodoList from "./TodoList.vue";
import Stats from "./Stats.vue";
export default {
  components: {
    AddTodo,
    TodoList,
    Stats
  },
  data: () => ({
    newTitle: "",
    todos: [
      { id: 1, title: "groceries", completed: false },
      { id: 2, title: "taxes", completed: true }
    ]
  }),
  methods: {
    addTodo(newTitle) {
      this.todos.push({
        id: Math.max(0, ...this.todos.map(t => t.id)) + 1,
        title: newTitle,
        completed: false
      });
    },
    deleteTodo(todoId) {
      this.todos.splice(this.todos.findIndex(t => t.id === todoId), 1);
    },
    toggleTodo(todoId) {
      const todo = this.todos.find(t => t.id === todoId);
      todo.completed = !todo.completed;
    }
  }
};
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

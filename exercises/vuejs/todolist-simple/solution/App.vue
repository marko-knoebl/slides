<template>
  <div id="app">
    <h1>Todo</h1>
    <form @submit.prevent="addTodo()">
      <input v-model="newTitle" />
      <button role="submit">add</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="todo.completed = !todo.completed">
        {{ todo.completed ? "DONE: " : "TODO: " }}{{ todo.title }}
        <button
          @click="deleteTodo(todo)"
        >X</button>
      </li>
    </ul>
    <section>
      <h1>stats</h1>
      completed: {{ completed }}, incomplete: {{ incomplete }}
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    newTitle: "",
    todos: [
      { id: 1, title: "groceries", completed: false },
      { id: 2, title: "taxes", completed: true },
    ],
  }),
  methods: {
    addTodo() {
      this.todos.push({
        id: Math.max(0, ...this.todos.map((t) => t.id)) + 1,
        title: this.newTitle,
        completed: false,
      });
      this.newTitle = "";
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
  computed: {
    completed() {
      return this.todos.filter((t) => t.completed).length;
    },
    incomplete() {
      return this.todos.length - this.completed;
    },
  },
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

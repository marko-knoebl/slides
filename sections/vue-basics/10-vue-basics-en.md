# Vue basics

## Options API and composition API

- options API: traditional way to write Vue components
- composition API: new possibility introduced in 2020 with Vue 3.0 (inspired by React hooks)

## Online editor

- <https://codesandbox.io> (Vue 2)
- <https://codesandbox.io/s/vue-3-ce53j> (Vue 3)

## Example component definition (counter component)

template:

```vue
<template>
  <div>
    count: {{ count }}
    <button @click="count++">increment</button>
  </div>
</template>
```

## Example component definition (counter component)

behavior (options API):

```vue
<script>
export default {
  // data / state initialization function
  data: () => ({ count: 0 }),
};
</script>
```

## Example component definition (simple todo app)

```vue
<template>
  <div>
    <h1>Todo</h1>
    <form @submit.prevent="addTodo()">
      <input v-model="newTitle" />
      <button role="submit">add</button>
    </form>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
```

## Example component definition (simple todo app)

```vue
<script>
export default {
  data: () => ({
    newTitle: '',
    todos: [
      { id: 1, title: 'groceries', completed: false },
      { id: 2, title: 'taxes', completed: true },
    ],
  }),
  methods: {
    addTodo() {
      this.todos.push({
        id: Math.max(0, ...this.todos.map((t) => t.id)) + 1,
        title: this.newTitle,
        completed: false,
      });
      this.newTitle = '';
    },
  },
};
</script>
```

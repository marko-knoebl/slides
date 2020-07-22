# Vue basics

## Example component definition (composition API)

behavior (composition API):

```vue
<script>
import { ref } from '@vue/composition-api';
export default {
  setup() {
    const count = ref(0);
    return { count };
  },
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

```vue
<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    const newTitle = ref('');
    const todos = reactive([
      { id: 1, title: 'groceries', completed: false },
      { id: 2, title: 'taxes', commpleted: true },
    ]);
    const addTodo = () => {
      todos.push({
        id: Math.max(0, ...todos.map((t) => t.id)) + 1,
        title: newTitle.value,
        completed: false,
      });
      newTitle.value = '';
    };
    return { newTitle, todos, addTodo };
  },
};
</script>
```

## Todolist app

```vue
<template>
  <div id="app">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span @click="toggleTodo(todo)"
          >{{ todo.completed ? 'DONE: ' : 'TODO:'
          }}{{ todo.title }}</span
        >
        <button @click="deleteTodo(todo)">X</button>
      </li>
    </ul>
    <form @submit.prevent="addTodo()">
      <input v-model="newTitle" />
      <button role="submit">add</button>
    </form>
  </div>
</template>
```

composition API:

```js
import {
  ref,
  reactive,
  onMounted,
} from '@vue/composition-api';
export default {
  setup() {
    const todos = reactive([
      { id: 1, title: 'learn vue', completed: false },
      { id: 2, title: 'try composition', completed: true },
    ]);
    const newTitle = ref('');
    const toggleTodo = (todo) => {
      todo.completed = !todo.completed;
    };
    const deleteTodo = (todo) => {
      todos.splice(todos.indexOf(todo), 1);
    };
    const addTodo = () => {
      const newId =
        Math.max(0, ...todos.map((t) => t.id)) + 1;
      todos.splice(todos.length, 0, {
        id: newId,
        title: newTitle.value,
        completed: false,
      });
      newTitle.value = '';
    };
    onMounted(() =>
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
          todos.splice(0, todos.length, ...data);
        })
    );
    return {
      todos,
      toggleTodo,
      deleteTodo,
      addTodo,
      newTitle,
    };
  },
};
```

"traditional" API:

```js
export default {
  data() {
    return {
      todos: [
        { id: 1, title: 'learn vue', completed: false },
        {
          id: 2,
          title: 'try composition',
          completed: true,
        },
      ],
      newTitle: '',
    };
  },
  methods: {
    addTodo: function () {
      const newId =
        Math.max(0, ...this.todos.map((t) => t.id)) + 1;
      this.todos.splice(this.todos.length, 0, {
        id: newId,
        title: this.newTitle,
        completed: false,
      });
      this.newTitle = '';
    },
    toggleTodo: function (todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
  mounted: function () {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        this.todos.splice(0, this.todos.length, ...data);
      });
  },
};
```

## Emit

some functions (including `emit`) are available via the `context` argument of the `setup` function:

```js
export default {
  props: ['title', 'completed'],
  setup(props, context) {
    const toggleTodo = () => {
      context.emit('toggle');
    };
    const deleteTodo = () => {
      context.emit('delete');
    };
    return { toggleTodo, deleteTodo };
  },
};
```

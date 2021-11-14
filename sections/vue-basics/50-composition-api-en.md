# Composition API

## Composition API vs options API

Composition API: component logic is defined in a `setup` method

Composition API compared to the traditional options API:

- better TypeScript support
- more composable (logic can be extracted from component defintion)
- slightly more verbose

## Composition API vs options API

options API:

```js
export default {
  data: () => ({
    todos: [],
    newTitle: '',
  }),
  methods: {
    /*...*/
  },
  computed: {
    /*...*/
  },
};
```

## Composition API vs options API

composition API:

```js
import { ref, reactive, computed } from 'vue';
export default {
  setup() {
    const todos = reactive([]);
    const newTitle = ref('');
    const addTodo = () => {
      // ...
    };
    const numActive = computed(
      () => todos.filter((t) => !t.completed).length
    );
    return { todos, newTitle, addTodo, numActive };
  },
};
```

## State in the composition API

two mechanisms:

- `ref` for primitive / immutable data (strings, numbers, ...)
- `reactive` for objects, arrays, ...

## refs

initializing a ref:

```js
const newTitle = ref('');
```

reading / writing from script code:

```js
const a = newTitle.value;
newTitle.value = 'foo';
```

reading / writing from the template:

```vue
<div>new title is {{newTitle}}</div>
<button @click="newTitle = 'foo'">set to foo</button>
```

## Example component definition (simple todo app)

```html
<div>
  <h1>Todo</h1>
  <form @submit.prevent="addTodo()">
    <input v-model="newTitle" />
    <button type="submit">add</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
    </li>
  </ul>
</div>
```

## Example component definition (simple todo app)

```js
import { ref, reactive } from 'vue';
export default {
  setup() {
    const newTitle = ref('');
    const todos = reactive([
      { id: 1, title: 'groceries', completed: false },
      { id: 2, title: 'taxes', completed: true },
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
```

## Exercise

Create a slideshow component / application that displays images like this:

```
https://picsum.photos/300/200?image=0
```

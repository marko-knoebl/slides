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
  name: 'TodoApp',
  data() {
    return {
      todos: [],
      newTitle: '',
    };
  },
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
  name: 'TodoApp',
  setup() {
    const todos = reactive([]);
    const newTitle = ref('');
    function addTodo() {
      // ...
    }
    const numActive = computed(
      () => todos.filter((t) => !t.completed).length
    );
    return { todos, newTitle, addTodo, numActive };
  },
};
```

## Composition API vs options API

possible restructuring of code:

```js
function useTodos() {
  // manages todos
}

export default {
  name: 'TodoApp',
  setup() {
    const newTitle = ref('');
    const { todos, addTodo, numActive } = useTodos();
    return { todos, addTodo, numActive, newTitle };
  },
};
```

## Composition API

_VueUse_: collection of pre-defined Vue composition functions:

<https://github.com/vueuse/vueuse>

examples:

- _useFetch_
- _useGeolocation_
- _useMediaQuery_
- _useNow_
- _useOnline_
- ...

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
  name: 'TodoApp',
  setup() {
    const newTitle = ref('');
    const todos = reactive([
      { id: 1, title: 'groceries', completed: false },
      { id: 2, title: 'taxes', completed: true },
    ]);
    function onSubmit() {
      addTodo(newTitle.value);
      newTitle.value = '';
    }
    function addTodo(title) {
      const maxId = Math.max(0, ...todos.map((t) => t.id));
      todos.push({
        id: newId,
        title: newTitle.value,
        completed: false,
      });
    }
    return { newTitle, todos, onSubmit };
  },
};
```

## Exercise

Create a slideshow component / application that displays images like this:

```
https://picsum.photos/300/200?image=0
```

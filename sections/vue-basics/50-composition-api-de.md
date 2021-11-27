# Composition API

## Composition API vs Options API

Composition API: Komponentenlogik wird in einer `setup`-Methode definiert

Composition API verglichen mit dem Options API:

- bessere Unterstützung für TypeScript
- modularer (Logik kann aus der Komponentendefinition extrahiert werden)
- etwas verboser

## Composition API vs Options API

options API:

```js
export default {
  name: 'TodoApp',
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
  name: 'TodoApp',
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

## State im composition API

zwei Mechanismen:

- `ref` für primitive / unveränderbare Daten (_string_, _number_, ...)
- `reactive` für Objekte, Arrays, ...

## refs

Initialisierung eines refs:

```js
const newTitle = ref('');
```

Lesen / Schreiben aus dem Skript:

```js
const a = newTitle.value;
newTitle.value = 'foo';
```

Lesen / Schreiben aus dem Template:

```vue
<div>new title is {{newTitle}}</div>
<button @click="newTitle = 'foo'">set to foo</button>
```

## Beispiel: Komponentendefinition (todo app)

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

## Beispiel: Komponentendefinition (todo app)

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

## Übung

Erstelle eine Slideshow-Komponente / -Anwendung, die Bilder wie das folgende darstellt:

```
https://picsum.photos/300/200?image=0
```

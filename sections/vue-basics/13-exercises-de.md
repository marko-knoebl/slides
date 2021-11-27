# Übungen

## Übungen

Aufgaben:

- Erstelle die Slideshow-Komponente nochmals (möglichst ohne auf alten Code zu blicken)
- Erstelle eine Todo-List-Anwendung als einzelne Komponente

## Übung: Todo-Liste

Wir erstellen eine Todo-Anwendung mit der folgenden Funktionalität:

- Anzeigen erledigter und nicht-erledigter Todos
- Hinzufügen eines Todos mittels eines Formulars
- Umschalten des erledigt-Zustandes eines Todos
- Löschen eines Todos
- Anzeigen der Anzahl an erledigten und nicht-erledigten Todos

## Übung: Todo-Liste - teilweise Lösung

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

## Übung: Todo-Liste - teilweise Lösung

```js
export default {
  name: 'TodoList',
  data() {
    return {
      newTitle: '',
      todos: [
        { id: 1, title: 'groceries', completed: false },
        { id: 2, title: 'taxes', completed: true },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.addTodo();
      this.newTitle = '';
    },
    addTodo() {
      let maxId = 0;
      for (let todo of this.todos) {
        maxId = Math.max(maxId, todo.id);
      }
      this.todos.push({
        id: maxId + 1,
        title: this.newTitle,
        completed: false,
      });
    },
  },
};
```

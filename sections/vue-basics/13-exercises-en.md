# Exercises

## Exercises

Tasks:

- reacreate the slideshow component
- create a todo list in a single component

## Exercise: todo list

Create a todo list application with the following functionality:

- displaying completed and incomplete todos
- toggling the completed state of a todo
- deleting a todo
- adding a new todo from a form
- displaying the total number of completed and incomplete todos

## Exercise: todo list - partial solution

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

## Exercise: todo list - partial solution

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

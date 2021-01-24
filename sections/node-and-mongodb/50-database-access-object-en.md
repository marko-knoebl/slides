# Database access object

## Database access object

accessing a database via a _database access object_ (DAO):

```js
// demo.js
import TodosDAO from './TodosDAO.js';

const main = async () => {
  // ...

  const todosDAO = new TodosDAO(client);
  await todosDAO.addTodo('learn mongodb');
  console.log("Added todo: 'learn mongodb'");
  await todosDAO.deleteCompletedTodos();
  console.log('Deleted all completed todos');

  // ...
};
```

## Database access object

example DAO definition:

```js
class TodosDAO {
  constructor(client) {
    this.todos = client.db('todolist').collection('todos');
  }

  async addTodo(title) {
    await this.todos.insertOne({
      title: title,
      completed: false,
    });
  }
  async deleteCompletedTodos() {
    await this.todos.deleteMany({ completed: true });
  }
}
```

## Database access object

exercise: extend _demo.js_ and _TodosDAO_ to produce the following log (solution on next slide):

```
Connected to database
Deleted all existing todos
Loaded todos from jsonplaceholder.typicode.com/todos
Added new todo: 'learn mongodb'
There are now 111 incomplete and 90 completed todos
Deleted all completed todos
Todos that contain the search term "tempora":
- sunt cum tempora
- asperiores illo tempora fuga sed ut quasi adipisci
- et placeat temporibus voluptas est tempora quos quibusdam
Deleted all todos that contain "tempora"
Changed status of 'learn mongodb' to completed
Changed title of 'learn mongodb' to 'learn MongoDB'
new title: learn MongoDB
There are now 107 incomplete and 1 completed todos
```

## Database access object

solution: <https://github.com/marko-knoebl/slides/tree/master/exercises/node-and-mongodb>

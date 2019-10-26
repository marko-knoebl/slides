# localStorage

## localStorage

_localStorage_ is a simple key-value-store in the browser; both keys and values are strings

The browser stores data separately for each domain

## localStorage

important methods:

- `localStorage.setItem('name', 'John')`
- `localStorage.getItem('name')`
- `localStorage.removeItem('name')`

## localStorage

storing and retrieving some data

```js
const todoString = JSON.stringify(todos);
localStorage.setItem('todos', todoString);
```

```js
const todoString = localStorage.getItem('todos');
todos = JSON.parse(todoString);
```

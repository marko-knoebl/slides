# Actions in more detail

## Actions

- actions describe a change to the state
- actions always have a _type_ property
- the _type_ property used to be capitalized (e.g. `ADD_TODO`), more recently alternatives have also become popular (e.g. `addTodo`)
- the _type_ is commonly namespaced, e.g. `"todoData/addTodo"` or `"ui/showAddTodoDialog"`
- actions often adhere to the _FSA_ standard, meaning they may have a _payload_, an _error_ and a _meta_ property

## Actions - examples

```js
const action = {
  type: 'todoData/todos/addTodo',
  title: 'Build my first Redux app',
};
```

```js
const action = {
  type: 'todoData/todos/toggleTodo',
  payload: 2,
};
```

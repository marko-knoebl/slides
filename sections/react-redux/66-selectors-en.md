# Selectors

## Storing the minimal state

Best practice in Redux: always store the _minimal_ state tree (i.e. no redundant data)

Examples of non-conforming states:

```js
{
  todos: [...],
  maxTodoId: 3
}
```

```js
{
  shoppingCartItems: [{itemid: ..., price: ...}, ...],
  totalPrice: ...
}
```

## Storing the minimal state

Data like `maxTodoId` and `totalPrice` can be computed from the other data and shouldn't have an extra entry in the state.

## Selectors

Selector = function that computes derived data based on a minimal state

Selectors receive the entire state as their argument and return derived data.

## Example Selectors

- `getMaxTodoId`
- `getFilteredTodos`

## Example Selectors

```js
const getMaxTodoId = (state) =>
  state.todos.reduce((aggregator, item) =>
    Math.max(aggregator, item.id, 1)
  );
```

```js
const getFilteredTodos = (state) =>
  state.todos.filter((todo) =>
    todo.title
      .toLowerCase()
      .includes(state.ui.filterText.toLowerCase())
  );
```

# Actions

## Actions

- actions describe a change to the state
- actions always have a _type_ property with a string value
- actions often adhere to the _FSA_ standard, meaning they may have a _payload_, an _error_ and a _meta_ property

## Actions - examples

```js
const action = {
  type: 'addTodo',
  payload: {
    title: 'Build my first redux app',
  },
};
```

## Actions - examples

```js
const action = {
  type: 'toggleTodo',
  payload: {
    id: 2,
  },
};
```

# Actions in more detail

## Actions

- actions describe a change to the state
- actions always have a _type_ property
- the _type_ property used to be capitalized (e.g. `ADD_TODO`), more recently alternatives have also become popular (e.g. `addTodo`)
- actions often adhere to the _FSA_ standard, meaning they may have a _payload_, an _error_ and a _meta_ property

## Actions - examples

```js
const action = {
  type: 'addTodo',
  title: 'Build my first Redux app',
};
```

```js
const action = {
  type: 'addTodo',
  payload: {
    title: 'Build my first Redux app',
  },
};
```

## Actions - examples

```js
const action = {
  type: 'toggleTodo',
  id: 2,
};
```

```js
const action = {
  type: 'toggleTodo',
  payload: {
    id: 2,
  },
};
```

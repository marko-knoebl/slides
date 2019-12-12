# Action creators

## Action creators

Action creators are usually very simple functions used to create a specific action

```js
const addTodo = title => ({
  type: 'addTodo',
  payload: {
    title: title,
  },
});
```

## Action creators vs. actions

_Action creators_ are often called _actions_ for short. When documentation / functions mention _actions_ we need to be aware of this double meaning.

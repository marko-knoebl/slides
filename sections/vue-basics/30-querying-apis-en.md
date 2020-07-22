# Lifecycle hooks

## Lifecycle hooks

Component methods that are called when certain lifecylce events occur:

- `created`
- `mounted`
- `updated`
- `destroyed`
- ...

## Lifecycle hooks

alternatives:

- **watchEffect** function (composition API)
- _watch_ function

## Fetching data on component mount

```js
export default {
  // ...
  created() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((todos) => (this.todos = todos));
  },
};
```

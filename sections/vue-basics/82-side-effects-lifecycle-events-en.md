# Side effects: lifecycle events

## Side effects: lifecycle events

Options API: Component methods that are called when certain lifecylce events occur:

- `created`
- `mounted`
- `updated`
- `destroyed`
- ...

## Side effects: lifecycle events

Composition API: equivalent functions

- `created` → include in `setup`
- `mounted` → `onMounted`
- `updated` → `onUpdated`
- `destroyed` → `onUnmounted`
- ...

## Side effects: lifecycle events

Fetching data on component mount (options API):

```js
export default {
  // ...
  async created() {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos'
    );
    const todos = await res.json();
    this.todos = todos;
  },
};
```

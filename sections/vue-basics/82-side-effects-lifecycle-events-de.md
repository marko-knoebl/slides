# Side Effects: Lifecycle Events

## Side Effects: Lifecycle Events

Options API: Komponentenmethoden, die bei bestimmten Lifecycle-Events aufgerufen werden:

- `created`
- `mounted`
- `updated`
- `destroyed`
- ...

## Side Effects: Lifecycle Events

Composition API: äquivalente Funktionen:

- `created` → aufnehmen in `setup`
- `mounted` → `onMounted`
- `updated` → `onUpdated`
- `destroyed` → `onUnmounted`
- ...

## Side Effects: Lifecycle Events

Laden von Daten beim ersten Einbinden einer Komponente (Options API):

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

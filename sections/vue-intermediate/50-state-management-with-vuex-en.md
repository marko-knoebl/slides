# State management with VueX

## State management

In more complex applications or components it makes sense to manage the state (model) separately from the view.

Often the entire application state is represented by a data model and every change to the state will be done by triggering a change to the data model.

## State management with mutations

a _mutation_ describes some action that took place in the application (in other tools: _action_)

a _mutation_ has a _type_ and potentially a _payload_ property

## State management with mutations

example mutations as they will appear in the devtools:

```json
{
  "type": "addTodo",
  "payload": {
    "title": "learn Vue"
  }
}
```

```json
{
  "type": "deleteCompletedTodos"
}
```

## Example: todos state management

Manual use of a Vuex store:

```js
const store = new Vuex.Store({
  // set up store here
});

store.commit('addTodo', { title: 'foo' });
store.commit('addTodo', { title: 'bar' });
store.commit('setTodoCompleted', {
  id: 1,
  completed: true,
});
store.commit('deleteTodo', { id: 2 });

console.log(JSON.stringify(store.state));
```

## State management with Vuex

configuration of Vuex:

- initial state
- getters (similar to _computed_)
- mutations (define state changes)
- actions (asynchronous triggers of mutations)

## State management with Vuex

```js
const store = new Vuex.Store({
  state: { todos: [] },
  getters: {
    numIncomplete(state) {
      return state.todos.filter((t) => !t.completed).length;
    },
  },
  mutations: {
    addTodo(state, payload) {
      // ...
    },
    deleteTodo(state, payload) {
      // ...
    },
  },
  actions: {
    async loadFromApi(context) {
      // ...
    },
  },
});
```

## Vuex and Vue

Using a _Vuex_ store in a Vue app:

```js
new Vue({
  // ...
  store: store,
});
```

The store will be available via `$store` inside components

## Vuex and Vue

Accessing the Vuex state from components:

```xml
<todo-item v-for="todo in $store.state.todos" ... />
```

```xml
<p>Incomplete todos: {{ $store.getters.numIncomplete }}</p>
```

## Vuex and Vue

Triggering mutations from Vue:

```xml
<todo-item
  :todo="todo"
  @toggle="$store.commit('toggleTodo', { id: todo.id })"
  @delete="$store.commit('deleteTodo', { id: todo.id })"
/>
```

## Vuex and Vue

Triggering an action from Vue:

```js
export default {
  async created() {
    this.$store.dispatch('loadFromApi');
  },
};
```

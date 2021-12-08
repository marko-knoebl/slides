# State Management mit VueX

## State Management

In komplexeren Anwendungen oder Komponenten macht es Sinn, den Anwendungszustand (model) von der Ansicht (view) zu trennen.

Oft wird der gesamte Anwendungszustand durch ein Datenmodell repräsentiert. Jede Änderung am Anwendungszustand läuft über das Datenmodell.

## State Management mit Mutationen

eine _Mutation_ beschreibt ein bestimmtes Ereignis in einer Anwendung (in anderen Tools: _Action_)

Eine Mutation hat einen _type_, und eventuell eine _payload_-Property

## State Management mit Mutationen

Beispiele für Mutationen, wie sie in den Devtools erscheinen:

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

## Beispiel: Todos State Management

Manuelle Verwendung eines Vuex-Stores:

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

## State Management mit Vuex

Konfiguration von Vuex:

- initialer State
- Getters (ähnlich zu _computed_)
- Muttionen (definieren State-Änderungen)
- Actions (asynchrone Trigger von Mutationen)

## State Management mit Vuex

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

## Vuex und Vue

Verwenden eines _Vuex_-Stores in einer Vue-Anwendung:

```js
new Vue({
  // ...
  store: store,
});
```

Der Store ist innerhalb von Komponenten als `$store` verfügbar

## Vuex und Vue

Zugriff auf den Vuex-State aus Komponenten:

```xml
<todo-item v-for="todo in $store.state.todos" ... />
```

```xml
<p>Incomplete todos: {{ $store.getters.numIncomplete }}</p>
```

## Vuex und Vue

Auslösen von Mutationen aus Vue:

```xml
<todo-item
  :todo="todo"
  @toggle="$store.commit('toggleTodo', { id: todo.id })"
  @delete="$store.commit('deleteTodo', { id: todo.id })"
/>
```

## Vuex und Vue

Auslösen einer Action aus Vue:

```js
export default {
  async created() {
    this.$store.dispatch('loadFromApi');
  },
};
```

# Effect Hook Grundlagen

## Effect Hook

Der _Effect Hook_ kann verwendet werden, um Aktionen zu setzen, wenn eine Komponente zum ersten Mal eingebunden wird, oder wenn sich deren Props / State geändert haben

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Effect Hook

kann verwendet werden, um _side effects_ auszulösen:

- Ausösen von API-Anfragen
- Laden von / Speichern in _localStorage_ / _indexeddb_
- explizite Änderungen am DOM (zusammen mit _refs_)
- Starten von Timern
- ...

## Effect Hook

Beispiel: Laden von Todos, wenn die Komponente zum ersten Mal eingebunden wird:

```js
function loadTodos() {
  // ...
}
useEffect(loadTodos, []);
```

Beispiel: Laden eines einzelnen Todos, wenn die Komponente zum ersten Mal eingebunden wird oder wenn sich `todoId` ändert:

```js
const [todoId, setTodoId] = useState(0);
function loadTodo() {
  // ...
}
useEffect(loadTodo, [todoId]);
```

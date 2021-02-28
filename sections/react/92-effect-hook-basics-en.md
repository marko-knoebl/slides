# Effect hook basics

## Effect hook

The _effect hook_ can be used to perform actions when a component was mounted for the first time or when its props / state have changed.

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Effect hook

may be used to perform _side effects_ in components:

- triggering requests to APIs
- loading from / saving to _localStorage_ / _indexeddb_
- explicitly manipulating the DOM
- starting timers
- ...

## Effect hook

example: loading a set of todos when the component is first mounted:

```js
function loadTodos() {
  // ...
}
useEffect(loadTodos, []);
```

example: loading a single todo when the component is first mounted or whenever `todoId` changes:

```js
const [todoId, setTodoId] = useState(0);
function loadTodo() {
  // ...
}
useEffect(loadTodo, [todoId]);
```

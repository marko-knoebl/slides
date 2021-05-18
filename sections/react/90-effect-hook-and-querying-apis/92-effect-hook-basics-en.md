# Effect hook basics

## Effect hook

The _effect hook_ can be used to perform actions when a component was mounted for the first time or when its props / state have changed.

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

The effect function will run after the component (re-)rendered if one of the dependencies has changed

## Effect hook

may be used to perform _side effects_ in components:

- triggering requests to APIs
- loading from / saving to _localStorage_ / _indexeddb_
- explicitly manipulating the DOM
- starting timers
- ...

## Effect hook

example: loading exchange rates when the component is first mounted and whenever a currency changes:

```ts
const [from, setFrom] = useState('USD');
const [to, setTo] = useState('EUR');
const [rate, setRate] = useState<number | null>(null);
async function loadExchangeRate() {
  // ...
}
useEffect(() => {
  loadExchangeRate();
}, [from, to]);
```

## Effect hook

example: loading a set of todos when the component is first mounted:

```js
const [todos, setTodos] = useState([]);
async function loadTodos() {
  // ...
}
useEffect(() => {
  loadTodos();
}, []);
```

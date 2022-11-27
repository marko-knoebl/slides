# Effect hook

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

example: loading exchange rates when the component is first mounted and whenever a currency changes:

```ts
const [from, setFrom] = useState('USD');
const [to, setTo] = useState('EUR');
const [rate, setRate] = useState<number | null>(null);
async function loadRate(from: number, to: number) {
  // ...
}
useEffect(() => {
  loadRate(from, to);
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

## Effect hook

If no second parameter is passed in, the effect will run after every rendering; this can potentially avoid problems with obsolete data

```jsx
useEffect(() => {
  ensureExchangeRateIsLoaded();
});
```

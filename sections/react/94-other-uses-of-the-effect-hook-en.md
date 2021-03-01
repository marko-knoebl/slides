# Other uses of the effect hook

## Other uses of the effect hook

- saving to _localStorage_ / _indexeddb_
- explicitly manipulating the DOM
- starting timers
- ...

## Example: localStorage

Counter that saves its value whenever the value changes:

```jsx
function PersistentCounter() {
  // useState can receive an initial value
  // or an initializer function
  const [count, setCount] = useState(
    () => Number(localStorage.getItem('count')) || 0
  );
  function saveCount() {
    localStorage.setItem('count', count);
  }
  useEffect(saveCount, [count]);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

## Exercise: localStorage

Save the state of one of the previous applications (e.g. _tic-tac-toe_, _todo list_) to _localStorage_

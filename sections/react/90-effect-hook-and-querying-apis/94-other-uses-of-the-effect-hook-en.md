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
  const [count, setCount] = useState(null);
  function loadCount() {
    setCount(Number(localStorage.getItem('count')));
  }
  function saveCount() {
    if (count !== null) {
      localStorage.setItem('count', count);
    }
  }
  useEffect(loadCount, []);
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

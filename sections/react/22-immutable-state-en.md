# Immutable state

## Immutable state

**Immutability**: important concept in functional programing and with React / Redux

Data is not modified directly - instead, new data is derived from existing data (and may replace the existing data)

## Immutable state

if there are arrays or objects in the state we _could_ try and mutate them directly

don't do this - React will usually not notice the changes and may not rerender the view

state should be considered as _immutabe_ (unchangeable)

## Immutable state

When a state setter is called, React will compare:

- the object the old state points to
- the object the new state points to

If the old state and the new state reference the same object (even if it has changed), the component will not be rerendered.

## Immutable state

demo (see <https://codesandbox.io/s/immutable-state-demo-r2x1i>):

```js
function App() {
  const [numbers, setNumbers] = useState([0, 1, 2]);
  function addByMutating() {
    // changes (mutates) the old state entry
    numbers.push(numbers.length);
    setNumbers(numbers);
  }
  function addByReplacing() {
    // creates a new - derived - state object
    setNumbers([...numbers, numbers.length]);
  }
  return (
    <div>
      <div>{JSON.stringify(numbers)}</div>
      <button onClick={addByMutating}>add (mutate)</button>
      <button onClick={addByReplacing}>
        add (replace)
      </button>
    </div>
  );
}
```

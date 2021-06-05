# State hook in depth

## Outdated state

sometimes the variables returned from the state hook may reference outdated values

## Outdated state

note: the previous solution is useful when a single state entry should be updated based on its current value

scenarios where this approach is not useful:

- asynchronously updating a state entry based on the most recent value of other state entries
- reading the current value for a "side effect" (e.g. network request, logging, ...)

## Outdated state: closure

```js
function App() {
  const [name, setName] = useState('');

  // the variables _name_, _log_, _startLogging_, ...
  // are recreated whenever the component function runs
  // however, the started interval keeps a reference to an
  // old version of _log_ (and _name_) which gets called
  const log = () => console.log(name);
  const startLogging = () => setInterval(log, 1000);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={startLogging}>start logging</button>
    </div>
  );
}
```

## Outdated state: closure

possible solutions:

- use a class component instead of a function component
- use a ref in addition to the state variable to access the most recent version of the state

<small>see also: <a href="https://overreacted.io/making-setinterval-declarative-with-react-hooks/">Dan Abramov: Making setInterval Declarative with React Hooks</a></small>

## State hook: lazy initial state

For the initial state, we can pass in a value _or_ an initializer function - an initializer function is useful if the initial state is expensive to compute

```js
const DataGrid = (props) => {
  const initializeState = () =>
    createGrid(props.rows, props.cols);
  const [grid, setGrid] = useState(initializeState);

  // ...
};
```

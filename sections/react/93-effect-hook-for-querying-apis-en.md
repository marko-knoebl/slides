# Effect hook for querying APIs

## Effect hook for querying APIs

Often, API queries must be initiated when a component is included for the first time or when a component's props or state have changed

## Effect hook for querying APIs

example: loading todos via `fetch` and `.then`:

```js
const [todos, setTodos] = useState([]);
function loadTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((todos) => {
      setTodos(todos);
    });
}
useEffect(loadTodos, []);
```

## Effect hook for querying APIs

note: the effect function **must not be** an async function

The effect function should usually (implicitly) return _undefined_; an async function would always return a promise

## Effect hook for querying APIs

correctly querying an API with async syntax:

```js
const [todos, setTodos] = useState([]);
const url = 'https://jsonplaceholder.typicode.com/todos';
async function loadTodosAsync() {
  const res = await fetch(url);
  const todos = await res.json();
  setTodos(todos);
}
function loadTodos() {
  loadTodosAsync();
}
useEffect(loadTodos, []);
```

## Effect hook for querying APIs

full example: loading todos when the component has mounted

```js
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/todos';
  async function loadTodosAsync() {
    const res = await fetch(url);
    const todos = await res.json();
    setTodos(todos);
  }
  function loadTodos() {
    loadTodosAsync();
  }
  useEffect(loadTodos, []);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## Effect hook for querying APIs

Example: load SpaceX launch data when component mounted or when `launchNr` changed

```js
const SpaceXLaunch = () => {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState({});
  const loadLaunch = () => {
    fetch(
      `https://api.spacexdata.com/v3/launches/${launchNr}`
    )
      .then((res) => res.json())
      .then((data) => setLaunchData(data));
  };
  useEffect(loadLaunch, [launchNr]);
  return (
    <div>
      <h1>{launchData.mission_name}</h1>
      <div>date: {launchData.launch_date_utc}</div>
      <button onClick={() => setLaunchNr(launchNr + 1)}>
        next
      </button>
    </div>
  );
};
```

## Effect hook for querying APIs

Example: load pokémon data when component mounted or when `id` changed

```js
const Pokemon = () => {
  const [id, setItd] = useState(1);
  const [data, setData] = useState({});
  const loadPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(loadPokemon, [id]);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>id: {id}</p>
      <p>height: {data.height}</p>
      <button onClick={() => setItd(id + 1)}>next</button>
    </div>
  );
};
```

## Querying APIs (effect hook)

Tasks:

- load and display more data
- add a loading indicator
- add automatic refresh every 10 seconds

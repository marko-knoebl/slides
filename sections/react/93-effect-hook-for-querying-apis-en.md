# Effect hook for querying APIs

## Effect hook for querying APIs

Often, API queries must be initiated when a component is included for the first time or when a component's props or state have changed

## Effect hook for querying APIs

example: loading todos via `fetch` and `.then`:

```js
const [todos, setTodos] = useState([]);
function loadTodos() {
  fetchTodos().then(setTodos);
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
async function loadTodosAsync() {
  setTodos(await fetchTodos());
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
  const loadTodos = () => {
    fetchTodos().then(setTodos);
  };
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

## Example: SpaceX launch data

Example: show data for a specific SpaceX launch based on the launch number

function for fetching launch data:

```js
async function fetchLaunch(launchNr) {
  const url =
    'https://api.spacexdata.com/v3/launches/' +
    launchNr.toString();
  const res = await fetch(url);
  const launchData = await res.json();
  return launchData;
}
```

## Example: SpaceX launch data

```js
const SpaceXLaunch = () => {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState({});
  function loadLaunch() {
    fetchLaunch(launchNr).then(setLaunchData);
  }
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

## Example: Pokemon data

Example: show data for a specific pokemon (based on its _id_)

```js
async function fetchPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
```

## Effect hook for querying APIs

```js
const Pokemon = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState({});
  function loadPokemon() {
    fetchPokemon(id).then(setData);
  }
  useEffect(loadPokemon, [id]);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>id: {id}</p>
      <p>height: {data.height}</p>
      <button onClick={() => setId(id + 1)}>next</button>
    </div>
  );
};
```

## Querying APIs (effect hook)

Tasks:

- load and display more data
- add a loading indicator
- add automatic refresh every 10 seconds

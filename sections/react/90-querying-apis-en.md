# Querying APIs (effect hook)

## Querying APIs (effect hook)

Often API data needs to be queried when a component is first mounted or when its props / state change

## Querying APIs (effect hook)

Examples:

- `TodoApp` that loads initial todos from an API
- `SpaceXLaunch` component that displays data for a SpaceX launch from an API
- `Pokemon` component that displays data for a specific pokémon

## Querying APIs (effect hook)

The _effect hook_ can be used to perform some actions when a component is first mounted or when its props / state change

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Querying APIs (effect hook)

Example: load todos when component is mounted

```js
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const loadTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(todos => setTodos(todos));
  };
  useEffect(loadTodos, []);
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## Querying APIs (effect hook)

Example: load SpaceX launch data when `launchNr` changes

```js
const SpaceXLaunch = () => {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState({});
  const fetchLaunch = () => {
    fetch(
      `https://api.spacexdata.com/v3/launches/${launchNr}`
    )
      .then(res => res.json())
      .then(data => setLaunchData(data));
  };
  useEffect(fetchLaunch, [launchNr]);
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

## Querying APIs (effect hook)

Example: load pokémon data when `id` changes

```js
const Pokemon = () => {
  const [id, setItd] = useState(1);
  const [data, setData] = useState({});
  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setData(data));
  };
  useEffect(fetchPokemon, [id]);
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

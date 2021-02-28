# Effect Hook zum Abfragen von APIs

## Effect Hook zum Abfragen von APIs

Oft müssen API-Daten abgefragt werden, wenn eine Komponente zum ersten Mal eingebunden wurde, oder wenn sich props bzw state geändert haben

## Effect Hook zum Abfragen von APIs

Beispiel: Laden von Todos via `fetch` und `.then`:

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

## Effect Hook zum Abfragen von APIs

Bemerkung: Die Effect-Funktion darf **keine** async-Funktion sein

Die Effekt-Funktion sollte üblicherweise (implizit) _undefined_ zurückgeben; eine async-Funktion würde immer ein Promise zurückgeben

## Effect Hook zum Abfragen von APIs

Korrekte Methode, um mit _async_ ein API abzufragen:

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

## Effect Hook zum Abfragen von APIs

vollständiges Beispiel: Laden von Todos, wenn die Komponente eingebunden wurde

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

## Effect Hook zum Abfragen von APIs

Beispiel: Laden von SpaceX Startdaten, wenn die Komponente eingebunden wurde oder wenn sich `launchNr` geändert hat

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

## Effect Hook zum Abfragen von APIs

Beispiel: Laden von Pokémon-Daten, wenn die Komponente eingebunden wurde, oder wenn sich `id` geändert hat

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

## Effect Hook zum Abfragen von APIs

Übungen:

- Laden und Anzeigen von weiteren Daten
- Indikator, dass geladen wird
- Automatische Aktualisierung alle 10 Sekunden

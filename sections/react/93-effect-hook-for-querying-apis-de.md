# Effect Hook zum Abfragen von APIs

## Effect Hook zum Abfragen von APIs

Oft müssen API-Daten abgefragt werden, wenn eine Komponente zum ersten Mal eingebunden wurde, oder wenn sich props bzw state geändert haben

## Effect Hook zum Abfragen von APIs

Beispiel: Laden von Todos via `fetch` und `.then`:

```js
const [todos, setTodos] = useState([]);
function loadTodos() {
  fetchTodos().then(setTodos);
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
async function loadTodosAsync() {
  setTodos(await fetchTodos());
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
  function loadTodos() {
    fetchTodos().then(setTodos);
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

## Beispiel: SpaceX Startdaten

Beispiel: Laden von SpaceX Startdaten, wenn die Komponente eingebunden wurde oder wenn sich `launchNr` geändert hat

Funktion zum Laden von Daten:

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

## Beispiel: SpaceX Startdaten

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

## Beispiel: Pokemon-Daten

Beispiel: Anzeigen von Daten zu einem bestimmten Pokémon (basierend auf dessen _id_)

```js
async function fetchPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
```

## Effect Hook zum Abfragen von APIs

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

## Effect Hook zum Abfragen von APIs

Übungen:

- Laden und Anzeigen von weiteren Daten
- Indikator, dass geladen wird
- Automatische Aktualisierung alle 10 Sekunden

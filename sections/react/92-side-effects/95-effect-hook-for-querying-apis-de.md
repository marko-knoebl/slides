# Effect Hook zum Abfragen von APIs

## Effect Hook zum Abfragen von APIs

Oft müssen API-Daten abgefragt werden, wenn eine Komponente zum ersten Mal eingebunden wurde, oder wenn sich props bzw state geändert haben

## Beispiel: Laden von Wechselkursen

Beispiel: Laden von Wechselkursen von einem API, wenn sich die ausgewählten Währungen ändern:

```js
function ExchangeRate() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rate, setRate] = useState(null);
  async function loadExchangeRate() {
    setRate(null);
    const rate = await fetchExchangeRate(from, to);
    setRate(rate);
  }
  useEffect(() => {
    loadExchangeRate();
  }, [from, to]);
  // render two dropdowns for selecting currencies
  // and show the exchange rate
}
```

## Beispiel: Laden von Wechselkursen

Funktion, die Daten lädt:

```ts
async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  const res = await fetch(
    'https://api.exchangerate.host/latest?base=' +
      from.toUpperCase() +
      '&symbols=' +
      to.toUpperCase()
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}
```

## Beispiel: Laden von Wechselkursen

vollständiger Code:

```tsx
// https://codesandbox.io/s/use-effect-exchange-rate-szje3
import { useState, useEffect } from 'react';

const currencies = ['USD', 'EUR', 'JPY', 'GBP'];
async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  const res = await fetch(
    'https://api.exchangerate.host/latest?base=' +
      from.toUpperCase() +
      '&symbols=' +
      to.toUpperCase()
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}

function ExchangeRate() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rate, setRate] = useState<number | null>(null);
  async function loadExchangeRate() {
    setRate(null);
    const rate = await fetchExchangeRate(from, to);
    setRate(rate);
  }
  useEffect(() => {
    loadExchangeRate();
  }, [from, to]);
  return (
    <div>
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        {currencies.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
      >
        {currencies.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
      <div>{rate !== null ? rate : 'no data'}</div>
    </div>
  );
}

export default ExchangeRate;
```

## Übungen

Beispiele von abfragbaren APIs:

- Todos: https://jsonplaceholder.typicode.com/todos
- SpaceX Startdaten: https://api.spacexdata.com/v3/launches/1
- Pokemon-Daten: https://pokeapi.co/api/v2/pokemon/1
- hacker news Suchanfrage: https://hn.algolia.com/api/v1/search?query=foo

## Übungen

- Lade Todos, wenn der Benutzer die Todolist-Anwendung öffnet
- Zeige Daten zu einem bestimmten SpaceX-Start basierend auf der Startnummer
- Zeige Daten zu einem bestimmten Pokémon basierend auf der Nummer
- Zeige Hacker News Artikel basierend auf einem Suchbegriff

## Beispiel: SpaceX Startdaten

```js
function SpaceXLaunch() {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState({});
  async function loadLaunch() {
    const data = await fetchLaunch(launchNr);
    setLaunchData(data);
  }
  useEffect(() => {
    loadLaunch();
  }, [launchNr]);
  return (
    <div>
      <h1>{launchData.mission_name}</h1>
      <div>date: {launchData.launch_date_utc}</div>
      <button onClick={() => setLaunchNr(launchNr + 1)}>
        next
      </button>
    </div>
  );
}

async function fetchLaunch(launchNr) {
  const url =
    'https://api.spacexdata.com/v3/launches/' +
    launchNr.toString();
  const res = await fetch(url);
  const launchData = await res.json();
  return launchData;
}
```

## Beispiel: Pokemon-Daten

```js
function Pokemon() {
  const [id, setId] = useState(1);
  const [data, setData] = useState({});
  async function loadPokemon() {
    const data = fetchPokemon(id);
    setData(data);
  }
  useEffect(() => {
    loadPokemon();
  }, [id]);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>id: {id}</p>
      <p>height: {data.height}</p>
      <button onClick={() => setId(id + 1)}>next</button>
    </div>
  );
}

async function fetchPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
```

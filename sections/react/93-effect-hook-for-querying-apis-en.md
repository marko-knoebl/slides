# Effect hook for querying APIs

## Effect hook for querying APIs

Often, API queries must be initiated when a component is included for the first time or when a component's props or state have changed

## Example: loading exchange rate data

example: loading exchange rate data from an API when selected currencies change:

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

## Example: loading exchange rate data

function that fetches data:

```ts
async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  const res = await fetch(
    'https://https://api.exchangerate.host/latest?base=' +
      from.toUpperCase() +
      '&symbols=' +
      to.toUpperCase()
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}
```

## Example: loading exchange rate data

complete code:

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

## Effect hook and async functions

note: the effect function **must not be** an async function

The effect function should usually (implicitly) return _undefined_; an async function would always return a promise

invalid:

```js
useEffect(loadExchangeRate, [from, to]);
```

valid:

```js
useEffect(() => {
  loadExchangeRate();
}, [from, to]);
```

## Exercises

example APIs:

- todos: https://jsonplaceholder.typicode.com/todos
- SpaceX launch data: https://api.spacexdata.com/v3/launches/1
- pokémon data: https://pokeapi.co/api/v2/pokemon/1
- hacker news search query: https://hn.algolia.com/api/v1/search?query=foo

## Exercises

- Load todos when the user opens the todolist application
- Show data for a specific SpaceX launch based on the launch number
- Show data for a pokémon based on its number
- Show hacker news articles based on a search term

## Example: SpaceX launch data

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

## Example: Pokemon

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

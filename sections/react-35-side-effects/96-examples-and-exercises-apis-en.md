# Examples and exercises: APIs

## Example: loading exchange rate data

example: loading exchange rate data from an API when selected currencies change:

```js
function ExchangeRate() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rate, setRate] = useState(null);
  async function loadRate(from: string, to: string) {
    setRate(null);
    const rate = await fetchExchangeRate(from, to);
    setRate(rate);
  }
  useEffect(() => {
    loadRate(from, to);
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
    `https://api.exchangerate.host/convert?from=${from}&to=${to}`
  );
  const data = await res.json();
  return data.result;
}
```

## Example: loading exchange rate data

complete code (class components and function components, including effect cleanups):

<https://codesandbox.io/s/side-effects-exchange-rate-2z42d>

## Exercises

example APIs:

- todos (read only): https://jsonplaceholder.typicode.com/todos
- todos: https://markok-todolist-rest.herokuapp.com/
- SpaceX launch data: https://api.spacexdata.com/v3/launches/1
- pokémon data: https://pokeapi.co/api/v2/pokemon/1
- hacker news search query: https://hn.algolia.com/api/v1/search?query=foo

## Exercises

- Load todos when the user opens the todolist application
- Show data for a specific SpaceX launch based on the launch number
- Show data for a pokémon based on its number
- Show hacker news articles based on a search term

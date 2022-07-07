# Beispiele: Abfragen von APIs aus React

## Beispiele: Abfragen von APIs aus React

Laden von Todos in einer React-Komponente:

```js
const [todos, setTodos] = useState([]);
async function loadTodos() {
  const todos = await fetchTodos();
  setTodos(todos);
}
```

```jsx
<button onClick={() => loadTodos()}>
  load todos from API
</button>
```

## Beispiele: Abfragen von APIs aus React

Code für das Hinzufügen eines Ladeindikators:

```js
const [todos, setTodos] = useState([]);
const [loadingStatus, setLoadingStatus] = useState('idle');

async function loadTodos() {
  setLoadingStatus('loading');
  const todos = await fetchTodos();
  setTodos(todos);
  setLoadingStatus('success');
}
```

## Beispiele: Abfragen von APIs aus React

Laden von Wechselkursdaten:

```ts
const [usdRates, setUsdRates] = useState<
  Record<string, number>
>({});
async function loadRate(currency) {
  const rate = await fetchExchangeRate('usd', currency);
  setUsdRates({ ...usdRates, [currency]: rate });
}
```

```jsx
<button onClick={() => loadRate('eur')}>
  load EUR rate
</button>
<button onClick={() => loadRate("jpy")}>
  load JPY rate
</button>
```

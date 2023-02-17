# React Query

## React Query

Laden von Daten mit _react query_:

```js
const [searchTerm, setSearchTerm] = useState('foo');

const { status, data } = useQuery({
  queryKey: ['search', searchTerm],
  queryFn: () => fetchJson(`/api/search/${searchTerm}`),
});
```

## React Query: Setup

npm-Pakete:

- _@tanstack/react-query_
- _@tanstack/react-query-devtools_

## React Query: Setup

globales Setup in _index.tsx_ / _main.tsx_ (umschließt `<App />`)

```js
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
```

```js
const queryClient = new QueryClient();
```

<!-- prettier-ignore -->
```js
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
```

## React Query: Ladestatus

der **Ladestatus** ist automatisch verfügbar:

`status`: `loading` / `success` / `error`

## React Query: Ladestatus

typische Verwendung des Ladestatus:

```js
const { status, data } = useQuery(/* ... */);

if (status === 'loading') {
  return <LoadingIndicator />;
} else if (status === 'error') {
  return <ErrorMessage />;
} else {
  return <DataDisplay data={data} />;
}
```

## React Query: Cache

React Query verwendet einen **globalen Store/Cache** mit Hilfe einer Provider-Komponente

## React Query: Keys

jede Query wird durch einen eindeutigen _Key_ identifiziert / mitverfolgt (der mehrere Teile haben kann)

Beispiele für _keys_ in einem Onlineshop:

```json
["product", 123]
```

```json
["order", 7453]
```

## React Query

Kompliziertere Query, die ein Objekt im Key enthält:

```json
[
  "product-search",
  {
    "category": "phones",
    "maxPrice": 700,
    "color": "black"
  }
]
```

mögliche API-URL dafür:

`/api/product-search?category=phones&maxPrice=700&color=black`

## React Query

Beispiel: Laden von Wechselkursdaten:

```js
const [from, setFrom] = useState('usd');
const [to, setTo] = useState('eur');

const rateQuery = useQuery({
  queryKey: ['exchange-rate', { from: from, to: to }],
  queryFn: () =>
    fetchJson(
      `https://api.exchangerate.host/convert?from=${from}&to=${to}`
    ),
});
```

## React Query

Anzeigen der Daten:

```js
if (rateQuery.isLoading) {
  return <LoadingIndicator />;
} else if (rateQuery.isError) {
  return <ErrorMessage />;
} else {
  return <RateDisplay data={rateQuery.data} />;
}
```

## React Query

Übung:

Arbeite mit der "Rick and Morty" API und lasse den User Charactere erkunden (durch klicken von _next_ oder _previous_)

https://rickandmortyapi.com/

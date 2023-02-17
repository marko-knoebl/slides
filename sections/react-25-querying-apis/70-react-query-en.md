# React Query

## React Query

fetching data with _react query_:

```js
const [searchTerm, setSearchTerm] = useState('foo');

const { status, data } = useQuery({
  queryKey: ['search', searchTerm],
  queryFn: () => fetchJson(`/api/search/${searchTerm}`),
});
```

## React Query: setup

npm packages:

- _@tanstack/react-query_
- _@tanstack/react-query-devtools_

## React Query: setup

global setup in _index.tsx_ / _main.tsx_ (surrounding `<App />`):

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

## React Query: loading status

The **loading status** is available automatically:

`status`: `loading` / `success` / `error`

## React Query: loading status

typical use of the loading status:

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

## React Query: cache

React query uses a **global store/cache** through a provider component

## React Query: keys

each query is identified / tracked by a unique _key_ - which can have multiple parts

examples of _query keys_ in an online shop:

```json
["product", 123]
```

```json
["order", 7453]
```

## React Query: keys

more complicated query key which includes an object:

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

possible API query URL:

`/api/product-search?category=phones&maxPrice=700&color=black`

## React Query

example: loading exchange rates

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

data display:

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

exercise:

work with the "Rick and Morty" API and let the user explore characters (by clicking _next_ or _previous_)

https://rickandmortyapi.com/

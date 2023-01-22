# Query libraries

## Query libraries

functionality that is commonly desired:

- tracking the loading status (_loading_ / _success_ / _error_)
- automatically sending a query:
  - when a component is first included
  - when a query parameter has changed
- caching previous responses for reuse (globally)
- cancelling / ignoring obsolete queries

## Query libraries

functionality can be achieved "manually" by using _state_, _side effects_ and _context_

... or by using a query library

## Query libraries

query libraries:

- _react query_
- _swr_
- _apollo_ (for GraphQL APIs)

## Query libraries

example: managing a search query with _react query_

```ts
const [searchTerm, setSearchTerm] = useState('foo');

const { status, data } = useQuery({
  queryKey: ['search', searchTerm],
  queryFn: () => fetchJson(`/api/search/${searchTerm}`),
});
```

## Query libraries

<!-- inspired by https://beta.reactjs.org/learn/you-might-not-need-an-effect#fetching-data -->

example: reproducing some of this functionality in pure React:

```ts
const [searchTerm, setSearchTerm] = useState('foo');

const [status, setStatus] = useState('loading');
const [data, setData] = useState<any>(null);

useEffect(() => {
  let ignore = false;
  async function loadData() {
    setStatus('loading');
    setData(null);
    const url = `/api/search/${searchTerm}`;
    try {
      const data = await fetchJson(url);
      if (!ignore) {
        setStatus('success');
        setData(data);
      }
    } catch {
      setStatus('error');
    }
  }
  loadData();
  return () => {
    ignore = true;
  };
}, [searchTerm]);
```

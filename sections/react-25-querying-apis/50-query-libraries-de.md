# Query Libraries

## Query Libraries

Funktionalität, die meist gewünscht ist:

- Mitverfolgen des Lade-Status (_loading_ / _success_ / _error_)
- automatisches Senden von Anfragen:
  - wenn eine Komponente zum ersten Mal eingebunden wird
  - wenn sich ein Parameter einer Query geändert hat
- abbrechen veralteter Anfragen
- automatisches Caching vergangener Anfragen

## Query Libraries

gewünschte Funktionalität ist umsetzbar mittels _state_, _side effects_ und _context_ (allerdings kompliziert)

... oder mit Hilfe einer Query Library

## Query Libraries

Query Libraries:

- _react query_
- _swr_
- _apollo_ (für GraphQL APIs)

## Query Libraries

Beispiel: Verwalten einer Suchanfrage mit _react query_

```ts
const [searchTerm, setSearchTerm] = useState('foo');

const { status, data } = useQuery({
  queryKey: ['search', searchTerm],
  queryFn: () => fetchJson(`/api/search/${searchTerm}`),
});
```

## Query Libraries

<!-- inspired by https://beta.reactjs.org/learn/you-might-not-need-an-effect#fetching-data -->

Beispiel: Nachbau von Teilen dieser Funktionalität in reinem React:

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

# Effect hook: cleanup

## Effect cleanup

some side effects may need to be "cleaned up":

- aborting API queries if they are not needed anymore (e.g. if a search term has changed)
- stopping timers

## Cleanup functions

An effect function may return a "cleanup function"

This function will be executed before the next run of the effect or before the component is unmounted

## Cleanup functions

example: structure for a query with immediate feedback / loading when the user types:

```js
function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const initiateQuery = async () => {
      // ...
    };
    const cancelThisQuery = () => {
      // ...
    };
    initiateQuery();
    return cancelThisQuery;
  }, [query]);

  // ...
}
```

## Asynchronous effects and cleanup functions

An effect function **must not be an async function**

reason:

any return value of an effect function is treated as a cleanup function

async functions always return promises

## Asynchronous effects and cleanup functions

invalid:

```js
useEffect(loadSearchResultsAsync, [query]);
```

valid:

```js
useEffect(() => {
  loadSearchResultsAsync();
}, [query]);
```

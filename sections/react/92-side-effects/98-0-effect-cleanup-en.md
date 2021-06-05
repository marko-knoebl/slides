# Effect cleanup

## Effect cleanup

some side effect may need to be "cleaned up":

- stopping timers
- aborting API queries if they are not needed anymore (e.g. if a search term has changed)

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
    const cancelPreviousQuery = () => {
      // ...
    };
    initiateQuery();
    return cancelPreviousQuery;
  }, [query]);

  // ...
}
```

## Cleanup functions

full example: Hacker news search

```js
function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    const initiateQuery = async () => {
      const res = await fetch(
        'https://hn.algolia.com/api/v1/search?query=' +
          query
      );
      const data = await res.json();
      if (!isCancelled) {
        setResults(data.hits);
      }
    };
    const cancelPreviousQuery = () => {
      isCancelled = true;
    };
    initiateQuery();
    return cancelPreviousQuery;
  }, [query]);
  return (
    <div className="App">
      <input
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <ul>
        {results.map((article) => (
          <li key={article.objectId}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Cleanup functions

example: user will be logged out after 10 seconds of inactivity

```jsx
const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(
    new Date()
  );
  // restart the logout timer on user interaction
  useEffect(() => {
    const logout = () => setLoggedIn(false);
    const timeoutId = setTimeout(logout, 10000);
    return () => clearTimeout(timeoutId);
  }, [lastInteraction]);
  return (
    <button onClick={() => setLastInteraction(new Date())}>
      {loggedIn
        ? 'click to stay logged in'
        : 'logged out automatically'}
    </button>
  );
};
```

## Cleanup functions

If an effect function returns anything other than `undefined`, the return value is treated as a cleanup function

This is why async functions cannot be used as effect functions directly (they return promises)

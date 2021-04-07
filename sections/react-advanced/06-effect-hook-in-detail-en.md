# Effect hook in detail

## Uses of the effect hook

- triggering API queries
- saving to / loading from _localStorage_ / _indexeddb_
- explicitly manipulating the DOM (along with _refs_)
- starting timers
- ...

## Example: DocumentTitle component

We will create a component that can set the document title dynamically:

```xml
<DocumentTitle value="my custom title" />
```

This component may appear anywhere in the React application.

## Example: DocumentTitle component

```jsx
const DocumentTitle = (props) => {
  const updateTitle = () => {
    document.title = props.value;
  };
  useEffect(updateTitle, [props.value]);
  return null;
};
```

## Cleanup functions

An effect may return a "cleanup function"

This function will be executed before the next run of the effect or before the component is unmounted

Example use case: cancel an old API search request if the search term has changed

## Cleanup functions

example: hook that queries a hackernews API

```jsx
const useHackernewsQuery = (query) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let isLatestRequest = true;
    fetch(
      'https://hn.algolia.com/api/v1/search?query=' + query
    )
      .then((res) => res.json())
      .then((data) => {
        if (isLatestRequest) {
          setData(data);
        }
      });
    return () => {
      isLatestRequest = false;
    };
  }, [query]);
  return articles;
};
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

If an effect function returns anything other than `undefined`, it is treated as a cleanup function

This is why async functions cannot be used as effect functions directly (they return promises)

## Closures

This code will not work as expected:

```js
function CounterThatLogsEverySecond() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log(count);
    }, 1000);
  }, []);
  return (
    <div>
      {count}{' '}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

Reason: The "effect function" is only called once, creating a closure - _count_ will always be 0 in the effect function.

## Closures

possible solution to the closure problem: use the _ref_ hook and potentially a custom hook

see:

- [Dan Abramov: Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
- [use-interval on GitHub](https://github.com/donavon/use-interval)

## Effect after every rendering

If no second parameter is passed the effect will run after every rendering.

```jsx
const RenderLogger = () => {
  useEffect(() => {
    console.log('logger was rendered');
  });
  return <div>Render logger</div>;
};
```

## Exhaustive dependencies

ESLint rule: _react-hooks/exhaustive-deps_

helps with explicitly listing all dependencies of an effect hook

## Exhaustive dependencies

example of non-conforming (but working) code:

```ts
const ensurePokemonLoaded = (id: number) => {
  if (!pokemons.some((p) => p.id === id)) {
    loadPokemonById(id);
  }
};

useEffect(() => {
  for (let i = 1; i <= 10; i++) {
    ensurePokemonLoaded(i);
  }
}, []);
```

## Exhaustive dependencies

fixed code (via hints in ESLint warnings):

```ts
const ensurePokemonLoaded = useCallback(
  (id: number) => {
    if (!pokemons.some((p) => p.id === id)) {
      loadPokemonById(id);
    }
  },
  [pokemons]
);

useEffect(() => {
  for (let i = 1; i <= 10; i++) {
    ensurePokemonLoaded(i);
  }
}, [ensurePokemonLoaded]);
```

`ensurePokemonLoaded` will be redefined every time the `pokemons` array changes - this will make it is run again for the first 10 pokémons

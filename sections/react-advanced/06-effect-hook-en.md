# Effect hook

## Effect hook

can be used to perform actions when a component was mounted for the first time or when its props / state have changed

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Effect hook

may be used to perform _side effects_ in components:

- fetching data from APIs
- loading from / saving to _localStorage_ / _indexeddb_
- explicitly manipulating the DOM
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

## Example: Saving in localStorage / sessionStorage

```jsx
const PersistentCounter = () => {
  const countInitializer = () =>
    Number(localStorage.getItem('count')) || 0;
  // useState can receive an initial value
  // or an initializer function
  const [count, setCount] = useState(countInitializer);
  // save the state whenever it changes
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};
```

## Cleanup

An effect may return a "cleanup function"

This function will be executed before the next run of the effect or before the component is unmounted

Example use case: cancel an old API search request if the search term changed

## Cleanup

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

## Cleanup

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

## Effect after every rendering

If no second parameter is passed the effect will run after each rendering.

```jsx
const RenderLogger = () => {
  useEffect(() => {
    console.log('logger was rendered');
  });
  return <div>Render logger</div>;
};
```

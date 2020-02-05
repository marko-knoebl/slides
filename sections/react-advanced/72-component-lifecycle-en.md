# Component lifecycle

## Component lifecycle

We can listen for certain events in the lifecycle of a component:

- the component is included (mounted)
- component state or props have changed
- the component is removed

## Component lifecycle

We can use these events for:

- querying APIs
- explicitly manipulating the DOM
- cleaning up after a component was removed

## Component lifecycle

We can listen for lifecycle events via the following means:

In class components we use lifecycle methods like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`

In functional components we use the effect hook

## Example: DocumentTitle component

We will create a component that can set the document title dynamically:

```xml
<DocumentTitle>my custom title</DocumentTitle>
```

This component may appear anywhere in the React application.

## Example: DocumentTitle component

with `useEffect`

```jsx
const DocumentTitle = props => {
  useEffect(() => {
    document.title = props.children;
  });

  return null;
};
```

## useEffect in detail

`useEffect` will receive two parameters: A function and (optionally) an array of values.

The function is executed after the component renders if one of the values in the array has changed.

The function is also executed when the component is included and rendered for the first time.

## useEffect in detail

If no second parameter is passed the function will be called after each render.

If an empty array is passed as the second parameter the function will only be called after the first render.

## useEffect: example: weather

```js
const [weatherData, setWeatherData] = useState(null);
const [stale, setStale] = useState(true);

// fetch data whenever data is stale
useEffect(() => {
  if (stale) {
    refetch();
  }
}, [stale]);
```

## useEffect: example: weather

```js
const refetch = () => {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather' +
      `?q=${city}&appid=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      setWeatherData({ temperature: data.main.temp });
      setStale(false);
    });
};
```

## useEffect: component removal

```jsx
const Clock = () => {
  const [time, setTime] = useState('');
  // will be called when the component was mounted
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // will be called when the component will be removed
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>{time}</div>;
};
```

# Component lifecycle

## Component lifecycle

We can listen for certain events in the lifecycle of a component:

- the component is included (mounted)
- component state or props have changed
- the component is removed

## Component lifecycle

We can listen for lifecycle events via the following means:

In function components we use the effect hook

In class components we use lifecycle methods like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`

## Component lifecycle

We can use these events for:

- querying APIs
- explicitly manipulating the DOM
- cleaning up after a component was removed

## Example: DocumentTitle component

We will create a component that can set the document title dynamically:

```xml
<DocumentTitle value="my custom title" />
```

This component may appear anywhere in the React application.

## Example: DocumentTitle component

with `useEffect`

```jsx
const DocumentTitle = props => {
  useEffect(() => {
    document.title = props.value;
  } [props.value]);
  return null;
};
```

## useEffect in detail

`useEffect` will receive two parameters: A function and (optionally) an array of values.

The function is executed after the component renders if one of the values in the array has changed.

The function is also executed when the component is included and rendered for the first time.

## useEffect in detail

If no second parameter is passed the function will be called after each render.

## useEffect in detail

An effect may return a "cleanup function"

This function will run e.g. before the component is removed

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

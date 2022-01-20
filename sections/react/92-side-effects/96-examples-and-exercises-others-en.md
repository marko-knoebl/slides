# Examples and exercises: others

## Examples and exercises

Examples and exercises for use cases that don't interact with APIs

- clock
- counter that saves to localStorage
- component that "renders" text to the document title
- logout timer

## Example: Clock component

```jsx
function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <div>{time.toLocaleTimeString()}</div>;
}
```

## Example: persistent counter

Counter that saves its value to localStorage whenever the value changes:

```jsx
function PersistentCounter() {
  const [count, setCount] = useState(null);
  function loadCount() {
    const lsCount = localStorage.getItem('count');
    if (lsCount !== null) {
      setCount(Number(lsCount));
    } else {
      setCount(0);
    }
  }
  function saveCount() {
    if (count !== null) {
      localStorage.setItem('count', count);
    }
  }
  useEffect(loadCount, []);
  useEffect(saveCount, [count]);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

## Exercises

Exercise: save the state of one of the previous applications (e.g. slideshow) to _localStorage_

## Example: DocumentTitle component

We will create a component that can set the document title dynamically:

```xml
<DocumentTitle value="my custom title" />
```

This component may appear anywhere in the React application.

## Example: DocumentTitle component

```jsx
const DocumentTitle = (props) => {
  useEffect(() => {
    document.title = props.value;
  }, [props.value]);
  return null;
};
```

## Example: Logout timer

user will be logged out after 10 seconds of inactivity

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

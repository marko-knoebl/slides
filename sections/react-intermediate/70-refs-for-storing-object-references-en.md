# Refs for storing object references

## Refs for storing object references

**refs**: somewhat similar to _state_, but with some differences:

- changing the value of a ref will not trigger a re-rendering
- the value of refs will never be outdated

## Refs for storing object references

first use case:

storing values / object references that don't influence the rendering of a component:

- timer ids
- request ids
- WebSocket connections
- a PWA install prompt (see section PWA)
- DOM Elements (see next section "Ref property for accessing DOM elements")

## Refs for storing object references

second use case:

storing the most up-to-date version of a state

## Refs for storing object references

In function components, _refs_ can be created / accessed via `useRef`

Values are stored in the reference's `.current` property

## Refs for storing object references

an example of both use cases:

```tsx
function StopWatch() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(time);
  const intervalId = useRef<number>(null);
  function start() {
    setTime(0);
    timeRef.current = 0;
    intervalId.current = setInterval(() => {
      timeRef.current++;
      setTime(timeRef.current);
    }, 1000);
  }
  function stop() {
    clearInterval(intervalId.current);
  }
  return <div>...</div>;
}
```

## Refs for storing object references

Note: often, there can be implementations that avoid refs:

```jsx
function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [running]);
  return <div>...</div>;
}
```

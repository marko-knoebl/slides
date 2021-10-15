# Refs for storing object references

## Refs for storing object references

In function components, _refs_ can be used to store values / object references that change over time but that don't influence the rendering of a component (they don't belong in the state)

examples of what may be stored in refs:

- timer ids
- request ids
- WebSocket connections
- a PWA install prompt (see section PWA)
- DOM Elements (see next section "Ref property for accessing DOM elements")

## Refs for storing object references

In function components, _refs_ can be created / accessed via `useRef`

Values are stored in the reference's `.current` property

## Refs for storing object references

```tsx
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef<number>(null);
  const start = () => {
    setTime(0);
    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };
  const stop = () => {
    clearInterval(intervalRef.current);
  };
  return <div>...</div>;
};
```

Note: this simple example could also be implemented without refs by using the effect hook

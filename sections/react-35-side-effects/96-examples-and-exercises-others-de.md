# Beispiele und Übungen: andere

## Beispiele und Übungen

Beispiele und Übungen, die nicht mit APIs interagieren

- Clock
- Counter, der in localStorage speichert
- Komponente, die den Dokumententitel "rendert"
- Logout Timer

## Beispiel: Clock-Komponente

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

## Beispiel: Counter

Counter, der seinen Wert in localStorage speichert, wenn sich dieser ändert:

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

## Übungen

Übung: Speichere den state einer der vorigen Anwendungen, (z.B. slideshow) in _localStorage_

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle value="my custom title" />
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

```jsx
const DocumentTitle = (props) => {
  useEffect(() => {
    document.title = props.value;
  }, [props.value]);
  return null;
};
```

## Beispiel: Logout-timer

Benutzer wird nach 10 Sekunden Inaktivität automatisch ausgeloggt:

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

# Andere Verwendungen des Effect-Hooks

## Andere Verwendungen des Effect-Hooks

- Laden von / Speichern in _localStorage_ / _indexeddb_
- explizite Änderungen am DOM (zusammen mit _refs_)
- Starten von Timern
- ...

## Beispiel: localStorage

Counter, der den eigenen Wert abspeichert, wenn dieser sich ändert:

```jsx
function PersistentCounter() {
  const [count, setCount] = useState(null);
  function loadCount() {
    setCount(Number(localStorage.getItem('count')));
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

## Übung: localStorage

Speichere den State einer der bisherigen Anwendungen (z.B. _tic-tac-toe_, _todo-list_) in _localStorage_

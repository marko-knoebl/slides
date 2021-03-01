# Andere Verwendungen des Effect-Hooks

## Andere Verwendungen des Effect-Hooks

- Laden von / Speichern in _localStorage_ / _indexeddb_
- explizite Änderungen am DOM (zusammen mit _refs_)
- Starten von Timern
- ...

## Beispiel: localStorage

Conter, der den eigenen Wert abspeichert, wenn dieser sich ändert:

```jsx
function PersistentCounter() {
  // useState can receive an initial value
  // or an initializer function
  const [count, setCount] = useState(
    () => Number(localStorage.getItem('count')) || 0
  );
  function saveCount() {
    localStorage.setItem('count', count);
  }
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

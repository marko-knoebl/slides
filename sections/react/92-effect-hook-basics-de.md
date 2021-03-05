# Effect Hook Grundlagen

## Effect Hook

Der _Effect Hook_ kann verwendet werden, um Aktionen zu setzen, wenn eine Komponente zum ersten Mal eingebunden wird, oder wenn sich deren Props / State geändert haben

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Effect Hook

kann verwendet werden, um _side effects_ auszulösen:

- Ausösen von API-Anfragen
- Laden von / Speichern in _localStorage_ / _indexeddb_
- explizite Änderungen am DOM (zusammen mit _refs_)
- Starten von Timern
- ...

## Effect Hook

Beispiel: Laden von Umrechnungskursen, wenn die Komponente zum ersten Mal eingebunden wird oder wenn sich eine Währung ändert:

```ts
const [from, setFrom] = useState('USD');
const [to, setTo] = useState('EUR');
const [rate, setRate] = useState<number | null>(null);
function loadExchangeRate() {
  // ...
}
useEffect(loadExchangeRate, [from, to]);
```

Beispiel: Laden von Todos, wenn die Komponente zum ersten Mal eingebunden wird:

```js
const [todos, setTodos] = useState([]);
function loadTodo() {
  // ...
}
useEffect(loadTodo, [todoId]);
```

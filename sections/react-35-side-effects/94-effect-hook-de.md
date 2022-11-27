# Effect Hook

## Effect Hook

Der _Effect Hook_ kann verwendet werden, um Aktionen zu setzen, wenn eine Komponente zum ersten Mal eingebunden wird, oder wenn sich deren Props / State geändert haben

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

Die Effekt-Funktion nach dem (Re-)Rendering einer Komponente ausgeführt, falls sich eine der Abhängigkeiten geändert hat

## Effect Hook

Beispiel: Laden von Umrechnungskursen, wenn die Komponente zum ersten Mal eingebunden wird oder wenn sich eine Währung ändert:

```ts
const [from, setFrom] = useState('USD');
const [to, setTo] = useState('EUR');
const [rate, setRate] = useState<number | null>(null);
async function loadRate(from: number, to: number) {
  // ...
}
useEffect(() => {
  loadRate(from, to);
}, [from, to]);
```

## Effect Hook

Beispiel: Laden von Todos, wenn die Komponente zum ersten Mal eingebunden wird:

```js
const [todos, setTodos] = useState([]);
async function loadTodos() {
  // ...
}
useEffect(() => {
  loadTodos();
}, []);
```

## Effect nach jedem Rendering

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt; dies kann eventuelle Probleme mit veralteten Daten verhindern

```jsx
useEffect(() => {
  ensureExchangeRateIsLoaded();
});
```

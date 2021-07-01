# Immutable State

## Immutable State

**Immutability**: Wichtiges Konzept in der funktionalen Programmierung und bei React / Redux

Daten werden nicht direkt abgeändert - stattdessen werden neue Daten auf Basis der alten generiert

## Immutable State

Wenn unser State Arrays oder Objekte enthält, _könnten_ wir versuchen, diese direkt abzuändern

Das sollten wir _nicht_ tun - React bemerkt üblicherweise diese Änderungen nicht und aktualisiert die Ansicht nicht

Objekte im State sollten als _unveränderlich_ erachtet werden

## Immutable State

Wenn `setState` aufgerufen wird, vergleicht React:

- das Objekt, das der alte State referenziert
- das Objekt, das der neue State referenzeirt

Wenn der alte und neue State das gleiche Objekt referenzieren (auch wenn dieses verändert wurde), wird die Komponente nicht neu gerendert

## Immutable State

Demo (siehe <https://codesandbox.io/s/immutable-state-demo-r2x1i>):

```js
function App() {
  const [numbers, setNumbers] = useState([0, 1, 2]);
  function addByReplacing() {
    // creates a new - derived - state object
    setNumbers([...numbers, numbers.length]);
  }
  function addByMutating() {
    // changes (mutates) the old state entry
    numbers.push(numbers.length);
    setNumbers(numbers);
  }
  return (
    <div>
      <div>{JSON.stringify(numbers)}</div>
      <button onClick={() => addByReplacing()}>
        add (replace)
      </button>
      <button onClick={() => addByMutating()}>
        add (mutate)
      </button>
    </div>
  );
}
```

# Veralteter State

## Veralteter State

manchmals haben wir keinen direkten Zugriff auf den aktuellsten State, wenn wir einen neuen State festsetzen

spezielles Szenario: asynchrone Events in Funktionskomponenten (z.B. Netzwerkanfragen)

## Veralteter State

Szenarien:

Wird in einem Event-Handler ein State-Setter aufgerufen, so ist der neueste State erst _nach_ dem vollständigen Ausführen des Event-Handlers verfügbar

Wird eine asynchrone Aktion aus einer _Funktionskomponente_ ausgelöst, so kann sie während der Ausführung weiter auf alten State verweisen

## Veralteter State

Beispiel 1:

```js
const [count, setCount] = useState(0);

function incrementTwice() {
  setCount(count + 1);
  setCount(count + 1);
}
```

Der Code setzt `count` zweimal hintereinander auf 1

## Veralteter State

Beispiel 2:

```js
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
function incrementWithDelay() {
  setTimeout(() => setCount(count + 1), 3000);
}
```

## Veralteter State

Szenario für Beispiel 2:

- `count` startet bei 0
- `incrementWithDelay` wird aufgerufen
- nach 1 Sekunde wird `increment` aufgerufen
- nach 2 Sekunden wird `increment` erneut aufgerufen
- nach 3 Sekunden aktualisiert `incrementWithDelay` den Wert

Werte von `count`: 0 → 1 → 2 → 1

## Veralteter State

Erklärung von Beispiel 2:

Unterschied zwischen Funktionskomponenten und Klassenkomponenten wenn sich Props / State ändern:

- in Klassenkomponenten werden `this.props` und `this.state` durch neue Objekte ersetzt
- in Funktionskomponenten wird die Komponentenfunktion erneut aufgerufen, und eine neue _Closure_ entsteht, welche die neuen Props / State-Werte enthält

Achtung: in Funktionskomponenten können alte / obsolete Daten in alten _Closures_ weiterbestehen

## Veralteter State

Beispiel: fehlerhafter Code, der in einer Closure weiter auf einen veralteten State-Eintrag verweist

```js
function Counter() {
  const [count, setCount] = useState(0);
  function startCounting() {
    setInterval(() => {
      // This innermost function will only be created once.
      // The variable "count" will always refer to the
      //   state from the initial rendering (0)
      setCount(count + 1);
    }, 1000);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => startCounting()}>start</button>
    </div>
  );
}
```

## Veralteter State

ESLint-Regel, die helfen kann, veraltete Daten in einem Effect-Hook zu erkennen:

_react-hooks/exhaustive-deps_

(in VS Code, installiere hierfür das ESLint-Plugin)

## Veralteter State

mögliche Lösungen (siehe auch: Hinweise in den Linter-Meldungen):

- Übergeben einer "Transformations-Funktion" an den State-Setter (die Funktion hat immer Zugriff auf den aktuellsten State)
- zusätzliches Speichern der aktuellsten Version eines States in einer _ref_ (ist damit auch in älteren Closures verfügbar)

## Veralteter State

mögliche Lösung: "State-Transformations-Funktion"

ersetze dies:

```js
setCount(count + 1);
```

to this:

```js
setCount((c) => c + 1);
```

Die innere Funktion bekommt immer den aktuellsten Wert übergeben

## Veralteter State

mögliche Lösung: zusätzliches Speichern von Daten in einer _Ref_ (wird später genauer erklärt)

```js
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  function startCounting() {
    setInterval(() => {
      countRef.current++;
      setCount(countRef.current);
    }, 1000);
  }
  // ...
}
```

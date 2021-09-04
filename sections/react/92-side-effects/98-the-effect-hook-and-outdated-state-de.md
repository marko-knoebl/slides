# Der effect-Hook und veralteter State

## Der effect-Hook und veralteter State

Wie wir zuvor gsehen haben, können Funktionen auf alten State / alte Daten verweisen

## Der effect-Hook und veralteter State

Beispiel: fehlerhafter Code, der in einer Closure weiter auf einen veralteten State-Eintrag verweist

```js
function CounterWithLogging() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      // the variable "count" will always refer to the
      // value from the initial rendering (0)
      console.log(count);
    }, 1000);
  }, []);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

## Veraltete Daten in einem effect-Hook erkennen

Linter-Regel, die helfen kann, veraltete Daten zu erkennen:

_react-hooks/exhaustive-deps_

## Beheben des Problems mit veralteten Daten

verschiedene Lösungen, abhängig vom Szenario:

- Code in die Definition einer Effect-Funktion verschieben
- erneutes Ausführen eines Effects, wenn sich eine Abhängigkeit ändert (siehe Hinweise in den Linter-Regeln)
  - angeben zusätzlicher Abhängigkeiten
  - `useCallback`
- übergeben einer "Transformations-Funktion" an einen State Setter (die Funktion hat immer Zugriff auf den aktuellsten State)
- zusätzliches Speichern des aktuellsten States in einer _ref_ (ist damit auch in älteren Closures verfügbar)

## Beheben des Problems mit veralteten Daten

Mögliche Lösung des Closure-Problems mit _setInterval_: Verwendung des _ref_-Hooks und eventuell eines selbst definierten Hooks

siehe:

- [Dan Abramov: Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
- [use-interval on GitHub](https://github.com/donavon/use-interval)

## Der effect-Hook und veralteter State

Erklärung: Unterschied bei State / Props in Funktionskomponenten und in Klassenkomponenten:

wenn sich State / Props ändern:

- in Klassenkomponenten werden `this.props` und `this.state` durch neue Objekte ersetzt
- in Funktionskomponenten wird die Komponentenfunktion erneut aufgerufen, und eine neue _Closure_ entsteht, welche die neuen Props / State-Werte enthält

Achtung: in Funktionskomponenten können alte / obsolete Daten in alten _Closures_ weiterbestehen

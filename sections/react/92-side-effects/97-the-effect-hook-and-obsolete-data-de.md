# Der effect-Hook und veraltete Daten

## Der effect-Hook und veraltete Daten

Unterschied bei State / Props in Funktionskomponenten und in Klassenkomponenten:

wenn sich State / Props ändern:

- in Klassenkomponenten werden `this.props` und `this.state` durch neue Objekte ersetzt
- in Funktionskomponenten wird die Komponentenfunktion erneut aufgerufen, und eine neue _Closure_ entsteht, welche die neuen Props / State-Werte enthält

Achtung: in Funktionskomponenten können alte / obsolete Daten in alten _Closures_ weiterbestehen

## Der effect-Hook und veraltete Daten

wird eine Komponente neu gerendert, aber eine zugehörige Effect-Funktion wurde nicht neu ausgeführt, so kann die Effect-Funktion auf veraltete Daten verweisen

## Der effect-Hook und veraltete Daten

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

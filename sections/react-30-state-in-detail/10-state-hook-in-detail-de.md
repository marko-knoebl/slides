# State Hook im Detail

## State Hook im Detail

zusätzliche Funktionalität des State Hooks:

- Übergeben einer Initialisierungsfunktion an den Hook, damit State nur einmal initialisiert wird
- Übergeben einer "State-Transformations-Funktion" an den Setter - die beschreibt, wie State aktualisiert werden soll

## Initialisierungsfunktion

mögliches Performance-Problem: der initiale State wird bei jedem Rendering erneut generiert - und wird aber nur beim ersten Rendering benötigt

```js
const [foo, setFoo] = useState(
  createObjectWithManyEntries('foo')
);
```

## Initialisierungsfunktion

Lösung: Führe die Initialisierung nur beim ersten Aufruf durch - durch das Übergeben einer Funktion, die nur beim ersten Rendering verwendet wird

```js
const [foo, setFoo] = useState(() =>
  createObjectWithManyEntries('foo')
);
```

## State-Transformations-Funktion

grundlegende Version für das Aktualisieren von State:

```js
setCount(count + 1);
```

alternative Version, die veralteten State vermeidet:

```js
setCount((c) => c + 1);
```

(siehe nächster Abschnitt)

# Effect Hook: Cleanup

## Effect Hook: Cleanup

manche Side Effects müssen später "aufgeräumt" werden:

- Abbrechen von API-Anfragen, wenn sie nicht mehr benötigt werden (z.B. wenn sich ein Suchbegriff geändert hat)
- Stoppen von Timern

## Cleanup-Funktionen

Eine Effect-Funktion kann eine "Cleanup-Funktion" zurückgeben

Diese Funktion wird ausgeführt, bevor der Effect zum nächsten Mal läuft oder bevor die Komponente entfernt wird

## Cleanup-Funktionen

Beispiel: Struktur für eine Suchanfrage mit unmittelbarem Feedback / Laden, wenn der Benutzer tippt:

```js
function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const initiateQuery = async () => {
      // ...
    };
    const cancelThisQuery = () => {
      // ...
    };
    initiateQuery();
    return cancelThisQuery;
  }, [query]);

  // ...
}
```

## Asynchrone Effects und Cleanup-Funktionen

Eine Effect-Funktion **darf keine asynchrone Funktion sein**

Hintergrund:

ein eventueller Rückgabewert einer Effect-Funktion wird immer als Cleanup-Funktion interpretiert

asynchrone Funktionen geben immer Promises zurück

## Asynchrone Effects und Cleanup-Funktionen

ungültig:

```js
useEffect(loadSearchResultsAsync, [query]);
```

gültig:

```js
useEffect(() => {
  loadSearchResultsAsync();
}, [query]);
```

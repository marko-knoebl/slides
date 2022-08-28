# Effect Hook: Cleanup

## Cleanup-Funktionen

Eine Effect-Funktion kann eine "Cleanup-Funktion" zurückgeben

Diese Funktion wird ausgeführt, bevor der Effect zum nächsten Mal läuft oder bevor die Komponente entfernt wird

## Cleanup-Funktionen

Beispiel: Komponente, die veraltete Queries abbricht:

```js
function ExchangeRate() {
  // ...
  useEffect(() => {
    async function loadExchangeRate() {
      // ... (initiate a new query)
    }
    function cancel() {
      // ... (cancel this query)
    }
    loadExchangeRate();
    return cancel;
  }, [from, to]);
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

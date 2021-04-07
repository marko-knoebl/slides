# Effect Hook im Detail

## Verwendung des Effect Hooks

- Ausösen von API-Anfragen
- Laden von / Speichern in _localStorage_ / _indexeddb_
- explizite Änderungen am DOM (zusammen mit _refs_)
- Starten von Timern
- ...

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle value="my custom title" />
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

```jsx
const DocumentTitle = (props) => {
  const updateTitle = () => {
    document.title = props.value;
  };
  useEffect(updateTitle, [props.value]);
  return null;
};
```

## Cleanup-Funktion

Ein Effect kann eine "Aufräumfunktion" zurückgeben

Diese Funktion wird vor der nächsten Ausführung des Effekts bzw vor dem Unmounting der Komponente ausgeführt

Beispiel für Verwendung: Abbrechen einer alten API-Suchanfrage, wenn sich der Suchbegriff geändert hat

## Cleanup-Funktion

Beispiel: Hook, der eine hackernews-API-Abfrage durchführt

```jsx
const useHackernewsQuery = (query) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let isLatestRequest = true;
    fetch(
      'https://hn.algolia.com/api/v1/search?query=' + query
    )
      .then((res) => res.json())
      .then((data) => {
        if (isLatestRequest) {
          setData(data);
        }
      });
    return () => {
      isLatestRequest = false;
    };
  }, [query]);
  return articles;
};
```

## Cleanup-Funktion

Beispiel: Benutzer wird nach 10 Sekunden Inaktivität automatisch ausgeloggt

```jsx
const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(
    new Date()
  );
  // restart the logout timer on user interaction
  useEffect(() => {
    const logout = () => setLoggedIn(false);
    const timeoutId = setTimeout(logout, 10000);
    return () => clearTimeout(timeoutId);
  }, [lastInteraction]);
  return (
    <button onClick={() => setLastInteraction(new Date())}>
      {loggedIn
        ? 'click to stay logged in'
        : 'logged out automatically'}
    </button>
  );
};
```

## Cleanup-Funktion

Wenn eine Effect-Funktion etwas anderes als `undefined` zurückgibt, wird sie als Cleanup-Funktion behandelt

Deshalb können Async-Funktionen nicht direkt als Effect-Funktionen verwendet werden (sie geben Promises zurück)

## Closures

Dieser Code funktioniert nicht wie erwartet:

```js
function CounterThatLogsEverySecond() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log(count);
    }, 1000);
  }, []);
  return (
    <div>
      {count}{' '}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

Grund: Die "Effect-Funktion" wird nur einmal aufgerufen, wodurch eine "Closure" entsteht - _count_ ist innerhalb der Effect-Funktion immer 0.

## Closures

Mögliche Lösung des Closure-Problems: Verwendung des _ref_-Hooks und eventuell eines selbst definierten Hooks

siehe:

- [Dan Abramov: Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
- [use-interval on GitHub](https://github.com/donavon/use-interval)

## Effect nach jedem Rendering

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt.

```jsx
const RenderLogger = () => {
  useEffect(() => {
    console.log('logger was rendered');
  });
  return <div>Render logger</div>;
};
```

## Exhaustive Dependencies

ESLint-Regel: _react-hooks/exhaustive-deps_

hilft dabei, explizit alle Dependencies eines Effect-Hooks aufzulisten

## Exhaustive Dependencies

Beispiel für nicht-konformen (aber funktionierenden) Code:

```ts
const ensurePokemonLoaded = (id: number) => {
  if (!pokemons.some((p) => p.id === id)) {
    loadPokemonById(id);
  }
};

useEffect(() => {
  for (let i = 1; i <= 10; i++) {
    ensurePokemonLoaded(i);
  }
}, []);
```

## Exhaustive Dependencies

ausgebesserter Code (via Hinweisen in den ESLint-Meldungen):

```ts
const ensurePokemonLoaded = useCallback(
  (id: number) => {
    if (!pokemons.some((p) => p.id === id)) {
      loadPokemonById(id);
    }
  },
  [pokemons]
);

useEffect(() => {
  for (let i = 1; i <= 10; i++) {
    ensurePokemonLoaded(i);
  }
}, [ensurePokemonLoaded]);
```

`ensurePokemonLoaded` wird neu definiert, wenn sich das `pokemons`-Array ändert - und wird damit für die ersten 10 Pokémon neu ausgeführt

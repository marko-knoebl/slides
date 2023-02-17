# Beispiele und Übungen: APIs

## Beispiel: Laden von Wechselkursen

Beispiel: Laden von Wechselkursen von einem API, wenn sich die ausgewählten Währungen ändern:

```js
function ExchangeRate() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rate, setRate] = useState(null);
  async function loadRate(from: string, to: string) {
    setRate(null);
    const rate = await fetchExchangeRate(from, to);
    setRate(rate);
  }
  useEffect(() => {
    loadRate(from, to);
  }, [from, to]);
  // render two dropdowns for selecting currencies
  // and show the exchange rate
}
```

## Beispiel: Laden von Wechselkursen

Funktion, die Daten lädt:

```ts
async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  const res = await fetch(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}`
  );
  const data = await res.json();
  return data.result;
}
```

## Beispiel: Laden von Wechselkursen

vollständiger Code (Klassenkomponenten und Funktionskomponenten, inklusive "cleanup"):

<https://codesandbox.io/s/side-effects-exchange-rate-2z42d>

## Übungen

Beispiele für abfragbare APIs:

- todos (read only): https://jsonplaceholder.typicode.com/todos
- todos: https://markok-todolist-rest.herokuapp.com/
- SpaceX Startdaten: https://api.spacexdata.com/v3/launches/1
- Pokémon-Daten: https://pokeapi.co/api/v2/pokemon/1
- hacker news Suchanfrage: https://hn.algolia.com/api/v1/search?query=foo

## Übungen

- Lade Todos, wenn der Benutzer die Todolist-Anwendung öffnet
- Zeige Daten zu einem bestimmten SpaceX-Start basierend auf der Startnummer
- Zeige Daten zu einem bestimmten Pokémon basierend auf der Nummer
- Zeige Hacker News Artikel basierend auf einem Suchbegriff

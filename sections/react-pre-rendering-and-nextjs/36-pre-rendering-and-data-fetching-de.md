# Pre-Rendering und API-Abfragen

## Pre-Rendering und API-Abfragen

definieren von Code, der zu verschidenen Zeiten in next.js ausgeführt wird:

- Code, der beim Build läuft
- Code, der am Server läuft
- Code, der im Browser läuft

## Pre-Rendering und API-Abfragen

Beim build werden alle Einträge im Ordner `pages` vorgerendert

Manche _pages_ werden ohne zusätzlichen Input gerendert, andere sind mit Datenquellen verbunden

## Pre-Rendering und API-Abfragen

besondere (asynchrone) Funktionen, die wir aus einer Seitendefinitionsdatei exportieren können:

- `getStaticProps` (läuft während des Builds)
- `getServerSideProps` (läuft bei jedem Request)

können Daten laden und sie als Props an die Seitenkomponente übergeben

werden jeweils nur auf dem Build-Rechner oder dem Server ausgeführt → können Dateien einlesen oder direkte Datenbankabfragen machen

Funktionalität von _fetch_ ist automatisch durch ein Polyfill vorhanden

## Pre-Rendering und API-Abfragen

Beispiel: Seite, die bei jedem Build zufällig als Inhalt einen neuen Witz erhält

```tsx
const ChuckNorrisJoke = (props: Props) => (
  <article>{props.joke}</article>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://api.chucknorris.io/jokes/random'
  );
  const text = (await res.json()).value;
  return { props: { joke: text } };
};

export default ChuckNorrisJoke;
```

## Pre-Rendering und API-Abfragen

Beispiel: Seite, die bei jedem Aufruf einen neuen Witz enthält

```tsx
const ChuckNorrisJoke = (props: Props) => (
  <article>{props.joke}</article>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://api.chucknorris.io/jokes/random'
  );
  const text = (await res.json()).value;
  return { props: { joke: text } };
};

export default ChuckNorrisJoke;
```

## Pre-Rendering und API-Abfragen

Übungen:

- Pre-Rendern einer Todo-Anwendung mit Todos von <https://jsonplaceholder.typicode.com/todos>
- Pre-Rendern einer Liste von Pokemon mit Daten von <https://pokeapi.co/api/v2/pokemon>

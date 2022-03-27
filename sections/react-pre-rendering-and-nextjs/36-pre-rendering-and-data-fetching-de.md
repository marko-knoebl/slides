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

- `getServerSideProps` (läuft bei jedem Request)
- `getStaticProps` (läuft während des Builds)

können Daten laden und sie als Props an die Seitenkomponente übergeben

werden jeweils nur auf dem Build-Rechner oder dem Server ausgeführt → können Dateien einlesen oder direkte Datenbankabfragen machen

Funktionalität von _fetch_ ist automatisch durch ein Polyfill vorhanden

## Pre-Rendering und API-Abfragen

Beispiel: Seite, die einen zufälligen Witz von einem API lädt

```tsx
import type { GetServerSideProps, NextPage } from 'next';

type JokeProps = { joke: string };
const Joke: NextPage<JokeProps> = (props) => (
  <article>{props.joke}</article>
);
const getServerSideProps: GetServerSideProps<JokeProps> = async () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const res = await fetch(url);
  const joke = (await res.json()).value;
  return { props: { joke: joke } };
};

export default Joke;
export { getServerSideProps };
```

## Pre-Rendering und API-Abfragen

Übungen:

- Pre-Rendern einer Todo-Anwendung mit Todos von <https://jsonplaceholder.typicode.com/todos>
- Pre-Rendern einer Liste von Pokemon mit Daten von <https://pokeapi.co/api/v2/pokemon>

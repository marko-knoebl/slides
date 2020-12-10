# Pre-Rendering und next.js

## Pre-Rendering

**Pre-Rendering**: beim ersten Laden der React-Anwendung erhält der Browser vorgerendertes HTML, um das Laden / Anzeigen zu beschleunigen

Vorteile:

- schnellere erste Darstellung
- reduziert zusätzliche API-Aufrufe am Client
- einfachere Indexierung durch Suchmaschinen

## Pre-Rendering

Beispiel:

Deaktiviere JavaScript in den Einstellungen der Browser-Entwicklertools und besuche [reactjs.org](https://reactjs.org) - es werden Inhalte angezeigt, auch wenn Teile der Interaktivität nicht funktionieren (z.B. Dropdowns)

## Zugänge

- Static Site Generation (Pre-Rendering statischer Inhalte)
- Server-side Rendering (Pre-Rendering dynamischer Inhalte)

## Static Site Generation

- sinnvoll, wenn Daten sich nicht oft ändern (z.B. Blog Posts)
- bei Änderung von Daten muss die Website statisch neu generiert und deployed werden
- Daten, die sich oft ändern (z.B. Kommentare zu einem Blog Post) wären nicht Teil des Pre-Renderings

## Server-side Rendering

- beim Öffnen einer React-Seite wird diese am Server vorgerendert und zum Client gesendet
- benötigt _node.js_ am Server

## Server-side Rendering und API-Abfragen

Üblicher Prozess zum Laden von Daten in einer React-Anwendung:

- React-Anwendung wird zum Client gesendet
- Anwendung wird zunächst ohne Daten gerendert
- Client fragt vom Server Daten an
- Daten werden zum Client gesendet
- Anwendung wird neu gerendert

Prozess mit next.js:

- Daten werden am Server geladen
- Anwendung wird am Server gerendert
- Vorgerenderte Anwendung und zugehörige Daten um sie dynamisch zu machen werden zum Client gesendet

## Tools

- _gatsby_: Static Site Generation
- _next.js_: Static Site Generation, Server-side Rendering

# Next.js

## Next.js

React-Framework mit Unterstützung für:

- Static Site Generation
- Server-Side Rendering
- einfaches Datei-basiertes Routing
- Backend- / API- Entwicklung im gleichen Projekt

## Ressourcen

Die next.js Website hat sehr gute Materialien: <https://nextjs.org>

# Create-next-app

## Create-next-app

```bash
npx create-next-app my-app
```

```bash
npx create-next-app my-app --example typescript
```

## Projektstruktur

mögliche Projektstruktur:

- _pages_
- _public_: statische Assets
- _styles_
- _components_

## Entwicklungsserver

```bash
npm run dev
```

## Deployment mit node.js

um einen Produktionsbuild zu erstellen:

```bash
npm run build
```

um ihn zu starten:

```bash
npm run start
```

## Deployment auf einem statischen Server

nur möglich, wenn kein server-seitiges Rendering benötigt wird (also kein `getServerSideProps`)

Ändern des _build_-Scripts in _package.json_ auf: `next build && next export`

Ein statischer Build (im Ordner _out_) wird dann ausgeführt via:

```bash
npm run build
```

(siehe <https://nextjs.org/learn/excel/static-html-export>)

# Seiten und Navigation

## Seiten und Navigation

Beispiel einer Seitendefinition:

```js
// pages/index.js
import Link from 'next/link';
import Head from 'next/head';

const Index = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
```

## Seiten und Navigation

besondere Komponenten, die _next_ zur Verfügung stellt:

- `Link`: Link innerhalb einer Single-Page-Anwendung
- `Head`: Ermöglicht das einfache Setzen von Inhalten des `<head>`-Elements der Seite

## Seiten und Navigation

Aufgabe: Erstelle weitere Seiten

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

# Routenparameter

## Routenparameter

Wir können aus URLs wie den folgenden Parameter auslesen:

- `/posts/3`
- `/posts/?postid=3`

## Routenparameter

Routenparameter werden in eckigen Klammern im Dateipfad angegeben, z.B.: `pages/posts/[id].js`

## Routenparameter

Vorrendern von Seiten basierend auf einem Satz Routenparameter - via `getStaticPaths`

```tsx
export const getStaticPaths: GetStaticPaths = async () => {
  // get a list of paths to pre-render
  const res = await fetch(
    'https://api.spacexdata.com/v3/launches/latest'
  );
  const latest = (await res.json()).flight_number;
  const paths = [];
  for (let i = 1; i <= latest; i++) {
    paths.push({ params: { id: i.toString() } });
  }
  return { paths, fallback: false };
};
```

`getStaticPaths` gibt unter dem Namen `paths` ein Array zurück, das Routen beschreibt - diese werden jeweils an `getStaticProps` übergeben

## Routenparameter

nach der Implementierung von `getStaticPaths` können wir Seiten mit dynamischen Routen vorrendern

```bash
npm run build
```

## Routenparameter

dynamisches Abfragen von Routenparametern:

```js
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  return (
    <div>
      <h1>detail view for post {router.query.id}</h1>
    </div>
  );
};

export default Post;
```

# Deployment

## Deployment

_next_ wird von _Vercel_ entwickelt: bieten gute Integration für Deployment

## Deployment auf Vercel

1. Upload zu GitHub o.ä.
2. Verbindung zwischen GitHub und Vercel und Einrichtung des Projektes

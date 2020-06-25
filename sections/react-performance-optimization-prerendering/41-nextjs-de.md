# Next.js

## create-next-app

Erstellen einer neuen next-Anwendung mittels:

```bash
npx create-next-app my-app
```

## Ordnerstruktur

- Seiten unter _pages_
- statische Assets unter _assets_
- verwendete React-Komponenten üblicherweise unter _components_

## Entwicklungsserver

```bash
npm run dev
```

Ein Entwicklungsserver startet auf _localhost:3000_

## Deployment mit node.js

um einen Produktionsbuild zu erstellen:

```bash
npm run build
```

um ihn zu starten:

```bash
npm run start
```

(benötigt node.js am Server)

## Deployment an einen statischen Server

Ändernd des _build_-Scripts in _package.json_ auf: `next build && next export`

Ein statischer Build (im Ordner _out_) wird dann ausgeführt via:

```bash
npm run build
```

(siehe <https://nextjs.org/learn/excel/static-html-export>)

## Erstellen von Seiten

Beispiel einer Seitendefinition:

```js
// pages/index.js
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
```

## Erstellen von Seiten

Aufgabe: Erstelle weitere Seiten

## Routenparameter

Wir können aus URLs wie den folgenden Parameter auslesen:

- `/posts/?postid=3`
- `/posts/3`

## Routenparameter

Routenparameter werden in eckigen Klammern im Dateipfad angegeben, z.B.: `pages/posts/[id].js`

## Routenparameter

Abfragen von Routenparametern:

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

## API-Abfragen mit next.js

Üblicher Prozess zum Laden von Daten in einer React-Anwendung:

- React-Anwendung wird zum Client gesendet
- React-Anwendung wird zunächst ohne Daten gerendert
- Client fragt vom Server Daten an
- Daten werden zum Client gesendet

Prozess mit next.js:

- Daten werden am Server geladen
- Anwendung wird am Server gerendert
- Vorgerenderte Anwendung und zugehörige Daten um sie dynamisch zu machen werden zum Client gesendet

## Anbindung von Datenquellen

Abfragen von Daten zum Rendern einer Seite:

- Abfrage für statische Daten (während des Builds) mittels `getStaticProps`
- Abfrage zum server-seitigen Rendering mittels `getServerSideProps`

Um `fetch` in node.js zu verwenden, können wir das npm-Paket `isomorphic-fetch` verwenden.

## Anbindung von Datenquellen

```js
// pages/pokemon.js
export default ({ pokemon }) => {
  return (
    <ul>
      {pokemon.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const pokemon = (await res.json()).results;
  return { props: { pokemon: pokemon } };
};
```

## Resourcen

Die next.js website hat sehr gute Materialien: https://nextjs.org

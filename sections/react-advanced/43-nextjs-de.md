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

## npm Scripts

- `npm run dev`: ausführen des Entwicklungsservers
- `npm (run) start`: ausführen des Produktionsservers
- `npm run build`: erstellen einer statischen Version für das Deployment

## Entwicklungsserver

```bash
npm run dev
```

Ein automatisch neu ladender Server startet unter _localhost:3000_

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

In next.js kann der rendernde Server bereits APIs abfragen und die Daten zum Rendering verwenden und an den Client weitergeben

## API-Abfragen mit next.js

Wenn wir am Server API-Daten abfragen möchten, bevor die Komponente gerendert wird, implementieren wir die next-spezifische Methode `getInitialProps`

For using `fetch` in node.js we can use the npm Package `isomorphic-fetch`

## API-Abfragen mit next.js

```js
const Post = ({ url, title, body }) => (
  <div>
    <h2>
      Post {url.query.id}: {title}
    </h2>
    <p>{body}</p>
  </div>
);

Post.getInitialProps = context =>
  fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.query.id}`
  )
    .then(response => response.json())
    .then(post => ({ title: post.title, body: post.body }));
```

## Static Site Generator

Standardmäßig läuft _next.js_ auf einem node Server und rendert Inhalte dynamisch

Für das statische Rendern siehe:

https://nextjs.org/learn/excel/static-html-export

## Resourcen

Die next.js website hat sehr gute Materialien: https://nextjs.org

# Seiten und Navigation

## Seiten und Navigation

Beispiel einer Seitendefinition:

```js
// pages/index.tsx
import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head';

const Index: NextPage = () => (
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

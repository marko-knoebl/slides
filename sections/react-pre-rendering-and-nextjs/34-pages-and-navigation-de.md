# Seiten und Navigation

## Seiten und Navigation

Beispiel einer Seitendefinition:

```js
// pages/index.tsx
import type { NextPage } from 'next';
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

## Gemeinsamer Inhalt

definieren von "globalem" Inhalt, der über alle Seiten hinweg gleich ist:

```js
// _app.tsx
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* fixed header content */}
      <header>header content</header>
      {/* variable content - defined by the route */}
      <Component {...pageProps} />
      {/* fixed footer content */}
      <footer>footer content</footer>
    </div>
  );
}
```

## Seiten und Navigation

Aufgabe: Erstelle weitere Seiten

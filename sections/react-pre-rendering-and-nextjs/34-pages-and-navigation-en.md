# Pages and navigation

## Pages and navigation

Example page definition:

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

## Pages and navigation

special components provided by _next_:

- `Link`: link inside a single-page application
- `Head`: enables easily setting content of the page's `<head>` element

## Shared content

defining "global" content that is shared across all pages:

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

## Pages and navigation

Task: create further pages

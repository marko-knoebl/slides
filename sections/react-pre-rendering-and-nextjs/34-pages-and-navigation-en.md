# Pages and navigation

## Pages and navigation

Example page definition:

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

## Pages and navigation

special components provided by _next_:

- `Link`: link inside a single-page application
- `Head`: enables easily setting content of the page's `<head>` element

## Pages and navigation

Task: create further pages

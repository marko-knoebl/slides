# Pre-rendering and next.js

## Pre-rendering

**pre-rendering**: on first page load the browser receives pre-rendered HTML to speed up loading / displaying

advantages:

- faster initial rendering
- reduces additional API calls on the client
- easier indexing by search engines

## Pre-rendering

example:

Disable JavaScript in your browser's developer tools settings and visit [reactjs.org](https://reactjs.org) - you will still see content, though some interactivity will not work (e.g. dropdowns)

## Approaches

- static site generation (pre-rendering static content)
- server-side rendering (pre-rendering dynamic content)

## Static site generation

- makes sense for data that changes infrequently (e.g. blog posts)
- when data changes the site has to be regenerated statically
- data that changes frequently (e.g. comments on a blog post) would not be part of the pre-rendering

## Server-side rendering

- when a React page is opened a prerendered version of it is created on the server and sent to the client
- requires JavaScript on the server (_node.js_)

## Server-side rendering and data fetching

usual process for fetching data in a React app:

- React app is sent to the client
- app renders initially with no data
- client requests additional data
- data is sent to the client
- app re-rendes

process with server-side rendering:

- data is fetched on the server
- app is rendered on the server
- pre-rendered app and the corresponding data for making it dynamic are sent to the client

## Tools

- _gatsby.js_: static site generation
- _next.js_: static site generation, server-side rendering

# Next.js

## Next.js

React framework that supports:

- static site generation
- server-side rendering
- simple file-based routing
- backend / API development in the same project (for simple projects)

## Resources

The next.js website has great materials: <https://nextjs.org>

# Create-next-app

## Create-next-app

```bash
npx create-next-app my-app
```

```bash
npx create-next-app my-app --example typescript
```

## Project structure

possible project structure:

- _pages_
- _public_: static assets
- _styles_
- _components_

## Development server

```bash
npm run dev
```

## Deployment with node.js

to build a production version:

```bash
npm run build
```

to run it (on the server):

```bash
npm run start
```

## Deployment to a static server

possible only if no server-side rendering is needed (i.e. no `getServerSideProps`)

change the _build_ script in _package.json_ to: `next build && next export`

then build the static version (to the _out_ folder) via:

```bash
npm run build
```

(see <https://nextjs.org/learn/excel/static-html-export>)

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

# Pre-rendering and data fetching

## Pre-rendering and data fetching

in next.js we can define code that is executed at several different points:

- code that runs when building
- code that runs on the server
- code that runs in the browser

## Pre-rendering and data fetching

when building, next.js will pre-render all entries in the `pages` directory

some pages are pre-rendered without any additional input, others might be connected to data sources

## Pre-rendering and data fetching

special (asynchronous) functions that we can export from a page definition file:

- `getStaticProps` (runs during build)
- `getServerSideProps` (runs on user request)

can load data and pass them into the page components as props

are only executed on the build machine or server respectively → may read files or make direct database queries

The functionality of _fetch_ will be polyfilled automatically

## Pre-rendering

example: a page that contains a new Joke every time it is rebuilt

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

## Pre-rendering

example: a page that contains a new Joke every time it is accessed

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

## Pre-rendering

exercises:

- pre-render a todo application with todos from <https://jsonplaceholder.typicode.com/todos>
- pre-render a list of pokemon with data from <https://pokeapi.co/api/v2/pokemon>

# Route parameters

## Route parameters

we can query parameters from URLs like these:

- `/posts/3`
- `/posts/?postid=3`

## Route parameters

Route parameters are enclosed in square brackets in the file name, e.g. `pages/spacex-launches/[id].js`

## Route parameters

pre-rendering pages based on a set of route parameters - via `getStaticPaths`

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

`getStaticPaths` returns an array describing the routes under the entry `paths` - the entries are passed to `getStaticProps`

## Route parameters

after implementing `getStaticPaths` we can pre-render pages with dynamic routes

```bash
npm run build
```

## Route parameters

Dynamically querying route parameters:

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

_next_ is developed by _Vercel_: good integration for deployment

## Deployment on Vercel

1. Upload to GitHub or similar
2. Connect GitHub with Vercel and set up the project

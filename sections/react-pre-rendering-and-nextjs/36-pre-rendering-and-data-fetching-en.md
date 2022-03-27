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

- `getServerSideProps` (runs every time a page is requested)
- `getStaticProps` (runs during build)

can load data and pass them into the page components as props

are only executed on the build machine or server respectively → may read files or make direct database queries

The functionality of _fetch_ will be polyfilled automatically

## Pre-rendering

example: a page that loads a random joke from an API

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

## Pre-rendering

exercises:

- pre-render a todo application with todos from <https://jsonplaceholder.typicode.com/todos>
- pre-render a list of pokemon with data from <https://pokeapi.co/api/v2/pokemon>

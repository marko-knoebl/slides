# Route parameters

## Route parameters

we can query parameters from URLs like these:

- `/todos/3`
- `/todos/?todoid=3`

## Route parameters

Route parameters are enclosed in square brackets in the file name, e.g. `pages/todos/[id].js`

## Route parameters

Dynamically querying route parameters:

```js
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const TodoDetails: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>detail view for todo {router.query.id}</h1>
    </div>
  );
};

export default TodoDetails;
```

## Route parameters

pre-rendering pages based on a set of route parameters - via `getStaticPaths`

```tsx
export const getStaticPaths: GetStaticPaths = () => {
  const paths = [];
  for (let i = 1; i <= 200; i++) {
    paths.push({ params: { id: String(i) } });
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

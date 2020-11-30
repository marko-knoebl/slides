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

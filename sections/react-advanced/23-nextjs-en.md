# Next.js

## create-next-app

Create a new next.js app via:

```bash
npx create-next-app my-app
```

## Folder structure

- pages under _./pages_
- static assets under _./assets_
- used React components usually under _./components_

## npm scripts

- `npm run dev`: run the development server
- `npm (run) start`: run the production server
- `npm run build`: build a static version for deployment

## Development server

```bash
npm run dev
```

An auto-updating server will start at _localhost:3000_

## Creating pages

Example page definition:

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

## Creating pages

Task: create further pages

## Route parameters

we can query parameters from URLs like these:

- `/posts/?postid=3`
- `/posts/3`

## Route parameters

Route parameters are enclosed in square brackets in the file name, e.g. `pages/posts/[id].js`

## Route parameters

Querying route parameters:

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

## Data fetching in next.js

usual process for fetching data in a React app:

- React app is sent to the client
- React app renders initially with no data
- client requests additional data
- data is sent to the client

process with next.js:

- data is fetched on the server
- app is rendered on the server
- pre-rendered app and the corresponding data for making it dynamic are sent to the client

## Data fetching in next.js

If we want to fetch data on the server side before a component renders we implement the method `getInitialProps`:

Um `fetch` in node.js zu verwenden, können wir das npm-Paket `isomorphic-fetch` verwenden.

## Data fetching in next.js

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

## Static site generation

By default _next.js_ runs on a node server and dynamically renders content

for static site generation see:

https://nextjs.org/learn/excel/static-html-export

## Resources

The next.js website has great materials: https://nextjs.org

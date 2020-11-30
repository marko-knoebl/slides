# Routenparameter

## Routenparameter

Wir können aus URLs wie den folgenden Parameter auslesen:

- `/posts/3`
- `/posts/?postid=3`

## Routenparameter

Routenparameter werden in eckigen Klammern im Dateipfad angegeben, z.B.: `pages/posts/[id].js`

## Routenparameter

Vorrendern von Seiten basierend auf einem Satz Routenparameter - via `getStaticPaths`

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

`getStaticPaths` gibt unter dem Namen `paths` ein Array zurück, das Routen beschreibt - diese werden jeweils an `getStaticProps` übergeben

## Routenparameter

nach der Implementierung von `getStaticPaths` können wir Seiten mit dynamischen Routen vorrendern

```bash
npm run build
```

## Routenparameter

dynamisches Abfragen von Routenparametern:

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

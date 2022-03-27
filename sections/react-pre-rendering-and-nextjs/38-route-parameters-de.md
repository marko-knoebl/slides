# Routenparameter

## Routenparameter

Wir können aus URLs wie den folgenden Parameter auslesen:

- `/todos/3`
- `/todos/?todoid=3`

## Routenparameter

Routenparameter werden in eckigen Klammern im Dateipfad angegeben, z.B.: `pages/todos/[id].js`

## Routenparameter

dynamisches Abfragen von Routenparametern:

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

## Routenparameter

Vorrendern von Seiten basierend auf einem Satz Routenparameter - via `getStaticPaths`

```tsx
export const getStaticPaths: GetStaticPaths = () => {
  const paths = [];
  for (let i = 1; i <= 200; i++) {
    paths.push({ params: { id: String(i) } });
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

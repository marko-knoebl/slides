# Externe Hooks

## Externe Hooks

Viele zusätzliche Hooks werden von der React-Community entwickelt

Einsatzgebiete z.B.:

- Abfragen von APIs
- Verwenden von globalem State
- Verwenden von _localStorage_ für den state
- Media Queries
- Abfrage der Scrollposition
- ... (siehe [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks))

## Beispiel: react-query

[https://github.com/tannerlinsley/react-query](https://github.com/tannerlinsley/react-query)

Viel genutzter Hook, der beim Abfragen von APIs hilfreich sein kann

## Beispiel: react-query

Einfache Verwendung:

```js
const TodoDisplay = () => {
  const { data, isLoading } = useQuery(
    'todo_1',
    fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    ).then(response => response.json())
  );
  if (isLoading) {
    return 'Loading...';
  }
  return <div>{data.title}</div>;
};
```

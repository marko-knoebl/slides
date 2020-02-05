# External hooks

## External hooks

Many additional hook are provided by the React community

example use cases:

- querying APIs
- using global state
- using _localStorage_ for persistent state
- media queries
- querying the scroll position
- ... (see [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks))

## Example: react-query

[https://github.com/tannerlinsley/react-query](https://github.com/tannerlinsley/react-query)

Popular hook that can help with retrieving APIs

## Example: react-query

simple use:

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

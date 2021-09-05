# React Query

## React Query

**React Query**: Library zum Interagieren mit Web APIs (z.B. REST APIs)

## React Query Setup

in _index.js_:

```js
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  rootElement
);
```

## Queries definieren

```js
import { useQuery } from 'react-query';
import { fetchTodos } from './todosApi';

function TodoApp() {
  const { isLoading, error, data: todos } = useQuery(
    'todos',
    fetchTodos
  );
  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (error) {
    return <div>Could not load todos</div>;
  }
  return <TodoList todos={todos} />;
}
```

## Mutationen definieren

```js
import { useMutation } from 'react-query';
import { addTodo } from './todosApi';

function TodoApp() {
  // ...
  const onAddTodo = useMutation(addTodo, {
    onSuccess: () => {
      // initiate a refetch of todos
      queryClient.invalidateQueries('todos');
    },
  });
  // ...
}
```

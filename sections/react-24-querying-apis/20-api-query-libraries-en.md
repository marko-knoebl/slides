# API query libraries

## API query libraries

common libraries that help with querying APIs:

- _react-query_
- _swr_
- _apollo_ (for GraphQL APIs)

## API query libraries

functionality:

- track loading state (_success_ / _loading_ / _error_)
- automatic caching
- automatic reloads
- ...

## React Query

example: fetching data with _react query_:

```js
import { useQuery } from 'react-query';
import { fetchTodos } from './todosApi';

function TodoApp() {
  const todosQuery = useQuery(['todos'], fetchTodos);
  if (todosQuery.isLoading) {
    return <div>Loading ...</div>;
  } else if (todosQuery.isError) {
    return <div>Could not load todos</div>;
  }
  return <TodoList todos={todosQuery.data} />;
}
```

## React Query

global setup for React Query in _index.js/.tsx_:

<!-- prettier-ignore -->
```js
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// ...

const queryClient = new QueryClient();

// ...

  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
```

## React Query

enabling a devtools popup:

<!-- prettier-ignore -->
```js
import { ReactQueryDevtools } from 'react-query/devtools';

// ...

  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
```

## React Query: Exercise

Create an exchange rate app that loads data from an API like this:

_https://api.exchangerate.host/latest?base=USD&symbols=EUR_

## React Query

writing mutations:

```js
import { useMutation, useQueryClient } from 'react-query';
import { addTodo } from './todosApi';

function TodoApp() {
  // ...
  function handleAddTodo() {
    addTodoMutation.mutate({ title: newTitle });
  }
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: refetchTodos,
  });
  const queryClient = useQueryClient();
  function refetchTodos() {
    queryClient.invalidateQueries('todos');
  }
  // ...
}
```

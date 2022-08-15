# Libraries für API-Abfragen

## Libraries für API-Abfragen

verbreitete Libraries zum Abfragen von APIs:

- _react-query_
- _swr_
- _apollo_ (für GraphQL APIs)

## Libraries für API-Abfragen

Funktionalität:

- mitverfolgen des Lade-Status (_success_ / _loading_ / _error_)
- automatisches Caching
- automatische Reloads
- ...

## React Query

Beispiel: Laden von Daten mit _react query_:

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

## React Query Setup

globales Setup für React Query in _index.js/.tsx_:

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

aktivieren eines Devtools-Popups::

<!-- prettier-ignore -->
```js
import { ReactQueryDevtools } from 'react-query/devtools';

// ...

  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
```

## React Query: Übung

Erstelle eine Wechselkurs-Anwendung, die Daten von einem API wie diesem lädt:

_https://api.exchangerate.host/latest?base=USD&symbols=EUR_

## React Query

Definieren von Mutationen:

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

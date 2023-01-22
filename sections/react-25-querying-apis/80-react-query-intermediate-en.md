# React Query: Intermediate

## Devtools

enabling a devtools popup during development:

<!-- prettier-ignore -->
```js
import { ReactQueryDevtools } from 'react-query/devtools';

// ...

  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
```

## Query start on user action

by default: query starts when a component is mounted

alternative behavior: query starts on a specific user action (e.g. button click, hitting enter)

## Query start on user action

example: state for a search functionality:

```ts
// text content of an input (changes when user types)
const [search, setSearch] = useState('');
// active search (changes when user hits enter)
const [submittedSearch, setSubmittedSearch] = useState<
  string | null
>(null);
```

## Query start on user action

only activate a query when the user has submitted for the first time:

```ts
const searchQuery = useQuery({
  queryKey: ['search', submittedSearch],
  enabled: submittedSearch !== null,
  queryFn: () => fetchSearch(submittedSearch as string),
});
```

## Mutations

writing mutations:

```js
import { useMutation, useQueryClient } from 'react-query';
import { apiAddTodo } from './todosApi';
```

```js
// ...
const queryClient = useQueryClient();

function invalidateTodos() {
  queryClient.invalidateQueries({ queryKey: ['todos'] });
}

const addTodoMutation = useMutation({
  mutationFn: apiAddTodo,
  onSuccess: invalidateTodos,
});

// this function is connected to a submit form
function handleAddTodo(newTitle) {
  addTodoMutation.mutate({ title: newTitle });
}
// ...
```

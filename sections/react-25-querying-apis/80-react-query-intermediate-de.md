# React Query: Intermediate

## Devtools

aktivieren eines Devtools-Popups während der Entwicklung:

<!-- prettier-ignore -->
```js
import { ReactQueryDevtools } from 'react-query/devtools';

// ...

  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
```

## Query-Start durch Benutzerinteraktion

standardmäßig: Query startet, sobald eine zugehörige Komponente eingebunden wird, die den Hook aufruft

alternatives Verhalten: Query startet bei einer bestimmten Benutzerinteraktion (z.B. Buttonklick)

## Query-Start durch Benutzerinteraktion

Beispiel: State für eine Suchfunktionalität:

```ts
// text content of an input (changes when user types)
const [search, setSearch] = useState('');
// active search (changes when user hits enter)
const [submittedSearch, setSubmittedSearch] = useState<
  string | null
>(null);
```

## Query-Start durch Benutzerinteraktion

Aktivieren einer Query, wenn der Benutzer zum ersten mal eine Suche absendet:

```ts
const searchQuery = useQuery({
  queryKey: ['search', submittedSearch],
  enabled: submittedSearch !== null,
  queryFn: () =>
    fetchJson(`/api/search/${submittedSearch}`),
});
```

## Mutationen

Definieren von Mutationen:

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

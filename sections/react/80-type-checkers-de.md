# Typechecker für React

## Typechecker für React

Insbesondere was das Interface von Komponenten angeht, ist es sehr sinvoll, vorhandene Properties und Events anzugeben

Möglichkeiten:

- Verwendung von TypeScript als Sprache
- Library _prop-types_

## React mit TypeScript

Erstellen eines neuen Projekts:

```bash
npx create-react-app my-app --template typescript
```

## TypeScript

TypeScript Grundlagen: siehe Präsentation [TypeScript](./typescript-de.html)

## React mit TypeScript

ausführliche Resource: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

<!--

redux with typescript:

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://medium.com/@resir014/a-type-safe-approach-to-redux-stores-in-typescript-6474e012b81e
- https://www.carlrippon.com/strongly-typed-react-redux-code-with-typescript/

-->

## Props mit TypeScript (Funktionskomponenten)

```tsx
type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  // ...
};
```

## useState mit TypeScript

oft keine Annotation notwendig:

```ts
const [filterText, setFilterText] = useState('');
```

mit Annotation:

```ts
const [todos, setTodos] = useState<Array<TodoType>>([]);
```

## Eventtypen in TypeScript

Bei inline Eventhandlern muss kein Typ angegeben werden:

```jsx
<button
  onClick={(event) => {
    event.stopPropagation();
  }}
>
  test
</button>
```

## Eventtypen in TypeScript

Eventtypen für separat definierte Eventhandler:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`

## prop-types

Library, um React Komponenten - Properties in JavaScript mit Typeninformationen zu versehen

## prop-types

Beispiel:

```js
import PropTypes from 'prop-types';

// definition of Rating component here

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  onStarsChange: PropTypes.func,
};
```

## prop-types in VS Code

Plugin: _React PropTypes IntelliSense_

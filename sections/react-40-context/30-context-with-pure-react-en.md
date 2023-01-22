# Context with pure React

## Context

steps to provide context:

- define context (and maybe its type / default values)
- optional: add state to the provider
- include provider component in the component hierarchy

steps to query context:

- call `useContext` in a component

## Context definition

defining a context in JavaScript:

```js
// ThemeContext.js

import { createContext } from 'react';

// default value: null
const ThemeContext = createContext(null);

export { ThemeContext };
```

## Default value and TypeScript

A context always has a default / fallback value which will be used when no matching context provider is found

In TypeScript it can be cumbersome to define a default value to satisfy the type checker

## Default value and TypeScript

defining a context type in TypeScript:

```ts
type ThemeContextType = {
  theme: string;
  onThemeChange: (theme: string) => void;
};
```

## Default value and TypeScript

to satisfy the type checker when creating the context:

actually provide fallback values:

```ts
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  onThemeChange: () => {},
});
```

use `null` and cast to any:

```ts
const ThemeContext = createContext<ThemeContextType>(
  null as any
);
```

more information / solutions: [React TypeScript cheatsheets](https://github.com/typescript-cheatsheets/react/blob/main/README.md#context)

## Context with "pure providers"

Example: using a "pure provider" (the state is in the App component)

```tsx
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider
      value={{ theme: theme, onThemeChange: setTheme }}
    >
      ... sub-components ...
    </ThemeContext.Provider>
  );
}
```

## Context with "pure providers"

example: product page with a "pure" context provider

```js
function ProductPage() {
  // ... (load product data from an API)

  return (
    <ProductContext.Provider value={productData}>
      <ProductDescription />
      <ProductPictures />
      <ProductReviews />
      <ProductQuestionsAndAnswers />
    </ProductContext.Provider>
  );
}
```

## Context with "stateful providers"

Example: creating a stateful provider that manages and provides state:

```tsx
// TodosContext.tsx
function TodosProvider(props: { children: ReactNode }) {
  const todosCtrl = useTodos();
  <TodosContext.Provider value={todosCtrl}>
    {props.children}
  </TodosContext.Provider>;
}
```

```tsx
function TodoApp() {
  return <TodosProvider>...</TodosProvider>;
}
```

## Context

querying context from within a component:

```ts
const todosContext = useContext(TodosContext);
```

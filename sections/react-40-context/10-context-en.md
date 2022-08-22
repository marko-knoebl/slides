# Context

## Context

Context is a means to provide values from a component to all components that are contained within it - without explicitly passing it through all intermediate levels.

The interface of context can pass both data and event handlers

## Context

an application can have many different context types, e.g.:

- `ThemeContext`
- `LanguageContext`
- `UserContext`
- `TodosContext`
- ...

## Context

steps to provide context:

- define context (type and default values)
- create a provider component
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

## Default value

A context always has a default / fallback value which will be used when no matching context provider is found

In TypeScript it can be cumbersome to define a default value to satisfy the type checker

## Default value

defining a context type in TypeScript:

```ts
type ThemeContextType = {
  theme: string;
  changeTheme: (theme: string) => void;
};
```

## Default value

to satisfy the type checker when creating the context:

actually provide fallback values:

```ts
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  changeTheme: () => {},
});
```

use `null` and cast to any:

```ts
const ThemeContext = createContext<ThemeContextType>(
  null as any
);
```

more information / solutions: [React TypeScript cheatsheets](https://github.com/typescript-cheatsheets/react/blob/main/README.md#context)

## Context

distincition of context providers:

- "pure provider" - receives data via props, does not have internal state
- "stateful provider" - has internal state, uses a "pure provider" make its state available

mostly, we will use "stateful providers"

## Context

architecture with a "pure provider":

- `App` (manages theme)
  - `ThemeContext.Provider` (provides theme)
    - ...
      - consumer (consumes theme)

architecture with a "stateful provider":

- `ThemeProvider` (manages theme)
  - `ThemeContext.Provider` (provides theme)
    - `App` (consumes theme)
      - ...
        - consumer (consumes theme)

## Context

possible structure with "stateful providers":

- LanguageProvider (manages / provides language state)
  - ThemeProvider (manages / provides theme state)
    - TodosProvider
      - App
        - TodoList
          - ...

## Context

Example: using a "pure provider" (the state is in the App component)

```tsx
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider
      value={{ theme: theme, changeTheme: setTheme }}
    >
      ... sub-components ...
    </ThemeContext.Provider>
  );
}
```

## Context - example

Example: creating a stateful provider that manages and provides state:

```tsx
// ThemeContext.tsx
function ThemeProvider(props: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider
      value={{ theme: theme, changeTheme: setTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
```

## Context - example

including the stateful provider:

```tsx
// index.tsx
...
  <ThemeProvider>
    <App />
  </ThemeProvider>
...
```

## Context - example

querying context from within a component:

```ts
const themeContext = useContext(ThemeContext);
```

## Context - example

optionally: wrap in a custom hook:

```ts
function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error('No matching provider found');
  }
  return themeContext;
}
```

## Exercises

add more contexts - e.g. a `LanguageContext`

# Context

## Context

Context is a means to provide values from a component to all components that are contained within it - without explicitly passing it through all intermediate levels.

The interface of context can pass both data and event handlers

## Context

possible component structure:

- LanguageProvider (manages / provides language state)
  - ThemeProvider (manages / provides theme state)
    - TodosProvider
      - App
        - TodoList

(other approaches are possible)

## Context

steps to provide context:

- define context (type and default values)
- create a provider component
- include provider component in the component hierarchy

steps to query context:

- call `useContext` in a component
- optionally: use a custom hook for querying

## Context - example

defining the context:

```ts
// ThemeContext.tsx
import { createContext } from 'react';

type ThemeContextType = {
  theme: string;
  changeTheme: (theme: string) => void;
};

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);
```

## Context - example

writing a provider that manages and provides state:

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

including the provider:

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
const { theme, changeTheme } = useContext(ThemeContext);
```

## Context - example

optionally: wrap in a custom hook:

```ts
function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error('No matching provider found');
  }
  return themeContext;
}
```

## Exercises

add more contexts - e.g. a `LanguageContext`

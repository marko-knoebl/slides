# Context mit reinem React

## Context

Schritte, um Context zur Verfügung zu stellen:

- Context definieren (Typ und Standardwerte)
- eventuell: Provider-Komponente mit State "versehen"
- Provider-Komponente in der Komponentenhierarchie einbinden

Schritte, um Context abzufragen:

- Aufrufen von `useContext` in einer Komponente

## Context-Definition

Context-Definition in JavaScript:

```js
// ThemeContext.js

import { createContext } from 'react';

// default value: null
const ThemeContext = createContext(null);

export { ThemeContext };
```

## Standardwert

Ein Context hat immer einen Standard-/Fallback-Wert; dieser wird genutzt, wenn kein passender Provider gefunden wird

In TypeScript: Erstellen des Standard-Werts um den Typechecker zufrieden zu stellen kann mühsam sein

## Standardwert

Definieren eines Context-Typs in TypeScript:

```ts
type ThemeContextType = {
  theme: string;
  onThemeChange: (theme: string) => void;
};
```

## Standardwert

um den Typechecker zufrieden zu stellen:

tatsächliches Bereitstellen eines Standard-Werts:

```ts
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  onThemeChange: () => {},
});
```

verwenden von `null` und Cast auf any:

```ts
const ThemeContext = createContext<ThemeContextType>(
  null as any
);
```

mehr Informationen / Lösungen: [React TypeScript cheatsheets](https://github.com/typescript-cheatsheets/react/blob/main/README.md#context)

## Context mit "reinen Providern"

Beispiel: verwenden eines "reinen Providers" (State liegt in der App-Komponente)

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

## Context mit "reinen Providern"

Beispiel: Produkt-Seite mit einem "reinen" Context-Provider

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

## Context mit State

Beispiel: Erstellen eines Providers mit State, der State verwaltet und bereitstellt:

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

Context aus einer Komponente heraus abfragen:

```ts
const todosContext = useContext(TodosContext);
```

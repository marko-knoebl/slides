# Context

## Context

Möglichkeit, Werte aus einer Komponente direkt allen weiter unten im Dokumentenbaum liegenden Komponenten zur Verfügung zu stellen - ohne diese über jede Ebene übergeben zu müssen

Das Interface von Context kann sowohl Daten (aus dem State) als auch Eventhandler übergeben.

## Context

eine Anwendung kann viele verschiedene Kontexttypen haben, z.B.:

- `ThemeContext`
- `LanguageContext`
- `UserContext`
- `TodosContext`
- ...

## Context

Schritte, um Context zur Verfügung zu stellen:

- Context definieren (Typ und Standardwerte)
- Provider-Komponente erstellen
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
  changeTheme: (theme: string) => void;
};
```

## Standardwert

um den Typechecker zufrieden zu stellen:

tatsächliches Bereitstellen eines Standard-Werts:

```ts
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  changeTheme: () => {},
});
```

verwenden von `null` und Cast auf any:

```ts
const ThemeContext = createContext<ThemeContextType>(
  null as any
);
```

mehr Informationen / Lösungen: [React TypeScript cheatsheets](https://github.com/typescript-cheatsheets/react/blob/main/README.md#context)

## Context

Unterscheidung:

- "reiner Provider" - erhält Daten via Props, hat keinen internen State
- Provider mit State - hat internen State, verwendet einen "reinen Provider", um diesen zur Verfügung zu stellen

meistens verwenden wir Provider mit State

## Context

Architektur mit einem "reinen Provider":

- `App` (verwaltet Theme)
  - `ThemeContext.Provider` (stellt Theme bereit)
    - ...
      - consumer (verwendet Theme)

Architektur mit einem "Provider mit State":

- `ThemeProvider` (verwaltet Theme)
  - `ThemeContext.Provider` (stellt Theme bereit)
    - `App` (verwendet Theme)
      - ...
        - consumer (verwendet Theme)

## Context

mögliche Struktur mit "Providern mit State":

- LanguageProvider (Verwalten / Bereitstellen von Language State)
  - ThemeProvider (Verwalten / Bereitstellen von Theme State)
    - TodosProvider
      - App
        - TodoList
          - ...

## Context

Beispiel: verwenden eines "reinen Providers" (State liegt in der App-Komponente)

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

## Context - Beispiel

Beispiel: Erstellen eines Providers mit State, der State verwaltet und bereitstellt:

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

## Context - Beispiel

Einbinden des Providers:

```tsx
// index.tsx
...
  <ThemeProvider>
    <App />
  </ThemeProvider>
...
```

## Context - Beispiel

Abfragen eines Context in einer Komponente:

```ts
const themeContext = useContext(ThemeContext);
```

## Context - Beispiel

optional: erstellen eines eigenen Hooks:

```ts
function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error('No matching provider found');
  }
  return themeContext;
}
```

## Übungen

füge weitere Contexte hinzu - z.B. einen `LanguageContext`

# Context

## Context

Möglichkeit, Werte aus einer Komponente direkt allen weiter unten im Dokumentenbaum liegenden Komponenten zur Verfügung zu stellen - ohne diese über jede Ebene übergeben zu müssen

Das Interface von Context kann sowohl Daten (aus dem State) als auch Eventhandler übergeben.

## Context

mögliche Komponentenstruktur:

- LanguageProvider (Verwalten / Bereitstellen von Language State)
  - ThemeProvider (Verwalten / Bereitstellen von Theme State)
    - TodosProvider
      - App
        - TodoList

(Andere Zugänge sind möglich)

## Context

Schritte, um Context zur Verfügung zu stellen:

- Context definieren (Typ und Standardwerte)
- Provider-Komponente erstellen
- Provider-Komponente in der Komponentenhierarchie einbinden

Schritte, um Context abzufragen:

- Aufrufen von `useContext` in einer Komponente
- optional: Verwenden eines eigenen Hooks für die Abfrage

## Context - Beispiel

Definieren des Contexts:

```js
// ThemeContext.tsx
import { createContext } from 'react';

type ThemeContextType = {
  theme: string,
  changeTheme: (theme: string) => void,
};

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);
```

## Context - Beispiel

Erstellen eines Providers, der State verwaltet und bereit stellt:

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
  if (themeContext === undefined) {
    throw new Error('No matching provider found');
  }
  return themeContext;
}
```

## Übungen

füge weitere Contexte hinzu - z.B. einen `LanguageContext`

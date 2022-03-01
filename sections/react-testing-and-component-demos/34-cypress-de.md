# Cypress

## Cypress

Konfiguration in einem create-react-app-Projekt:

in _cypress/tsconfig.json_:

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "noEmit": true,
    // be explicit about types included
    // to avoid clashing with Jest types
    "types": ["cypress"]
  },
  "include": ["../node_modules/cypress", "./**/*.ts"]
}
```

## Cypress

Um ESLint-Fehler zu vermeiden (insbesondere bei create-react-app-Projekten):

in _package.json_:

```json
  "eslintConfig": {
    // ...
    "overrides": [
      {
        "files": ["cypress/**"],
        "rules": {
          "jest/valid-expect": 0
        }
      }
    ]
  },
```

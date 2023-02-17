# Komponentendefinition

## Komponentendefinition

Optionen:

- **Definieren einer Komponente als Funktion**
- Definieren einer Komponente als Klasse (etwas veraltet)

## Komponentendefinition

Komponentennamen beginnen immer mit einem Großbuchstaben

(um sie von gewöhnlichen HTML-Elementen zu unterscheiden)

## Komponentendefinition

Komponenten werden üblicherweise als _default export_ in seperaten Dateien definiert

```js
// TodoItem.tsx

export default function TodoItem() {
  // ...
}
```

## Komponentendefinition

Komponenten haben oft eine zugehörige Stil-Datei

```js
// TodoItem.tsx

import './TodoItem.css';
```

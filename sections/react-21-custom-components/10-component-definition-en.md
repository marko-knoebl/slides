# Component definition

## Component definition

options:

- **defining a component as a function**
- defining a component as a class (rather obsolete)

## Component definition

component names always start with a capital letter

(to distinguish them from ordinary HTML elements)

## Component definition

components will usually be defined as the _default export_ in their own files

```js
// TodoItem.tsx

export default function TodoItem() {
  // ...
}
```

## Component defintion

components will often have an accompanying stylesheet file

```js
// TodoItem.tsx

import './TodoItem.css';
```

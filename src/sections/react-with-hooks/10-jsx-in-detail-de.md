# JSX im Detail

## JSX: Elemente wiederholen

Grundsätzlich können wir über Arrays mehrere Elemente einbinden:

```xml
<ul>
  { [
    <li>1</li>,
    <li>2</li>
  ] }
</ul>
```

## JSX: Elemente wiederholen

Meist verwenden wir zum wiederholen die `.map()` - Methode

<!-- prettier-ignore -->
```jsx
const todos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];

<ul>
  {todos.map(todo => (
    <li>{todo.title}</li>
  ))}
</ul>
```

## JSX: Elemente wiederholen

Bei obigem Code: Warnung in der Browser-Konsole (Wegen Effizienz)  
Lösung: **key**:

```jsx
<ul>
  {todos.map(todo => (
    <li key={todo.id}>{todo.title}</li>
  ))}
</ul>
```

## JSX: if / else

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## JSX: if / else

```jsx
let face;
if (Math.random() > 0.5) {
  face = 'heads';
} else {
  face = 'tails';
}

return <div>{face}</div>;
```

## JSX: if

```jsx
<div>{state.hasError && state.errorMessage}</div>
```

## JSX: CSS-Klassen

```jsx
<div className={getClassName()}>[...]</div>
```

## CSS-Module

Bei create-react-app sind CSS-Module vorkonfiguriert. Diese erlauben das Verwenden von CSS-Klassennamen, die garantiert eindeutig sind.

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem}>...</div>;

<div className={`${styles.todoItem} ${styles.completed}`}>
  ...
</div>;
```

## SCSS einbinden

```bash
npm install node-sass
```

```js
import styles from './TodoItem.module.scss';
```

```scss
/* TodoItem.module.scss */
@import '../colors';
...
```

```scss
/* colors.scss */
$primary: lightblue;
```

## JSX: Dynamische Stile

```jsx
<div
  style={{
    color: '#333',
    fontSize: getFontSize(),
  }}
/>
```

## Fragmente

Erlauben es einer Komponente, mehrere Elemente zurückzugeben (anstatt eines einzenen Elements)

```jsx
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

## JSX Kompilierung

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
```

wird kompiliert zu:

```js
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

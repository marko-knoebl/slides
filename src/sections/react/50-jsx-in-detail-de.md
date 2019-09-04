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

Bei obigem Code:  
Warnung in der Browser-Konsole (Wegen Effizienz)  
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
const element = <a href="https://google.com">Google</a>;
```

wird kompiliert zu:

```js
const element = React.createElement(
  'a',
  { href: 'https://google.com' },
  'Google'
);
```

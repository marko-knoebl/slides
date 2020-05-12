# JSX im Detail

## JSX im Detail

Themen:

- Attribute
- Elemente wiederholen
- if / elese
- if
- Whitespace
- Kommentare
- Fragmente
- gültige Elemente
- Kompilierung

## Attribute

Manche Attribute von Eleenten haben andere Namen als in standard HTML (spiegeln die standard DOM-Attribute wider)

- `className` (anstatt `class`)
- `onClick` (anstatt `onclick`)
- `htmlFor` (anstatt `for`)

## Attribute

Beispiel: CSS-Klassen

```jsx
<li
  className={
    isCompleted ? 'todoitem completed' : 'todoitem'
  }
>
  [...]
</li>
```

## JSX: Elemente wiederholen

Aufgabe: Erstellen einer HTML-Liste (ul) aus diesen Daten:

```js
const initialTodos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];
```

## JSX: Elemente wiederholen

Mehrere Elemente können als Arrays eingebunden werden:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const todoElements = [];
  for (let todo of todos) {
    todoElements.push(<li>{todo.title}</li>);
  }
  return <ul>{todoElements}</ul>;
};
```

## JSX: Elemente wiederholen

Elemente werden meist mittels `.map()` wiederholt

## JSX: Elemente wiederholen

Die `.map()` Methode erstellt ein neues Array, indem jedes Element eines bestehenden Arrays transformiert wird

Beispiel:

```js
const originalNumbers = [2, 3, 4];

const triple = (n) => 3 * n;

const newNumbers = originalNumbers.map(triple);
// [6, 9, 12]
```

## JSX: Elemente wiederholen

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## JSX: Elemente wiederholen

Bei obigem Code:  
Warnung in der Browser-Konsole (Wegen Effizienz)  
Lösung: **key**:

```jsx
<ul>
  {todos.map((todo) => (
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

## Whitespace

in HTML sind die folgenden Beispiele äquivalent (und enthalten je ein Leerzeichen zwischen den Bildern):

<!-- prettier-ignore-start -->

```html
<img src="foo.png"> <img src="bar.png">
```

```html
<img src="foo.png">    <img src="bar.png">
```

```html
<img src="foo.png">
<img src="bar.png">
```

<!-- prettier-ignore-end -->

## Whitespace

in JSX gilt:

- Whitespace zwischen Elementen innerhalb einer Zeile wird als einzelnes Leerzeichen interpretiert
- Whitespace zwischen Elementen, der über mehrere Zeilen geht, wird ignoriert

<!-- prettier-ignore-start -->

Einzelnes Leerzeichen:

```xml
<img src="foo.png" />     <img src="bar.png" />
```

Kein Leerzeichen:

```xml
<img src="foo.png" />
<img src="bar.png" />
```

<!-- prettier-ignore-end -->

## Whitespace

"Erzwungenes" Einfügen eines Leerzeichens in JSX:

```xml
<img src="foo.png" />{" "}
<img src="bar.png" />
```

## Kommentare

Kommentare können als JavaScript-Kommentare geschrieben werden:

```jsx
a = <div>Hello World!{/*this is a comment*/}</div>;
```

## Fragmente

Erlauben es einer Komponente, mehrere Elemente zurückzugeben (anstatt eines einzelnen Elements)

```jsx
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

## gültige Elemente in JSX

- string
- number
- Komponenten (z.B. `<div>`, `<img>`, `<MyComponent>`)
- Arrays anderer Elemente
- null, undefined, true, false (werden nicht gerendert)

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

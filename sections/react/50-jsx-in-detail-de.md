# JSX im Detail

## JSX im Detail

Themen:

- Properties
- Elemente wiederholen
- if / elese
- if
- Whitespace
- Kommentare
- Fragmente
- gültige Elemente
- Kompilierung

## Property-Namen

Manche Properties von Eleenten haben andere Namen als in standard HTML (spiegeln teilweise die standard DOM-Properties wider)

- `className` (anstatt `class`)
- `onClick` (anstatt `onclick`)
- `htmlFor` (anstatt `for`)

## Property-Namen

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

es gibt viele Hilfslibraries, die die _className_-Property dynamisch generieren

## Style Property

In JSX weisen wir der _style_-Property ein Objekt zu:

```jsx
<div
  style={{
    backgroundColor: '#333',
    fontSize: getFontSize(),
  }}
/>
```

## Elemente wiederholen

Aufgabe: Erstellen einer HTML-Liste (ul) aus diesen Daten:

```js
const initialTodos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];
```

## JSX: Elemente wiederholen

Erstellen eines Arrays von JSX-Elementen via `.map`:

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

## Elemente wiederholen

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

## if / else

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## if / else

```jsx
let face;
if (Math.random() > 0.5) {
  face = 'heads';
} else {
  face = 'tails';
}

return <div>{face}</div>;
```

## if

```jsx
<div>{state.hasError && state.errorMessage}</div>
```

Der Operator `&&` in JavaScript:

```js
true && 'my message'; // 'my message'

false && 'my message'; // false
```

## Whitespace

in HTML sind die folgenden Beispiele äquivalent (und enthalten je ein Leerzeichen zwischen den Bildern):

<!-- prettier-ignore-start -->

```html
<img src="foo.png" /> <img src="bar.png" />
```

```html
<img src="foo.png" />    <img src="bar.png" />
```

```html
<img src="foo.png" />
<img src="bar.png" />
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

## JSX Kompilierung

```jsx
const element = (
  <MyComponent prop1={1} prop2={2}>
    <div>test 1</div>
    <div>test 2</div>
  </MyComponent>
);
```

wird kompiliert zu:

```js
const element = React.createElement(
  MyComponent,
  { prop1: 1, prop2: 2 },
  React.createElement('div', null, 'test 1'),
  React.createElement('div', null, 'test 2')
);
```

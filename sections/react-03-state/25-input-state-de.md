# Input State

## Input State

ein "uncontrolled input" in React:

```jsx
<input />
```

React kennt den Inhalt des Inputs nicht und kann ihn nicht ändern

## Input State

So können wir den Wert eines Inputs im State erfassen:

```js
const [inputText, setInputText] = useState('');
```

```jsx
<input
  value={inputText}
  onChange={(event) => setInputText(event.target.value)}
/>
```

## Input State

Erklärung:

```txt
value={inputText}
```

bindet vom _State_ auf den Wert des Inputs

```txt
onChange={(event) => setInputText(event.target.value)}
```

aktualisiert den State, wenn sich der Wert des Inputs ändert

## Input State

warum `event.target.value`?

- `event.target` repräsentiert das Input-Element
- `event.target.value` ist der neue Wert des Input-Elements

## Input State

Beispiel: Input, bei dem auch die Textlänge angezeigt wird:

```js
function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={() => setText('')}>clear</button>
      <p>This string has {text.length} characters.</p>
    </div>
  );
}
```

## Input State

andere Möglichkeiten zum Arbeiten mit Input-State:

- Verwalten von mehreren Inputs über ihre Namen (siehe [React Dokumentation](https://reactjs.org/docs/forms.html#handling-multiple-inputs))
- Auslesen von Input-Inhalten nur beim _Submit_ eines Formulars (via `FormData`)
- Verwenden einer externen Library (z.B. _react-hook-form_, _formik_)

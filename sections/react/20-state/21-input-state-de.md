# Input State

## Input State

In React-Anwendungen sollte alles, was sich im UI ändern kann, Teil des _States_ sein

Wenn wir ein einfaches Input-Element einbinden würden:

```jsx
<input />
```

dann würde es Aspekte des UI-States geben, die nicht im React State mitverfolgt werden

## Input State

So können wir den Wert eines Inputs im State erfassen:

```jsx
<input
  value={inputText}
  onChange={(event) => {
    setInputText(event.target.value);
  }}
/>
```

## Input State

Erklärung:

```txt
value={inputText}
```

bindet vom _State_ auf den Wert des Inputs

```txt
onChange={(event) => {
  setInputText(event.target.value);
}}
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
  const len = text.length;

  return (
    <div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <p>This string has {len} characters.</p>
    </div>
  );
}
```

## Input State

Übung:

Zeige zwei Inputs, bei denen der Benutzer zusammenpassende Passwörter eingeben soll, die zumindest 4 Zeichen lang sind.

Wenn beide Passwörter übereinstimmen, zeige darunter den Text "valid" an, ansonsten zeige "invalid" an

Stelle dabei sicher, dass du den minimalen State verwendest

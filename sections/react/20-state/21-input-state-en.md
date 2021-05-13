# Input state

## Input state

In a React application, everything that can change in the UI should be part of the _state_

If we include a simple input element:

```jsx
<input />
```

there would be an aspect of the UI state which would not be captured in the React state.

## Input state

This is how we can capture the value of an input and track it in the state:

```jsx
<input
  value={inputText}
  onChange={(event) => {
    setInputText(event.target.value);
  }}
/>
```

## Input state

explanation:

```txt
value={inputText}
```

binds from the _state_ to the input value

```txt
onChange={(event) => {
  setInputText(event.target.value);
}}
```

updates the state whenever the input value changes

## Input state

why `event.target.value`?

- `event.target` represents the input element
- `event.target.value` is the new value of the input element

## Input state

Example: Input that also displays the number of characters:

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

## Input state

Exercise:

Show two inputs where the user should input matching passwords that are at least 4 characters long.

If both passwords match and are long enough, display "valid" underneath, otherwise display "invalid"

Make sure you store the minimal state

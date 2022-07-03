# Input state

## Input state

"uncontrolled" input in React:

```jsx
<input />
```

React does not know the input's content and cannot change it

## Input state

connecting an input to the state:

```js
const [inputText, setInputText] = useState('');
```

```jsx
<input
  value={inputText}
  onChange={(event) => setInputText(event.target.value)}
/>
```

## Input state

explanation:

```txt
value={inputText}
```

binds from the _state_ to the input value

```txt
onChange={(event) => setInputText(event.target.value)}
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

## Input state

other options for working with input state:

- handle multiple inputs via their name (see [React documentation](https://reactjs.org/docs/forms.html#handling-multiple-inputs))
- only read input contents on a form submit event (via `FormData`)
- use an external library (e.g. _react-hook-form_, _formik_)

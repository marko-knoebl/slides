# Ref property for accessing DOM elements

## Ref property for accessing DOM elements

Just like _key_, the _ref_ property has a special meaning in JSX - enabling direct access to rendered DOM elements

use cases:

- managing focus, text selection, or media playback
- alternative way of managing inputs (uncontrolled components)
- integrating with third-party DOM libraries

## Ref property for accessing DOM elements

Using the _ref_ property together with the _useRef_ hook:

```jsx
function RefDemo() {
  const myRef = useRef();
  return (
    <input
      ref={myRef}
      onChange={() => {
        console.log(myRef.current.value);
      }}
    />
  );
}
```

## Ref property for accessing DOM elements

**managing focus, text selection, or media playback**

some changes cannot be expressed declaratively (via state); they require direct access to a DOM element

example: there are properties like `.value` for changing a value or `.className` for changing classes, but there is no property for managing focus

## Ref property for accessing DOM elements

**alternative way of managing inputs**

using `ref` instead of `value` and `onChange` can mean less code (but is discouraged by the React documentation)

Refs are used by _react-hook-form_ to make form handling simpler and faster

## Ref property for accessing DOM elements

**integrating with third-party DOM libraries**

Third-party libraries may require a DOM element being passed in

Example: Google Maps takes an element where it will paint the map

Many third-party libraries have wrappers for React where refs are not needed

## Ref property for managing focus

Managing focus with a ref:

```js
const App = () => {
  const inputEl = useRef(null);
  return (
    <div>
      <input ref={inputEl} />
      <button onClick={() => inputEl.current.focus()}>
        focus
      </button>
    </div>
  );
};
```

## Ref property for managing inputs

Managing inputs: comparing `useState` and `useRef`:

```js
const App = () => {
  const [firstName, setFirstName] = useState('');
  const lastNameInput = useRef(null);

  return (
    <div>
      <input
        value={firstName}
        onChange={(event) =>
          setFirstName(event.target.value)
        }
      />
      <input ref={lastNameInput} />

      <button
        onClick={() => {
          console.log(firstName);
          console.log(lastNameInput.current.value);
        }}
      >
        log values
      </button>
    </div>
  );
};
```

## Callback refs

As we've seen we can pass a Ref object into the _ref_ property

We can also pass in a _callback_ function which will be called with the element as its parameter (_react-hook-form_ uses this)

```jsx
<input
  ref={(element) => {
    console.log(element);
    console.log(element.value);
    element.focus();
  }}
  type="text"
/>
```

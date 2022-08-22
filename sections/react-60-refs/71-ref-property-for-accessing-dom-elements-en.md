# Ref property for accessing DOM elements

## Ref property for accessing DOM elements

Just like _key_, the _ref_ property has a special meaning in JSX - enabling direct access to rendered DOM elements

use cases:

- managing focus, text selection, or media playback
- integrating with third-party DOM libraries
- alternative way of managing inputs (uncontrolled components)

## Ref property for accessing DOM elements

Using the _ref_ property together with the _useRef_ hook:

```tsx
function RefDemo() {
  const myRef = useRef<HTMLInputElement>(null);
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

Managing focus:

```tsx
function App() {
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputEl.current?.focus();
  }, []);
  return <input ref={inputEl} />;
};
```

## Ref property for accessing DOM elements

managing media playback:

```tsx
// https://codesandbox.io/s/media-playback-x3ci4
function Video() {
  const [playing, setPlaying] = useState(false);
  const videoEl = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (playing) {
      videoEl.current?.play();
    } else {
      videoEl.current?.pause();
    }
  }, [playing]);
  return (
    <div>
      <video
        ref={videoEl}
        width="250"
        src={
          'https://interactive-examples.mdn.mozilla.net/' +
          'media/cc0-videos/flower.mp4'
        }
      />
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'pause' : 'play'}
      </button>
    </div>
  );
}
```

## Ref property for accessing DOM elements

**integrating with third-party DOM libraries**

Third-party libraries may require a DOM element being passed in

Example: Google Maps takes an element where it will paint the map

Many third-party libraries have wrappers for React where refs are not needed

## Ref property for accessing DOM elements

integrating Google Maps via a ref:

```ts
function Map() {
  const mapRef = useRef<HTMLElement>();
  useEffect(() => {
    new google.maps.Map(mapRef.current);
  }, []);
  return <div ref={mapRef} style={height: 400} />;
}
```

## Ref property for accessing DOM elements

**alternative way of managing inputs**

using `ref` instead of `value` and `onChange` can mean less code (but is discouraged by the React documentation)

Refs are used by _react-hook-form_ to make form handling simpler and faster

## Ref property for managing inputs

Managing inputs: comparing `useState` and `useRef`:

```tsx
const App = () => {
  const [firstName, setFirstName] = useState('');
  const lastNameInput = useRef<HTMLInputElement>(null);

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
/>
```

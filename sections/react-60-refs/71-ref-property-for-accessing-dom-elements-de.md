# Ref-Property zum Zugriff auf DOM-Elemente

## Ref-Property zum Zugriff auf DOM-Elemente

Ähnlich wie _key_ hat auch die _ref_-Property eine besondere Bedeutung in JSX - sie ermöglicht den Zugriff auf gerenderte DOM-Elemente

Anwendungsgebiete:

- Verwalten von Fokus, Textauswahl oder Medienwiedergabe
- Integration von anderen DOM-Libraries
- Alternative Möglichkeit zum Verwalten von Inputs

## Ref-Property zum Zugriff auf DOM-Elemente

Verwendung der _ref_-Property zusammen mit dem _useRef_-Hook:

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

## Ref-Property zum Zugriff auf DOM-Elemente

**Verwalten von Fokus, Textauswahl oder Medienwiedergabe**

manche Änderungen können nicht deklarativ (via State) ausgedrückt werden - sie benötigen Zugriff zu einem bestimmten DOM-Element

Beispiel: es gibt Properties wie `.value` zum Ändern des Werts eines Inputs oder `.className` zum Ändern von Klassennamen, aber keine Property zum Verwalten des Fokus

## Ref-Property zum Zugriff auf DOM-Elemente

Verwalten des Fokus:

```tsx
function App() {
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputEl.current?.focus();
  }, []);
  return <input ref={inputEl} />;
};
```

## Ref-Property zum Zugriff auf DOM-Elemente

Verwalten von Medienwiedergabe:

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

## Ref-Property zum Zugriff auf DOM-Elemente

**Integration von anderen DOM-Libraries**

Andere Libraries können expliziten Zugriff auf DOM-Elemente benötigen

Beispiel: Die Google Maps Library nimmt ein DOM-Element entgegen, in dem die Karte gezeichnet wird

Für viele Libraries (so auch Google Maps) existieren Wrapper für React, sodass refs nicht benötigt werden

## Ref-Property zum Zugriff auf DOM-Elemente

Integration von Google Maps mittels Ref:

```ts
function Map() {
  const mapRef = useRef<HTMLElement>();
  useEffect(() => {
    new google.maps.Map(mapRef.current);
  }, []);
  return <div ref={mapRef} style={height: 400} />;
}
```

## Ref-Property zum Zugriff auf DOM-Elemente

**Alternative Möglichkeit zum Verwalten von Inputs**

Verwendung von `ref` Anstelle von `value` und `onChange` kann zu etwas kürzerem Code führen (wird aber in der Dokumentation nicht empfohlen)

Refs werden von _react-hook-form_ verwendet, um Formularverwaltung einfacher und schneller zu machen

## Ref-Property zum Verwalten von Inputs

Verwalten von Inputs: Vergleich von `useState` und `useRef`:

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

## Callback Refs

Wie bisher gesehen: Wir können ein Ref-Objekt an die _ref_-Property übergeben

Wir können auch eine _Callbackfunktion_ übergeben, die nach dem Rendering mit dem Element als Parameter aufgerufen wird (_react-hook-form_ verwendet dies)

```jsx
<input
  ref={(element) => {
    console.log(element);
    console.log(element.value);
    element.focus();
  }}
/>
```

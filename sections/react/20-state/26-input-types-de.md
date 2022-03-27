# Input-Typen

## Input-Typen

- text
- textarea
- checkbox
- dropdown
- numerisch
- ...

## Input-Typen

Text und Textarea:

```jsx
<input
  value={title}
  onChange={(event) => {
    setTitle(event.target.value);
  }}
/>

<textarea
  value={message}
  onChange={(event) => {
    setMessage(event.target.value);
  }}
/>
```

## Input-Typen

Checkbox:

```jsx
<input
  type="checkbox"
  checked={accept}
  onChange={(event) => setAccept(event.target.checked)}
/>
```

## Numerische Inputs

Der Wert eines numerischen Inputs sollte üblicherweise als string gespeichert werden (nicht als Zahl)

Grund: mögliche Inhalte eines Numerischen Inputs (während der Benutzer tippt):

```txt
""
"-"
"-3"
"-3."
"-3.0"
```

## Numerische Inputs mit direkten "Auswirkungen"

Beispiel: Speichern des numerischen Inhalts eines Inputs als ein String, aktualisieren eines zugehörigen numerischen Wertes, wenn dies möglich ist:

```jsx
function FontSizeDemo() {
  const [size, setSize] = useState(16);
  const [sizeStr, setSizeStr] = useState(size.toString());
  function updateSize(s) {
    setSizeStr(s);
    // source: https://stackoverflow.com/questions/18082
    if (!isNaN(parseFloat(s)) && isFinite(s)) {
      setSize(Number(s));
    }
  }
  return (
    <div>
      <input
        type="number"
        value={sizeStr}
        onChange={(event) => updateSize(event.target.value)}
      />
      <div style={{ fontSize: size }}>Sample text</div>
    </div>
  );
}
```

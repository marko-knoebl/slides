# Andere Inputs

## Andere Inputs

- textarea
- checkbox
- dropdown
- numeric input
- ...

## Beispiele: textarea und checkbox

textarea:

```jsx
<textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
```

checkbox:

```jsx
<input
  type="checkbox"
  checked={accept}
  onChange={(e) => setAccept(e.target.checked)}
/>
```

## Beispiel: Dropdown

Dropdown mit festen Optionen:

```jsx
<select
  value={unit}
  onChange={(e) => setUnit(e.target.value)}
>
  <option value="px">px</option>
  <option value="em">em</option>
  <option value="%">%</option>
</select>
```

## Beispiel: Dropdown

Dropdown mit Optionen aus einem Array:

```jsx
const UnitDropdown = () => {
  const units = ['px', 'em', '%'];
  const [unit, setUnit] = useState(units[0]);
  return (
    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
    >
      {units.map((u) => (
        <option value={u} key={u}>
          {u}
        </option>
      ))}
    </select>
  );
};
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
const FontSizeDemo = () => {
  const [size, setSize] = useState(16);
  const [sizeStr, setSizeStr] = useState(size.toString());
  const updateSize = (s) => {
    setSizeStr(s);
    // source: https://stackoverflow.com/questions/18082
    if (!isNaN(parseFloat(s)) && isFinite(s)) {
      setSize(Number(s));
    }
  };
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
};
```

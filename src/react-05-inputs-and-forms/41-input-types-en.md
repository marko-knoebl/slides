# Input types

## Input types

- text
- textarea
- checkbox
- dropdown
- numeric input
- ...

## Input types

text and text area:

```jsx
<input
  value={title}
  onChange={(e) => {
    setTitle(e.target.value);
  }}
/>

<textarea
  value={message}
  onChange={(e) => {
    setMessage(e.target.value);
  }}
/>
```

## Input types

checkbox:

```jsx
<input
  type="checkbox"
  checked={accept}
  onChange={(e) => setAccept(e.target.checked)}
/>
```

## Input types

dropdown with hard-coded options:

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

## Input types

dropdown with options from an array:

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

## Numeric input fields

The value of a numeric input field should usually be stored as a string (not as a number)

Reasoning: possible contents of a numeric input field (while the user is typing):

```txt
""
"-"
"-3"
"-3."
"-3.0"
```

## Numeric inputs with direct "results"

example: keeping the content of a numeric input field as a string, updating an associated numeric value whenever possible:

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

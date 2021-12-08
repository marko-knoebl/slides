# Input types

## Input types

- text
- textarea
- checkbox
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

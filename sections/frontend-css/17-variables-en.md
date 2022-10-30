# Variables

## Variables

defining CSS variables:

```css
:root {
  --primary-color: #1565c0;
}
```

using variables:

```css
h1 {
  color: var(--primary-color);
}

button {
  background-color: var(--primary-color);
  color: white;
}
```

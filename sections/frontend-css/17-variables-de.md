# Variablen

## Variablen

Definieren von CSS-Variablen:

```css
:root {
  --primary-color: #1565c0;
  --secondary-color: #f50057;
}
```

Verwenden von Variablen:

```css
h1 {
  color: var(--primary-color);
}

button {
  background-color: var(--primary-color);
  color: white;
}
```

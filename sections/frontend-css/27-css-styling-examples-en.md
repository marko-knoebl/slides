# CSS styling examples

## Body height

make the body cover the whole screen (e.g. for setting the background):

```css
html {
  height: 100%;
}
body {
  height: 100%;
  padding: 0;
}
```

## Button

example styled button:

```css
button {
  background-color: #0074d9;
  color: #ffffff;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

## Containers

fluid container similar to that of _bootstrap_:

```css
.container-fluid {
  padding-left: 12px;
  padding-right: 12px;
}
```

## Containers

container similar to that of _bootstrap_:

```css
.container {
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 720px;
  }
}
/* ... (more media queries) ... */
```

## Containers

default viewport widths and container sizes in bootstrap:

- 576px → 540px
- 768px → 720px
- 992px → 960px
- 1200px → 1140px
- 1400px → 1320px

## Grid

simple example from _Picnic CSS_:

```css
.flex {
  display: flex;
  flex-wrap: wrap;
}
```

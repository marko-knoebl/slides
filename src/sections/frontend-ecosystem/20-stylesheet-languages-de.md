# Stylesheet-Sprachen

## Stylesheet-Sprachen

- _CSS_
- SASS / _SCSS_
- LESS

## Variablen

modernes CSS:

```css
:root {
  --theme-color: blue;
}

body {
  color: var(--theme-color);
}
```

## Variablen

SCSS:

```scss
$theme-color: blue;

body {
  color: $theme-color;
}
```

LESS:

```less
@theme-color: blue;

body {
  color: @theme-color;
}
```

## Vererbung

in CSS4: apply

in SCSS: extend / inheritance

in LESS: mixins

## Vererbung

CSS:

```css
:root {
  --theme-color-combination: {
    color: blue;
    background-color: lightblue;
  }
}

body {
  @apply --theme-color-combination;
}
```

## Vererbung

SCSS:

```scss
%theme-color-combination {
  color: blue;
  background-color: lightblue;
}

body {
  @extend %theme-color-combination;
}
```

## Vererbung

LESS:

```less
.theme-color-combination {
  color: blue;
  background-color: lightblue;
}

body {
  .theme-color-combination();
}
```

## Nesting / Verschachtelung

CSS:

```css
nav {
  color: black;
  & ul {
    margin: 0px;
  }
}
```

SASS / LESS:

```scss
nav {
  color: black;
  ul {
    margin: 0px;
  }
}
```

## Berechnungen

CSS:

```css
div {
  width: calc(50% - 80px);
}
```

SCSS / LESS:

```scss
div {
  width: 50% - 80px;
}
```

## Funktionen

CSS:

```css
* {
  color: rgb(10, 10, 10);
}
```

CSS:

- `min()` / `max()`

SCSS / LESS:

- `lighten()`
- `darken()`
- `saturate()`
- ...

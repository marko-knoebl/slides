# LESS

## Stylesheet languages

- CSS
- SASS / SCSSS
- LESS

## Variables

```less
@theme-color: blue;

body {
  color: @theme-color;
}
```

## Mixins

```less
.theme-color-combination {
  color: blue;
  background-color: lightblue;
}

body {
  .theme-color-combination();
}
```

## Nesting

```less
nav {
  color: black;
  ul {
    margin: 0px;
  }
}
```

(`ul`s within `nav`s don't have 0 margins)

## Computations

```less
div {
  width: 50% - 80px;
}
```

## Functions

- `lighten()`
- `darken()`
- `saturate()`
- ...

```less
@theme-text-color: darken(@theme-color, 50%);
```

## Imports

```less
@import '../theme.less';
```

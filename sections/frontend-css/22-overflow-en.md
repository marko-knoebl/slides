# Overflow

## Overflow

default behavior if a child element is taller or wider than its parent:

the child will flow out of the parent element

## Overflow

to display scroll bars if needed:

```css
#parent {
  overflow: auto;
}
```

## Overflow - example

example: display a background for the entire page by making the body take the full height, but display scrollbars if its content is more than that

```css
body {
  height: 100vh;
  overflow: auto;
  background-color: lightgrey;
}
```

## Overflow and the body element

_special case_: the body element always behaves like `overflow: auto;`

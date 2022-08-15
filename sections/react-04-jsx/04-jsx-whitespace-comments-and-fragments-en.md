# JSX: whitespace, comments and fragments

## Whitespace

In HTML the following examples are equivalent (displaying a single space between the images):

<!-- prettier-ignore-start -->

```html
<img src="foo.png" /> <img src="bar.png" />
```

```html
<img src="foo.png" />    <img src="bar.png" />
```

```html
<img src="foo.png" />
<img src="bar.png" />
```

<!-- prettier-ignore-end -->

## Whitespace

rules in JSX:

- whitespace between two elements in one line is interpreted as a single space
- whitespace between two elements on different lines is ignored

<!-- prettier-ignore-start -->

Single space:

```xml
<img src="foo.png" />     <img src="bar.png" />
```

no space:

```xml
<img src="foo.png" />
<img src="bar.png" />
```

<!-- prettier-ignore-end -->

## Whitespace

"force" a space in JSX:

<!-- prettier-ignore -->
```jsx
<p>
  long multi-line text where spaces{' '}
  <strong>are wanted</strong>
</p>
```

## Escapes

Special characters like `<` can be inserted via JavaScript:

```jsx
<p>
  if a {'<'} max {'&'} a {'>'} min then ...
</p>
```

## Comments

Comments can be written as JavaScript comments:

```jsx
<div>Hello World!{/* this is a comment */}</div>
```

## Fragments

Fragments enable returning multiple elements from a component / function:

```jsx
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

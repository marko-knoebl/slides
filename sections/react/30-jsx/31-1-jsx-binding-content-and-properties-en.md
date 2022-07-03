# JSX: binding content and properties

## Binding content

we can include _numbers_ and _strings_ as basic types:

```jsx
const dateString = new Date().toLocaleDateString();
```

```jsx
<div>curent date: {dateString}</div>
```

## Binding properties

we can change from XML to JS for an entire property:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  wikipedia article
</a>
```

Note: no quote characters around the value of _href_

## Binding properties

If a prop is enclosed in quotes, the curly braces have no special meaning

```jsx
<a href="https://google.com/search?q=what+is+${}+in+js">
  google search
</a>
```

## Binding properties

setting boolean HTML properties:

```jsx
<button disabled>disabled button</button>
```

or

```jsx
<button disabled={true}>disabled button</button>
```

## Property names

Some element properties have different names than in HTML (reflecting standard DOM properties)

- `className` (instead of `class`)
- `htmlFor` (instead of `for`)

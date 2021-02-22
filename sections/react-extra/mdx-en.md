# mdx

## mdx

_mdx_ is a mix of _markdown_ and JSX - static parts of the content can be written in markdown

## mdx

mdx example (_Foo.mdx_):

```jsx
# foo

<p>{props.foo}</p>
<p>time: {new Date().toLocaleTimeString()}</p>
```

equivalent jsx:

```jsx
export default function Foo(props) {
  return (
    <>
      <h1>foo</h1>
      <p>{props.foo}</p>
      <p>time: {new Date().toLocaleTimeString()}</p>
    </>
  );
}
```

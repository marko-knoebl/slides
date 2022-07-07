# JSX: compilation

## JSX: compilation

XML elements are compiled to calls of:

- `_jsx()` (React 17 and above)
- `React.createElement()` (React 16 - `React` must be imported when writing JSX)

## JSX: compilation

```jsx
const element = <a href="https://google.com">Google</a>;
```

compiles to:

```js
const element = _jsx(
  'a',
  { href: 'https://google.com' },
  'Google'
);
```

## JSX: compilation

```jsx
const element = (
  <MyComponent prop1={1} prop2={2}>
    <div>test 1</div>
    <div>test 2</div>
  </MyComponent>
);
```

compiles to:

```js
const element = _jsx(
  MyComponent,
  { prop1: 1, prop2: 2 },
  _jsx('div', null, 'test 1'),
  _jsx('div', null, 'test 2')
);
```

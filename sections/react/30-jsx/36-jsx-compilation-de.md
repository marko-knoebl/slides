# JSX: Kompilierung

## JSX: Kompilierung

XML-Elemente werden kompiliert zu Aufrufen von:

- `_jsx()` (ab React 17)
- `React.createElement()` (React 16 - `React` muss importiert sein, um JSX zu schreiben)

## JSX: Kompilierung

```jsx
const element = <a href="https://google.com">Google</a>;
```

wird kompiliert zu:

```js
const element = _jsx(
  'a',
  { href: 'https://google.com' },
  'Google'
);
```

## JSX: Kompilierung

```jsx
const element = (
  <MyComponent prop1={1} prop2={2}>
    <div>test 1</div>
    <div>test 2</div>
  </MyComponent>
);
```

wird kompiliert zu:

```js
const element = _jsx(
  MyComponent,
  { prop1: 1, prop2: 2 },
  _jsx('div', null, 'test 1'),
  _jsx('div', null, 'test 2')
);
```

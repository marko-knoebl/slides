# Ref property in custom components

## Ref property in custom components

example: `TextField` component in _MUI_

```ts
const containerRef = useRef<HTMLDivElement>(null);
const inputRef = useRef<HTMLInputElement>(null);
```

```jsx
<TextField ref={containerRef} inputRef={inputRef} />
```

- `ref`: can be used to access the containing `<div>`
- `inputRef`: can be used to access the `<input>` element

## Ref property in custom components

implementation of a ref whose property name **is not** "ref":

```tsx
type Props = {
  inputRef: RefObject<HTMLInputElement>;
  // ...
};

function TextField(props: Props) {
  return (
    <div>
      ...
      <input ref={props.inputRef} />
    </div>
  );
}
```

## Ref property in custom components

implementation of a ref whose property name **is** "ref":

```tsx
type Props = {
  // ...
};

const TextField = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    return (
      <div ref={ref}>
        ...
        <input />
      </div>
    );
  }
);
```

## Ref property in custom components

combined implementation:

```tsx
type Props = {
  inputRef: RefObject<HTMLInputElement>;
  // ...
};

const TextField = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    return (
      <div ref={ref}>
        ...
        <input ref={props.inputRef} />
      </div>
    );
  }
);
```

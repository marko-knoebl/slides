# Ref-Property in eigenen Komponenten

## Ref-Property in eigenen Komponenten

Beispiel: `TextField`-Komponente in _MUI_

```ts
const containerRef = useRef<HTMLDivElement>(null);
const inputRef = useRef<HTMLInputElement>(null);
```

```jsx
<TextField ref={containerRef} inputRef={inputRef} />
```

- `ref`: kann verwendet werden, um auf das äußere `<div>` zuzugreifen
- `inputRef`: kann verwendet werden, um auf das `<input>`-Element zuzugreifen

## Ref-Property in eigenen Komponenten

Implementierung einer Ref, deren Property-Name **nicht** "ref" ist:

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

## Ref-Property in eigenen Komponenten

Implementierung einer Ref, deren Property-Name "ref" **ist**:

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

## Ref-Property in eigenen Komponenten

Kombination der Implementierungen:

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

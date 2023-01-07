# "Wrapper" für bestehende Elemente

## "Wrapper" für bestehende Elemente

Beispiel: eine `Button`-Komponente, die einen `button` mit zusätzlichem Styling rendert

Die `Button`-Komponente soll die gleichen Properties haben wie das `button`-Element

## "Wrapper" für bestehende Elemente

```js
<Button type="submit" disabled={true}>
  foo
</Button>
```

sollte rendern:

```js
<button type="submit" disabled={true} className="Button">
  foo
</button>
```

## "Wrapper" für bestehende Elemente

Implementierung:

```tsx
function Button(props: ComponentProps<'button'>) {
  // return a "button" element with one extra CSS class
  return <button {...props} className="Button" />;
}
```

## Zusätzliche Properites

Beispiel: Komponente mit einer zusätzlichen Property

```tsx
type Props = ComponentProps<'input'> & {
  label: string;
};

function InputWithLabel({ label, ...rest }: Props) {
  return (
    <label>
      {label}: <input {...rest} />
    </label>
  );
}
```

## Weiterleiten der ref-Property

zusätzlicher Wunsch: Die _ref_-Property der `Button`-Komponente soll auf des gerenderte `button`-Element verweisen

## Weiterleiten der ref-Property

```tsx
const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'>
>((props, ref) => {
  return <button {...props} ref={ref} className="Button" />;
});
```

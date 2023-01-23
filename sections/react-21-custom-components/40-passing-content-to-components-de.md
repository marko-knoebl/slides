# Inhalte an Komponenten übergeben

## Inhalte an Komponenten übergeben

Beispiel mit einem "Slot":

```jsx
<Notification type="error">
  <div>
    <h1>Error</h1>
    <p>Changes could not be saved</p>
  </div>
</Notification>
```

Beispiel mit zwei benannten "Slots":

```jsx
<ConfirmationDialog
  header={<h1>Delete this folder?</h1>}
  body={
    <div>
      This will delete <i>foo/bar</i> and all its contents
    </div>
  }
/>
```

## Inhalte an Komponenten übergeben

diese Notationen sind gleichwertig:

```js
<Notification>
  <div>foo</div>
</Notification>
```

```js
<Notification children={<div>foo</div>} />
```

was zwischen den öffnenden und schließenden Tags übergeben wird, wird als `props.children` erhalten

## Inhalte an Komponenten übergeben

Implementierung einer `Notification` Komponente:

```ts
type Props = {
  children: ReactNode;
};

function Notification({ children }: Props) {
  return (
    <div className="Notification">{props.children}</div>
  );
}
```

## Inhalte an Komponenten übergeben

Übung: Card-Komponente mit Styling ([Beispiel für ein Resultat](https://www.w3schools.com/howto/howto_css_cards.asp))

```jsx
<Card>
  <h1>heading</h1>
  <p>content</p>
</Card>
```

<!--
```jsx
<PageLayout
  header={<div>...</div>}
  main={<div>...</div>}
  footer={<div>...</div>}
/>
```

```jsx
<Divider
  left={<div>...</div>}
  right={<div>...</div>}
>
```
-->

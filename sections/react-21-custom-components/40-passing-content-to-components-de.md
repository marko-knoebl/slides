# Inhalte an Komponenten übergeben

## Inhalte an Komponenten übergeben

Beispiel mit einem "Slot":

```jsx
<Notification type="error">
  <h1>Error</h1>
  <p>Changes could not be saved</p>
</Notification>
```

## Inhalte an Komponenten übergeben

Beispiel mit zwei benannten "Slots":

```jsx
<Notification
  type="error"
  header={<h1>Error</h1>}
  body={<p>Changes could not be saved</p>}
/>
```

## Inhalte an Komponenten übergeben

diese Notationen sind gleichwertig:

```js
<Notification type="error">
  <div>foo</div>
</Notification>
```

```js
<Notification type="error" children={<div>foo</div>} />
```

was zwischen den öffnenden und schließenden Tags übergeben wird, wird als `props.children` erhalten

## Inhalte an Komponenten übergeben

Implementierung einer `Notification` Komponente:

```ts
type Props = {
  type: 'info' | 'warning' | 'error';
  children: ReactNode;
};

function Notification({ type, children }: Props) {
  return (
    <div className={`Notification Notification--${type}`}>
      {children}
    </div>
  );
}
```

## Inhalte an Komponenten übergeben

Übung: Card-Komponente mit Styling ([Beispiel für ein Resultat mit CSS-Deklarationen](https://www.w3schools.com/howto/howto_css_cards.asp))

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

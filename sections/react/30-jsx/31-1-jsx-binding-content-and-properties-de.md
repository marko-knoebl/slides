# JSX: Binden von Inhalten und Properties

## Inhalte binden

wir können Zahlen und Strings als grundlegende Typen direkt einbinden:

```jsx
const dateString = new Date().toLocaleDateString();
```

```jsx
<div>curent date: {dateString}</div>
```

## Properties binden

Der Wechsel von XML auf JS klappt auch bei Properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Beachte die fehlenden Anführungszeichen bei href

## Property-Namen

Manche Properties von Elementen haben andere Namen als in standard HTML (spiegeln teilweise die standard DOM-Properties wider)

- `className` (anstatt `class`)
- `htmlFor` (anstatt `for`)

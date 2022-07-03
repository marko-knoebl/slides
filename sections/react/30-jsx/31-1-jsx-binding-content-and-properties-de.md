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
  wikipedia article
</a>
```

Beachte die fehlenden Anführungszeichen bei href

## Properties binden

Steht eine Property in Anführungszeichen, haben die geschweiften Klammern keine besondere Bedeutung:

```jsx
<a href="https://google.com/search?q=what+is+${}+in+js">
  google search
</a>
```

## Properties binden

setzen von booleschen HTML-Properties:

```jsx
<button disabled>disabled button</button>
```

oder

```jsx
<button disabled={true}>disabled button</button>
```

## Property-Namen

Manche Properties von Elementen haben andere Namen als in standard HTML (spiegeln standard DOM-Properties wider)

- `className` (anstatt `class`)
- `htmlFor` (anstatt `for`)

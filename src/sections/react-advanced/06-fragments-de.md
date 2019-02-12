# Fragmente

## Fragmente

Erlauben es einer Komponente, mehrere Elemente zurückzugeben (anstatt eines einzenen Elements)

## Fragmente - Beispiel

```ts
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

Langversion:

```ts
return (
  <React.Fragment>
    <td>Hello</td>
    <td>World</td>
  </React.Fragment>
);
```

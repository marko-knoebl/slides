# Fragments

---

## Fragments

Fragments enable a component to return multiple elements (instead of a single element)

---

## Fragments - example

```ts
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

long version:

```ts
return (
  <React.Fragment>
    <td>Hello</td>
    <td>World</td>
  </React.Fragment>
);
```

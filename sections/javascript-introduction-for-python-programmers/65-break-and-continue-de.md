# Break und continue

## Break und continue

Schlüsselwörter:

- `break`: Beenden einer Schleife
- `continue`: Beenden eines Durchlaufs

Bei verschachtelten Schleifen beziehen sie sich auf die innerste Schleife

## Break

Beispiel:

```js
let a = 1;
while (true) {
  a = a * 2;
  console.log(a);
  if (a > 1000) {
    break;
  }
}
```

# For-of-Schleifen

## For-of-Schleifen

Mit einer for-of-Schleife können wir die Inhalte eines Arrays durchlaufen

Bezeichnung in anderen Programmiersprachen: _for-each_

## For-of-Schleifen

```js
const names = ['Alice', 'Bob', 'Charlie'];

for (let name of names) {
  console.log(`Hello, ${name}`);
}
```

Die Variable `name` nimmt nacheinander jeden der in `names` angegebenen Werte an.

## Übung: For-of-Schleifen und If-Statements

Beginne mit einem Array von Zahlen, z.B. `[2, 5, -3, 8, 1, -5]`

Gib alle positiven Einträge aus, z.B. `2, 5, 8, 1`

Gib den größten Eintrag aus, z.B. `8`

Gib den größten und den kleinsten Eintrag aus z.B. `8`, `-5`

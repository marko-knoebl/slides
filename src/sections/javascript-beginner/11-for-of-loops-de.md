# For-of-Schleifen

## For-of-Schleifen

Mit einer for-of-Schleife können wir die Inhalte eines Arrays durchlaufen.

Bezeichnung in anderen Programmiersprachen: _for-each_

## For-of-Schleifen

```js
const names = ['Alice', 'Bob', 'Charlie'];

for (let name of names) {
  console.log(`Hello, ${name}`);
}
```

Die Variable `name` nimmt nacheinander jeden der in `names` angegebenen Werte ein.

## Beispiel: Login-System

```js
// users and passwords
let users = [
  ['Alice', '1234'],
  ['Bob', 'password'],
  ['Charlie', 'paris41'],
];
```

## Beispiel: Login-System

Beispielhafter Programmlauf:

```txt
Enter your username:
lice
No such user.
Enter your username:
Alice
Enter your password:
123
Wrong password
Enter your password:
1234
Logged in as Alice!
```

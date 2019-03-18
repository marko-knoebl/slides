# For-Schleifen

## For-Schleifen

Zu for-Schleifen sehen wir uns zwei Konstrukte näher an:

- _for_-Schleife zum zählen
- _for-of_-Schleife zum Iterieren über Arrays

## For-Schleife

Zählen von 0 bis 9:

```js
for (let i = 0; i <= 9; i++) {
  console.log(i);
}
```

## For-schleife

Übung: Ausgabe einer Multiplikationstafel

```txt
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
...
```

## For-of-Schleife

Mit einer for-of-Schleife können wir die Inhalte eines Arrays durchlaufen.

Bezeichnung in anderen Programmiersprachen _for-each_

## For-of-Schleife

```js
const names = ['Alice', 'Bob', 'Charlie'];

for (let name of names) {
  console.log(`Hello, ${name}`);
}
```

Die Variable `name` nimmt nacheinander jeden der in `names` angegebenen Werte ein.

## Beispiel: Login-System

```js
# Benutzer mit Passwörtern
let users = [
  ["Alice", "1234"],
  ["Bob", "password"],
  ["Charlie", "paris41"]];
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

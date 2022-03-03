# While-Schleifen

## While-Schleifen

Eine if-Abfrage führt einen Codeblock _einmal_ aus, wenn ein Kriterium zutrifft

Eine while-Schleife wiederholt einen Codeblock, solange ein Kriterium zutrifft

Beispiel:

```js
let a = 1;

while (a < 2000) {
  console.log(a);
  a = a * 2;
}
```

## Continue und break

Schlüsselwörter:

- `break`: Beenden einer Schleife
- `continue`: Beenden eines Durchlaufs

Bei verschachtelten Schleifen beziehen sie sich auf die innerste Schleife

## Continue und break

Beispiel:

```js
let a = 1;
while (true) {
  a = a * 2;
  alert(a);
  if (a > 1000) {
    break;
  }
}
```

## While-Schleifen

Übungen:

- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Zahlenraten mit echten Zufallszahlen
- Rechentrainer mit Zufallsaufgaben

## While-Schleifen

Übung: Einkaufsliste

Beispiel für Interaktion:

```txt
enter an item or "x" to quit:
milk
enter an item or "x" to quit:
bread
enter an item or "x" to quit:
apples
enter an item or "x" to quit:
x
your shopping list is:
["milk", "bread", "apples"]
```

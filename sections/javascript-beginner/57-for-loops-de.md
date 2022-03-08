# For-Schleifen

## For-Schleifen

Zählen von 0 bis 9:

```js
for (let i = 0; i <= 9; i++) {
  console.log(i);
}
```

äquivalent zu:

```js
let i = 0;
while (i <= 9) {
  console.log(i);
  i++;
}
```

## Erweiterte Zuweisung

_erweiterte Zuweisung_ (_augmented assignment_): folgende Statements sind äquivalent zueinander

```js
a = a + 1;
```

```js
a += 1;
```

```js
a++;
```

## For-Schleifen

Übung: Ausgabe einer Multiplikationstafel

```txt
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
...
```

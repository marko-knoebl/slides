# Arrays

## Erstellen von Arrays

Mit eckigen Klammern:

```js
let primes = [2, 3, 5, 7, 11];

let users = ['Alice', 'Bob', 'Charlie'];
```

## Auslesen von Arrayelementen

Mittels Index (bei 0 beginnend)

```js
let users = ['Alice', 'Bob', 'Charlie'];

console.log(users[0]);
console.log(users[2]);
console.log(users[users.length - 1]);
```

## Operationen mit Arrays

- Überschreiben: `users[0] = "Andrew";`
- Anhängen: `users.push("Dan");`
- Letztes Element entfernen: `users.pop();`
- Element in der Mitte entfernen: `users.splice(2)`;
- Länge: `users.length;`
- Zusammenhängen: `primes.concat(users);`
- Abfragen, ob Element in Liste: `users.includes('Andrew')`

## Übung: Einkaufsliste

Beispielhafter Programmlauf:

```text
enter an item or "x" to quit:
milk
enter an item or "x" to quit:
bread
enter an item or "x" to quit:
apples
enter an item or "x" to quit:
x
your shopping list is:
milk,bread,apples
```

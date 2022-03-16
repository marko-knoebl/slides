# Zusammengesetzte Datentypen: object, array

## Object

Gemeinsamkeiten mit:

- Python dict
- Python Objekt

## Object

ein _object_ kann benannte Einträge (_Properties_) haben

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',
  nationality: 'Canada',
  birthYear: 1980,
};
```

## Object

Zugriff auf Properties:

<!-- prettier-ignore -->
```js
person.firstName
```

oder

<!-- prettier-ignore -->
```js
person["firstName"]
```

## Object

Übung:

Erstelle und verändere Objekte, die verschiedenes repräsentieren - z.B.:

- einen Kalendereintrag
- eine Person
- ein Produkt in einem Online-Shop
- ...

## Arrays

ähnlich zu Listen in Python

```js
let primes = [2, 3, 5, 7, 11];

let users = ['Alice', 'Bob', 'Charlie'];

let products = [
  { name: 'IPhone 12', price: 949 },
  { name: 'Fairphone', price: 419 },
  { name: 'Pixel 5', price: 799 },
];
```

## Übungen

Erstelle und ändere Daten, die aus _Objects_ und _Arrays_ bestehen und die verschiedene Objekte repräsentieren, z.B.:

- Einträge auf einer Todo-Liste
- Kalendereinträge
- Produkte in einem Online-Shop
- Transaktionen auf einem Bankkonto

# Zusammengesetzte Datentypen: object, array

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

```js
person.firstName = 'Jane';
```

## Object

alternative Syntax mit Anführungszeichen (erlaubt Sonderzeichen):

```js
let person = {
  'first-name': 'John',
  'last-name': 'Doe',
};
```

## Object

alternative Syntax zum Zugreifen auf Properties:

<!-- prettier-ignore -->
```js
person['first-name']
```

```js
person['first-name'] = 'Jane';
```

## Object

Übung:

Erstelle und verändere Objekte, die verschiedenes repräsentieren - z.B.:

- einen Kalendereintrag
- eine Person
- ein Produkt in einem Online-Shop
- ...

## Array

Arrays repräsentieren eine Folge von Elementen

```js
let primes = [2, 3, 5, 7, 11];

let users = ['Alice', 'Bob', 'Charlie'];

let products = [
  { name: 'IPhone 12', price: 949 },
  { name: 'Fairphone', price: 419 },
  { name: 'Pixel 5', price: 799 },
];
```

## Array

Auslesen von Array-Elementen mittels Index (bei 0 beginnend)

<!-- prettier-ignore -->
```js
let users = ['Alice', 'Bob', 'Charlie'];

users[0]
users[1]
```

## Array

Überschreiben von Array-Elementen

```js
users[0] = 'Andrew';
```

## Array

Anhängen von Array-Elementen

```js
users.push('Dora');
```

## Array

Entfernen des letzten Elements:

```js
users.pop();
```

Entfernen eines Elements anhand des Index:

```js
users.splice(2, 1);
```

## Array

Die Länge eines Arrays bestimmen:

<!-- prettier-ignore -->
```js
users.length
```

## Übungen

Erstelle und ändere Daten, die aus _Objects_ und _Arrays_ bestehen und die verschiedene Objekte repräsentieren, z.B.:

- Einträge auf einer Todo-Liste
- Kalendereinträge
- Produkte in einem Online-Shop
- Transaktionen auf einem Bankkonto

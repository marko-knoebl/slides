# Immutability

## Immutability

(Unveränderlichkeit)

Wichtiges Konzept in der funktionalen Programmierung und bei React / Redux

## Immutability

Bei der Verwendung von Redux bzw von Reacts PureComponent:

Objekte, die den Anwendungszustand (state) beschreiben, sollten nicht direkt abgeändert werden

Stattdessen sollten sie durch neue Objekte ersetzt werden

Vorteile: Bessere Performance, mehr Möglichkeiten beim debugging

## PureComponent

Statt von `React.Component` ist es möglich, von `React.PureComponent` zu erben:

Die Entsprechende Komponente wird nur neu gerendert, wenn sich entweder state oder props geändert haben.

In einer PureComponent gelten Einträge in state bzw props dann als geändert, wenn sie sich auf ein anderes Objekt als zuvor beziehen

## Verwaltung von Daten ohne Mutationen

## Datenverwaltung ohne Mutationen: Arrays

```js
let names = ['Alice', 'Bob', 'Charlie'];
// nicht zulässig: verändert das ursprüngliche array
names.push('Dan');

// stattdessen: neues Array;
let newNames = names.slice();
newNames.push('Dan');
// überschreiben des ursprünglichen Arrays
names = newNames;

// oder:
names = [...names, 'Dan'];
```

## Datenverwaltung ohne Mutationen: Objekt

```js
let user = {
  name: 'john'
  email: 'john@doe.com'
}
// nicht zulässig: verändert das Objekt
user.email = 'johndoe@gmail.com';

// stattedessen: Erzeugen eines neuen Objekts:
let newUser = { ...user, email: 'johndoe@gmail.com' };
```

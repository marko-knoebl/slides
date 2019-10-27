# Datentypen und JSON

## Datentypen und JSON

Übersicht über die wichtigsten Datentypen, die in JavaScript (und in JSON) definiert sind

JSON = _JavaScript Object Notation_: Datenformat, das insbesondere in der Webentwicklung wichtig ist.

## Datentypen

- Number
- String
- Boolean
- Null (& Undefined)
- Array
- Object

## Datentypen: Null (& undefined)

symbolisiert das "Fehlen" eines Wertes

```json
null
```

`null` existiert sowohl in JavaScript als auch in JSON; in JavaScript gibt es einen weiteren ähnlichen Wert: `undefined`

## Datentypen: String

In JSON werden Strings _immer_ mit doppelten Anführungszeichen begrenzt

```json
"Hello, world!"
```

## Datentypen: Array

Ein _Array_ beinhaltet eine Abfolge von anderen Objekten

```json
["Anne", "Bob", "Chris"]
```

```json
[2, 3, 5, 7, 11]
```

## Datentypen: Objekt

Ein _Objekt_ beinhaltet benannte Einträge

## Datentypen: Objekt

In JSON müssen die Namen der Einträge mit Anführungszeichen umschlossen sein

```json
{
  "firstName": "Thomas",
  "lastName": "Edison",
  "birthYear": 1847,
  "living": false
}
```

## Datentypen: Objekt

In JavaScript können Namen der Einträge auch ohne Anführungszeichen stehen, sofern sie nur aus Buchstaben, Ziffern und Unterstrichen bestehen

```js
{
  firstName: "Thomas",
  lastName: "Edison",
  birthYear: 1847,
  living: false
}
```

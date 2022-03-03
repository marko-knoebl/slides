# Grundlegende (primitive) Datentypen

## Grundlegende (primitive) Datentypen

- `Number`: Zahl
- `String`: Text
- `Boolean`: Ja/Nein - Wert (Wahrheitswert)
- `null`: fehlender / unbekannter Wert
- `undefined`: (noch) nicht zugewiesen

## Number

Beispiel:

```js
((7 - 3) * 0.5) / 3.5;
```

## String

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

Strings werden entweder mit einfachen oder doppelten Anführungszeichen begrenzt

<!-- prettier-ignore -->
```js
let greeting = 'Hello';
let name = "Tom";
```

## Zusammensetzen von Strings

Zusammensetzen von mehreren Strings:

```js
let name = 'Tom';
let message = 'Hello, ' + name + '!';
```

## Template-Strings

weitere Möglichkeit, Strings zu erstellen - mit _Backticks_ begrenzt (`)

Erlauben das Einsetzen von Werten

```js
let name = 'Tom';
let message = `Hello, ${name}!`;
```

## Template-Strings

Wie schreiben wir dieses Zeichen: ` ?

`Shift` + Taste neben der Löschtaste, dann Leertaste

oder:

2x `Shift` + Taste neben der Löschtaste

## Strings - Escape-Sequenzen

Problem: Wie setzen wir besondere Zeichen wie z.B. `'` innerhalb eines gewöhnlichen Strings?

Ungültig:

<!-- prettier-ignore -->
```js
let text = 'I'm ready.'
```

## Strings - Escape-Sequenzen

Lösung:

<!-- prettier-ignore -->
```js
let text = 'I\'m ready';
```

JavaScript interpretiert die Zeichenfolge `\'` wie ein einzelnes `'`

## Strings - Weitere Escape-Sequenzen

Zeilenumbruch in 1 Zeile: `\n`

```js
let a = 'line 1\nline 2';
```

Einzelner Backslash:

```js
let b = 'C:\\docs';
```

## Boolean

Boolescher Wert: Ja/Nein - Wert

In JavaScript: `true` oder `false`

## Null

Null repräsentiert einen unbekannten oder fehlenden Wert

```js
let firstName = 'Michael';
let middleName = null;
let lastName = 'Jones';
```

## Undefined

Undefined tritt z.B. bei Variablen auf, die noch nicht zugewiesen wurden

```js
let firstName;
```

# Die interaktive JavaScript-Konsole

## Die interaktive JavaScript-Konsole

Zugriff auf eine JavaScript-Konsole:

- im _Webbrowser_: Developer Tools (F12) - Konsole
- in node.js (falls installiert): Terminal-Befehl `node`

## Mathematische Operatoren

```js
2 * 2 + 3 / 2;
```

## Statements

Eine einzelne Anweisung in JavaScript nennt sich Statement. Üblicherweise werden Statements mit Semikolons beendet - wobei in JavaScript die Semikolons meist auch weggelassen werden können.

## Variablen

Daten können in Programmiersprachen mit einem Namen versehen werden - man spricht von Variablen.

Variablen werden in JavaScript üblicherweise mit `let` deklariert

```js
let firstName = 'John';
let lastName = 'Doe';
let birthYear = 1962;
```

## Variablen

```js
let age = 2019 - birthYear;
```

## Variablen

Variablennamen werden üblicherweise zusammen geschrieben, wobei neue Wortanfänge groß geschrieben werden

Variablennamen dürfen nur aus Buchstaben, Ziffern und Unterstrichen bestehen

## Variablen

Überschreiben (neu setzen) von Variablen:

```js
let birthYear = 1962;
birthYear = 1970;
birthYear = birthYear + 1;
```

## Einfache (primitive) Datentypen

Mit welchen Arten von Daten - außer Zahlen - arbeitet ein Computer noch?

## Einfache (primitive) Datentypen

- `Number`: Zahl "mit 64 bit Genauigkeit"
- `String`: Text
- `Boolean`: Ja/Nein - Wert (Wahrheitswert)

## Number

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräseniert werden, sie werden immer gerundet

z.B.: `1/3`

Der Computer kann auch Zahlen wie `0.1` oder `0.2` nicht genau repräsentieren

Beispiel: `0.3 - 0.2 - 0.1`

## String

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

```js
'Hallo';
'Hallo' + 'Andreas';
```

## String

Strings werden entweder mit einfachen oder doppelten Anführungszeichen begrenzt

<!-- prettier-ignore -->
```js
'Hallo';
"Hallo";
```

## Template-Strings

- Syntax zum _Erstellen_ von Strings
- Werden mit Backticks begrenzt
- Erlauben mehrzeilige Strings und Interpolation:

```js
let name = 'Anton';
let greeting = `Hallo, ${name}!
                Das ist ES2015!`;
```

## Template-Strings

Wie schreiben wir dieses Zeichen: ` ?

`Shift` + Taste neben der Löschtaste, dann Leertaste

oder:

2x `Shift` + Taste neben der Löschtaste

## Strings - Escape-Sequenzen

Problem: Wie setzen wir Zeichen wie zB `'` innerhalb eines gewöhnlichen Strings?

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

```js
`text.length`; // 14
```

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

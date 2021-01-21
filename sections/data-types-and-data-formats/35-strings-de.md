# Strings

## Strings

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

Heutzutage können in Strings _meist_ alle Unicode-Zeichen verwendet werden; in manchen Fällen ist die Zeichenauswahl allerdings eingeschränkt - z.B. auf _ASCII_

## Strings

Strings werden üblicherweise mit einfachen oder doppelten Anführungszeichen begrenzt

Gültiger String in Python, JavaScript, JSON:

```txt
"Hello, world!"
```

Gültiger String in Python, JavaScript, SQL:

```txt
'Hello, world!'
```

## Strings - Escape-Sequenzen

Problem: Wie schreiben wir Zeichen wie z.B. `"` innerhalb eines Strings?

Ungültig:

```py
"He said: "hi!""
```

## Strings - Escape-Sequenzen

Lösungen in Python, JavaScript, JSON:

```JSON
"He said: \"hi!\""
```

Die Zeichenfolge `\"` wird wie ein einzelnes Anführungszeichen interpretiert

Lösung in CSV (und ähnlich in SQL):

```
"He said: ""hi!"""
```

Die Zeichenfolge `""` wird wie ein einzelnes gewöhnliches Anführungszeichen interpretiert

## Strings - Escape-Sequenzen

Weitere Escape-Sequenzen in Programmiersprachen:

Zeilenumbruch in 1 Zeile (Linux, Mac):

```json
"line 1\nline 2"
```

Zeilenumbruch in 1 Zeile (Windows):

```json
"line 1\r\nline 2"
```

Einzelner Backslash:

```json
"C:\\programs\\firefox"
```

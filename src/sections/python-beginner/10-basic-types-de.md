# Grundlegende Datentypen

## Grundlegende Datentypen

- `int` (integer): Ganzzahl
- `float`: Kommazahl
- `str` (string): Text
- `bool` (boolean): Ja/Nein - Wert (Wahrheitswert)
- none: fehlender / unbekannter Wert

## int

Beispiel: `3`

Operationen:

```py
5 - 3 * 4 / 2
```

## float

Beispiele: `3.3`, `3.0`

## str

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

Strings werden entweder mit einfachen oder doppelten Anführungszeichen begrenzt

```py
greeting = "Hello"
name = 'Tom'
```

## str

mehrzeilige Strings: in dreifachen Anführungszeichen

```py
"""Hello,
my name is
Andreas"""
```

## Strings zusammensetzen

```py
name = 'Tom'
```

Option 1 (f-strings):

```py
msg1 = f"Hello, {name}"
```

Option 2:

```py
msg2 = "Hello, " + name
```

## Strings - Escape-Sequenzen

Problem: Wie schreiben wir Zeichen wie z.B. `"` innerhalb eines Strings?

Ungültig:

```py
text = "He said: "hi!""
```

## Strings - Escape-Sequenzen

Lösung:

```py
text = "He said: \"hi!\""
```

Python interpretiert die Zeichenfolge `\"` wie ein einzelnes `"`

## Strings - Escape-Sequenzen

Zeilenumbruch: `\n`

```py
a = 'line 1\nline 2'
```

einzelner Backslash: `\\`

```py
b = 'C:\\docs'
```

## bool

Boolescher Wert: Ja/Nein - Wert

In Python: `True` oder `False`

Achtung: Groß- und Kleinschreibung ist wichtig!

## None

Wert ist unbekannt oder fehlt

```py
first_name = "Mike"
middle_name = None
last_name = "Jones"
```

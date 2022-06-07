# Grundlegende (primitive) Datentypen

## Grundlegende (primitive) Datentypen

- `int` (integer): Ganzzahl
- `float`: Kommazahl
- `str` (string): Text
- `bool` (boolean): Ja/Nein - Wert (Wahrheitswert)
- none: fehlender / unbekannter Wert

## int and float

Beispiel:

```py
(7 - 3) * 0.5 / 3.5
```

## str

Ein _String_ - auch _Zeichenkette_ - repräsentiert Text

Begrenzung durch einfache oder doppelte Anführungszeichen

```py
greeting = "Hello"
name = 'John'
```

## Strings zusammensetzen

```py
name = 'John'
```

Variablen einsetzen (f-Strings):

```py
message1 = f"Hello, {name}!"
```

Strings zusammensetzen:

```py
message2 = "Hello, " + name + "!"
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

beachte Großschreibung

## None

Wert ist unbekannt oder fehlt

```py
first_name = "John"
middle_name = None
last_name = "Doe"
```

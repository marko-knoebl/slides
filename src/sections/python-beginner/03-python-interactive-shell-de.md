# Die interaktive Python-Konsole

## Die interaktive Python-Konsole

Starten:

- Terminal-Befehl `python`
- aus dem Startmenü (z.B. _Python 3.7 (64-bit)_)

## Mathematische Operatoren

```py
2 * 2 + 3 / 2
```

## Einfache (primitive) Datentypen

Mit welchen Arten von Daten - außer Zahlen - arbeitet ein Computer noch?

## Einfache (primitive) Datentypen

- `int` (integer): Ganzzahl
- `float`: Kommazahl
- `str` (string): Text
- `bool` (boolean): Ja/Nein - Wert (Wahrheitswert)

## int

Beispiele: `3`, `10`

## float

Beispiele: `3.3`, `3.0`

## float

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräseniert werden, sie werden immer gerundet

zB: `1/3`

Der Computer kann auch Zahlen wie `0.1` oder `0.2` nicht genau repräsentieren

Beispiel: `0.3 - 0.2 - 0.1`

## str

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

```py
"Hallo"
"Hallo" + "Andreas"
"Hallo" * 3
```

## str

Strings werden entweder mit einfachen oder doppelten Anführungszeichen begrenzt

```py
"Hallo"
'Hallo'
```

## str

mehrzeilige Strings: in dreifachen Anführungszeichen

```py
"""Hello,
my name is
Andreas"""
```

## str

Ungültige Operationen:

```py
"Hello" - "Tim"
"Hello" * "Tim"
"Hello" * 3.0
```

## f-strings

Werte in Strings einsetzen:

```py
f"A year has {365 * 24} hours."
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

```py
print(len(text)) # 14
```

## Strings - Escape-Sequenzen

```py
# Zeilenumbruch in 1 Zeile: \n
a = 'line 1\nline 2'

# einzelner Backslash: \\
b = 'C:\\docs'
```

## bool

Boolescher Wert: Ja/Nein - Wert

In Python: `True` oder `False`

Achtung: Groß- und Kleinschreibung ist wichtig!

## Variablen

Daten können in Python mit einem Namen versehen werden - man spricht von Variablen

```py
first_name = "John"
last_name = "Doe"
birth_year = 1978
```

## Variablen

```py
full_name = f"{first_name} {last_name}"
age = 2019 - birth_year
```

## Variablen

Variablennamen werden üblicherweise klein geschrieben und durch Unterstriche getrennt

Variablennamen dürfen nur aus Buchstaben, Ziffern und Unterstrichen bestehen

## Variablen

Überschreiben (neu Setzen) von Variablen:

```py
name = "John"
name = "Jane"
a = 3
a = a + 1
```

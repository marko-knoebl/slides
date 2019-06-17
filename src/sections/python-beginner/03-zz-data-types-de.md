# Datentypen

## Datentypen

Primitive Datentypen:

- `int` (integer): Ganzzahl
- `float`: Kommazahl
- `str` (string): Text
- `bool` (boolean): Ja/Nein - Wert (Wahrheitswert)
- none: fehlender / unbekannter Wert

Weitere Datentypen:

- `dict` (dictionary): Sammlung von Einträgen, die unter einem bestimmten Namen / Schlüssel abrufbar sind
- `list`: Aufreihung anderer Objekte

## int

Beispiele: `3`, `10`

## float

Beispiele: `3.3`, `3.0`

## float

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräseniert werden, sie werden immer gerundet

Beispiel: `1/3`

Der Computer kann auch Zahlen wie `0.1` oder `0.2` nicht genau repräsentieren

Beispiel: `0.3 - 0.2`

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

## dict

Dictionaries sind Zuordnungen, die bestimmten Einträgen zugehörige Werte zuweisen.

```py
person = {
    "first_name": "John",
    "last_name": "Doe",
    "nationality": "Canada",
    "birth_year": 1980
}
```

## dict

Elementzugriff bei dicts

```py
person["first_name"]
```

```py
person["first_name"] = "Jane"
```

## list

Listen sind ein Datentyp, der eine Folge von anderen Objekten repräsentiert

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## list

Auslesen von Listenelementen mittels Listenindex (bei 0 beginnend)

```py
users = ["Alice", "Bob", "Charlie"]

users[0]
users[2]
users[-1]
```

## list

Überschreiben von Listenelementen

```py
users[0] = "Andrew"
```

## list

Anhängen von Listenelementen

```py
users.append("Dora")
```

## list

Entfernen von Listenelementen

```py
users.pop(1)
```

## Datentypen - Aufgaben

Wir beginnen mit einem leeren _dictionary_ und erstellen daraus eine Datenstruktur, die z.B. eine Person darstellt

```py
person = {}
```

gewünschtes Resultat z.B.:

```py
{
    "first_name": "Kofi",
    "last_name": "Annan",
    "birth_year": 1938,
    "children": ["Ama", "Kojo"]
}
```

## Datentypen - Aufgaben

erstelle und ändere Datenstrukturen, die folgendes darstellen:

- Daten zu einem Staat der Welt (Einwohnerzahl, Hauptstadt, Nachbarländer)
- eine Liste von erledigten bzw nicht erledigten Todos
- Transaktionen auf einem Bankkonto

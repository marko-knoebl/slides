# Reine Funktionen

## Reine Funktionen

Reine Funktionen sind Funktionen, die mit ihrer Umgebung nur über Eingabeparameter und Rückgabewerte interagieren

Das bedeutet insbesondere:

- alle Eingabewerte werden über Parameter übergeben (die Funktion liest keine weiteren Variablen ein und interagiert auch nicht mit der Umwelt, z.B. durch das Lesen von Daten auf der Festplatte)
- die Funktion verändert ihre Umwelt nicht; wenn sie veränderliche Objekte übergeben bekommt, ändert sie diese nicht ab
- das Resultat des Funktionsaufrufs ist der Rückgabewert; sonst wird von der Funktion nichts geändert

## Reine Funktionen

Vorteile reiner Funktionen:

- leicht wiederverwendbar (da sie nicht von ihrer Umgebung abhängen)
- leicht zu testen

## Reine Funktionen

Beispiel für eine Funktion, die nicht rein ist:

```py
def remove_negatives(numbers):
    i = 0
    while i < len(numbers):
        if numbers[i] < 0:
            numbers.pop(i)
    return numbers

a = [2, 4, -1, -2, 0]
b = remove_negatives(a)
```

## Reine Funktionen

Reine Funktion als Alternative:

```py
def remove_negatives(numbers):
    nonnegatives = []
    for n in numbers:
        if n >= 0:
            nonnegatives.append(n)
    return nonnegatives
```

Anmerkung: In Python wäre die Ideallösung hier das verwenden von List Comprehensions

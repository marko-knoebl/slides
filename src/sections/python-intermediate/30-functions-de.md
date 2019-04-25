# Funktionen

## Funktionen

Definition:

```py
def sum(a, b):
    return a + b

sum(1, 2) # 3
```

## Call by sharing

## Call by sharing

Java / C:

- call by reference

- call by value

## Call by sharing

Beispiel:

```py
def modify1(mylist):
    mylist.append(1)
    return mylist

def modify2(mylist):
    return mylist + [1]
```

## Globaler und lokaler scope

`global` / `nonlocal`

Spielt beim _Zuweisen_ von Variablen eine Rolle

## Standard-Parameter

Parameter können einen Standardwert haben. Dieser wird verwendet, wenn kein expliziter anderer Wert übergeben wird.

Beispiel:

```py
def shout(phrase, end="!"):
    print(phrase.upper() + end)

shout("hallo") # HALLO!
shout("hi", ".") # HI.
```

## Schlüsselwort-Parameter

## Beliebige Anzahl an Parametern (args / kwargs)

```py
def foo(*args, **kwargs):
    print(args)
    print(kwargs)

foo("one", "two", x="hello")
# args: ("one", "two")
# kwargs: {"x": "hello"}
```

## Beispiel

Aufgabe: "Nachbau" von `range()`

## Reine Funktionen

Reine Funktionen sind Funktionen, die mit ihrer Umgebung nur über Eingabeparameter und Rückgabewerte interagieren

Das bedeutet insbesondere:

- alle Eingabewerte werden über Parameter übergeben (die Funktion bekommt liest keine weiteren Variablen ein und interagiert auch nicht mit der Umwelt, z.B. durch das Lesen von Daten auf der Festplatte)
- die Funktion verändert ihre Umwelt nicht; wenn sie veränderliche Objekte übergeben bekommt, ändert sie diese nicht ab
- das Resultat des Funktionsaufrufs ist der Rückgabewert; sonst wird von der Funktion nichts geändert

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

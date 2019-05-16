# Funktionsdefintion

## Funktionsdefinition

Beispiel:

```py
def average(a, b):
    m = (a + b) / 2
    return m
```

## Scope

Eine Funktionsdefinition öffnet einen neuen _Scope_, einen Geltungsbereich für Variablen

Im folgenden Beispiel gibt es zwei separate Variablen, die beide mit `m` benannt sind:

```py
m = "Hello, world"

def average(a, b):
    m = (a + b) / 2
    return m
x = average(1, 2)

print(m)
```

## Scope

Innerhalb einer Funktion gilt: Variablen, die außerhalb definiert sind, können gelesen, aber nicht geschrieben werden

In anderen Programmiersprachen: auch Konstrukte wie `if` oder `for` eröffnen einen neuen Scope - nicht so in Python

## Aufgabe: Funktion lottery()

Schreibe eine Funktion namens `lottery`, die eine Liste von Lotteriezahlen erzeugt

`lottery()` → `[2, 35, 19, 27, 10]`

## Aufgabe: isprime()

Schreibe eine Funktion namens `isprime`, die überprüft, ob eine Zahl eine Primzahl ist

`isprime(59)` → `True`

## Aufgabe: ask_yes_no()

Schreibe eine Funktion namens `ask_yes_no`, die dem Benutzer eine Ja/Nein-Frage stellt und entweder `True` oder `False` zurückliefert

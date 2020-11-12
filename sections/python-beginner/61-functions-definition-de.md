# Funktionsdefintion

## Funktionsdefinition

Beispiel:

```py
def average(a, b):
    m = (a + b) / 2
    return m
```

## Optionale Parameter und Standardwerte

Folgendermaßen definieren wir Standardwerte für Parameter:

```py
def shout(phrase, end="!"):
    print(phrase.upper() + end)

shout("hello") # HELLO!
shout("hi", ".") # HI.
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

print(m) # prints "Hello, world"
```

## Scope

Innerhalb einer Funktion gilt: Variablen, die außerhalb definiert sind, können gelesen, aber nicht geschrieben werden

In anderen Programmiersprachen: auch Konstrukte wie `if` oder `for` eröffnen einen neuen Scope - nicht so in Python

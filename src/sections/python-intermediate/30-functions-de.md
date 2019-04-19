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

## beliebige Anzahl an Parametern (args / kwargs)

## Beispiel

Aufgabe: "Nachbau" von `range()`

## Rekursive Funktionen

Funktionen, die sich selbst aufrufen

## Rekursive Funktionen

Aufgabe: Fibonacci-Folge

```py
# 0 1 1 2 3 5 8 13 21 34 55 89 ...

fib(3)

fib(25)
```

## Rekursion mit Turtle

## Aufgaben

- 3 (Heron)
- 4 (Hanoi)
- 5 (Bäume)

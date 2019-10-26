# Funktionen

## Beliebige Anzahl an Parametern (args / kwargs)

```py
def foo(*args, **kwargs):
    print(args)
    print(kwargs)

foo("one", "two", x="hello")
# args: ("one", "two")
# kwargs: {"x": "hello"}
```

`args` ist ein Tupel, `kwargs` ein Dictionary.

## Beliebige Anzahl an Parametern (args / kwargs)

Aufgabe: "Nachbau" von `range()` mit Hilfe einer while-Schleife

## Entpacken von Parameterlisten

```py
numbers = ["one", "two", "three"]

# equivalent:
print(numbers[0], numbers[1], numbers[2])

print(*numbers)
```

## Globaler und lokaler Scope

`global` / `nonlocal`

Spielt beim _Zuweisen_ von Variablen eine Rolle

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

## Beispiel

Aufgabe: "Nachbau" von `range()`

## Globaler und lokaler Scope

`global` / `nonlocal`

Spielt beim _Zuweisen_ von Variablen eine Rolle

## Call by sharing

In Python werden Werte mittels _call by sharing_ an Funktionen übergeben (ähnlich wie _call by reference_ in anderen Sprachen)

Dies bedeutet: Eine Funktion _kann_ übergebene Parameter abändern - und wir sollten darauf achten, das in der Praxis nicht zu tun

## Call by sharing

Beispiel:

```py
def modify_a(mylist):
    mylist.append(1)
    return mylist

def modify_b(mylist):
    return mylist + [1]

list_a = [1, 2]
list_a_mod = modify_a(list_a)
list_b = [1, 2]
list_b_mod = modify_b(list_b)
```

## Call by sharing

```py
list_a_mod # [1, 2, 1]
list_b_mod # [1, 2, 1]
list_a # [1, 2, 1]
list_b # [1, 2]
```

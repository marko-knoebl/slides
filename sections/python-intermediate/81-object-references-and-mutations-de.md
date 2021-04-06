# Objektreferenzen und Mutationen

## Objektreferenzen und Mutationen

Was ist der Wert von `a` am Ende dieses Programms?

```py
a = [1, 2, 3]
b = a
b.append(4)
```

## Objektreferenzen und Mutationen

Eine Zuweisung (z.B. `b = a`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.

## Objektreferenzen und Mutationen

Durch das Ausführen von `b = a` entsteht einen zusätzliche Referenz, die sich auf das selbe Objekt bezieht.

Operationen, die zum Setzen zusätzlicher Referenzen führen:

- Zuweisungen (`b = a`)
- Funktionsaufrufe (`myfunc(a)` - es entsteht eine neue funktionsinterne Referenz)
- Eintragungen in Kollektionen (z.B. `mylist.append(a)`)
- ...

## Objektreferenzen bei Funktionen

Der Aufruf einer Funktion mit einem Objekt als Parameter versieht dieses Objekt mit einer weiteren Referenz (_call by sharing_).

```py
def foo(a_inner):
    print(id(a_inner))

a_outer = []
foo(a_outer)
print(id(a_outer))
```

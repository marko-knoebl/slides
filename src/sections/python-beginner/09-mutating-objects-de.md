## Objekte abändern

In Python können Listen verändert werden - z.B. durch das anhängen eines neuen Eintrags

Viele andere Objekte - z.B. str, int, float - können nicht abgeändert werden. Jedoch ist es möglich, neue, veränderte Objekte basierend auf bereits vorhandenen Objekten zu erstellen.

## Objekte abändern

```py
a = [1, 2, 3]
# creating a new object
a = a + [4]

a = [1, 2, 3]
# a is modified directly
a.append(4)
```

## Objekte abändern

Was wird das folgende Programm ausgeben?

```py
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

## Objekte abändern

Eine Zuweisung (`b = ...`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.

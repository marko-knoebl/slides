# Vergleiche

## Vergleiche

Um `if` und `while` nutzen zu können, müssen wir Werte vergleichen können:

```py
a = 2
b = 5

print(a == b) # a is equal to b
print(a != b) # a not equal to b
print(a < b)  # a is smaller than b
print(a > b)
print(a <= b) # a is smaller than or equal to b
print(a >= b)
```

## Vergleiche

Das Resultat eines Vergleichs ist ein _boolescher Wert_ (`True` / `False`)

Wir können das Resultat in einer Variablen speichern:

```py
is_adult = age >= 18
```

## Verknüpfung mit and, or, not

Beispiele:

```py
if age >= 18 and country == "de":
    print("may drink alcohol")

if temperature < -10 or temperature > 30:
    print("extreme weather")

if not value > 10:
    print("value not greater than 10")
```

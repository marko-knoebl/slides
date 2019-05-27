# Iterators

## Iterators

Oberflächlich: Ein Iterator ist ein besonderes Objekt, über das wir mit `for o in my_iterator` iterieren können.

Iterators können auf verschiedene Arten erzeugt werden.

## Iterators

Genauer Hintergrund: Ein Iterator ist ein besonderes Objekt, das eine `__next__`-Methode besitzt.

## Iterators - Beispiel count

```py
from itertools import count

for i in count():
    print(i)
```

## Iterators - Beispiel count

```py
from itertools import count

c = count()

c.__next__()
c.__next__()
```

## Iterators - Beispiel count

```py
from itertools import count

c = count()

next(c)
next(c)
```

## Iterators - Beispiel repeat

```py
from itertools import repeat

r = repeat('a', 5)

next(r)
...
```

## Iterators - Beispiel repeat

Wenn ein Iterator "aufgebraucht" ist:

`StopIteration`-Exception

## Iterators erzeugen

Möglichkeiten:

- Funktionen aus `itertools`
- Eigene Klasse mit `__next__` (und `__iter__`)
- Generator-Expression
- Funktion mit `yield`

## itertools

https://docs.python.org/3/library/itertools.html

## Eigene Klasse

Übungen:

```py
for i in random():
    ...
```

oder

```py
for number in roulette():
    print(number, end=" ")

4 0 29 7 13 19
```

## Generator-Expression

Sehr ähnlich zur List-Comprehension

```py
# list-comprehension
mylist = [i*i for i in range(3)]

# generator
mygenerator = (i*i for i in range(3))
```

## Generator-Expression

Unterschiede zur List-Comprehension

- weniger Resourcenverbrauch (Speicher, ...)
- Durchlauf nur 1x und nach der Reihe

## yield

Eine Funktion kann anstatt eines return-Statements ein yield-Statement enthalten und wird dann zum Generator

```py
# eigener count-generator
def count():
    i = 0
    while True:
        yield i
        i += i
```

## Iterable und \_\_iter\_\_

Iterable = Objekt, über das iteriert werden kann - definiert eine `__iter__`-Methode

Beispiele: Listen, Iterators

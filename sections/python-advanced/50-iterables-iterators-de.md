# Iterables & Iteratoren

## Iterable

Ein Iterable ist ein Objekt, über das mittels `for o in my_iterable` iteriert werden kann.

Beispiele für Iterables:

- Liste
- Dictionary
- range-Objekte
- Iteratoren

## Iteratoren

Das Iterieren über Objekte erfolgt immer über einen sogenannten _Iterator_ - ein Hilfsobjekt für die Iteration.

Erhalten des Iterators via: `my_iterable.__iter__()`.

## Iteratoren

Iterator einer Liste:

```py
primes = [2, 3, 5, 7]

primes_iterator = primes.__iter__()
```

Auch Iteratoren haben einen Iterator (sich selbst):

```py
primes_iterator_iterator = primes_iterator.__iter__()

print(primes_iterator_iterator == primes_iterator) # True
```

## Iteratoren

Iteratoren haben eine `__next__`-Methode, die jeweils das nächste Element der Iteration liefert.

Beispiel:

```py
numbers = [1, 2, 3]

numbers_iterator = numbers.__iter__()

print(numbers_iterator.__next__())
print(numbers_iterator.__next__())
```

## Iteratoren

Wenn ein Iterator aufgebraucht ist, wird eine `StopIteration`-Exception ausgelöst.

```py
print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
print(numbers_iterator.__next__()) # 3
print(numbers_iterator.__next__()) # StopIteration
```

## Iteratoren erzeugen

Bekannte Möglichkeit:

- aus Iterables (z.B. _list_, _range_ oder _eigene Klasse_) mittels `__iter__`

Weitere Möglichkeiten:

- Funktionen aus `itertools`
- Generator-Ausdruck
- Funktion mit `yield`

## Itertools

Modul zum Erzeugen von Iteratoren

- `itertools.count`
- `itertools.repeat`
- `itertools.product`

https://docs.python.org/3/library/itertools.html

## Itertools - Beispiel count

```py
from itertools import count

for i in count():
    print(i)
```

## Iteratoren - Beispiel count

```py
from itertools import count

c = count()

c.__next__()
c.__next__()
```

## Iteratoren - Beispiel count

```py
from itertools import count

c = count()

next(c)
next(c)
```

## Iteratoren - Beispiel repeat

```py
from itertools import repeat

r = repeat('a', 5)

next(r)
...
```

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

Unterschiede zur List-Comprehension:

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

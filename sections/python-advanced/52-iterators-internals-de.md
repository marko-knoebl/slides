# Iterators: Hintergründe

## Iterators: Hintergründe

In Python wird jede for-Schleife über einen _Iterator_ durchlaufen.

Wenn eine Iteration über ein iterierbares Objekt ausgeführt wird, wird für diese Iteration ein _Iterator_ erstellt.

Jedes Iterable hat eine `__iter__`-Methode, die einen Iterator zurückgibt.

## Iterators: Hintergründe

Ein Iterator besitzt eine `__next__`-Methode

`__next__()` gibt entweder das nächste Objekt der Iteration zurück oder wirft eine `StopIteration`-Exception

Ein Iterator is tatsächlich auch immer ein Iterable (hat eine `__iter__`-Methode, die den Iterator zurückgibt)

## Iterators: Hintergründe

Iterator einer Liste:

```py
numbers = [1, 2, 3, 4]

numbers_iterator = numbers.__iter__()
```

## Iterators: Hintergründe

Iterators haben eine `__next__`-Methode, die das nächste Objekt in der Iteration zurückgibt.

Beispiel:

```py
numbers = [1, 2, 3]

numbers_iterator = numbers.__iter__()

print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
```

## Iterators: Hintergründe

Wenn ein Iterator "verbraucht" ist, wird eine `StopIteration`-Exception ausgelöst:

```py
print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
print(numbers_iterator.__next__()) # 3
print(numbers_iterator.__next__()) # StopIteration
```

## Iterators: Hintergründe

Die globale Funktion `next()` ist äquivalent zum Aufruf von `.__next__()`

```py
next(numbers_iterator)
```

```py
numbers_iterator.__next__()
```

## Iterators: Hintergründe

Übung: Wir erstellen ein selbstdefiniertes Iterable durch das Implementieren einer klasse mit `__iter__` und `__next__`

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

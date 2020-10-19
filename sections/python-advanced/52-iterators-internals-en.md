# Iterators: internals

## Iterators: internals

In Python every for loop happens via an _iterator_.

When iterating over an _iterable_, an _iterator_ is created for that iteration.

Every iterable has an `__iter__` method which returns an iterator

## Iterators: internals

An iterator has a method called `__next__`

`__next__()` either returns the next value of the iteration or raises a `StopIteration` exception

An iterator is actually _also_ an iterable (it has an `__iter__` method which returns itself)

## Iterators: internals

Iterator of a list:

```py
numbers = [1, 2, 3, 4]

numbers_iterator = numbers.__iter__()
```

## Iterators: internals

Iterators have a method named `__next__` which will return the next object of an iteration.

Example:

```py
numbers = [1, 2, 3]

numbers_iterator = numbers.__iter__()

print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
```

## Iterators: internals

When an iterator is used up a `StopIteration` exception is raised.

```py
print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
print(numbers_iterator.__next__()) # 3
print(numbers_iterator.__next__()) # StopIteration
```

## Iterators: internals

The global function `next()` is equivalent to calling `.__next__()`

```py
next(numbers_iterator)
```

```py
numbers_iterator.__next__()
```

## Iterators: internals

exercise: create custom iterables from a class by implementing `__iter__` and `__next__`

```py
for i in random():
    ...
```

or

```py
for number in roulette():
    print(number, end=" ")

4 0 29 7 13 19
```

# Pure functions

## Pure functions

Pure functions are functions which only interact with their environment via input parameters and return values

in particular, this means:

- no reading / writing of variables outside of the function
- no I/O (no access to disk / network)
- no mutating of objects that are passed in

## Pure functions

Advantages of pure functions

- easily reusable (as they are independent of their environment)
- easy to test

## Pure functions

Example of a function which isn't pure:

```py
def remove_negatives(numbers):
    i = 0
    while i < len(numbers):
        if numbers[i] < 0:
            numbers.pop(i)
    return numbers

a = [2, 4, -1, -2, 0]
b = remove_negatives(a)
```

## Pure functions

A pure function as an alternative:

```py
def remove_negatives(numbers):
    nonnegatives = []
    for n in numbers:
        if n >= 0:
            nonnegatives.append(n)
    return nonnegatives
```

Note: in Python the ideal solution would be using list comprehensions

# While loops

## While loops

An if clause will execute a code block _once_ if a criterion holds

A while clause will execute a code blok _as long as_ a criterion holds

example:

```py
a = 1

while a < 2000:
    print(a)
    a = a * 2
```

## While loops

exercises:

- guess the number with multiple attempts
- a loop that prints the numbers 1 to 10
- a loop that prints the numbers 7, 14, 21, ..., 70
- exercise program for simple calculations
- shopping list

## While loops

Exercise: shopping list

Example interaction:

```txt
enter an item or "x" to quit:
milk
enter an item or "x" to quit:
bread
enter an item or "x" to quit:
apples
enter an item or "x" to quit:
x
your shopping list is:
["milk", "bread", "apples"]
```

## Continue & break

The keywords `continue` and `break` may be used to end the current iteration or the entire loop respectively.

In nested loops they refer to the innermost loop.

## Continue & break

example:

```py
a = 1

while True:
    a = a * 2
    print(a)
    if (a > 1000):
        break
```

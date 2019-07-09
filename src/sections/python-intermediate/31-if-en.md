# if

## if

From a previous example:

```py
if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## Conditions

When using conditions for `if` / `while` we usually use expressions that evaluate to boolean values.

However, we can also use other types:

```py
a = 0
if a: ...

name = input("enter your name")
if name: ...

products = []
if products: ...
```

## Conditions

Any value may be used as a condition in Python. Most values will be "truthy".

Only these values are considered "falsy":

- `False`
- `0`, `0.0`
- `None`
- empty collections / sequences (`""`, `[]`, `()`, `{}`)
- (before Python 3.5: `datetime.time(0, 0, 0)`)

## Conditions

Not "pythonic":

```py
name = input("Enter your name:")
if name != "":
    ...
```

"pythonic" version:

```py
name = input("Enter your name:")
if name:
    ...
```

## if expressions

An expression that evaluates to one of two possibilities based on a boolean criterion

```py
size = 'small' if length < 110 else 'big'
```

in other languages this could be written as:

```js
// JavaScript
size = length < 110 ? 'small' : 'big';
```

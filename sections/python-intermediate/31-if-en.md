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

These types are converted to boolean values before being used as criteria for the if condition.

## Conditions

Any value may be used as a condition in Python. Most values will be "truthy".

Only these values are considered "falsy" - calling `bool(...)` will return `False`:

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

## Chaining comparisons

checking if `age` lies in the range of 13-19:

```py
13 <= age and age <= 19
```

short version:

```py
13 <= age <= 19
```

checking if `a` and `b` are both `0` (short version):

```py
a == b == 0
```

## if expressions

An expression that evaluates to one of two possibilities based on a boolean criterion

```py
size = 'small' if length < 100 else 'big'
```

in other languages this could be written as:

```js
// JavaScript
size = length < 100 ? 'small' : 'big';
```

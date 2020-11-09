# Comparisons

## Comparisons

In order to use `if` and `while` we have to compare values:

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

## Comparisons

The _result_ of a comparison is a _boolean value_ (`True` / `False`)

We can store the result in a variable:

```py
is_adult = age >= 18
```

## Combining comparisons with and, or, not

Examples:

```py
if age >= 18 and country == "de":
    print("may drink alcohol")

if temperature < -10 or temperature > 30:
    print("extreme weather")

if not value > 10:
    print("value not greater than 10")
```

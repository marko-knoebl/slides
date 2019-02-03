# control structures

## control structures

By using control structures we can let Python execute some code repeatedly or only under certain circumstances

## control structures

The two most essential control structures in every programming language are:

- if/else
- loops

## comparisons

In order to use basic control structures we have to be able to compare values:

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

## if / else

## if / else

example:

```py
age = 30
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## if / elif / else

```py
if age_seconds < 100000000:
    print("You are les than 100 million seconds old")
elif age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## if / elif / else

example: guess the number

## code blocks

code block = a group of lines that belong together - for example the code that gets executed when an if condition is true

In Python the line before the code block ends with a `:` and the code block is indented (usually by 4 spaces)

## while loops

An if clause will execute a code block _once_ if a criterion holds

A while clause will execute a code blok _as long as_ a criterion holds

example:

```py
a = 1

while a < 2000:
    print(a)
    a = a * 2
```

## combining comparisons

simple:

```py
if a == 3:
    print("a is 3")
```

more complex:

```py
if a == 3 and 4 < b < 10:
    print("a is 3 and b is between 4 and 10")
```

## combining comparisons

```py
# b is greater than 4 and less than 10 (chained comparison)
4 < b < 10

# longer version
b > 4 and b < 10

# c is not between 4 and 10
not 4 < c < 10

# alternative version:
c <= 4 or c >= 10
```

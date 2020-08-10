# Exceptions

## Types of exceptions

- AttributeError, IndexError, KeyError
- NameError
- TypeError
- ValueError
- IOError
- ZeroDivisionError
- ...

Exercise: try and trigger all of the above exceptions

## Catching exceptions

```py
age_str = input("Enter your age")
try:
    age = int(age_str)
except ValueError:
    print("Could not parse input as number")
```

## Catching exceptions

```py
age_str = input("Enter your age")
try:
    age = int(age_str)
except ValueError as e:
    print("Could not parse input as number")
    print(e)
    print(e.args)
```

## Catching exceptions

Catching multiple types of exceptions:

```py
try:
    file = open("log.txt", encoding="utf-8")
except FileNotFoundError:
    print("could not find log file")
except PermissionError:
    print("reading of file is not permitted")
except Exception:
    print("error when reading file")
```

## Catching exceptions

Using `finally`:

```py
try:
    file = open("log.txt", "w", encoding="utf-8")
    file.write("abc")
    file.write("def")
except IOError:
    print("Error when writing to file")
finally:
    file.close()
```

## Catching exceptions

Using `else`:

```py
try:
    file = open("log.txt", "w", encoding="utf-8")
except IOError:
    print("could not open file")
else:
    # no errors expected here
    file.write("abc")
    file.write("def")
file.close()
```

## Python philosophy: EAFP

LBYL: _Look before you leap_

EAFP: _It's easier to ask for forgiveness than permission_

(example: parsing numbers)

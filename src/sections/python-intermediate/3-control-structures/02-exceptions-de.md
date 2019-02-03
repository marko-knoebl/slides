# Exceptions

## Arten von Exceptions (Auswahl)

- AssertionError
- AttributeError, IndexError, KeyError
- NameError
- TypeError
- ValueError
- IOError
- ZeroDivisionError

## Exceptions abfangen

```py
age_str = input("Enter your age")
try:
    age = int(age_str)
except ValueError:
    print("Could not parse input as number")
```

## Exceptions abfangen

```py
age_str = input("Enter your age")
try:
    age = int(age_str)
except ValueError as e:
    print("Could not parse input as number")
    print(e)
```

## finally und else bei exceptions

```py
try:
    file = open("log.txt", "w", encoding="utf-8")
except IOError:
    print("could not open file")
else:
    file.write("abc")
    file.write("def")
finally:
    file.close()
```

## Exceptions erneut raisen

```py
try:
    ...
except ClientError as e
    if "DryRunOperation" not in str(e):
        raise
```

## Python-Philosophie: EAFP

EAFP vs LBYL

(Beispiel: Parsen von Zahlen)

# Exceptions (Ausnahmen)

## Arten von Exceptions

- AttributeError, IndexError, KeyError
- NameError
- TypeError
- ValueError
- IOError
- ZeroDivisionError
- ...

Übung: versuche, jede der obigen Exceptions auszulösen

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
    print(e.args)
```

## Exceptions abfangen

Mehrere Arten von Exceptions abfangen:

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

## Exceptions abfangen

Einsatz von `finally`:

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

## Exceptions abfangen

Einsatz von `else`:

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

## Python-Philosophie: EAFP

LBYL: _Look before you leap_

EAFP: _It's easier to ask for forgiveness than permission_

(Beispiel: Parsen von Zahlen)

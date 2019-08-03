# If

## Vergleiche

Für den Einsatz von if und while müssen wir Werte vergleichen können:

```py
a = 2
b = 5

print(a == b) # a gleich b
print(a != b) # a ungleich b
print(a < b)  # a kleiner b
print(a > b)
print(a <= b) # a kleiner oder gleich b
print(a >= b)
```

## If / else

wenn, dann - sonst

## If / else

Beispiel:

```py
age = 30
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## If / elif / else

```py
if age_seconds < 100000000:
    print("You are les than 100 million seconds old")
elif age_seconds < 1000000000:
    print("You are between 100 million and 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are between 1 billion and 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")
```

## Codeblöcke

Codeblock = Zusammengehörige Codezeilen, die z.B. als Resultat einer if-Abfrage ausgeführt werden.

In Python endet die Zeile vor einem Codeblock mit einem `:`, der Codeblock ist eingerückt (meist mit 4 Leerzeichen).

## Verknüpfung von Vergleichen

einfach:

```py
if a == 3:
    print("a is 3")
```

komplexer:

```py
if a == 3 and 4 < b < 10:
    print("a is 3 and b is between 4 and 10")
```

## Verknüpfung von Vergleichen

```py
# b ist größer als 4 und kleiner als 10 (verketteter Vergleich)
4 < b < 10

# längere Version
b > 4 and b < 10

# c liegt nicht zwischen 4 und 10
not 4 < c < 10

# andere Version:
c <= 4 or c >= 10
```

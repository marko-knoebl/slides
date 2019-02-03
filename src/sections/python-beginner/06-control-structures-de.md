# Kontrollstrukturen

## Kontrollstrukturen

Mit Kontrollstrukturen können wir bestimmten Code zB wiederholt ausführen lassen, oder Code nur in bestimmten Situationen ausführen lassen

## Kontrollstrukturen

Die zwei essenziellen Kontrollstrukturen in jeder Programmiersprache:

- if/else-Abfragen, um unter bestimmten Bedingungen die eine oder die andere Aktion zu setzen
- Schleifen, um unter bestimmten Bedingungen eine Aktion zu wiederholen

## Vergleiche

Für den Einsatz von grundlegenden Kontrollstrukturen müssen wir Werte vergleichen können:

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

## if / else

wenn, dann - sonst

## if / else

Beispiel:

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
elif age_seconds < 2000000000:
    print("You are less than 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")
```

## if / elif / else

Beispiel: Zahlenraten

## Codeblöcke

Codeblock = Zusammengehörige Codezeilen, die zB als Resultat einer if-Abfrage ausgeführt werden.

In Python endet die Zeile vor einem Codeblock mit einem `:`, der Codeblock ist eingerückt (meist mit 4 Leerzeichen).

## while-Schleife

Eine if-Abfrage führt einen Codeblock _einmal_ aus, wenn ein Kriterium zutrifft

Eine while-Schleife wiederholt einen Codeblock, solange ein Kriterium zutrifft

Beispiel:

```py
a = 1

while a < 2000:
    print(a)
    a = a * 2
```

## while-Schleife

Beispiele:

- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Zahlenraten mit echten Zufallszahlen
- Rechentrainer mit Zufallsaufgaben

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

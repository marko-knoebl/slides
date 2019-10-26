# Kontrollstrukturen - Übungen

## Kontrollstrukturen - Übungen

- Schaltjahr (if / elif / else)
- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Zahlenraten mit echten Zufallszahlen
- Rechentrainer mit Zufallsaufgaben
- Babylonisches Wurzelziehen

## Übung: Schaltjahr

- Jahr ist Schaltjahr: wenn durch 4 teilbar
- Ausnahme: wenn auch durch 100 teilbar
- Ausnahme von der Ausnahme: wenn auch durch 400 teilbar

Hinweis: "x ist teilbar durch y" in Python: `x % y == 0`

## Übung: Babylonisches Wurzelziehen

Berechnungsverfahren für die Quadratwurzel, das schon vor fast 4000 Jahren in Mesopotamien verwendet wurde

## Übung: Babylonisches Wurzelziehen

```pseudocode
gesucht: Quadratwurzel aus 12345

n = 12345

Beginne mit zwei "Näherungswerten", z.B. a=1 und b=n

wiederhole das folgende, bis a und b fast gleich sind:
neues a = Durchschnitt aus alten Werten a und b
neues b = n / a

=> a und b nähern sich (schnell) der Quadratwurzel an
```

## Übung: Babylonisches Wurzelziehen: Lösung

```py
n = 12345
a = 1
b = n
for i in range(10):
    a = (a + b) / 2
    b = n / a
print(b)
```

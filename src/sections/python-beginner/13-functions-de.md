# Funktionen

## Funktionen

Wir kennen schon einige vordefinierte Funktionen, zB `len()`, `range()` oder `print()`

## Parameter und Rückgabewerte

Funktionen können Parameter übergeben bekommen und Rückgabewerte haben.

Beispiel: `len([1, 1, 1])` → `3`

Parameter: `[1, 1, 1]`

Rückgabewert: `3`

## Optionale Parameter

Experiment: Wie verhält sich die Funktion `range`, wenn wir 1, 2 oder 3 Parameter übergeben?

## Positionelle Parameter und Schlüsselwortparameter

Aufruf von `open`:

mit Positionellen Parametern:

```py
f = open("myfile.txt", "w", -1, "utf-8")
```

mit Schlüsselwortparametern:

```py
f = open("myfile.txt", encoding="utf-8", mode="w")
```

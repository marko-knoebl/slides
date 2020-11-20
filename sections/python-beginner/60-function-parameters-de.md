# Funktionsparameter

## Positionale Parameter und Schlüsselwortparameter

Aufruf von `open`:

mit positionalen Parametern:

```py
f = open("myfile.txt", "w", -1, "utf-8")
```

mit Schlüsselwortparametern:

```py
f = open("myfile.txt", encoding="utf-8", mode="w")
```

Die Namen der Schlüsselwortparameter entnehmen wir der Dokumentation (z.B. via `help(open)`)

## Optionale Parameter und Standardwerte

Bei manchen Funktionen sind Parameter optional (sie haben einen Standardwert)

Beispiel: Bei der Funktion `open()` ist nur der erste Parameter zwingend anzugeben

Die Werte der Standardparameter entnehmen wir der Dokumentation

# Lineare Regression

## Regression

Lineare Regression: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme)

## Lineare Regression

Beispiel: Wir betrachten verschiedene Einkäufe bei verschiedenen Supermärkten:

- 1 l Milch, 1 kg Brot: 5.00€
- 2 l Milch, 3 kg Brot: 13.50€
- 3 l Milch, 2 kg Brot: 10.90€
- (0 l Milch, 0 kg Brot: 0€)

Aufgabe: Schätzung der Preise von:

- 1 l Milch
- 1 kg Brot
- 1 l Milch und 2 kg Brot

Diese Aufgabe kann mit Hilfe von Regression beantwortet werden.

## Lineare Regression

Eingangsdaten:

```txt
1, 1 → 5.00
2, 3 → 13.50
3, 2 → 10.90
0, 0 → 0.00
```

Ergebnis einer linearen Regression:

```txt
price = 0.05 + 1.13*x + 3.73*y
```

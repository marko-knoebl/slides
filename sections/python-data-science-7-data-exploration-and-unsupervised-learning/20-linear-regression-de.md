# Lineare Regression

## Regression

Lineare Regression: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme)

- unabhängige Variable (x)
- abhängige Variable (y)

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

## Lineare Regression

verbreitetste Variante:

**OLS (ordinary least squares)**: die Summe der Quadrate der Abweichungen soll minimal werden

## Metriken

allgemein:

- _F-Test_: Wahrscheinlichkeit, dass eine Korrelation besteht (oder nicht) (Annahme: normalverteilte unabhängige Größen)
- RMSE (root mean squared error): Quadratwurzel der mittleren Abweichungsquadrate
- R² (Bestimmtheitsmaß)
  - Maß, das den relativen Fehler ausdrückt (zwischen 0 und 1)
  - wie viel der Varianz der abhöngigen Variablen kann durch die unabhängigen Variablen erklärt werden?
- _Akaike-Informationskriterium_ (_AIC_), _Bayessches Informationskriterium_ (_BIC_)

## Metriken

Werte für einzelne unabhängige Variablen:

- _value_: geschätzter Koeffizient
- _std error_: Standardabweichung für Koeffizient
- _p-value_: Wahrscheinlichkeit, dass "Output" von dieser Variable unabhängig ist
- _t-statistic_: Verhältnis zwischen beobachteter Abweichung und zufällig erwarteter Abweichung

# Grundlegende Validierungsmetriken

## Grundlegende Validierungsmetriken

Klassifizierungsmetriken:

- accuracy (Anteil an richtig klassifizierten Elementen)
- confusion matrix

Regressionsmetriken:

- mittlere quadratische Abweichung
- Bestimmtheitsmaß (R²)

## Validierungsmetriken für Klassifizierung

Beispiel:

Ein Korb von Früchten enthält 10 Äpfel, 10 Orangen und 10 Pfirsiche

Ein Klassifizierungsalgorithmus liefert diese Ergebnisse:

- Klassifizierung von Äpfeln: 8 als Äpfel, 0 als Orangen, 2 als Pfirsiche
- Klassifizierung von Orangen: 10 als Orangen
- Klassifizierung von Pfirsichen: 1 als Apfel, 0 als Orangen, 9 als Pfirsiche

## Klassifizierungsmetriken

**accuracy**: relativer Anteil korrekter Klassifizierungen (im Beispiel: 27/30=0.9)

**confusion matrix**: Tabelle mit Klassifizierungen für jede Kategorie

|         | apples | oranges | peaches |
| ------- | ------ | ------- | ------- |
| apples  | 8      | 0       | 2       |
| oranges | 0      | 10      | 0       |
| peaches | 1      | 0       | 9       |

## Regressionsmetriken

**mittlere quadratische Abweichung**

**Bestimmtheitsmaß (R²)**:

vergleicht die mittlere quadratische Abweichung der Regression mit der Varianz der Eingangsdaten

- R²=1 - perfekte Interpolation
- R²=0 - Interpolation ist nicht besser als das Verwenden des Durchschnitts
- R²<0 - schlechter als das Verwenden des Durchschnitts

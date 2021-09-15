# Klassifizierungsmetriken

## Klassifizierungsmetriken

- accuracy metrics
  - accuracy
  - confusion matrix
- Metriken, die auf true/false positives/negatives basieren
  - precision
  - recall
  - f-score
  - ROC und AUC
- probabilistische Metriken
  - Kreuzentropie

## Metriken, die auf true/false positives/negatives basieren

Binäre Klassifizierung: Spam-Erkennung

- true positive: eine Spam-Nachricht wird als _Spam_ klassifiziert
- true negative: eine normale Nachricht wird als _kein Spam_ klassifiziert
- false positive: eine normale Nachricht wird als _Spam_ klassifiziert (Fehler erster Art)
- false negative: eine Spam-Nachricht wird als _kein Spam_ klassifiziert (Fehler zweiter Art)

## Metriken, die auf true/false positives/negatives basieren

Beispiele:

60 normale Nachrichten, 40 Spam-Nachrichten

1 normale Nachricht wird als Spam klassifiziert

5 Spam-Nachrichten werden als normal klassifiziert

**precision** (Genauigkeit) = 36/36=0.97 (35 von 36 Nachrichten, die als Spam Klassifiziert wuerden, sind tatsächlich Spam)

**recall** (Trefferquote) = 35/40 = 0.88 (35 von 40 Spam-Nachrichten wurden als solche erkannt)

siehe auch: [Precision and recall auf der englischsprachigen Wikipedia](https://en.wikipedia.org/wiki/Precision_and_recall)

## Metriken, die auf true/false positives/negatives basieren

_precision_ und _recall_ haben unterschiedliche Relevanz in verschiedenen Szenarien

Beispiel: Beim Klassifizieren von E-mails als Spam ist _precision_ besonders wichtig (vermeiden, eine E-mail fälschlicherweise als Spam zu klassifizieren)

## Metriken, die auf true/false positives/negatives basieren

**f-score** = harmonisches Mittel zwischen _precision_ und _recall_

## Metriken, die auf true/false positives/negatives basieren

**ROC** (Receiver Operating Characteristic)

= Metrik, die _true positives_ und _false positives_ wiederspiegelt

Ein Klassifizierungsalgorithmus könnte bezüglich seiner _true positives_-Quote und _false positives_-Quote fein eingestellt werden:

- Option 1: 60% true positives-Quote, 0% false positives-Quote
- Option 2: 70% true positives-Quote, 5% false positives-Quote
- Option 3: 80% true positives-Quote, 25% false positives-Quote
- Option 4: 90% true positives-Quote, 55% false positives-Quote
- Option 5: 95% true positives-Quote, 90% false positives-Quote

## Metriken, die auf true/false positives/negatives basieren

Die ROC kann als Kurve dargestellt werden; je größer die Fläche unter der Kurve (area under the curve, AUC), desto besser die Klassifikation

## Probabilistische Metriken

**Kreuzentropie** (log loss): Misst, wie gut ein Modell einer Wahrscheinlichkeitsverteilung die tatsächliche Wahrscheinlichkeitsverteilung annähert

relevant bei _neuronalen Netzwerken_ und _logistischer Regression_

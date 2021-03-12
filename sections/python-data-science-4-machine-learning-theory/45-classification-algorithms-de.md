# Klassifizierungsalgorithmen

## Klassifizierungsalgorithmen

- _neuronale Netzwerke_
- k-nearest-neighbors
- Entscheidungsbäume (decision trees)
- logistische Regression
- naive Bayes
- Support Vector Machines

## K-Nearest-Neighbors

Um einen Datenpunkt zu klassifizieren, werden ähnliche bekannte Datenpunkte betrachtet, für die schon eine Klassifizierung bekannt ist

## Entscheidungsbäume (Decision Trees)

Beispiel für die Iris-Klassifizierung:

- Ist die _petal length_ kleiner oder gleich 2.4?
  - ja: **setosa**
  - nein: Ist die _petal width_ kleiner oder gleich 1.7?
    - ja: Ist die _petal length_ kleiner oder gleich 5.0?
      - ja: **versicolor**
      - nein: **virginica**
    - nein: **virginica**

## Logistische Regression

An einer Grenze zwischen zwei Klassen wird mit Hilfe einer _logistischen Funktion_ angegeben, wie groß die Wahrscheinlichkeit ist, dass der Datenpunkt zu der einen bzw zu der anderen Klasse gehört.

Die logistische Funktion selbst wird intern mittels Regression bestimmt (daher der Name).

## Naive Bayes

Für die bekannten Klassen werden Wahrscheinlichkeitsverteilungen angenommen (z.B. Normalverteilung, Multinomialverteilung). Diese Verteilungen werden aus den Trainingsdaten hergeleitet.

Für einen neuen Datenpunkt wird dann errechnet, unter welcher der Verteilungen er am ehesten auftreten würde.

Zwei wichtige Verteilungen:

- Normalverteilung oder _Gauß'sche Verteilung_ (für kontinuierliche Werte)
- Multinomialverteilung (für diskrete Werte / Ganzzahlen)

## Support Vector Machines

Einfachster Fall: Trennung von Klassen durch Geraden / Ebenen / Hyperebenen - diese Trenner sollen von den getrennten Punkten maximalen Abstand haben.

Durch Kernelfunktionen können die Grenzen auch andere Formen annehmen, z.B. die von Kegelschnitten für polynomiale Kernel vom Grad 2 oder anderen Kurven.

## Klassifizierungsalgorithmen

[Überblick über Klassifizierungsalgorithmen in scikit-learn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)

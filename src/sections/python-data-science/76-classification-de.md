# Klassifizierung

## Klassifizierungsalgorithmen

- K-Nearest-Neighbors
- Logistische Regression
- Naive Bayes
- Support Vector Machine
- Entscheidungsbäume und Random Forests

Siehe auch: [classifier comparison von scikit-learn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)

## K-Nearest-Neighbors

Ein neuer Datenpunkt wird klassifiziert, indem seine nächsten Nachbarn betrachtet werden. Die bei den Nachbarn am häufigsten vorkommende Klasse wird auch für den Datenpunkt festgesetzt.

Die Anzahl `k` der betrachteten Nachbarn kann festgesetzt werden (Standardwert = 5)

Siehe auch: https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier

## Logistische Regression

An einer Grenze zwischen zwei Klassen wird mit Hilfe einer _logistischen Funktion_ angegeben, wie groß die Wahrscheinlichkeit ist, dass der Datenpunkt zu der einen (bzw zu der anderen) Klasse gehört. Je nachdem, welche der Wahrscheinlichkeiten größer als 50% ist, wird die entsprechende Klasse zugewiesen.

Die logistische Funktion selbst wird intern mittels Regression bestimmt (daher der Name).

Beispiel: https://scikit-learn.org/stable/auto_examples/linear_model/plot_logistic.html#sphx-glr-auto-examples-linear-model-plot-logistic-py

## Naive Bayes

Für die bekannten Klassen werden Wahrscheinlichkeitsverteilungen angenommen (z.B. Normalverteilung, Multinomialverteilung). Diese Verteilungen werden aus den Trainingsdaten hergeleitet.

Für einen neuen Datenpunkt wird dann errechnet, unter welcher der Verteilungen er am ehesten auftreten würde.

Zwei wichtige Verteilungen sind die Normalverteilung (Gauß'sche Verteilung) für kontinuierliche Werte und die Multinomialverteilung für diskrete Werte (Ganzzahlen).

## Support Vector Machines

Einfachster Fall: Trennung von Klassen durch Geraden / Ebenen / Hyperebenen - diese Trenner sollen von den getrennten Punkten maximalen Abstand haben.

Durch Kernelfunktionen können die Grenzen auch andere Formen annehmen, z.B. die von Kegelschnitten für polynomiale Kernel vom Grad 2 oder anderen Kurven.

Siehe auch: https://scikit-learn.org/stable/modules/svm.html

## Entscheidungsbäume (Decision Trees)

Machine Learning Bibliotheken können sogenannte Entscheidungsbäume auf Basis von Trainingsdaten generieren.

Beispiel für einen Entscheidungsbaum für die Iris-Klassifizierung:

- Ist die _petal length_ kleiner oder gleich 2.4?
  - ja: **setosa**
  - nein: Ist die _petal width_ kleiner oder gleich 1.7?
    - ja: Ist die _petal length_ kleiner oder gleich 5.0?
      - ja: **versicolor**
      - nein: **virginica**
    - nein: **virginica**

## Random Forests

Basierend auf Decision Trees: Die Daten werden in verschiedene Untermengen zerlegt. Mittels jeder Untermenge wird ein einzelner Decision Tree erstellt. Die Gesamtheit der Decision Trees wird zu einem sogenannten _Random Forest_ zusammengeführt.

## Beispiele zur Klassifizierung

- Erkennen von Ziffern

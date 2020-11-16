# Algorithmen für überwachtes Lernen

## Algorithmen für überwachtes Lernen

Regression:

- _neuronale Netzwerke_
- lineare Regression, polynomiale Regression, ...

Klassifizierung:

- _neuronale Netzwerke_
- k-nearest-neighbors
- logistische Regression
- naive Bayes
- Support Vector Machines
- Entscheidungsbäume (decision trees)

## Neuronale Netze

Aus künstlichen Neuronen aufgebaute Netzwerke - ähnliches Konzept wie Neuronen im Gehirn

<figure style="width: 70%; margin: 0 auto;">
  <img src="assets/wikimedia-Neural_network.svg" alt="diagram of a neural network">
  <figcaption>Diagrammm eines neuronalen Netzwerks mit zwei Inputs, fünf Neuronen in der Zwischenschicht und einem Output <small>(Quelle: <a href="https://commons.wikimedia.org/wiki/File:Neural_network.svg" title="via Wikimedia Commons">Dake, Mysid via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Regression

Lineare Regression: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme)

## K-Nearest-Neighbors

Klassifizierungsalgorithmus, der einem Datenpunkt eine Klasse zuweist, indem er ähnliche bekannte Datenpunkte betrachtet, für die schon eine Klassifizierung bekannt ist

## Logistische Regression

An einer Grenze zwischen zwei Klassen wird mit Hilfe einer _logistischen Funktion_ angegeben, wie groß die Wahrscheinlichkeit ist, dass der Datenpunkt zu der einen (bzw zu der anderen) Klasse gehört. Je nachdem, welche der Wahrscheinlichkeiten größer ist, wird die entsprechende Klasse zugewiesen.

Die logistische Funktion selbst wird intern mittels Regression bestimmt (daher der Name).

## Naive Bayes

Für die bekannten Klassen werden Wahrscheinlichkeitsverteilungen angenommen (z.B. Normalverteilung, Multinomialverteilung). Diese Verteilungen werden aus den Trainingsdaten hergeleitet.

Für einen neuen Datenpunkt wird dann errechnet, unter welcher der Verteilungen er am ehesten auftreten würde.

Zwei wichtige Verteilungen sind die Normalverteilung (Gauß'sche Verteilung) für kontinuierliche Werte und die Multinomialverteilung für diskrete Werte (Ganzzahlen).

## Support Vector Machines

Einfachster Fall: Trennung von Klassen durch Geraden / Ebenen / Hyperebenen - diese Trenner sollen von den getrennten Punkten maximalen Abstand haben.

Durch Kernelfunktionen können die Grenzen auch andere Formen annehmen, z.B. die von Kegelschnitten für polynomiale Kernel vom Grad 2 oder anderen Kurven.

## Entscheidungsbäume (Decision Trees)

Entscheidungsbäume können auf Basis von Trainingsdaten generiert werden.

Beispiel für die Iris-Klassifizierung:

- Ist die _petal length_ kleiner oder gleich 2.4?
  - ja: **setosa**
  - nein: Ist die _petal width_ kleiner oder gleich 1.7?
    - ja: Ist die _petal length_ kleiner oder gleich 5.0?
      - ja: **versicolor**
      - nein: **virginica**
    - nein: **virginica**

## Klassifizierungsalgorithmen

[Überblick über Klassifizierungsalgorithmen in sklearn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)

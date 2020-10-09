# Overfitting

## Overfitting

Mögliches Problem beim Lernen: Der Algorithmus ist zu flexibel und erkennt scheinbare Muster in den Eingangsdaten, hinter denen aber keine Systematik steckt

Algorithmen, die anfällig für Overfitting sind:

- Neuronale Netze
- Polynomiale Regression
- Entscheidungsbäume

## Overfitting

<figure>
  <img src="assets/wikimedia-Overfitting.svg.png" alt="visualization of an algorithm overfitting 2D data" style="width: 45%">
  <figcaption>Visualisierung von Overfitting bei der Kategorisierung von 2D-Daten <small>(Quelle: <a href="https://commons.wikimedia.org/wiki/File:Overfitting.svg" >Chabacano via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Overfitting - Lösungsmöglichkeiten

- größere Menge an Daten zum Lernen
- Einschränkung der Flexibilität (z.B. Grad des Polynoms, Tiefe des Entscheidungsbaums)
- zufälliges Deaktivieren einiger Neuronen während des Lernens (Dropout)
- Kombination mehrerer Entscheidungsbäume (Random Forest)
- "Bestrafung" großer Koeffizienten bei der polynomialen Regression (L2- und L1-Regularisierung)

Zur polynomialen Regression siehe: [Data Science Handbook - Regularization](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Regularization)

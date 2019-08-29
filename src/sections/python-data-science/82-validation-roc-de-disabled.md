# Validierung: ROC

## ROC

_ROC_ = _Receiver Operating Characteristic_

Ist eine Metrik, die bei einer ja/nein-Entscheidung zu einer Klassenzugehörigkeit ins Spiel kommt. Sie beschäftigt sich mit _true positives_ und _false positives_

## ROC

Beispiel: Die Erkennung der Klasse _iris versicolor_ kann z.B. folgendermaßen fein eingestellt werden (Daten sind erfunden):

- Option 1: 60% der _iris versicolor_ werden richtig als solche erkannt
- Option 2: 80% der _iris versicolor_ werden richtig als solche erkannt (aber auch 10% der _iris virginica_ werden fälschlicherweise als solche klassifiziert)
- Option 3: 90% der _iris versicolor_ werden richtig als solche erkannt (aber auch 25% der _iris virginica_ werden fälschlicherweise als solche klassifiziert)

Die ROC beschreibt den Zusammenhang von _true positives_ und _false positives_ und kann als Kurve dargestellt werden. Je größer die Fläche unter der Kurve (AUC), umso besser die Klassifizierung. 

## ROC

Zeichnen der ROC

```py
false_positive_rates, true_positive_rates, thresholds = metrics.roc_curve(
    y_test,
    classifier.predict_proba(X_test)[: 1]
)

plt.plot(false_positive_rate, true_positive_rate)
```

Bestimmen der Fläche unter der Kurve:

```py
auc = metrics.auc(false_positive_rates, true_positive_rates)
```

## ROC

Aufgabe: Zeichne eine ROC für die Klassifikation von _iris setosa_

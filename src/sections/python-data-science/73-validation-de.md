# Validierung

## Train-Test Split

Um zu validieren, ob ein Verfahren ein passendes Ergebnis liefert:

Die Daten (X, y) werden in Trainingsdaten und Testdaten unterteilt. Die Testdaten dienen zur Validierung

## Train-Test Split

Frage: wie gut approximiert unsere lineare Regression die Iris Daten?

```py
from sklearn.model_selection import train_test_split
from sklearn import metrics

X_train, X_test, y_train, y_test = train_test_split(X, y)

...

print(metrics.r2_score(y_prediction, y_test))
```

Wir können einen Parameter `test_size` angeben, dessen Standardwert `0.25` ist (d.h. 25% der Daten werden zur Validierung verwendet)

## Kreuzvalidierung

Bei der cross-validation werden die Daten wiederholt in unterschiedliche Trainings- und Testdaten unterteilt, sodass jeder Eintrag einmal in den Testdaten vorkommt

```py
from sklearn.model_selection import cross_validate

...

test_results = cross_validate(model, X, y, cv=5, scoring="r2")
test_scores = test_results["test_score"]
print(test_scores)
# [ 0.61840428  0.72569954 -1.1742135   0.44294841  0.50589789]
print(test_scores.mean())
```

## Validierung

Regression:

- R2 score
- mean squared error

Klassifizierung:

- Accuracy (Anteil an richtig klassifizierten Einträgen)
- Confusion Matrix (Anteil an richtig / falsch klassifizierten Einträgen für jede Klasse)

Siehe https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics

## Validierung

Aufgabe: Validierung der Iris-Klassifizierung mittels eines einfachen Train-Test Splits

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

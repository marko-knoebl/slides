# Validierung

## Train-Test Split

Wie gut kategorisiert ein bestimmter Algorithmus die Iris-Daten?

```py
from sklearn.model_selection import train_test_split
from sklearn import metrics

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)

# ...

Y_prediction = model.predict(X_test)
print(metrics.accuracy_score(Y_test, Y_prediction))
```

optionale Parameter:

- `test_size` (Standardwert `0.25`)
- `random_state` (Integer-Seed für Zufallsauswahl)

## Kreuzvalidierung

Bei der Kreuzvalidierung (cross-validation) werden die Daten wiederholt in unterschiedliche Trainings- und Testdaten unterteilt, sodass jeder Eintrag einmal in den Testdaten vorkommt.

```py
from sklearn.model_selection import cross_validate

test_results = cross_validate(
    model, X, y, cv=5, scoring="accuracy"
)
print(test_results["test_score"])
```

## Beispiel: ROC der Iris-Daten

Bestimmen der ROC mit scikit-learn:

```py
# false positive rates, true positive rates, thresholds
fpr, tpr, thresholds = metrics.roc_curve(
    y_test,
    classifier.predict_proba(X_test)[:, 0]
)
```

ideale Kombination: _false positive rate_ = 0, _true positive rate_ = 1

## Beispiel: ROC der Iris-Daten

Zeichnen der ROC:

```py
plt.plot(fpr, tpr, marker="o")
```

Bestimmen der AUC:

```py
auc = metrics.auc(fpr, tpr)
```

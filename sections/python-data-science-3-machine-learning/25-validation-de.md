# Validierung

## Train-Test Split

Um zu validieren, ob ein Verfahren ein passendes Ergebnis liefert:

Die Daten werden in Trainingsdaten und Testdaten unterteilt. Die Testdaten dienen nur zur Validierung.

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

optionaler Parameter: `test_size` (Standardwert `0.25`)

## Validierungsmetriken

Klassifizierung:

- _accuracy_score_: Anteil an richtig klassifizierten Einträgen
- _confusion_matrix_: Anteil an richtig / falsch klassifizierten Einträgen für jede Klasse
- _precision_recall_fscore_support_: Zusammenfassung wichtiger Metriken
- _log_loss_: auch Kreuzentropie genannt, relevant bei logistischer Regression und neuronalen Netzen

Regression:

- _mean_squared_error_: mittlere quadratische Abweichung
- _r2_score_: R², Bestimmtheitsmaß

Siehe auch <https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics>

## Validierungsmetriken: Bestimmtheitsmaß

Bestimmtheitsmaß (R²):

- R²=1 - perfekte Interpolation
- R²=0 - Interpolation nicht besser als der einfache Durchschnitt
- R²<0 - schlechter als der einfache Durchschnitt

## Kreuzvalidierung

Bei der Kreuzvalidierung (cross-validation) werden die Daten wiederholt in unterschiedliche Trainings- und Testdaten unterteilt, sodass jeder Eintrag einmal in den Testdaten vorkommt.

```py
from sklearn.model_selection import cross_validate

test_results = cross_validate(
    model, X, y, cv=5, scoring="accuracy"
)
print(test_results["test_score"])
```

## Validierung

Aufgabe: Validierung der Iris-Klassifizierung

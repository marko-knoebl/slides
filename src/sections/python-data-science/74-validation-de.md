# Validierung

## Train-Test Split

Um zu validieren, ob ein Verfahren ein passendes Ergebnis liefert:

Die Daten (X, y) werden in Trainingsdaten und Testdaten unterteilt. Die Testdaten dienen zur Validierung.

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

## Validierungsmetriken

Regression:

- `metrics.mean_squared_error(y_true, y_pred)` (mittlere quadratische Abweichung)
- `metrics.r2_score(y_true, y_pred)` (R², Bestimmtheitsmaß)

Klassifizierung:

- `metrics.accuracy_score(y_true, y_pred)` (Anteil an richtig klassifizierten Einträgen)
- `metrics.confusion_matrix(y_true, y_pred)` (Anteil an richtig / falsch klassifizierten Einträgen für jede Klasse)
- `metrics.precision_recall_fscore_support(y_true, y_pred)` (Zusammenfassung wichtiger Metriken)

Siehe auch https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics

## Validierungsmetriken: Bestimmtheitsmaß

Das Bestimmtheitsmaß (R²) gibt an, wie nahe die Interpolation an den Testdaten liegt:

- R²=1 - perfekte Interpolation
- R²=0 - Interpolation nicht besser als der einfache Durchschnitt
- R²<0 - schlechter als der einfache Durchschnitt 

## Validierung

Aufgaben:

- Validierung der Iris-Regression
- Validierung der Iris-Klassifizierung

## Kreuzvalidierung

Bei der Kreuzvalidierung (cross-validation) werden die Daten wiederholt in unterschiedliche Trainings- und Testdaten unterteilt, sodass jeder Eintrag einmal in den Testdaten vorkommt.

```py
from sklearn.model_selection import cross_validate

...

test_results = cross_validate(model, X, y, cv=5, scoring="r2")
test_scores = test_results["test_score"]
print(test_scores)
# [ 0.61840428  0.72569954 -1.1742135   0.44294841  0.50589789]
```

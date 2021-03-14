# Beispiel: Iris-Validierung in scikit-learn

## Beispiel: Iris-Validierung in scikit-learn

Manueller train-test Split:

```py
rng = np.random.default_rng(seed=1)

random_indexes = rng.permutation(x.shape[0])
# e.g. [65, 44, 22, 133, 47, ...]

x_train = x[random_indexes[:120]]
y_train = y[random_indexes[:120]]

x_test = x[random_indexes[120:]]
y_test = y[random_indexes[120:]]
```

## Beispiel: Iris-Validierung in scikit-learn

Automatische Unterteilung vis scikit-learn:

```py
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y)
```

## Beispiel: Iris-Validierung in scikit-learn

Validierung basierend auf den Testdaten:

```py
from sklearn import metrics

y_prediction = model.predict(x_test)
score = metrics.accuracy_score(y_prediction, y_test)
print("accuracy:", score)
```

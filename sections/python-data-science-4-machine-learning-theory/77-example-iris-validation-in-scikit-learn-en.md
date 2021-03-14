# Example: iris validation in scikit-learn

## Example: iris validation in scikit-learn

manual train-test split:

```py
rng = np.random.default_rng(seed=1)

random_indexes = rng.permutation(x.shape[0])
# e.g. [65, 44, 22, 133, 47, ...]

x_train = x[random_indexes[:120]]
y_train = y[random_indexes[:120]]

x_test = x[random_indexes[120:]]
y_test = y[random_indexes[120:]]
```

## Example: iris validation in scikit-learn

automated train-test split via scikit-learn:

```py
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y)
```

## Example: iris validation in scikit-learn

validation based on test data:

```py
from sklearn import metrics

y_pred = model.predict(x_test)
score = metrics.accuracy_score(y_pred, y_test)
print("accuracy:", score)
```

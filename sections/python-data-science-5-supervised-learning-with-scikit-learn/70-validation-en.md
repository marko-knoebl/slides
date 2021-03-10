# Validation

## Train-test split

How well does a model categorize iris data?

```py
from sklearn.model_selection import train_test_split
from sklearn import metrics

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)

# ...

Y_prediction = model.predict(X_test)
print(metrics.accuracy_score(Y_test, Y_prediction))
```

optional parameter: `test_size` (default value: `0.25`)

## Cross validation

Data are repeatedly split into different training and test sets so each entry appears in a test set once

```py
from sklearn.model_selection import cross_validate

test_results = cross_validate(
    model, X, y, cv=5, scoring="accuracy"
)
print(test_results["test_score"])
```

## Example: ROC of the iris classification

computing the ROC with scikit-learn:

```py
false_positive_rates, true_positive_rates, thresholds = metrics.roc_curve(
    y_test,
    classifier.predict_proba(X_test)[: 1]
)
```

ideal combination: _false positive rate_ = 0, _true positive rate_ = 1

## Example: ROC of the iris classification

plotting the ROC:

```py
plt.plot(false_positive_rates, true_positive_rates)
```

determining the AUC:

```py
auc = metrics.auc(false_positive_rates, true_positive_rates)
```

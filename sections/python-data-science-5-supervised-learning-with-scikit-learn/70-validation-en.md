# Validation

## Validation metrics in scikit-learn

classification:

- _accuracy_score_
- _confusion_matrix_
- _precision_recall_fscore_support_
- _log_loss_
- _roc_curve_
- _roc_auc_

regression:

- _mean_squared_error_
- _r2_score_

See also <https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics>

## Train-test split

How well does a model categorize iris data?

```py
from sklearn import metrics

y_prediction = model.predict(x_test)

print(metrics.accuracy_score(y_test, y_prediction))
print(metrics.confusion_matrix(y_test, y_prediction))
print(list(metrics.precision_recall_fscore_support(
           y_test, y_prediction)))
```

## Train-test split

helper function in scikit-learn:

```py
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y)
```

optional parameters:

- `test_size` (default value: `0.25`)
- `random_state` (integer seed for shuffling)

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
# false positive rates, true positive rates, thresholds
fpr, tpr, thresholds = metrics.roc_curve(
    y_test,
    classifier.predict_proba(X_test)[:, 0]
)
```

ideal combination: _false positive rate_ = 0, _true positive rate_ = 1

## Example: ROC of the iris classification

plotting the ROC:

```py
plt.plot(fpr, tpr, marker="o")
```

determining the AUC:

```py
auc = metrics.auc(fpr, tpr)
```

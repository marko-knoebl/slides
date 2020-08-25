# Validation

## Train-test split

In order to verify the results of an algorithm:

Data are split into _training data_ and _test data_; test data are only used for validation

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

## Validation metrics

classification:

- _accuracy_score_: relative amount of correct classifications
- _confusion_matrix_: relative amount of correct classifications for each category
- _precision_recall_fscore_support_: summary of important metrics
- _log_loss_: also known as cross-entropy, relevant for logistic regression and neural networks

regression:

- _mean-squared_error_
- _r2_score_: R², coefficient of determination

See also <https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics>

## Validation metrics: coefficient of determination

coefficient of determination (R²):

- R²=1 - perfect interpolation
- R²=0 - interpolation is no better than taking the average of all data
- R²<0 - worse than taking the average of all data

## Cross validation

Data are repeatedly split into different training and test sets so each entry appears in a test set once

```py
from sklearn.model_selection import cross_validate

test_results = cross_validate(
    model, X, y, cv=5, scoring="accuracy"
)
print(test_results["test_score"])
```

## Validation

Exercise: validation of iris classification

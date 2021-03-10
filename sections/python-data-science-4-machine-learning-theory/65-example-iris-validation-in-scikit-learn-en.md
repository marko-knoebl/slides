# Example: iris validation in scikit-learn

## Example: iris validation in scikit-learn

train-test split:

```py
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y)
```

validation based on test data:

```py
from sklearn import metrics

y_prediction = model.predict(x_test)
score = metrics.accuracy_score(y_prediction, y_test)
print("accuracy:", score)
```

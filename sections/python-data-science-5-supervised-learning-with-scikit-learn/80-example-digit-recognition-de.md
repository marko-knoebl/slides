# Example: Erkennung von Ziffern

## Example: Erkennung von Ziffern

```py
from sklearn.neighbors import KNeighborsClassifier
from sklearn import datasets, model_selection, metrics

digits = datasets.load_digits()
# flatten array from 1797x8x8 to 1797x64
X = digits.images.reshape(digits.images.shape[0], -1)
y = digits.target

X_train, X_test, y_train, y_test =
    model_selection.train_test_split(X, y)

model = KNeighborsClassifier()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(metrics.accuracy_score(y_test, y_pred))
```

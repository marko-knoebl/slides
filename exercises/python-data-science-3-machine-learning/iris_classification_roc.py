import matplotlib.pyplot as plt

from sklearn.neighbors import KNeighborsClassifier
from sklearn import model_selection
from sklearn import metrics

from sklearn import datasets

iris = datasets.load_iris()

X = iris.data[50:]
y = iris.target[50:]
# y has values 1 or 2 (0 was removed) - adjust to 0 and 1
y -= 1

X_train, X_test, y_train, y_test = model_selection.train_test_split(
    X, y, random_state=1)

classifier = KNeighborsClassifier()
classifier.fit(X_train, y_train)

y_prediction = classifier.predict(X_test)
y_proba = classifier.predict_proba(X_test)

fpr, tpr, thresholds = metrics.roc_curve(y_test, y_proba[:, 1])

plt.plot(fpr, tpr)
plt.xlabel("false positive rate")
plt.ylabel("true positive rate")

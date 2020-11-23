from sklearn.neighbors import KNeighborsClassifier
from sklearn import model_selection
from sklearn import metrics

from sklearn import datasets

iris = datasets.load_iris()

X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = model_selection.train_test_split(X, y)

print(y_test.size)

model = KNeighborsClassifier()
model.fit(X_train, y_train)

y_prediction = model.predict(X_test)

print(metrics.accuracy_score(y_prediction, y_test))
print(metrics.confusion_matrix(y_prediction, y_test))
print(list(metrics.precision_recall_fscore_support(y_prediction, y_test)))

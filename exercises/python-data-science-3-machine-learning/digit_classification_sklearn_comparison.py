
from sklearn import svm
from sklearn import tree
from sklearn import neighbors
from sklearn import linear_model
from sklearn import naive_bayes

from sklearn import model_selection
from sklearn import metrics

from sklearn import datasets
digits = datasets.load_digits()

X = digits.images.reshape(digits.images.shape[0], -1)
y = digits.target

X_train, X_test, y_train, y_test = model_selection.train_test_split(X, y)

classifiers = [
    svm.SVC(gamma="scale"),
    tree.DecisionTreeClassifier(),
    neighbors.KNeighborsClassifier(),
    linear_model.LogisticRegression(),
    naive_bayes.GaussianNB()
]

for classifier in classifiers:
    classifier.fit(X_train, y_train)
    y_pred = classifier.predict(X_test)
    print(metrics.confusion_matrix(y_test, y_pred))
    print(metrics.accuracy_score(y_test, y_pred))

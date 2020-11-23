from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import LogisticRegression

from sklearn import datasets

iris = datasets.load_iris()

X = iris.data
y = iris.target

test_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]

classifiers = [
    KNeighborsClassifier(),
    SVC(kernel="linear"),
    DecisionTreeClassifier(),
    GaussianNB(),
    LogisticRegression(solver="lbfgs", multi_class="auto", max_iter=150)
]

for classifier in classifiers:
    # train the classifier
    classifier.fit(X, y)
    y_pred = classifier.predict(test_data)
    print(y_pred)

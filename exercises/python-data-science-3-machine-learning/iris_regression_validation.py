from sklearn.linear_model import LinearRegression

from sklearn import model_selection
from sklearn import metrics

from sklearn.datasets import load_iris

dataset = load_iris().data[:50]
X = dataset[:, 0:1]
y = dataset[:, 1]

regr = LinearRegression()

print(model_selection.cross_validate(regr, X, y, cv=5, scoring="r2")["test_score"])

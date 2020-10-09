from sklearn.linear_model import LinearRegression

from sklearn.datasets import load_iris

dataset = load_iris().data[:50]
X = dataset[:, 0:1]
y = dataset[:, 1]

regr = LinearRegression()
regr.fit(X, y)

print(regr.coef_)
print(regr.intercept_)

prediction = regr.predict([[4.5], [5.0], [5.5]])
print(prediction)

# Code source: Jaques Grobler
# License: BSD 3 clause

from sklearn.datasets import load_diabetes
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn import metrics
import matplotlib.pyplot as plt

# dataset description (from the sklearn documentation):

# Ten baseline variables, age, sex, body mass index, average blood pressure,
# and six blood serum measurements were obtained for each of n = 442 diabetes
# patients, as well as the response of interest, a quantitative measure of
# disease progression one year after baseline.

# Note: Each of these 10 feature variables have been mean centered and scaled
# by the standard deviation times n_samples (i.e. the sum of squares of each
# column totals 1).

dataset = load_diabetes()

X_train, X_test, y_train, y_test = train_test_split(dataset.data,
                                                    dataset.target)

regr = LinearRegression()
regr.fit(X_train, y_train)

y_pred = regr.predict(X_test)

plt.plot(y_pred[:20])
plt.plot(y_test[:20])
plt.show()

print("Coefficients:")
print(regr.coef_)

print("Mean squared error:")
print(metrics.mean_squared_error(y_test, y_pred))

print("R2 score:")
print(metrics.r2_score(y_test, y_pred))

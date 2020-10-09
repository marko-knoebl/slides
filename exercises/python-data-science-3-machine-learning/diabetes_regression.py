# adapted from:
# https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html

# Code source: Jaques Grobler
# License: BSD 3 clause

from sklearn.datasets import load_diabetes
from sklearn.linear_model import LinearRegression
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
X = dataset.data
y = dataset.target

regr = LinearRegression()
regr.fit(X, y)
prediction = regr.predict(X)

plt.plot(prediction[:20])
plt.plot(y[:20])
plt.show()

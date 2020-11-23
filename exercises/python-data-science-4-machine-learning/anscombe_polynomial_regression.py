import seaborn as sns
import numpy as np

from sklearn import linear_model

anscombe = sns.load_dataset("anscombe")
anscombe_2 = anscombe[anscombe.dataset=="II"]

X = anscombe_2.x[:, np.newaxis]
y = anscombe_2.y

print("target:")
print(y.to_numpy())

regression = linear_model.LinearRegression()
regression.fit(X, y)
print(regression.predict(X))

from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline

poly_model = make_pipeline(
    PolynomialFeatures(3),
    linear_model.LinearRegression()
)

poly_model.fit(X, y)
print(poly_model.predict(X))

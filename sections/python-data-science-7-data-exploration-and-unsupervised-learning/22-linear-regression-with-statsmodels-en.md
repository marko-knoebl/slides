# Linear regression with statsmodels

## Linear regression in Python

Python packages for linear regression:

- _statsmodels_
- _scikit-learn_

## Example: diabetes data

goal: find correlation between patient data and diabetes disease progression after one year

```py
from sklearn.datasets import load_diabetes

# load dataset as a pandas dataframe
dataset = load_diabetes(as_frame=True)

print(dataset.DESCR)

print(dataset.data)
print(dataset.target)
print(dataset.target.describe())
```

## Example: diabetes data

```py
import statsmodels.api as sm

# add constant column for base value of y (intercept)
x = sm.add_constant(dataset.data)

y = dataset.target
```

## Example: diabetes data

```py
model = sm.OLS(y, x)

res = model.fit()

res.summary()
```

## Example: diabetes data

only keep values whose influence is significant:

```py
x_cleaned = x.drop(["age", "s3", "s6", "s4"], axis=1)
```

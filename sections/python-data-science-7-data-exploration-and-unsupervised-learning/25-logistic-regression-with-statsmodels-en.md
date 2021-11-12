# Logistic regression with statsmodels

## Logistic regression with statsmodels

appropriate regression for binary classification (0 / 1): _logistic regression_

## Logistic regression with statsmodels

https://www.kaggle.com/jojoker/titanic-survival-chance-with-statsmodels

## Logistic regression with statsmodels

import data:

```py
import pandas as pd
titanic = pd.read_csv(
    "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv",
    index_col="PassengerId",
)
```

## Logistic regression with statsmodels

prepare data:

```py
# column with a numeric value
titanic["Female"] = titanic["Sex"].replace(
    {"female": 1, "male": 0}
)

# remove rows with missing age
titanic = titanic.dropna(subset=["Age"])
```

## Logistic regression with statsmodels

```py
import statsmodels.api as sm

x = titanic[["Pclass", "Age", "SibSp", "Parch", "Fare", "Female"]]
x = sm.add_constant(x)

y = titanic["Survived"]
```

## Logistic regression with statsmodels

```py
model = sm.Logit(y, x)
results = model.fit()
results.summary()
```

## Logistic regression with statsmodels

dismissing properties with a high p-value:

```py
x = x.drop(["Parch", "Fare"], axis=1)
```

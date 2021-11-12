# Logistische Regression mit statsmodels

## Logistische Regression mit statsmodels

Passende Regression bei binären Klassifikationen (0 / 1): _Logistische Regression_

## Logistische Regression mit statsmodels

Beispiel: Logistische Regression für Überleben auf der Titanic

https://www.kaggle.com/jojoker/titanic-survival-chance-with-statsmodels

## Logistische Regression mit statsmodels

Daten importieren:

```py
import pandas as pd
titanic = pd.read_csv(
    "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv",
    index_col="PassengerId",
)
```

## Logistische Regression mit statsmodels

Daten vorbereiten:

```py
# column with a numeric value
titanic["Female"] = titanic["Sex"].replace(
    {"female": 1, "male": 0}
)

# remove rows with missing age
titanic = titanic.dropna(subset=["Age"])
```

## Logistische Regression mit statsmodels

```py
import statsmodels.api as sm

x = titanic[["Pclass", "Age", "SibSp", "Parch", "Fare", "Female"]]
x = sm.add_constant(x)

y = titanic["Survived"]
```

## Logistische Regression mit statsmodels

```py
model = sm.Logit(y, x)
results = model.fit()
results.summary()
```

## Logistische Regression mit statsmodels

Verwerfen von Attributen mit hohem p-Wert:

```py
x = x.drop(["Parch", "Fare"], axis=1)
```

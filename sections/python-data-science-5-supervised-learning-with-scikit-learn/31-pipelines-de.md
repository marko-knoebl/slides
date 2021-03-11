# Pipelines

## Pipelines

Pipelines können aus mehreren transformierenden Algorithmen und einem vorhersagenden Algorithmus zusammengesetzt werden:

```py
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression

model = make_pipeline(
    SimpleImputer(strategy='mean'),
    StandardScaler(),
    LinearRegression()
)
```

## Pipelines

Aufgabe:

Erstelle eine Pipeline für die Kategorisierung von Iris-Daten

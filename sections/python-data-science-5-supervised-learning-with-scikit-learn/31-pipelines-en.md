# Pipelines

## Pipelines

Pipelines can be composed from several transforming algorithms and one predicting algorithm:

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

task:

create a pipeline that categorizes iris data

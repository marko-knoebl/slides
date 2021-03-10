# Polynomial regression with scikit-learn

## Polynomial regression with scikit-learn

Some data won't fit a linear relation like:

`y = a*x + b`

We could try a polynomial relation, e.g.:

`y = a*x^2 + b*x + c`

`y = a*x^3 + b*x^2 + c*x + d`

## Polynomial regression with scikit-learn

scikit-learn offers a _preprocessor_ called `PolynomialFeatures`

```py
from sklearn.preprocessing import PolynomialFeatures

poly_model = make_pipeline(
    PolynomialFeatures(2),
    LinearRegression()
)

poly_model.fit(x, y)
```

## Exercises

- use a polynomial regression instead of a linear regression for one of the previous examples
- use a polynomial regression for dataset _II_ of the so-called anscombe data (can be loaded via the _seaborn_ library)

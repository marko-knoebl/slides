# Regression: polynomial regression and regularization

## Polynomial regression

instead of a linear relation, we could assume a polynomial (or other) relation between independent and dependent variables

## Polynomial regression

assuming a quadratic relation with age in the diabetes dataset

adding another column:

```py
x["age_squared"] = x["age"] ** 2
```

## Regularization

regularizations to avoid big coefficients:

- L_1 regularization (Lasso): absolute values of coefficients are penalized
- L_2 regularization (Ridge): squared values of coefficients are penalized

```py
model.fit_regularized(alpha=0.01, L1_wt=0.1)
```

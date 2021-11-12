# Linear regression

## Linear regression

Linear regression: a linear function is fitted to given data points (usually via least squares)

- independent variable(s) (x)
- dependent variable(s) (y)

## Linear regression

Example: various purchases in different supermarkets:

- 1 l of milk, 1 kg of bread: 5.00€
- 2 l of milk, 3 kg of bread: 13.50€
- 3 l of milk, 2 kg of bread: 10.90€
- (0 l of milk, 0 kg of bread: 0€)

task: estimate prices of:

- 1 l of milk
- 1 kg of bread
- 2 l of milk and 2 kg of bread

This may be solved via regression

## Linear regression

input data:

```txt
1, 1 → 5.00
2, 3 → 13.50
3, 2 → 10.90
0, 0 → 0.00
```

result of a linear regression:

```txt
price = 0.05 + 1.13*x + 3.73*y
```

## Linear regression

most common veriant:

**OLS (ordinary least squares)**: the sum of squared errors (deviations) should be minimal

## Metrics

general:

- _F-test_ / _F-statistic_: probability of there being a correlation (or not) (assuming normal distributions)
- RMSE (root mean squared error): square root of mean squared errors
- R² ("R squared", coefficient of determination)
  - measure expressing the relative error (between 0 and 1)
  - how much of the variance of the dependent variable can be explained by the independent variables?
- _Akaike information criterion_ (_AIC_), _bayesian information criterion_ (_BIC_) (lower is better)

## Metrics

values per feature / independent variable:

- _value_: estimated coefficient
- _std error_: standard error of coefficient
- _p-value_: probability of outputs being independent from this input
- _t-statistic_: ratio between average deviation and coincidentally expected deviation

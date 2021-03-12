# Linear regression

## Linear regression

Linear regression: a linear function is fitted to given data points (usually via least squares)

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

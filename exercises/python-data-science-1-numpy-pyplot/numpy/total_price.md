# Total price

## Single order

Given an array of prices and an array of quantities, determine the total price:

```py
prices = np.array([3.99, 4.99, 3.99, 12.99])
# buying the first item 3 times and the last item 2 times
order_quantities = np.array([3, 0, 0, 2])
```

## Multiple orders

Start out with an array that represents all orders that were placed within 1 day

```py
orders = np.array([
    [3, 0, 0, 2],
    [10, 3, 4, 8],
    [19,0, 1, 1]
])
```

Determine:

- total sold value per product
- total prices per order (advanced)

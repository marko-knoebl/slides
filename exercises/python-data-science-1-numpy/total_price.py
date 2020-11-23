import numpy as np

prices = np.array([3.99, 4.99, 3.99, 12.99])
# buying the first item 3 times and the last item 2 times
order = np.array([3, 0, 0, 2])

total = np.sum(prices * order)

# alternative using matrix multiplication
total_ = prices @ order

print(f"Total price for one order: {total}")


orders = np.array([
    [3, 0, 0, 2],
    [10, 3, 4, 8],
    [19,0, 1, 1]
])

total_by_product = orders.sum(axis = 0) * prices

print(f"Total sold value per product: {total_by_product}")

total_by_order = orders @ prices
print(f"Total prices per order: {total_by_order}")

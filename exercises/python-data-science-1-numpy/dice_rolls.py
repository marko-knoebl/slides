import numpy as np

dice = np.random.randint(1, 6, (10000, 10))

total = dice.sum(axis=1)

print(total.mean())
print(total.std())

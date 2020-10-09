import numpy as np

n = 10 ** 6

# array of n points in 2D space
# each row is a point
# x and y are between -1 and 1
points = np.random.random((n, 2)) * 2 - np.array([1, 1])

# array of distances from the point [0, 0]
r = np.sqrt(points[:, 0] ** 2 + points[:, 1] ** 2)

# array of points within the unit circle
points_inner = points[r <= 1]

# number of points that are closer than 1
print(points_inner.shape)

# relative amount
pi_approx = points_inner.shape[0] * 4 / n

print(f"Pi is approximately {pi_approx}.")

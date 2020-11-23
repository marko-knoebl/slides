# Approximating Pi

The mathematical constant _pi_ is approximately equal to 3.1415.

We can get an approximation of _pi_ by filling the square between [-1, -1] and [1, 1] with randomly created points and determining how many of these points lie within the circle centered at [0, 0] with radius 1. This ratio should be approximately equal to _pi/4_.

Steps:

- create an array of _n_ random points between [-1, -1] and [1, 1]
- determine their distance from the origin by calculating _sqrt(x^2 + y^2)_ for each point
- filter out all points that are further away than 1
- determine what ratio of points is left
- multiply by 4

Start out with 1 million points. You can increase the number of points, but watch your RAM usage.

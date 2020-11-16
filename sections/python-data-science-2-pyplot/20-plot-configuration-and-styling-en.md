# Pyplot: Configuration and Styling

## Styling

Predefined stylesheets are available via:

```py
plt.style.use("stylename")
```

[Reference of available styles](https://matplotlib.org/3.3.0/gallery/style_sheets/style_sheets_reference.html)

## Styling graphs

graph styling example:

```py
plt.plot(x, y, color="C0", marker="X", linestyle="dashed")
```

## Styling graphs

specifying colors:

- theme color (_C0_ ... _C10_)
- color name (_green_ / _lightblue_ / ...)
- short name (_r_ / _g_ / _b_ / _c_ / _m_ / _y_ / _k_)
- hex code (e.g. _#FFAA00_)
- RGB tuple (e.g. `(1, 0.7, 0)`)

## Styling graphs

line style:

-  `"none"` or `""`
-  `"solid"` or `"-"`
-  `"dashed"` or `"--"`
-  `"dotted"` or `":"`
-  `"dashdot"` or `"-."`

## Styling graphs

marker:

- `""` (none)
- `"."` (small dot)
- `"o"` (large dot)
- `"s"` (square)
- `"X"`
- `"+"`
- `","` (pixel)
- ...

## Styling graphs

important parameters:

- `color`
- `linestyle`
- `linewidth`
- `marker`
- `markersize`

## Styling graphs

combined short form (less flexible):

```py
plt.plot(x, y, "C0X--")
```

## Labels

- `plt.title("Trigonometric functions")`
- `plt.xlabel("x (radians)")`
- `plt.ylabel("y")`

## Labels

labelling individual graphs:

```py
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')

plt.legend()
```

## Axes

disabling axes:

```py
plt.axis("off")
```

## Axes limits

Fit axes (without gaps):

```py
plt.axis("tight")
```

Show a specific region:

```py
plt.axis([-1, 1, -1, 1])
```

Show a specific region of one axis:

```py
plt.xlim(-1, 1)
```

## Scaling

Equal distances on both axes:

```py
plt.axis("equal")
```

Equal distances on both axes, restricting plot area to used data ranges:

```py
plt.axis("scaled")
```

## Grid

```py
plt.grid(True)
```

## Ticks

```py
plt.yticks([-1, 0, 1])
plt.xticks(np.linspace(0, 2*np.pi, 5))
```

## Exercises

- sine and cosine with extended options
- n-th prime and approximation via _n \* ln(n)_
- estimating pi via random points

## Exercise: sine and cosine with extended options

possible result:

<img src="assets/pyplot-sine-cosine-advanced.png" alt="Advanced plot of sine and cosine" />

## Exercise: sine and cosine with extended options

```py
import matplotlib.pyplot as plt
import numpy as np

plt.style.use("seaborn")

x = np.linspace(0, 2*np.pi, 100)
sin = np.sin(x)
cos = np.cos(x)
plt.plot(x, sin, "C0--", label="sin(x)")
plt.plot(x, cos, "C1:", label="cos(x)")

pi_multiples = np.array([0, 0.5, 1, 1.5, 2]) * np.pi
sin_points = np.sin(pi_multiples)
cos_points = np.cos(pi_multiples)
plt.plot(pi_multiples, sin_points, "C0o")
plt.plot(pi_multiples, cos_points, "C1o")

plt.title("Trigonometric functions")
plt.xlabel("x (radians)")
plt.xticks(np.linspace(0, 2*np.pi, 5))
plt.legend()
plt.axis("scaled")
```

## Resource

see [Python Data Science Handbook: Simple Line Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.01-simple-line-plots.html)

# Pyplot: Configuration and Styling

## Styling

Predefined Stylesheets are available via:

```py
plt.style.use("stylename")
```

[Reference of available styles](https://matplotlib.org/3.3.0/gallery/style_sheets/style_sheets_reference.html)

## Styling graphs

short form:

```py
plt.plot(x, y, "gx--")
```

long form:

```py
plt.plot(x, y, color="green", linestyle="dashed", marker="x")
```

The long form enables more detailed specification of color and size

## Styling graphs

specifying colors:

- color name (_green_ / _lightblue_ / ...)
- tableau color (_C0_ ... _C10_)
- short name (_r_ / _g_ / _b_ / _c_ / _m_ / _y_ / _k_)
- hex code (e.g. _#FFAA00_)
- RGB tuple (e.g. `(1, 0.7, 0)`)

## Styling graphs

line styles:

- `""` (_none_)
- `"-"` (_solid_)
- `"--"` (_dashed_)
- `":"` (_dotted_)
- `"-."` (_dashdot_)

## Styling graphs

markers:

- `""` (none)
- `","` (small dot)
- `"."` (medium dot)
- `"o"` (large dot)
- `"s"` (square)
- `"x"`
- `"+"`
- ...

## Styling graphs

important parameters:

- `color`
- `linestyle`
- `linewidth`
- `marker`
- `markersize`

## Labels

- `plt.title("Trigonometric functions")`
- `plt.xlabel("x (radians)")`
- `plt.ylabel("y")`

## Labels

labelling multiple graphs:

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

Equal distances on both axes, restricting axes markings to used data ranges:

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

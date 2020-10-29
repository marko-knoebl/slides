# Find equations

Write a function that finds linear equations in x, y and z within a string

Example input:

```
The equations are 34x+7y-1z=9 and -1x+4y+2z=-7
```

Output:

```py
[
    {'xcoeff': '34', 'ycoeff': '+7', 'zcoeff': '-1', 'abs': '9'},
    {'xcoeff': '-1', 'ycoeff': '+4', 'zcoeff': '+2', 'abs': '-7'}
]
```
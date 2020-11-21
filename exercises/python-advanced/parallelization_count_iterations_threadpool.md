# Count iterations

write a script that executes a loop of 1 million iterations in two separate threads; count how many iterations are spent in each thread before switching to the other

example output:

```
57525 iterations in thread 0
30614 iterations in thread 1
59253 iterations in thread 0
41117 iterations in thread 1
56862 iterations in thread 0
20361 iterations in thread 1
...
```
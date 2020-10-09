# CPU monitor with pyplot

Write a script that tracks the CPU load and updates an image called _cpu.png_ every second. The image file should contain a graph of the CPU load.

Note: We're updating an image file because it is easier than updating an interactive plot window.

You can track the CPU load via the PIP package _psutil_. If psutil doesn't work on your system, use some other data source, e.g.:

- random values
- bitcoin prices from https://blockchain.info/ticker (updated every minute)

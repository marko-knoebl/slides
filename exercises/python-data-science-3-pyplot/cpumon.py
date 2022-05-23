import psutil
import matplotlib.pyplot as plt

import time

cpu_loads = []

fig = plt.figure(figsize=(10, 4))

for i in range(100):
    cpu_loads.append(psutil.cpu_percent())
    plt.clf()
    plt.plot(cpu_loads)
    fig.savefig("cpu.png")
    time.sleep(1)

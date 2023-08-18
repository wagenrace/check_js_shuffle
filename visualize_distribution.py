import json
import numpy as np
import matplotlib.pyplot as plt

with open("data.json", "rb") as fp:
    all_samples = json.load(fp)

heatmap = np.zeros((10, 10))

for sample in all_samples:
    for index, number in enumerate(sample):
        heatmap[index][number] += 1
plt.imshow(heatmap)
plt.show()

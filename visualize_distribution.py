import json
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

for shuffle_name in ["shuffle_1", "shuffle_2"]:
    with open(f"{shuffle_name}.json", "rb") as fp:
        all_samples = json.load(fp)

    heatmap = np.zeros((len(all_samples[0]), len(all_samples[0])))

    for sample in all_samples:
        for index, number in enumerate(sample):
            heatmap[index][number] += 1
    heatmap /= len(all_samples)

    fig = plt.figure(figsize=(16, 16))
    sns.set()
    ax = sns.heatmap(heatmap, vmin=0, vmax=2 / len(all_samples[0]))
    plt.ylabel("New position")
    plt.xlabel("Start position")
    plt.savefig(f"{shuffle_name}.png")
    plt.close(fig)

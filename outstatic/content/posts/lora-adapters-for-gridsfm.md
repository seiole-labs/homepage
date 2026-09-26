---
title: Fine-Tuning GridSFM, Efficiently
publishedAt: 2026-09-26T14:18:16.888Z
status: published
author:
  name: Ninad Sonawane
  picture: https://avatars.githubusercontent.com/u/77869600?v=4
slug: lora-adapters-for-gridsfm
coverImage: /images/industrial-pattern.png
tags: []
---

In the previous [post](https://seiole.com/posts/taking-gridsfm-on-a-spin), we evaluated GridSFM under two regimes: an almost in-distribution (Almost-ID) perturbation set, and a zero-shot topology-and-scale out-of-distribution (OOD) set. Under OOD conditions, error increased substantially across nearly all reported channels relative to Almost-ID.

This pattern is consistent with the authors' own results on their held-out OOD grid (case6470_rte): cost MAPE degraded from 3.35% in-sample to 13.99% under zero-shot evaluation, and the feasibility classifier collapsed entirely (F1 = 0.945 → 0.000). Following 10 epochs of fine-tuning on 1,000 scenarios from the same grid, cost MAPE recovered to 1.12% and feasibility F1 to 0.988.

### *Why fine tuning is game changer..but*

The GridSFM authors characterize the released checkpoint as a foundation model that has internalized AC-OPF physics during pre-training. Adapting to an unseen grid only requires re-aligning the model’s calibration to that grid’s specific scale and operating envelope rather than re-learning from scratch.

This framing holds, but it surfaces a practical constraint: grid topology is strongly geography-dependent. Grid networks in the US, Europe and South Asia differ materially in bus concentration, line ratings, topology, congestion patterns, and generator cost curves.  To actually unlock a foundation model's promise at the level of an individual grid or utility, we  require a fine-tuning method that is computationally efficient enough to apply per-grid. This motivates a parameter-efficient fine-tuning (PEFT) approach instead of full-training.

### *We tested LoRA on GridSFMs*

We reproduced the fine-tuning setup used by the GridSFM authors and substituted a LoRA adapter starting with Feed Forward Layer or full-parameter fine-tuning. With a substantially reduced trainable-parameter count and compute budget, the LoRA adapter matched, and in several metrics exceeded, the fine-tuning results reported in the GridSFM white paper.

We are releasing a white paper and accompanying code for our LoRA adapters for GridSFM alongside this post, beginning with adapters for the model's feed-forward layers. We plan to extend coverage to the remaining layer types in future releases.
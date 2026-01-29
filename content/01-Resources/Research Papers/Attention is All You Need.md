---
title: Attention Is All You Need
description: The 2017 paper that introduced the Transformer architecture, revolutionizing NLP and becoming the foundation for modern LLMs like GPT and BERT.
tags:
  - research-paper
  - LargeLanguageModel
  - Technology
  - SuperIntelligence
draft: false
---

- **Paper:** [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)
- **Authors:** Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin (Google Brain / Google Research)
- **Published:** June 2017
- **Citation Count:** 100,000+ (one of the most cited ML papers ever)

## Summary

This paper introduced the **Transformer** — a new neural network architecture that relies entirely on attention mechanisms, dispensing with recurrence and convolutions. It became the foundation for virtually all modern large language models (GPT, BERT, Claude, etc.).

## The Problem It Solved

Before Transformers, sequence models (like RNNs and LSTMs) processed tokens sequentially — one after another. This created two major problems:
1. **Slow training** — couldn't parallelize across sequence positions
2. **Long-range dependencies** — hard to connect information far apart in a sequence

## Key Innovation: Self-Attention

The Transformer uses **self-attention** (also called "scaled dot-product attention") to let every position in a sequence attend to every other position directly — in parallel.

**The attention formula:**
```
Attention(Q, K, V) = softmax(QK^T / √d_k) V
```

Where:
- Q = Queries (what am I looking for?)
- K = Keys (what do I contain?)
- V = Values (what do I actually output?)
- d_k = dimension of keys (scaling factor to prevent vanishing gradients)

## Architecture

### Encoder-Decoder Structure
- **Encoder:** 6 identical layers, each with multi-head self-attention + feed-forward network
- **Decoder:** 6 identical layers, each with masked self-attention + cross-attention to encoder + feed-forward network

### Multi-Head Attention
Instead of one attention function, use multiple "heads" that attend to different representation subspaces:
- Allows the model to jointly attend to information from different positions
- Each head learns different patterns (syntax, semantics, etc.)

### Positional Encoding
Since there's no recurrence, position information is injected via sinusoidal functions added to input embeddings.

## Why It Matters

1. **Parallelization** — Training is massively faster than RNNs
2. **Long-range connections** — Any two positions connect in O(1) operations
3. **Scalability** — Architecture scales to billions of parameters
4. **Foundation for everything** — GPT, BERT, T5, Claude, LLaMA all descend from this

## Results (at the time)

- State-of-the-art on English-German translation (28.4 BLEU)
- State-of-the-art on English-French translation (41.0 BLEU)
- Trained in fraction of the time of competing models

## Notable Quote

> "The Transformer is the first transduction model relying entirely on self-attention to compute representations of its input and output without using sequence-aligned RNNs or convolution."

## Connected Notes

- [[Sam Altman]] — CEO of OpenAI, which built GPT models on this architecture
- [[The Gentle Singularity]] — Discusses how models like GPT-4 and o3 (descendants of Transformer) are driving AI progress

## My Thoughts

*(Add personal reflections here)*

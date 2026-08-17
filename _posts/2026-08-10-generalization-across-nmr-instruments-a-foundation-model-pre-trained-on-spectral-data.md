---
title: 'Generalization Across NMR Instruments: A Foundation Model Pre-Trained on Spectral Data'
date: 2026-08-09T22:00:00.000Z
permalink: /blog/rose_foundation_model_NMR_spectral_data
layout: article
published: false
image: /img/Screenshot 2026-08-14 at 11.30.52.png
image_alt: AI-generated Image
author: 'Silvia Bongiovanni [BD Representative, Rombo AI]'
excerpt: 'Most NMR deep learning models train an encoder and task head together for a particular endpoint, field strength, or instrument regime. Performance can decline when spectra come from hardware outside that training distribution. Powered by a single 9.9M-parameter Vision Transformer, ROSE instantly captures instrument-agnostic chemical identity, delivering match-grade accuracy across classification and structure retrieval with little-to-no fine-tuning.'
markdown_content: |-
  ROSE is a spectrum foundation model pretrained on 3.2 million experimental, simulated, and benchtop proton NMR spectra. Its multi-B0 pairing objective brings representations of the same molecule closer across field strengths. Evaluation uses molecular identities excluded entirely from pretraining, which tests transfer rather than memorization.

  The resulting encoder supports low-field classification, structure-to-spectrum prediction, peak detection, denoising, and spectrum-to-structure retrieval through a shared representation. ROSE handles adaptation at three levels. Pretrained task heads require no new training, lightweight heads train against a frozen spectral trunk, and difficult retrieval tasks use short fine-tuning of the full encoder.

  ## Model architecture and pretraining corpus

  ROSE uses a 9.9-million-parameter spectral trunk to convert one-dimensional proton NMR spectra into reusable 256-dimensional embeddings. Each input spectrum is mapped onto a canonical 4,096-point chemical-shift grid spanning 0 to 14 ppm. The mapping gives spectra collected by different instruments a shared numerical representation.

  The spectral trunk begins with a three-layer convolutional stem. Each layer uses 32 channels and a kernel width of 7, with dilation rates of 1, 2, and 4. A patch embedding layer then divides the grid into 128 patches of 32 points. Eight pre-normalized transformer layers process those patches with eight attention heads, an MLP ratio of 4, dropout of 0.1, and stochastic depth of 0.1.

  A learnable classification token collects the final spectrum embedding. Four metadata tokens encode field strength and solvent, while sinusoidal position encodings preserve each patch’s chemical-shift location. Metadata conditioning lets the trunk represent instrument regime without treating field-dependent peak patterns as different molecular identities.

  ROSE also includes an optional structure branch for tasks involving molecular graphs. A four-layer graph transformer encodes SMILES-derived graphs with a hidden dimension of 256, four attention heads, and approximately 1.1 million parameters. The graph representation feeds the contrastive retrieval head and the structure-to-spectrum prediction head. It never cross-attends to the spectral trunk. Architecture ablations found that this CLIP-style separation performed better than cross-attention variants. The complete model occupies approximately 100 MB on disk.

  ROSE-Pretrain-L contains 3,210,452 experimental, simulated, and benchtop spectra gathered across 15 public sources. Rombo reports corpus size in spectra. The aggregate corpus record does not provide separate molecule counts for each source.



  | Corpus | Spectra | Purpose |
  | --- | --- | --- |
  | ROSE-Pretrain-XS | Approximately 97,726 | Architecture ablation |
  | ROSE-Pretrain-S | 915,160 | Training-recipe selection and warm-start checkpoint |
  | ROSE-Pretrain-L | 3,210,452 | Final heterogeneous pretraining |





  | Source group | Data type and role |
  | --- | --- |
  | NMRexp | Largest experimental contribution and broad peak-list coverage |
  | IBM MSD and ChefNMR USPTO | USPTO-scale simulated spectra, including stick-like inputs |
  | NMRBank | Literature-mined spectra used only in training |
  | Sagmeister collection | Primary real low-field anchor at 43 MHz |
  | HMDB and BMRB | High-field metabolomics spectra |
  | GISSMO | Simulated multi-field spectra used for cross-field pairing |



  During pretraining, the multi-field pairing objective brings spectra with the same molecular identity closer together even when different instruments or field strengths produced them. All spectra use the same 4,096-point grid, so the spectral trunk can learn across continuous traces, peak lists, and simulated inputs without source-specific input layers.

  ## Evaluation protocol and holdout integrity

  Rombo applied an identity-level holdout before pretraining to prevent the model from seeing benchmark molecules in another spectral form. The holdout uses InChIKey-14, the first 14 characters of the standard molecular identity hash, to group spectra by chemical identity. Any matching identity was excluded regardless of source, field strength, instrument, or spectral representation.

  A post-split audit found zero identity overlap between pretraining data and 35,628 unique molecules across five external benchmarks. The audit covered NMRNet, NMRBank, NMR-Solver, NMRGym, and NMRformer. Benchmark results therefore measure transfer to unseen molecular identities rather than recall of related spectra from the pretraining corpus.

  Architecture and training choices were fixed through structure-conditioning, loss-balancing, and task leave-one-out ablations before the final training run. Rombo then repeated key evaluations with seeds 42, 43, and 44 to test whether results depended on one initialization.

  Matched controls isolate the contribution of pretraining. A randomly initialized encoder used the same architecture, downstream data, fine-tuning procedure, and training budget as the pretrained encoder. Differences between these conditions can therefore be attributed to the pretrained representation within the limits of the matched experiment.

  ## Cross-field embedding geometry

  ROSE organizes spectra primarily by chemical identity across magnetic field strengths. The UMAP figure projects the 256-dimensional embeddings into two dimensions and shows identity clusters that contain spectra acquired under different field regimes. Low-field benchtop spectra between 43 and 100 MHz remain close to corresponding high-field spectra when both represent the same molecule.

  Cosine similarity quantifies the pattern visible in the UMAP figure. Across the full GISSMO test set, embeddings for the same InChIKey-14 identity measured at different field strengths reach 0.93 mean similarity, compared with 0.44 for different identities. The low-field-only slice produces a wider gap of 0.97 for matching identities and 0.47 for different identities. Higher cosine similarity indicates that two embedding vectors encode similar spectral content despite changes in line shape or peak separation caused by field strength.

  A linear probe shows that ROSE preserves instrument information without allowing it to dominate chemical identity. A simple classifier separates low-field and high-field spectra from frozen embeddings with 98.8% accuracy. Field regime therefore forms a separable axis within the representation. A downstream model can use field information when a task requires it while relying on the shared identity representation for transfer across instruments.

  ROSE also retrieves matching identities directly across field strengths. The native multi-field pairing task reaches 87.8% Top-1 accuracy on the full test set and 62.2% on the low-field-only slice. The similarity gaps measure neighborhood structure, the probe measures retained field information, and pairing accuracy tests direct cross-field matching. Together, the three evaluations show that ROSE represents chemical identity consistently while retaining a distinct encoding of the acquisition regime.

  ## Benchmark results by task

  Rombo evaluated ROSE under three adaptation tiers. Zero-shot tasks use an existing pretrained head without new training. Frozen-head tasks keep the spectral encoder fixed and train a lightweight head, while fine-tuned tasks update the encoder on task-specific data.



  | Task and benchmark | Adaptation tier | ROSE result | Comparison or progression |
  | --- | --- | --- | --- |
  | Edible-oil classification at 60 MHz, 275 QIB spectra | Frozen-head | 98.8% ± 1.8% balanced accuracy under five-fold cross-validation | Published PLS-DA baseline reached 98.9% accuracy |
  | Forward structure-to-spectrum prediction, NMRShiftDB2 2018-H | Frozen-head | 0.79 Chamfer loss | Morgan fingerprint plus Ridge regression reached 1.29, giving ROSE 39% lower error |
  | Spectrum-to-structure retrieval, NMR-Solver with about 30,000 decoys | Fine-tuned | 35.9% Top-1 and 67.5% Top-10 | Frozen pretrained encoder reached 0.0% and 1.7%. Random initialization remained near 0% Top-1 after equivalent fine-tuning |
  | Spectrum-to-structure retrieval, NMRGym | Fine-tuned | 13.9% Top-1 and 47.8% Top-10 | Frozen pretrained encoder reached 2.8% and 17.0%. Random initialization remained near 0% Top-1 |
  | Spectrum-to-structure retrieval, NMRBank | Fine-tuned | 14.6% Top-1 and 42.9% Top-10 | Frozen pretrained encoder reached 3.9% and 18.7%. Random initialization remained near 0% Top-1 |
  | Peak detection, internal test set | Zero-shot | 0.80 F1 at 0.05 ppm tolerance | No additional task-specific training |
  | Peak detection, external NMRformer holdout | Zero-shot | 69% F1 across 15 single-compound spectra | External evaluation |
  | Denoising, internal test set | Zero-shot | 0.95 to 0.99 cosine similarity to clean spectra and 16.1 dB SNR improvement on the full test set | No additional task-specific training |



  The 60 MHz edible-oil result provides the clearest low-field industrial comparison. ROSE reached 98.8% balanced accuracy, which is numerically close to the 98.9% accuracy reported by Gunning et al. for PLS-DA. The studies report different accuracy metrics, so the comparison supports similar classification performance rather than exact equivalence.

  Retrieval provides the strongest evidence that pretraining drives the later gains. Fine-tuning lifted Top-1 accuracy across NMR-Solver, NMRGym, and NMRBank, while an encoder trained from random initialization under the same budget stayed near 0%. Fine-tuning alone therefore did not reproduce the pretrained encoder’s performance.

  ## Comparison to prior NMR models and vendor tooling

  ROSE addresses a different research question than NMR datasets and structure-elucidation benchmarks. [NMRGym](https://arxiv.org/html/2601.15763v1) provides 269,999 molecules with paired ¹H and ¹³C spectra, a scaffold-based split, and evaluations across several downstream tasks. NMRBank contributes 149,135 molecule-spectrum entries. Neither resource constitutes a pretrained model that encodes raw spectra across instrument fields.

  NMR-Solver is a search-based structure-elucidation framework rather than a general-purpose spectrum encoder. It combines neural representations with chemical constraints, then searches simulated spectral databases and optimizes candidate structures. NMRGym evaluates NMR-Solver as a baseline, but that evaluation does not establish field-strength invariance in raw-spectrum representations.

  UltraNMR provides the closest named foundation-model comparison. UltraNMR pretrains on extracted peaks and chemical shifts, while ROSE learns directly from continuous spectra. The two approaches therefore differ at the input representation. Available sources do not support a performance comparison, so UltraNMR belongs in related work rather than a ranked benchmark.

  Vendor-neutral analytical software solves another problem. An [ACD/Labs application note](https://www.drugdiscoveryonline.com/doc/multi-technique-vendor-neutral-analytical-data-handling-for-chemists-0001) describes a shared environment for NMR, LC/MS, IR, and Raman data from vendor-specific software. Its vendor-neutral claim concerns data access, processing, assignment, and reporting across techniques. The available description does not claim that one learned model generalizes across raw spectra produced by different NMR hardware or field strengths.

  The supplied evidence provides no comparable cross-instrument model claim for Bruker or Mestrelab. ROSE should therefore be compared with those products only at the level of software function unless controlled cross-hardware model results become available.

  ## What this means for labs adopting new instruments

  Labs can match onboarding effort to the adaptation tier required by the intended task. Existing peak-detection and denoising heads support zero-shot use when a new instrument produces spectra on the expected chemical-shift grid. The lab still needs qualification spectra to check preprocessing, field metadata, and acceptance thresholds, but it does not need to train a new model.

  A new sample type usually requires a frozen-head approach when the task uses new labels. The edible-oil benchmark demonstrated this route with a frozen ROSE encoder and a lightweight classifier. Forward structure prediction also used a trained task head rather than retraining the shared representation. In practice, the lab can collect a smaller labeled set for the new endpoint while retaining the pretrained encoder.

  Large-gallery structure retrieval requires full encoder fine-tuning because the model must distinguish many closely related candidates within a specific chemical domain. The NMR-Solver, NMRGym, and NMRBank benchmarks demonstrated this tier. Their matched controls also showed that fine-tuning a randomly initialized encoder did not reproduce the benefit of pretraining.

  Instrument onboarding therefore depends on the task, not solely on the hardware change. Routine interpretation can begin with validation or a small task head. Specialized retrieval requires curated domain data and a short fine-tuning cycle, but the lab still starts from a reusable spectral representation rather than rebuilding an endpoint model.

  ## References

  1. Gunning, Y., et al. “Mitigating Instrument Effects in 60 MHz 1H NMR Spectroscopy for Authenticity Screening of Edible Oils.” *Food Chemistry*, 2022.
  2. Rowley, J., et al. “NMR Spectroscopy-Derived Index for the Nutritional Assessment of Extra Virgin Olive Oils Based on Fatty Acids Profiling.” *Food Chemistry*, 2025.
  3. Grootveld, M., et al. “Progress in Low-Field Benchtop NMR Spectroscopy in Chemical and Biochemical Analysis.” *Analytica Chimica Acta*, 2019.
  4. Sagmeister, P., et al. “Training Data for Benchtop NMR and UV/Vis Spectroscopy for Artificial Neural Networks.” *Zenodo*, 2022.
  5. Bommasani, R., et al. “On the Opportunities and Risks of Foundation Models.” 2021.
  6. Pan, S. J., and Yang, Q. “A Survey on Transfer Learning.” *IEEE Transactions on Knowledge and Data Engineering*, 2010.
  7. Bushuiev, R., et al. “DreaMS.” *Nature Biotechnology*, 2025.
  8. Wang, Y., et al. “NMRexp Database.” *Scientific Data*, 2025.
  9. Xu, Y., et al. “NMRNet.” *Nature Computational Science*, 2025.
  10. Hu, F., et al. “Structure Elucidation via Multitask Machine Learning.” *ACS Central Science*, 2024.
  11. Jin, W., et al. “NMR-Solver.” *arXiv*, 2025.
  12. Yang, et al. “UltraNMR.” *arXiv*, 2026.

  ## FAQs

  **What does a foundation model for NMR mean?**

  An NMR foundation model learns reusable spectral representations through broad pretraining rather than training for one task. ROSE provides Rombo AI with one shared encoder for classification, retrieval, peak detection, and denoising. You can adapt the representation to a new task without rebuilding the model.

  **How is field-strength generalization measured?**

  Field-strength generalization measures whether embeddings preserve molecular identity across different magnetic field strengths. ROSE produced 0.93 cosine similarity for matching cross-field molecules and 0.44 for different molecules. You can therefore compare spectra across instrument regimes while retaining chemical distinctions.

  **Why does retrieval need fine-tuning while classification does not?**

  Classification separates a small set of labeled classes, while retrieval must rank one correct structure among thousands of similar candidates. ROSE supports classification with a frozen encoder, but large-gallery retrieval requires short encoder fine-tuning. You can keep adaptation costs low unless the task demands fine molecular discrimination.

  **What data was the model trained on?**

  ROSE was pretrained on 3,210,452 experimental, simulated, and benchtop proton NMR spectra from 15 public sources. Rombo AI mapped every spectrum onto a shared 4,096-point grid covering 0 to 14 ppm. The mixed corpus exposes the encoder to low-field and high-field instruments, varied samples, and multiple acquisition formats.
---


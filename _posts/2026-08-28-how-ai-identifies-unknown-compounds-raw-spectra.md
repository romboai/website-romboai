---
title: 'How AI Identifies Unknown Compounds from Raw Spectra'
seo_title: 'How AI Identifies Unknown Compounds from Raw Spectra | Rombo AI'
date: 2026-08-28T07:00:00.000Z
permalink: /blog/how-ai-identifies-unknown-compounds-raw-spectra
layout: article
image: /img/blog/ai-unknown-compound-raw-spectra-2026-08-28.jpg
image_alt: Nuclear magnetic resonance spectrometer used to acquire raw spectral data for unknown-compound analysis
image_caption: 'NMR spectrometer. Image: <a href="https://commons.wikimedia.org/wiki/File:NMR_Spectrometer.jpg" rel="noopener noreferrer" target="_blank">Mgianino, via Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by/3.0/" rel="license noopener noreferrer" target="_blank">CC BY 3.0</a>. Cropped for presentation.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: AI spectroscopy can turn raw NMR or mass-spectral measurements into ranked structural hypotheses. Learn what models receive, how representations are learned, where candidate ranking differs from generation, and how chemists validate the result.
markdown_content: |-
  ## TL;DR

  - **AI does not identify an unknown from an image alone.** A useful system needs a defined spectral representation, acquisition context, a chemical search space, and an output that can be checked against the measurements.
  - **Models can learn features instead of relying only on hand-written peak rules.** Convolutional networks, transformers, and contrastive objectives can encode relationships among position, intensity, shape, and co-occurring signals.
  - **Identification and structure generation are different tasks.** Retrieval ranks candidates already in a gallery; de novo generation proposes structures that may not be present in one.
  - **Multiple analytical dimensions reduce ambiguity.** Formula constraints, 1D and 2D NMR, tandem MS, and orthogonal measurements can eliminate candidates that fit only part of the evidence.
  - **Confidence is not confirmation.** Calibration, identity-disjoint testing, raw-data review, and experimental confirmation remain necessary, especially outside the model’s training distribution.
  - **Foundation models can make spectral representations reusable.** The practical test is whether those representations transfer across instruments, samples, and tasks without hiding domain-shift failures.

  ## What an AI model actually receives

  “Raw spectrum” can mean different things. In NMR, the closest measurement to the instrument is the time-domain free induction decay. Fourier transformation, phase correction, baseline correction, referencing, and sometimes solvent suppression produce the frequency-domain trace most analysts inspect. In mass spectrometry, a profile spectrum may be centroided into an *m/z*–intensity peak list before identification begins.

  An AI workflow can therefore start from several input levels:

  | Input | Preserves | Requires |
  | --- | --- | --- |
  | Time domain | Acquisition signal and processing options | Model-aware Fourier and correction steps |
  | Profile trace | Peak shapes, shoulders, baseline, and noise | Consistent axis and preprocessing |
  | Peak list | Compact positions and intensities | Reliable detection, centroiding, and thresholds |
  | Spectrum image | Visual pattern and layout | Standardized rendering and scale |
  | Multimodal set | Relationships across 1D/2D NMR, MS, or metadata | Alignment and explicit handling of missing inputs |

  None is universally best. A peak list is efficient but may discard line shape and low-intensity shoulders. A profile trace preserves more evidence but also carries baseline, solvent, phase, and instrument effects. Images let vision architectures reuse mature methods, yet plot styling can become an unintended feature.

  Published systems illustrate the range. [NMR2Struct](https://doi.org/10.1021/acscentsci.4c01132) combines raw ¹H and ¹³C NMR spectra: convolutional models infer substructural information, which a transformer uses while assembling molecular structures. [NMRViT](https://pmc.ncbi.nlm.nih.gov/articles/PMC13211313/) instead treats ¹H, ¹³C, and HSQC spectra as images, explicitly studying the gap between simulated training spectra and experimental data. In tandem MS, [DreaMS](https://pubmed.ncbi.nlm.nih.gov/40410407/) learns from peak sequences rather than rendered plots.

  The first scientific question is consequently not “Which neural network?” but “Which evidence enters the model, and which evidence was removed before inference?”

  ## How learned spectral representations work

  Traditional interpretation begins with explicit features: chemical shifts, integrals, multiplicities, coupling constants, isotope patterns, neutral losses, or library similarity scores. Those features remain chemically useful. Representation learning changes who specifies the intermediate description.

  A one-dimensional convolution can scan a trace for local motifs such as a multiplet envelope or isotopic pattern. Deeper layers combine local responses across a wider spectral window. A transformer divides a trace into patches or treats peaks as tokens, then uses attention to model relationships between distant regions. For a 2D spectrum, an image encoder can learn cross-peak geometry and intensity patterns.

  The result is an embedding: a vector that compresses information relevant to the training objective. It is not a human-readable structure assignment. Its geometry becomes useful when related spectra or spectrum–structure pairs occupy nearby regions while unrelated examples are separated.

  Labels are expensive because experimental spectra with reliably confirmed structures are scarce compared with unlabeled measurements. Self-supervised learning uses the spectrum itself to create a training signal. A model may mask peaks and predict them, reconstruct a corrupted trace, or learn whether two views correspond to the same underlying sample. DreaMS, for example, was pretrained on millions of unlabeled tandem mass spectra using masked-peak and peak-order objectives before its representations were evaluated on downstream tasks.

  Contrastive learning uses paired observations. A spectrum encoder and a molecular encoder can be trained so that a spectrum is close to its correct structure and far from other structures in the batch. The 2026 [SECS framework](https://www.nature.com/articles/s41467-026-73846-y) combines contrastive spectrum–structure scoring with evolutionary search, allowing flexible combinations of experimental spectra to guide candidate generation and ranking.

  Learned features do not abolish chemistry. They relocate assumptions into the corpus, preprocessing, augmentations, pair construction, and loss function. If simulated spectra dominate training, a network may learn an unrealistically clean world. If the same molecular identities appear in training and test sets, reported performance may measure memorization rather than generalization. A defensible evaluation separates identities—not merely spectra—and documents how experimental data differ from training data.

  ## From an embedding to a compound identity

  A spectral representation becomes an identification only after a decision mechanism connects it to molecular candidates. Four mechanisms are common, and they answer different questions.

  | Mechanism | Output | Key limit |
  | --- | --- | --- |
  | Classification | One label from a fixed set | Cannot name an unseen class |
  | Retrieval | Ranked structures from a gallery | Cannot return a structure absent from the gallery |
  | Reranking | Reordered candidates from another method | Quality is capped by candidate generation |
  | Generation | Newly constructed molecular strings or graphs | May propose invalid or evidence-inconsistent structures |

  **Classification** is suitable when the target is a known material class, contaminant category, or bounded assay. It should not be presented as general unknown-compound elucidation.

  **Retrieval** maps the unknown spectrum near spectra or structures in a database. Learned similarity can outperform a fixed distance when nuisance variation is represented in training, but the answer still comes from the database. This is modern spectral matching, not de novo elucidation.

  **Reranking** begins with candidates generated from a molecular formula, exact mass, reaction context, or database query. A model predicts or embeds spectral evidence and moves candidates that better explain it toward the top. This can be powerful because chemistry constrains the search space before AI scores it.

  **Generation** constructs candidates token by token or graph operation by graph operation. [MassGenie](https://pmc.ncbi.nlm.nih.gov/articles/PMC8699281/) demonstrated a transformer that generates molecular representations from high-resolution mass spectra, while also documenting limitations associated with synthetic training and experimental spectra. NMR2Struct uses predicted substructures as constraints during generation rather than treating the spectrum as an unconstrained prompt.

  Full structure elucidation demands more than a single high similarity score. The proposed formula, functional groups, connectivity, stereochemical claims, and predicted signals must all be consistent with the available evidence. When several structures remain spectroscopically indistinguishable, the correct output is a shortlist or unresolved ambiguity—not false precision.

  ## Worked example: ranking an unknown from NMR evidence

  Consider an illustrative purified small molecule with a high-resolution mass suggesting a formula, plus ¹H, ¹³C, COSY, and HSQC spectra. The objective is to move from measurements to a defensible ranked hypothesis.

  **1. Preserve and qualify the inputs.** Keep the original data and acquisition metadata. Review phase, baseline, referencing, solvent peaks, signal-to-noise ratio, and evidence of impurities. A model should not silently interpret a processing artifact as chemistry.

  **2. Encode each available spectrum.** The system normalizes axes and intensities according to its documented preprocessing, then produces representations for the proton, carbon, and correlation spectra. Missing modalities must be marked as missing rather than replaced with invented evidence.

  **3. Extract constraints.** The formula limits elemental composition and unsaturation. HSQC associates proton and carbon environments; COSY suggests proton networks. A learned model may infer probable substructures, but explicit formula and correlation constraints can still reject impossible proposals.

  **4. Create candidates.** A retrieval workflow searches a structure gallery consistent with the formula. A generative workflow constructs structures under valence and formula constraints. A hybrid can retrieve close scaffolds, modify them, and retain both known and newly generated candidates.

  **5. Predict and compare.** For every candidate, predicted shifts or spectra are compared with the measured data. The ranker combines learned similarity with hard chemical checks. A candidate that matches common aromatic signals but cannot explain one carbonyl carbon or a key HSQC cross-peak should fall in rank.

  **6. Inspect the top set.** Suppose candidates A and B explain the formula and most 1D peaks, while C violates the COSY network. C can be rejected. If A and B differ only at a stereocenter not resolved by the acquired data, the evidence supports a constitutional assignment but not a unique stereochemical conclusion.

  **7. Test a discriminating prediction.** The chemist chooses the next experiment based on what separates A from B: an additional 2D NMR experiment, selective decoupling, derivatization, chromatography, or an authentic standard. The model helps prioritize the experiment; it does not manufacture the missing observation.

  This workflow is bookmark-worthy because every stage has an auditable object: qualified input, constraints, candidate set, predicted-versus-observed comparison, rank, and confirmation plan.

  ## Where AI spectroscopy fails to generalize

  Generalization is not one property. A model can transfer across instruments yet fail on a new chemical class, or handle new scaffolds while failing on mixtures. Validation should separate the axes of change.

  | Shift | Typical symptom | Check |
  | --- | --- | --- |
  | Instrument | Broader or displaced features | Hold out vendors, fields, or platforms |
  | Processing | Sensitivity to baseline or peak threshold | Reprocess the same raw data several ways |
  | Sample | Matrix, solvent, concentration, or pH effects | Use representative external samples |
  | Chemistry | Overconfident ranking for new scaffolds | Split by molecular identity or scaffold |
  | Acquisition | Missing dimensions or low signal-to-noise | Evaluate each modality and quality band |
  | Simulation | Strong synthetic, weak experimental results | Reserve untouched experimental tests |

  Instrument shift is especially important in NMR because field strength, probe, shimming, digital resolution, referencing, and preprocessing change the observed trace. Bruker’s published [machine-learning deconvolution application note](https://www.bruker.com/en/landingpages/bbio/artificial-intelligence-in-nmr/_jcr_content/root/contentpar/twocolumns_343981205/contentpar-1/calltoaction.download-asset.pdf/links/item1/T191719_MLDCON%20and%20TopSpin%20Application_note.pdf) shows a focused use of deep learning inside spectral processing. That is a valuable task, but peak deconvolution and unknown-structure elucidation should not be conflated.

  Simulation shift is another recurring problem. Synthetic spectra make it possible to cover many structures, but simulated linewidths, noise, artifacts, mixtures, and sample conditions may not reproduce the laboratory. NMRViT reports substantial performance differences between simulated and experimental spectra and uses fine-tuning to address that gap. The lesson is broader than one model: test on experimental data that were not used to choose preprocessing, architecture, or thresholds.

  Finally, uncertainty should be empirical. A softmax score or similarity value is not automatically a probability of correctness. Teams should measure how often predictions at each score band are correct on representative validation data, monitor abstentions and out-of-distribution cases, and show chemists which observations support or contradict each candidate.

  ## The next step: reusable models and Spectra AI

  A foundation model aims to learn a reusable spectral representation before adaptation to a single downstream task. Rombo AI’s public [ROSE repository](https://github.com/romboai/rose-1h-nmr) provides Apache-2.0 code and links to downloadable pretrained weights for ¹H NMR; its documentation describes denoising, peak detection, spectrum–structure retrieval, forward prediction, and spectrum-pair similarity heads. The weights make ROSE accurately described as **open-weight**, while the repository license covers the published code.

  Rombo’s broader approach is a foundation model pretrained on millions of spectra and designed to generalize across instrument and sample types rather than requiring a separate traditional chemometric calibration for every instrument. The practical goal is to compress an analysis cycle that can take weeks into approximately 15 minutes; that is a product claim to validate on the laboratory’s own samples and acceptance criteria.

  [Spectra AI](https://spectra.rombo.ai) is the distinct Rombo product line for compound identification and full structure elucidation from unknown spectra—not a generic extension of the broader industrial NMR platform. It is intended to turn spectral evidence into ranked structural hypotheses while keeping the chemist responsible for review and confirmation.

  **Working on an unknown NMR compound? [Evaluate the Spectra AI workflow](https://spectra.rombo.ai) with an appropriate spectrum and confirm the result against your laboratory’s orthogonal evidence.**

  ## FAQs

  **Can AI identify a compound directly from a raw spectrum?**<br>
  It can propose or rank identities when the input, training coverage, and search mechanism support the task. “Raw” must be defined, and a ranked answer still requires review of processing, data quality, and evidence consistency.

  **Is AI spectral matching the same as structure elucidation?**<br>
  No. Matching retrieves entries already present in a library. Full elucidation may require generating structures absent from that library and testing them against all available spectral and chemical constraints.

  **Why use several spectra instead of one?**<br>
  Different experiments constrain different parts of the structure. Combining 1D and 2D NMR, exact mass, or other orthogonal evidence reduces the number of candidates that can explain the observations.

  **Are open weights the same as open source?**<br>
  Not necessarily. “Open-weight” means trained parameters are available under stated terms; “open source” properly refers to software released under an open-source license. Check the code license, weight terms, data availability, and intended-use restrictions separately.

  **What should a chemist inspect before accepting a prediction?**<br>
  Inspect the original data, preprocessing, candidate alternatives, predicted-versus-observed signals, known model limitations, and any unresolved stereochemistry. Use a discriminating experiment or authentic standard when the application requires confirmation.
---

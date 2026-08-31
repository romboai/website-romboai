---
title: 'Combining NMR and Mass Spectrometry for AI Structure Elucidation'
seo_title: 'Combining NMR and Mass Spectrometry for AI Structure Elucidation | Rombo AI'
date: 2026-08-31T07:00:00.000Z
permalink: /blog/combine-nmr-mass-spectrometry-ai-structure-elucidation
layout: article
image: /img/blog/nmr-ms-data-fusion-2026-08-31.jpg
image_alt: Nuclear magnetic resonance spectrometer used to acquire structural evidence from chemical samples
image_caption: 'An NMR spectrometer, one source of evidence in a multimodal structure-elucidation workflow. Photo: <a href="https://commons.wikimedia.org/wiki/File:NMR_Spectrometer.jpg" rel="noopener noreferrer" target="_blank">Mgianino, via Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by/3.0/" rel="license noopener noreferrer" target="_blank">CC BY 3.0</a>. Resized by Rombo AI.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: Learn how NMR and mass spectrometry can be fused as constraints, features, or ranked decisions—and how to keep multimodal AI structure elucidation auditable.
markdown_content: |-
  ## TL;DR

  - **NMR and MS constrain different parts of the same inverse problem.** Accurate-mass MS can narrow elemental composition and fragmentation; NMR can constrain environments, proton counts, and atomic connectivity.
  - **“Combining the data” is not one method.** A pipeline may fuse hard chemical constraints, learned spectral representations, candidate scores, or a mixture of all three.
  - **Constraint-first fusion is usually the easiest to audit.** A formula or allowed-element set reduces the candidate space before NMR evidence ranks the survivors.
  - **More modalities do not guarantee a better answer.** Wrong adduct assignments, mixtures, missing correlations, domain shift, and poorly calibrated scores can make two plausible-looking inputs reinforce the same error.
  - **The useful output is a ranked, falsifiable hypothesis.** Each candidate should show which observations support it, which constraints it violates, and which experiment would discriminate between the remaining alternatives.
  - **A multimodal workflow can use a dedicated NMR model without claiming that the model itself ingests MS.** The boundary between product capability and laboratory orchestration must remain explicit.

  ## Complementary evidence, not interchangeable spectra

  Structure elucidation is an inverse problem: many molecular structures can be compatible with a limited observation. No single spectrum necessarily contains enough independent information to select one structure.

  High-resolution mass spectrometry can provide accurate *m/z*, isotope patterns, adduct information, and fragmentation. These observations can support an elemental formula and reveal how an ion breaks apart. Yet constitutional isomers may have the same formula, and similar fragments do not always identify how every atom is connected.

  NMR observes nuclei in their local chemical and magnetic environments. A 1D <sup>1</sup>H spectrum can constrain chemical environments, relative proton counts, and coupling relationships; <sup>13</sup>C and 2D experiments add carbon environments and through-bond or through-space correlations. Those observations are particularly valuable for distinguishing isomers, but overlap, low sensitivity, missing correlations, mixtures, and symmetry can leave several structures plausible.

  The important design question is therefore not “Which technique wins?” It is “At what point does each observation reduce uncertainty?” The SUMMIT MS/NMR workflow demonstrated a clear answer for complex mixtures: accurate masses provide molecular formulas, feasible structures are generated for those formulas, predicted NMR spectra are then compared with experimental NMR data ([Bingol et al., *Analytical Chemistry*, 2015](https://doi.org/10.1021/ac504633z)). Information passes forward as constraints instead of treating two instruments as independent voting systems.

  ## Three ways to fuse NMR and MS data

  The word *fusion* covers architectures with very different validation requirements. A practical taxonomy separates evidence-level, representation-level, and decision-level fusion.

  | Fusion layer | How it works | Main advantage | Main risk | What an audit should retain |
  | --- | --- | --- | --- | --- |
  | **Chemical constraints** | MS-derived formula, allowed elements, mass tolerance, and fragments restrict candidates before NMR scoring | Interpretable reduction of chemical space | An incorrect precursor, charge, adduct, or formula can remove the true structure early | Original ions, formula alternatives, tolerances, rule versions, and rejected candidates |
  | **Learned representations** | Separate encoders map NMR and MS into vectors that are aligned or combined before retrieval or generation | Can exploit patterns that are difficult to encode as rules | Training imbalance, missing modalities, simulated-data bias, and opaque cross-modal shortcuts | Preprocessing, encoder versions, modality masks, embedding diagnostics, and attribution back to spectra |
  | **Candidate scores** | NMR and MS models score the same structures; calibrated scores or ranks are combined late | Modular and easier to update by modality | Scores may be incomparable or statistically dependent; one overconfident model can dominate | Per-modality scores, calibration sets, weighting rule, conflicts, and final rank changes |
  | **Hybrid fusion** | Hard constraints narrow the space, learned models retrieve or generate candidates, and late scores rerank them | Balances chemistry rules, scale, and flexibility | Errors can propagate across stages and be hidden by the final score | A stage-by-stage candidate ledger and explicit stopping rules |

  Constraint fusion resembles established computer-assisted structure elucidation. ACD/Labs describes a workflow in which a molecular formula can be extracted from high-resolution MS, a Molecular Connectivity Diagram is built from analytical evidence, compatible structures are generated, and candidates are sorted and filtered ([ACD/Structure Elucidator Suite](https://www.acdlabs.com/products/spectrus-platform/structure-elucidator-suite/)). This is a strong incumbent position: the differentiation opportunity is not to rename candidate filtering as AI, but to make learned fusion robust to instrument variation while keeping the chemistry traceable.

  Representation fusion asks a harder question: can a model learn that an NMR pattern, a mass spectrum, and a molecular graph are different views of the same molecule? A multimodal dataset presented at NeurIPS 2024 provides simulated <sup>1</sup>H NMR, <sup>13</sup>C NMR, HSQC, IR, and positive- and negative-mode MS for about 790,000 molecules, specifically to support research on such shared representations ([Alberts et al., NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/file/e38e60b33bb2c6993e0865160cdb5cf1-Paper-Datasets_and_Benchmarks_Track.pdf)). Its scale is valuable, but the simulated origin is also a warning: experimental artifacts, acquisition choices, and chemical coverage still require separate validation.

  ## A traceable multimodal pipeline

  A defensible pipeline should preserve the route from files to conclusion. The following sequence works whether the ranking method is rule-based, learned, or hybrid.

  **1. Register the analytical object.** Link NMR, MS, blanks, controls, chromatographic fractions, acquisition metadata, and sample history to the same physical sample or a documented split. If the measurements represent different fractions or degradation states, fusion is already invalid.

  **2. Quality-control each modality independently.** For NMR, inspect phasing, baseline, referencing, solvent regions, signal-to-noise, integration conditions, and evidence of mixtures. For MS, inspect calibration, isotope pattern, charge, adducts, in-source fragments, co-isolation, and blank signals. A model should not turn failed quality control into a confident structure.

  **3. Preserve alternative constraints.** If MS supports two formulas within tolerance, retain both. If an NMR correlation is uncertain, label it as soft evidence rather than a mandatory bond. Prematurely converting uncertainty into a hard filter creates false certainty downstream.

  **4. Generate or retrieve candidates.** A formula-constrained database search, graph generator, fragment assembly system, or spectral retriever creates a candidate set. Candidate recall matters before ranking: a perfect ranker cannot recover a structure that the generator excluded.

  **5. Score each modality separately.** Compare predicted and observed NMR shifts, multiplicities, integrals, or correlations. Independently assess exact mass, isotope pattern, and fragments. Keeping these scores separate reveals contradictions that a single blended number can hide.

  **6. Fuse and calibrate.** Apply a documented rule to combine evidence. Calibration should use held-out experimental samples representative of instruments, matrices, chemical classes, and candidate-set sizes. A 0.9 output is meaningful only if similarly scored cases have behaved consistently under defined conditions.

  **7. Return evidence and the next test.** Report ranked structures, alternatives, violated constraints, modality-specific support, domain warnings, and a proposed experiment. The chemist decides whether the evidence supports a tentative assignment, a probable structure, or a claim requiring an authentic standard or further isolation.

  Recent research illustrates a more automated version of this pattern. SECS accepts flexible combinations of raw NMR, IR, and MS inputs, aligns spectrum and structure embeddings, retrieves database context, and refines candidate graphs. Its authors also report pronounced differences between simulated and experimental inputs and publish scoped experimental evaluations rather than presenting one universal accuracy figure ([Mirza, Patiny, and Jablonka, *Nature Communications*, 2026](https://www.nature.com/articles/s41467-026-73846-y)). That distinction is essential when evaluating any multimodal system.

  ## Worked example: resolving a formula-compatible candidate set

  Consider a hypothetical purified reaction impurity. High-resolution MS supports one leading neutral formula, but the analyst keeps a second formula because the ion could be an alternative adduct. A database and graph search return 1,240 structures across both formulas.

  **Pass 1: elemental and mass constraints.** The pipeline checks exact mass, isotope pattern, valence, and degree of unsaturation. The leading formula leaves 310 candidates; the alternative leaves 96. Both remain active because the adduct assignment is not yet proven.

  **Pass 2: coarse NMR constraints.** The <sup>1</sup>H spectrum shows an aromatic region, one three-proton signal, one two-proton signal, and no exchangeable proton under the acquisition conditions. A <sup>13</sup>C spectrum indicates fewer unique carbon environments than either formula would suggest without symmetry. Candidates requiring an isolated OH signal are down-weighted, not deleted, because exchange can make that signal unreliable. Seventy-two candidates remain plausible.

  **Pass 3: connectivity.** HSQC associates protonated carbons, while HMBC supplies several long-range connections. These correlations eliminate candidates that match the formula and 1D pattern but place the side chain on the wrong ring position. Four constitutional isomers remain.

  **Pass 4: independent scoring.** Predicted NMR shifts favor Candidates A and B; MS/MS fragments favor A and C. Candidate D fits neither modality well. The disagreement between B and C is visible because per-modality scores were not collapsed too early.

  **Pass 5: test the fragile assumption.** Re-examining the precursor isotope envelope confirms the leading adduct and removes the alternative-formula branch. A selective 1D NOE experiment is predicted to distinguish A from the remaining positional isomer. The pipeline recommends that acquisition instead of promoting Candidate A directly to “identified.”

  This example is intentionally numerical but not a performance claim. Its purpose is to show the candidate ledger: every reduction is connected to an observation, and uncertain evidence remains reversible. The most valuable automated result is often the next discriminating experiment, not the first-ranked structure.

  ## Failure modes and stopping rules

  Multimodal systems can fail more persuasively than single-modality systems because agreement looks like confirmation. The analyst should challenge whether the inputs and errors are genuinely independent.

  **Wrong sample correspondence.** A chromatographic peak used for MS and an NMR tube may contain different components. Require sample lineage, fraction identifiers, timestamps, and stability checks before fusion.

  **Formula lock-in.** The wrong adduct or precursor can make every later NMR mismatch look like noise. Preserve formula alternatives until isotope, charge, and fragmentation evidence justify a hard constraint.

  **Mixtures presented as one compound.** NMR signals from one component and MS ions from another can create a chemically coherent fiction. Use separation evidence, concentration behavior, diffusion or selective experiments where appropriate, and mixture-aware models.

  **Missing-not-negative evidence.** An absent HMBC cross-peak is not automatically proof that a pathway is impossible; sensitivity and coupling influence visibility. Likewise, a fragment that is not observed may depend on collision energy and ionization conditions.

  **Simulation-to-experiment shift.** Models trained on clean simulated spectra may learn line shapes or peak completeness not found in real laboratories. Validation must include untouched experimental samples, instrument variation, processing variation, and compounds outside the training chemistry.

  **Score domination.** If one modality produces sharper scores, a naïve average may ignore the other. Inspect calibration and rank changes; flag a conflict when the modalities support different structures rather than smoothing it away.

  Stop when the candidate generator may have excluded the answer, sample purity is uncertain, modalities cannot be linked to the same component, or the leading candidates are not experimentally distinguishable. The correct output is then an abstention plus a next action.

  ## The next step: an NMR foundation model inside a broader workflow

  A reusable NMR representation can make one layer of multimodal structure elucidation more scalable. Rombo AI describes its foundation-model approach as pre-trained on millions of spectra and designed to generalize across instruments and sample types, including mixed NMR fleets, without traditional per-instrument chemometric recalibration. Those cross-instrument claims should be evaluated on each laboratory’s held-out spectra and operating conditions.

  Spectra AI is Rombo AI’s distinct product line for compound identification and full structure elucidation, separate from the broader NMR material-analysis platform. Its role should be described precisely: an NMR identification layer can consume constraints supplied by the surrounding analytical workflow without implying that MS ingestion or an integrated multimodal product capability already exists. Rombo reports reducing an analysis that can take weeks to approximately 15 minutes; laboratories should verify the comparison on representative samples, file formats, review requirements, and confirmation standards.

  If NMR interpretation is the bottleneck in your compound-identification workflow, [evaluate Spectra AI on a representative spectrum](https://spectra.rombo.ai/). Keep the original files, MS constraints, alternative structures, and chemist review in the validation package.

  ## FAQs

  ### Does combining NMR and MS always improve structure elucidation?

  No. It improves the evidence base only when the measurements correspond to the same component, each modality passes quality control, and uncertainty is preserved. A wrong formula or mixed sample can make the combined answer worse and more convincing.

  ### What is the safest way to combine NMR and MS computationally?

  Constraint-first fusion is often the easiest to audit: retain plausible MS formulas, generate compatible candidates, and use NMR to test environments and connectivity. Learned or late-score fusion can add value, but it needs representative calibration and per-modality reporting.

  ### Can a multimodal AI determine a completely novel structure?

  Some systems can generate or refine structures beyond exact library matches, but novelty increases the burden of proof. Candidate completeness, chemical validity, stereochemistry, domain shift, and orthogonal confirmation remain open parts of the analytical decision.

  ### Should NMR and MS scores be averaged?

  Not without calibration. Their scales, candidate dependencies, and error distributions differ. Preserve separate scores, validate the combination rule on held-out experimental data, and expose conflicts to the analyst.

  ### What should a combined structure-elucidation report contain?

  Include sample lineage, raw-file references, acquisition and processing versions, quality flags, formula alternatives, candidate-generation method, per-modality scores, fusion rule, rejected constraints, ranked alternatives, domain warnings, and the experiment required for confirmation.
---

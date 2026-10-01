---
title: 'Automating NMR Structure Elucidation with Confidence Scores'
seo_title: 'Automating NMR Structure Elucidation with Confidence Scores | Rombo AI'
date: 2026-09-18T01:00:00.000Z
permalink: /blog/automating-nmr-structure-elucidation-confidence-scores
layout: article
image: /img/blog/automating-nmr-structure-elucidation-confidence-scores.png
image_width: 1280
image_height: 986
image_alt: Two-dimensional HSQC NMR spectrum with annotated cross-peaks used as structural evidence
image_caption: 'Two-dimensional ¹⁵N-HSQC NMR spectrum with selected cross-peaks. Image: <a href="https://commons.wikimedia.org/wiki/File:HSQC-NMR.tiff" rel="noopener noreferrer" target="_blank">Wu, Skarina, Yee et al., via Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by/2.5/" rel="license noopener noreferrer" target="_blank">CC BY 2.5</a>.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: Learn what confidence scores mean in automated NMR structure elucidation, how to calibrate them, and when an agent should rank, abstain, or escalate.
markdown_content: |-
  ## TL;DR

  - **A high score is not automatically a high probability of correctness.** Similarity, rank score, posterior probability, data-quality score, and calibrated confidence answer different questions.
  - **Candidate ranking is conditional on the candidate set.** A system can confidently select the best submitted structure even when every submitted structure is wrong.
  - **Calibration must be measured on held-out, deployment-like cases.** When a system reports 80% confidence, roughly 80% of comparable predictions should be correct—not merely well matched to training data.
  - **Confidence must remain linked to evidence.** Missing experiments, peak-assignment ambiguity, contradictory correlations, and unfamiliar chemistry should reduce decision confidence or trigger escalation.
  - **Abstention is part of performance.** Automated structure elucidation should be evaluated on correct answers, wrong answers, coverage, and the quality of cases it sends to a chemist.

  Automated NMR structure elucidation can generate structures, predict spectra, compare hypotheses, and rank candidates. The difficult question comes next: **how much should a chemist trust the first-ranked structure?**

  A single number cannot answer that question unless its meaning, reference population, and assumptions are explicit. A score of 0.92 might mean cosine similarity, a normalized probability among five candidates, or an empirically calibrated estimate that the proposed structure is correct. Those interpretations lead to very different laboratory decisions.

  This guide explains how to separate ranking from confidence, validate calibration, combine spectral evidence, and design abstention rules for automated structure elucidation.

  ## Start by defining what the score means

  Structure elucidation is not one prediction task. A system may search a library, select among supplied candidates, generate constitutional structures, distinguish stereoisomers, verify one proposed structure, or decide whether the evidence is insufficient. Each task creates a different score.

  The distinction is visible in established NMR methods. DP4 compares a defined set of candidate structures and assumes that the correct answer is in that set. DP5 was developed to assess a single proposal without requiring that assumption. The open-access [DP5 paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC8943899/) shows why this matters: a relative method must distribute probability across the candidates, whereas a stand-alone method can judge all proposed structures improbable.

  Automated generation adds another layer. A published [framework for structure elucidation from routine NMR spectra](https://pmc.ncbi.nlm.nih.gov/articles/PMC8635205/) predicts substructures, constructs molecular graphs, and returns a probabilistic ranking. That rank is useful for search, but it does not by itself establish that the top structure is correct or that the relevant chemistry was represented during training.

  Before a score is shown to a user, its documentation should complete this sentence:

  > “This score estimates **[quantity]**, among **[candidate or case population]**, using **[evidence]**, under **[assumptions]**, and was validated on **[test population]**.”

  If those fields cannot be filled, label the output as a heuristic score rather than a probability.

  ## A practical confidence-score taxonomy

  The table below separates common outputs and the decisions they can support.

  | Score type | What it answers | What it does not establish | Validation question |
  | --- | --- | --- | --- |
  | Spectral similarity | How closely do predicted and observed features match under a chosen metric? | That the structure is uniquely correct | Does the metric preserve ranking across instruments, processing choices, and sample conditions? |
  | Relative candidate score | Which candidate is best within this submitted set? | That the correct structure is present | How often is the correct candidate top-1 or top-k when realistic decoys are included? |
  | Candidate-set probability | How probability is distributed across an enumerated set | Correctness outside the set or validity of the error model | Are probabilities calibrated when candidate-set size and difficulty change? |
  | Stand-alone structure probability | How compatible one structure is with the evidence under a model | Universal correctness independent of model scope | Can incorrect and out-of-scope structures receive appropriately low probabilities? |
  | Data-quality score | Whether the spectrum and metadata are adequate for analysis | Correctness of any molecular proposal | Does it detect missing peaks, low signal-to-noise, referencing errors, overlap, and contamination? |
  | Calibrated decision confidence | Empirical likelihood that an action is correct for a defined use | Safety outside the validated population | Do confidence bins match observed correctness on deployment-like data? |

  Two additional quantities help interpret a ranked list. The **margin** between the first and second candidates measures separation, while **coverage** measures how often the system chooses to answer rather than abstain. Neither is sufficient alone. A large margin can occur when all candidates fit poorly, and high coverage can be achieved by answering cases that should have been escalated.

  Evidence should also be decomposable. A structure may fit the ¹³C shifts yet conflict with a decisive HMBC correlation, molecular formula, multiplicity, or coupling pattern. A global score can hide that contradiction. The review record should therefore expose feature-level support, unmatched signals, assignments, and the contribution of each experiment.

  ## Calibration turns scores into decision evidence

  Calibration asks whether reported confidence corresponds to observed correctness. If 100 predictions are assigned to a 70–80% confidence bin, approximately 70–80 should be correct for that defined task and test population. A reliability diagram plots empirical correctness against predicted confidence; systematic distance from the diagonal reveals overconfidence or underconfidence.

  The original study [On Calibration of Modern Neural Networks](https://proceedings.mlr.press/v70/guo17a.html) demonstrated that strong classification accuracy does not guarantee calibrated probabilities and evaluated post-hoc methods such as temperature scaling. The lesson transfers to chemistry, but the calibration method and evidence must be validated for the actual structure-elucidation system. A transform fitted to one model, dataset, or candidate-generation process cannot be assumed valid after any of them change.

  A useful calibration protocol should:

  1. **Freeze the task.** Separate constitutional elucidation, stereochemical selection, library identification, and single-structure verification.
  2. **Split by chemical relationship, not random spectra alone.** Closely related molecules, duplicated spectra, or shared scaffolds across train and test sets can make performance look better than deployment.
  3. **Represent acquisition variation.** Include the instruments, field strengths, solvents, processing choices, concentrations, and sample types relevant to use.
  4. **Include failed assumptions.** Test cases where the correct structure is absent, metadata are wrong, spectra contain impurities, or required experiments are missing.
  5. **Measure discrimination and calibration.** Report top-k accuracy and ranking quality alongside reliability diagrams, calibration error, and uncertainty intervals.
  6. **Recalibrate after material changes.** A new model, database, preprocessing method, instrument population, or candidate generator can alter score behavior.

  Calibration data should remain independent from model fitting and threshold selection. Otherwise the system may appear reliable on the same cases used to tune its confidence mapping. Evaluation sets also need enough examples in each confidence region; a “95%” bin containing only a few convenient molecules provides weak evidence.

  ## Rank candidates without hiding contradictions

  A useful automated workflow keeps three questions separate:

  1. **Which candidates best explain the evidence?** Rank by a documented combination of spectral and structural constraints.
  2. **Is the evidence sufficient to choose among them?** Inspect separation, contradictions, data quality, and applicability.
  3. **Is the proposed action allowed at this confidence?** Apply a review or escalation rule validated for the intended use.

  Candidate diversity matters. Near-duplicate stereoisomers test subtle discrimination, while structurally different decoys test whether broad constraints are working. Candidate sets should also contain plausible alternatives, not only easy random molecules. The [FullSSPrUCe study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10566464/) illustrates why top-1 and top-2 performance can differ substantially when multiple stereoisomers are considered; rank position and probability must not be treated as interchangeable.

  The system should preserve negative evidence. Examples include an observed correlation that no proposed candidate explains, a predicted signal that is absent despite adequate sensitivity, or an atom environment outside the model’s training support. Negative evidence may justify lowering confidence even when the remaining peaks match well.

  A practical escalation rule can combine independent triggers:

  | Trigger | Meaning | Appropriate response |
  | --- | --- | --- |
  | Low data quality | The input cannot support the requested conclusion | Reprocess, reacquire, or request missing metadata |
  | Out-of-scope chemistry | Reliability is unknown for this molecular environment | Send to specialist review; do not extrapolate the score |
  | Small top-1/top-2 margin | Available evidence does not separate leading candidates | Choose a discriminating experiment |
  | Hard contradiction | A mandatory constraint is violated | Reject or revise the candidate regardless of aggregate score |
  | Low calibrated confidence | Similar past cases were not reliable enough | Abstain or require explicit chemist approval |

  Thresholds should be selected from local validation and the consequence of error. There is no universal “safe” confidence percentage for structure elucidation.

  ## Worked decision: when the top-ranked structure should not be accepted

  Consider an illustrative purified unknown with a confirmed molecular formula and ¹H, ¹³C, HSQC, and HMBC data. An automated system generates three candidates.

  | Evidence check | Candidate A | Candidate B | Candidate C |
  | --- | --- | --- | --- |
  | Formula and valence | Pass | Pass | Pass |
  | ¹H/¹³C shift agreement | Best | Close second | Weaker |
  | HSQC assignments | Complete | Complete | One unexplained cross-peak |
  | HMBC constraints | One unresolved correlation | Explains all observed correlations | Violates one mandatory correlation |
  | Applicability | Familiar environment | Familiar environment | Contains an underrepresented motif |
  | Relative rank score | 0.82 | 0.74 | 0.31 |

  Candidate A ranks first, but 0.82 is a relative score—not an 82% probability of correctness. The margin over B is modest, and A fails to explain one HMBC correlation. Candidate C can be rejected because of a hard contradiction and weak applicability, but the current evidence does not cleanly separate A and B.

  The system checks its calibration table for cases with comparable margins, data quality, and chemical scope. Suppose those historical cases supported only moderate decision reliability. The correct action is therefore **abstain and propose a follow-up experiment**, not accept A.

  A targeted experiment is chosen for its expected ability to discriminate A from B. After acquisition, the new correlation supports B and contradicts the connectivity required by A. The system reruns the complete evidence assessment rather than simply adding a bonus to B’s previous score. B becomes top-ranked, no mandatory contradiction remains, and the calibrated decision confidence crosses the laboratory’s expert-review threshold.

  The audit record should contain both rounds: original candidates, evidence contributions, calibration version, reason for abstention, experiment requested, new observation, and reviewer disposition. This makes the result reproducible and creates structured feedback for later evaluation.

  ## From confidence scoring to governed Spectra AI workflows

  Spectra AI is a distinct product line from Rombo AI’s broader NMR AI platform. For compound identification and structure elucidation, the relevant goal is not merely to retrieve the closest library spectrum. It is to generate or evaluate molecular hypotheses, expose supporting and contradictory evidence, rank alternatives, and escalate cases that the available data cannot resolve.

  A foundation model pre-trained on millions of spectra can provide reusable spectral representations, but pretraining does not remove the need for task-specific calibration, scope checks, and chemist review. Cross-instrument robustness must also be evaluated on the instruments and sample types relevant to the laboratory rather than inferred from one aggregate score.

  **Evaluating automated structure elucidation for your workflow? [Explore Spectra AI and discuss the evidence, calibration, and review requirements](https://spectra.rombo.ai).**

  ## Frequently asked questions

  ### Is a confidence score the same as probability of correctness?

  Not necessarily. It may be a similarity measure, normalized rank score, posterior within a candidate set, or calibrated probability. The system must state the quantity, assumptions, evidence, and validation population before the number can guide a decision.

  ### Can a top-ranked candidate still be wrong?

  Yes. Ranking identifies the best candidate presented or generated. If the correct structure is absent, the data are incomplete, or the scoring model is out of scope, the first-ranked candidate may still be wrong.

  ### What is the difference between DP4 and DP5?

  DP4 compares candidates under the assumption that one is correct. DP5 evaluates a candidate on a stand-alone basis and can assign low probability to every proposal, which is useful when the correct structure may be missing.

  ### How should calibration be monitored after deployment?

  Track predicted confidence against reviewed outcomes by instrument, sample type, chemistry, and workflow version. Re-evaluate after model, database, preprocessing, acquisition, or candidate-generation changes, and investigate drift before adjusting thresholds.

  ### When should an automated system abstain?

  It should abstain when data quality is inadequate, chemistry is outside validated scope, candidates are insufficiently separated, a mandatory constraint is contradicted, or calibrated confidence falls below the threshold for the intended use.
---

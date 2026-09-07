---
title: 'Spectra AI: Automated Compound Identification from NMR Spectra'
seo_title: 'Spectra AI: Automated Compound Identification from NMR Spectra | Rombo AI'
date: 2026-09-07T07:31:00.000Z
permalink: /blog/spectra-ai-automated-compound-identification
layout: article
image: /img/blog/spectra-ai-automated-compound-identification.jpg
image_alt: Hand-drawn NMR spectrum showing resonance peaks after a Fourier transform
image_caption: 'A generic NMR spectrum after Fourier transformation. Image: <a href="https://commons.wikimedia.org/wiki/File:NMR_spectrum_generic.jpg" rel="noopener noreferrer" target="_blank">Mgianino, via Wikimedia Commons</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/" rel="license noopener noreferrer" target="_blank">CC0 1.0</a>. Cropped by Rombo AI.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: A practical guide to what Spectra AI takes in, what it returns, how chemists review its ranked candidates, and how to evaluate it on representative NMR cases.
markdown_content: |-
  ## TL;DR

  - **Spectra AI is a dedicated NMR compound-identification product.** It is separate from Rombo AI’s broader platform for material and mixture analysis.
  - **The product turns a spectrum into a reviewable shortlist.** Its public workflow accepts NMR data and sample context, highlights discriminating patterns, proposes candidate structures, and ranks them with confidence scores.
  - **A rank is not a confirmation.** The chemist remains responsible for checking whether a candidate explains the spectrum, fits the sample context, and survives orthogonal tests.
  - **The value is a better first pass.** Instead of beginning with an unannotated plot, the analyst begins with prioritised hypotheses and can focus experiments on separating plausible alternatives.
  - **A meaningful evaluation uses the laboratory’s own difficult cases.** Hold out identity, include different instruments and field strengths, define acceptance criteria before seeing results, and record failure modes—not only successful examples.
  - **Foundation models make reuse across tasks and acquisition conditions possible, but do not remove domain shift.** Cross-instrument claims still require validation on the lab’s spectra, sample types, and reporting standard.

  “Automated compound identification” can suggest a black box that returns chemical truth. The better model is an evidence-building process: software accelerates hypothesis ranking, while the laboratory decides what supports a tentative, probable, or confirmed identity.

  This guide explains where Spectra AI fits in that process, what its current public workflow does, and how a laboratory can test it without confusing a promising candidate with a validated result.

  ## What Spectra AI is—and what it is not

  Spectra AI is Rombo’s product line for NMR compound identification. It is not a generic name for every Rombo model, and it is distinct from the company’s wider NMR platform for materials, quality, and mixture-level decisions.

  The current [Rombo compound-identification workflow](https://rombo.ai/use-cases/nmr-compound-identification/) describes four product actions: upload an NMR spectrum, bring the spectrum and sample context into a review workspace, identify patterns that discriminate among candidates, and return a scored shortlist of plausible structures. The chemist keeps the final call.

  That boundary is important. A scored candidate list can reduce the search space, but it does not independently establish that the sample is pure, that the acquisition is valid, that the correct structure is represented among the candidates, or that two close isomers have been distinguished. Nor does it replace the reporting rules of a regulated or accredited laboratory.

  This differs from conventional library search, which asks which stored reference most resembles a query. A structure-identification workflow can use learned spectrum–structure relationships to rank hypotheses without an exact reference. Both still depend on data quality and can fail outside their effective domain.

  Established computer-assisted structure elucidation systems also retain human review. [Bruker’s CMC-se](https://www.bruker.com/en/products-and-solutions/mr/nmr-software/cmc-se.html) turns 1D and 2D NMR evidence into constraints and candidate structures while allowing users to inspect its correlation table. [ACD/Labs Structure Elucidator Suite](https://www.acdlabs.com/products/spectrus-platform/structure-elucidator-suite/) combines NMR and other analytical data, generates candidates, and preserves expert constraints. Automation changes where the chemist spends time; it does not abolish the analytical argument.

  ## Where Spectra fits in the identification workflow

  The best insertion point is after acquisition and basic data-quality review, but before the analyst has committed to one structural explanation. At that point, candidate ranking can guide attention without inheriting a human’s first guess.

  A practical workflow has six decision gates:

  1. **Define the claim.** Is the required output a tentative candidate, a probable identity, constitutional structure, stereochemical assignment, or confirmation against an authentic standard?
  2. **Check the sample.** Record origin, expected chemistry, solvent, concentration, known reagents, likely contaminants, and whether the material is isolated or a mixture.
  3. **Inspect acquisition quality.** Look for referencing errors, poor shimming, phase and baseline problems, solvent suppression artefacts, clipping, overlap, and insufficient signal-to-noise.
  4. **Run the first-pass analysis.** Upload the NMR data and relevant context to Spectra, then review the patterns and ranked candidate structures it returns.
  5. **Try to falsify the leaders.** Ask which signals, integrals, multiplicities, couplings, correlations, formula constraints, or missing resonances disagree with each candidate.
  6. **Acquire decisive evidence.** Use the next experiment that best separates the remaining structures—perhaps a 2D NMR experiment, accurate-mass MS, another nucleus, a spiking experiment, isolation, or an authentic standard.

  This sequence avoids two opposite mistakes. An unchecked artefact can drive a ranking, while using the model only after finishing the assignment cannot reveal whether it saved effort or challenged anchoring bias. The useful measure is whether the reviewed workflow reduces manual comparisons and unnecessary experiments while preserving decision quality.

  ## The input-to-decision accountability matrix

  Laboratories should map each product output to the decision it can support and the check that remains outside the model. The following matrix is designed as a review aid, not as a description of undocumented file-format or integration support.

  | Workflow element | What enters the workflow | What Spectra contributes | What the chemist must still decide |
  | --- | --- | --- | --- |
  | Analytical question | Intended identification level and business or research decision | A focused compound-identification workspace | Whether the available technique can support the intended claim |
  | NMR evidence | A spectrum that has passed basic quality review | Pattern analysis and candidate-relevant spectral features | Whether artefacts, mixtures, overlap, or missing experiments make the evidence insufficient |
  | Sample context | Known source, preparation, expected chemistry, and constraints available to the team | Context organised beside the spectrum for review | Which contextual facts are reliable enough to include or exclude candidates |
  | Candidate generation | Spectral evidence and the product’s learned representation | Proposed molecular structures | Whether the true compound could be absent from, or poorly represented by, the candidate space |
  | Candidate ranking | Alternative structures consistent to different degrees with the input | A shortlist with confidence scores | What the scores mean for this domain and whether the gap between candidates is meaningful |
  | Evidence review | Ranked candidates and highlighted discriminating patterns | A prioritised starting point for comparison | Which observed and absent signals support or contradict every leading candidate |
  | Final assignment | All model output plus orthogonal data and laboratory criteria | Traceable hypotheses for expert review | The reported identity, confidence level, limitations, and required confirmation |

  The matrix prevents output inflation. “Candidate ranked first” is an accurate statement about the software result. “Compound confirmed” is a stronger laboratory conclusion and requires whatever independent evidence the method, application, and risk demand.

  A confidence score is not automatically the probability that a structure is correct. Its meaning depends on how it is constructed, calibrated, and tested. Before setting an operational threshold, measure error rates on an independent set representing the lab’s instruments, chemistry, and sample preparation.

  ## How to evaluate Spectra AI on your own NMR work

  A product demonstration answers “can the workflow run?” A defensible evaluation asks “under what conditions does it help, fail, or require escalation?” The latter needs a predeclared test set and acceptance criteria.

  Start with cases that reflect actual workload rather than a collection of clean textbook spectra. Include straightforward known compounds, close analogues, unexpected reaction products, impurities near the reporting limit, different solvents, and spectra from the instruments the team expects to use. If the laboratory operates across sites, include each site without allowing instrument identity to become a proxy for compound identity.

  Keep identities hidden from the operator who records the initial output, so manual hints do not leak the answer into context or review. Preserve the shortlist, score, analyst time, failed or unusable results, and extra experiments requested. A plausible but wrong leader is valuable because it reveals which evidence the workflow must expose.

  Define success before running the test. A compact scorecard might include:

  | Evaluation question | Example measure | Acceptance principle |
  | --- | --- | --- |
  | Does the shortlist contain the known identity? | Top-*k* recall, reported separately for each sample class | Choose *k* from the number of candidates an analyst can realistically review |
  | Is rank 1 useful? | Top-1 accuracy with confidence intervals | Never substitute one headline average for class- and instrument-level results |
  | Are scores decision-ready? | Reliability or calibration by score band | A higher score should correspond to a higher observed success rate on held-out data |
  | Does the workflow detect uncertainty? | Rate of low-confidence or abstained outputs on unsuitable cases | Reward safe escalation instead of forcing an answer for every spectrum |
  | Does it generalise? | Performance split by instrument, field strength, solvent, and sample type | Investigate every material drop rather than averaging it away |
  | Does it improve work? | Analyst review time and number of follow-up experiments | Measure the full reviewed workflow, not model runtime alone |
  | Is the result reproducible? | Agreement when the same case is reprocessed under the same conditions | Version input, settings, product release, and final disposition |

  Use three outcome labels: **accepted for the defined use**, **accepted with mandatory review or restricted scope**, and **not accepted**. A system may be suitable for prioritising impurity hypotheses but not for releasing a confirmed identity. Challenge that boundary with unfamiliar scaffolds, mixtures, marginal spectra, and different instrument regimes before a live project does.

  ## Worked evaluation: an unexpected reaction side product

  Consider an R&D team that isolates a minor side product from a synthesis. The proton spectrum is interpretable but crowded: an aromatic region contains overlapping resonances, one expected methylene pattern has moved, and residual starting material may still be present. The team needs a constitutional hypothesis to decide which 2D experiment to acquire next; it does not yet need a release-grade confirmation.

  First, the analyst records the reaction, work-up, purification, solvent, field strength, and known starting materials, then verifies referencing, phase, baseline, and obvious solvent peaks. The identity remains blinded in the evaluation record.

  Spectra returns a ranked shortlist and highlights patterns that distinguish candidates. Candidate A explains the aromatic substitution pattern but predicts a methylene environment inconsistent with the observed shift. Candidate B explains that environment, but its symmetry would imply fewer aromatic signals. Candidate C fits both observations but remains ambiguous at one connectivity.

  The correct action is not to report C because it ranks highest. The analyst writes a falsification table: evidence explained, evidence contradicted, and the next discriminating observation for A, B, and C. An HMBC experiment is selected because the contested long-range connection should separate C from its closest alternative. Accurate-mass MS is also checked against the proposed formula.

  If the new correlation and formula support C, the team can advance the assignment at the predefined confidence level. If they disagree, the shortlist has still been useful: it exposed the decisive uncertainty and prevented premature confirmation. The evaluation records rank, score, reasons for rejection, extra experiments, analyst time, and final disposition. That record is far more informative than a screenshot of one successful prediction.

  ## Failure modes a deployment plan should anticipate

  The hardest cases are not always the most visibly noisy. A clean spectrum can be underdetermined, while a lower-quality spectrum can still contain a uniquely diagnostic feature. Common escalation triggers include mixtures treated as pure compounds, spectra outside the tested field-strength or solvent range, unusual elements or scaffolds, tautomerism, dynamic averaging, severe overlap, stereochemical questions, and an identity that is absent from the model’s effective candidate space.

  Build explicit responses for these conditions: request another experiment, ask for expert review, lower the permitted claim, or decline to identify. Do not reward a system merely for always returning an answer. A reliable workflow makes its uncertainty actionable.

  Keep the original data, supplied context, product version, candidate list, score interpretation, reviewer decision, and orthogonal evidence. If the workflow changes, revalidate affected cases. Product output belongs inside the laboratory’s evidence trail, not in an untraceable screenshot folder.

  ## Why a foundation-model approach is the next step

  Traditional chemometric systems are commonly built for a defined instrument, sample family, and endpoint. That can work very well inside a stable domain, but a new instrument or matrix may require recalibration. A spectral foundation model instead learns a reusable representation from a broad pretraining corpus, then applies or adapts that representation to downstream tasks.

  Rombo’s open research model [ROSE](https://github.com/romboai/rose-1h-nmr) illustrates the principle for one-dimensional proton NMR. Its published repository describes pretraining on 3.2 million spectra and task heads for denoising, peak detection, spectrum-pair similarity, spectrum prediction, and spectrum-to-structure retrieval. It also reports weaker results for some structure-linked tasks on low-field data. That limitation is exactly why a product evaluation must be stratified by acquisition regime rather than relying on a global average.

  Spectra AI is a distinct commercial product line for compound identification, not another name for ROSE or for Rombo’s general NMR platform. The product goal is to reuse learned spectral relationships to move from an NMR spectrum toward ranked structural hypotheses across heterogeneous laboratory settings. The appropriate proof is performance on held-out spectra from the customer’s own instruments and sample types, followed by expert review under an agreed acceptance protocol.

  If your team has representative unknown-compound cases and known final identities, [evaluate them with Spectra AI](https://spectra.rombo.ai). Define the intended claim, success metrics, and escalation rules first; then test whether the shortlist improves the complete analytical decision.

  ## FAQs

  ### Does Spectra AI confirm a compound automatically?

  No. Its public workflow proposes and ranks candidate structures and highlights discriminating patterns. The chemist remains accountable for the final assignment, validation, and decision, using orthogonal evidence when the intended confidence level requires it.

  ### What data should a laboratory prepare for an evaluation?

  Prepare representative NMR cases with preserved raw evidence, acquisition metadata, sample context, and independently established identities. Include difficult and unsuitable cases as well as clean examples, and define what contextual information the model operator may see.

  ### Is a confidence score the probability that the candidate is correct?

  Not necessarily. Treat it as a product-defined ranking signal until calibration has been demonstrated on independent, representative data. Ask how the score behaves across instruments, sample types, and out-of-domain cases before using thresholds operationally.

  ### How is Spectra different from a spectral library search?

  A library search retrieves similar stored reference spectra and is constrained by library coverage and compatibility. Spectra’s workflow uses learned spectral patterns to propose and rank structures, but its output still requires review and may be uncertain when the chemistry or acquisition conditions differ from the evaluated domain.

  ### Can Spectra be used across different NMR instruments?

  Cross-instrument generalisation is a central design objective of Rombo’s foundation-model approach, but each laboratory should verify it on its own fleet. Compare results by instrument, field strength, solvent, sample class, and site; do not accept pooled performance if one operating condition fails.

  ### What should happen when the top candidates are close?

  Identify the observation that would distinguish them and acquire the most decisive follow-up evidence. Depending on the case, that may be a 2D NMR correlation, another nucleus, accurate-mass MS, isolation, derivatisation, or comparison with an authentic standard.
---

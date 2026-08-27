---
title: 'Confidence Scoring in Compound Identification'
seo_title: 'Confidence Scoring in Compound Identification | Rombo AI'
date: 2026-08-27T07:00:00.000Z
permalink: /blog/confidence-scoring-compound-identification
layout: article
image: /img/blog/confidence-scoring-compound-identification-2026-08-27.jpg
image_alt: Analytical technician reviewing data beside a mass spectrometer in a laboratory
image_caption: 'A technician in the IAEA Nuclear Mass Spectrometry Laboratory in Seibersdorf, Austria. Photo: <a href="https://commons.wikimedia.org/wiki/File:Mass_Spectrometry_Laboratory_(06410491)_(5113272619).jpg" rel="noopener noreferrer" target="_blank">Dean Calma/IAEA Imagebank, via Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/" rel="license noopener noreferrer" target="_blank">CC BY-SA 2.0</a>. Resized by Rombo AI.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: A match score measures spectral similarity, not automatically the probability that an identification is correct. Learn how to interpret, calibrate, challenge, and report confidence scores.
markdown_content: |-
  ## TL;DR

  - **A match score is not automatically a probability of correct identification.** It usually measures similarity under a particular algorithm, preprocessing pipeline, and reference library.
  - **Confidence depends on more than the top score.** Query quality, library coverage, spectral uniqueness, the runner-up candidates, sample context, and orthogonal evidence all change the risk of a false assignment.
  - **Absolute and relative evidence answer different questions.** The top score indicates fit; the gap to alternatives indicates discrimination; neither proves that the correct compound is represented among the candidates.
  - **Thresholds must be validated locally.** A cutoff transferred across techniques, instruments, collision energies, matrices, or software versions may not preserve the same false-positive rate.
  - **A useful confidence output leads to an action.** It should tell the chemist whether to accept, review, reacquire, add another experiment, or obtain an authentic standard.
  - **Learned ranking systems still need calibration and out-of-domain checks.** A confident model can be wrong when the input differs from its validation population.

  ## What a confidence score does—and does not—measure

  Compound identification software often returns a number beside each candidate. The number may be called a match factor, similarity score, probability, confidence, fit, or rank. Those labels are not interchangeable.

  A **similarity score** quantifies how closely the query spectrum resembles a reference or predicted spectrum under a defined mathematical comparison. A **ranking score** orders candidates but may have no direct probabilistic meaning. A **calibrated probability** makes a stronger claim: among comparable cases assigned a given probability, approximately that fraction should be correct over repeated use. An **identification confidence level** summarizes the total evidence supporting the chemical claim, which may include spectra, retention, formula, reference standards, and sample context.

  A displayed value of 90 can mean 90 out of an arbitrary scale, not a 90% chance that the structure is correct. Even a true probability may be conditional on the correct compound being present in the searched library.

  The NIST MS Search manual makes this boundary explicit. Its hit list can show a direct Match Factor, a reverse Match Factor, and a Probability value. The first two are spectral comparisons, while the probability is derived from differences among adjacent hits and assumes that the compound is represented in the libraries searched ([NIST MS Search manual](https://chemdata.nist.gov/mass-spc/ms-search/docs/Ver20Man.pdf)).

  Before interpreting any score, find its definition, range, direction, conditioning assumptions, and validation population.

  ## How spectral matching produces a score

  A typical search pipeline performs four operations: prepare the query, select candidate references, compare spectra, and rank the results.

  **1. Prepare the query.** Baseline correction, centroiding, peak picking, normalization, deconvolution, alignment, phase correction, or solvent-region exclusion changes what the algorithm sees. Poor preprocessing can remove diagnostic features or preserve contaminants.

  **2. Screen the library.** Search software often uses fast filters to exclude obviously incompatible references before applying a more expensive comparison. Formula, precursor mass, ionization mode, technique, peak overlap, or metadata may constrain the candidate set. Screening accelerates retrieval, but an incorrect constraint can remove the true answer before scoring begins.

  **3. Compare spectral vectors or features.** In a simple dot-product approach, each spectrum becomes a vector of intensities and the cosine of the angle between vectors measures similarity. NIST describes its Match Factor as related to the distance between unit-length spectral vectors; its identity search also applies intensity and *m/z* weighting and compares ratios of adjacent peaks ([NIST MS Search manual, Appendix 5](https://chemdata.nist.gov/mass-spc/ms-search/docs/Ver20Man.pdf)). Other systems may use peak overlap, correlation, entropy, edit distance, predicted-versus-observed shifts, fragment likelihoods, or learned representations.

  **4. Rank the hit list.** The highest score becomes the top candidate, but the list contains additional information. A top hit far above chemically unrelated alternatives is different from a top hit separated by a tiny margin from several isomers.

  Direct and reverse searches also answer different contamination questions. A direct comparison penalizes peaks present in the query but absent from the reference. A reverse search can ignore those extra query peaks, helping when the target is mixed with background—but it may also conceal evidence that the query is not a pure compound. The algorithm must fit the analytical situation.

  ## The six components of identification confidence

  A defensible decision combines the score with the evidence around it.

  | Component | Question | Evidence that raises confidence | Warning sign |
  | --- | --- | --- | --- |
  | Query quality | Is the measured spectrum interpretable? | Adequate signal-to-noise, stable processing, clean baseline, reproducible peaks | Saturation, low signal, artifacts, co-elution, unresolved mixture |
  | Reference comparability | Were query and reference acquired compatibly? | Same technique, ionization, polarity, solvent or collision-energy context as applicable | Conditions known to shift peaks or fragment ratios |
  | Library coverage | Could the true compound be represented? | Curated library fits the chemical domain and includes relevant analogues or standards | Novel chemistry, sparse class coverage, proprietary or degradation products |
  | Spectral uniqueness | Does this pattern distinguish the candidate? | Multiple diagnostic features uncommon among alternatives | Generic fragments, few peaks, homologous series, near-identical isomers |
  | Candidate separation | Is the top result clearly better than plausible alternatives? | Stable top rank and meaningful margin under sensible preprocessing | Several close hits or rank changes after small processing choices |
  | Orthogonal agreement | Do independent observations support the same structure? | Formula, isotope pattern, retention index, NMR connectivity, IR bands, or authentic-standard match | Any independent measurement contradicts the proposed identity |

  These components explain why the same numerical match can carry different risk. In their review of mass-spectral reference libraries, Stein and colleagues organize identification confidence around prior probability, false-negative risk, and false-positive risk. They also separate the question “is the compound in the library?” from “which hit is correct if it is?” ([Stein, Babushok, Brown, and Linstrom, 2012](https://doi.org/10.1021/ac301205z)).

  Library scale does not remove this distinction. Wiley’s current KnowItAll documentation describes multi-technique searching across IR, MS, NMR, Raman, and UV-Vis, with reference-library subscriptions and tools for mixture analysis and deformulation ([KnowItAll Analytical Edition](https://sciencesolutions.wiley.com/knowitall-analytical-edition-software/)). Broad, curated coverage can reduce false negatives for represented chemistry, but no finite collection proves that an unknown is present in it.

  ## False positives, false negatives, and no-match cases

  A **false positive** occurs when the workflow accepts an incorrect identity. Common causes include a generic spectrum matching many compounds, contamination, a permissive threshold, missing alternatives, or over-trusting a top-ranked hit.

  A **false negative** occurs when the correct identity is rejected or never appears. The true compound may be absent from the library, filtered out by a wrong precursor or formula constraint, acquired under incompatible conditions, or represented by a poor reference. NIST notes that preliminary screening can exclude the correct retrieval before the full comparison, one reason a no-hit result must be diagnosed rather than treated as proof of novelty ([NIST MS Search manual](https://chemdata.nist.gov/mass-spc/ms-search/docs/Ver20Man.pdf)).

  “No match” has at least four meanings:

  1. The compound is absent from the searched library.
  2. The correct reference exists, but the query quality or conditions are incompatible.
  3. The feature is a mixture, artifact, adduct, derivative, or transformation product rather than the assumed analyte.
  4. Search settings or constraints excluded the relevant candidate.

  The right response is diagnostic. Reinspect raw data and blanks; confirm ionization mode, precursor, formula constraints, and processing; search compatible libraries; compare analogues; and acquire an orthogonal spectrum. Lowering the threshold until something matches changes the acceptance rule—it does not create evidence.

  ## How to calibrate a score for laboratory use

  Calibration maps a model or search score to observed correctness on labeled examples. It must be separated from **discrimination**, the ability to rank correct candidates above incorrect ones. A system can rank well yet be overconfident, or be reasonably calibrated while failing to separate difficult isomers.

  A practical calibration study follows this sequence:

  1. **Define correctness.** Decide whether success means exact structure, constitutional structure, compound class, or top-*k* inclusion. Treat stereochemistry explicitly.
  2. **Build an independent test set.** Use authenticated materials that were not used to construct the library entry, train the model, tune thresholds, or select preprocessing.
  3. **Match deployment conditions.** Represent the instruments, methods, matrices, concentrations, sample types, and failure modes expected in routine use.
  4. **Freeze the pipeline.** Version the preprocessing, library, algorithm, model, and configuration before evaluation.
  5. **Bin predictions by score.** For each band, compare average stated confidence with the observed fraction of correct assignments. A reliability diagram makes over- and under-confidence visible.
  6. **Stratify the result.** Check performance by instrument, chemical class, signal quality, mixture status, and whether the true candidate is present.
  7. **Set action thresholds from risk.** A screening workflow may tolerate more false positives than a release decision. Define accept, expert-review, and reject/reacquire zones from the actual cost of errors.
  8. **Monitor drift.** Revalidate after library updates, model changes, new instruments, method changes, or a shift in sample population.

  In machine learning, calibration means predicted confidence should correspond to empirical correctness. Guo and colleagues showed that modern neural networks can be poorly calibrated even when their classification accuracy is strong, and evaluated post-processing methods including temperature scaling ([Guo et al., 2017](https://proceedings.mlr.press/v70/guo17a.html)). The method is not a universal chemistry fix: calibration still depends on representative held-out data, and a mapping learned on clean standards may not transfer to mixtures or new compound classes.

  ## Worked decision walkthrough: identical scores, different conclusions

  Consider two unknowns searched with the same software. Both return the same displayed top-match score for candidate A.

  **Case 1: a routine solvent residual in a controlled GC-EI-MS method.** The query is a clean deconvoluted spectrum with many reproducible ions. Candidate A is represented by several curated references acquired with compatible EI conditions. The second hit is substantially worse, the retention index agrees with the validated method, blanks are clean, and an authentic standard matches retention and spectrum.

  **Case 2: a low-level degradation feature in a complex extract.** The query contains few ions above noise and overlaps a larger component. The library has sparse coverage for the relevant chemistry. Candidate A and several analogues have similar scores, the top rank changes after reasonable deconvolution settings, no retention reference is available, and NMR shows a signal inconsistent with candidate A.

  The score is identical, but the decisions should not be. Case 1 may support a confirmed identity under the laboratory’s validated procedure. Case 2 supports, at most, a tentative hypothesis—and the contradictory NMR observation may justify rejecting candidate A entirely.

  Use this score-to-action framework:

  | Evidence state | Permitted conclusion | Next action |
  | --- | --- | --- |
  | Poor query or unstable preprocessing | No reliable match | Reacquire, separate, deconvolute, or improve sample preparation |
  | Good query, weak or crowded hit list | Candidate class or tentative list | Add a discriminating technique or expand candidate generation |
  | Strong match, uncertain library coverage | Probable candidate conditional on coverage | Search analogues and use formula, retention, NMR, or IR evidence |
  | Strong, distinctive match plus orthogonal agreement | High-confidence/probable identity | Review method-specific criteria and document alternatives |
  | Authentic standard matches under comparable conditions with required orthogonal evidence | Confirmed identity | Report conditions, acceptance criteria, and traceable reference |

  Confidence levels should describe the chemical evidence, not merely translate score bands into adjectives. Schymanski and colleagues’ five-level framework deliberately places exact mass, formula, tentative candidates, probable structure, and reference-standard confirmation on different levels ([Schymanski et al., 2014](https://pubmed.ncbi.nlm.nih.gov/24476540/)). The score informs that ladder; it does not replace it.

  ## Reporting a confidence result that another chemist can audit

  Record the score definition, software version, library release, search mode, preprocessing, thresholds, constraints, top candidates, runner-up gap, reference conditions, and raw-data location. State whether the true compound was assumed to be in the library and whether the probability is absolute, relative, or externally calibrated.

  Pair the number with a concise evidence statement: “Candidate A ranked first because these features matched; candidates B and C were rejected for these observations; confidence remains limited by this missing evidence.” Include negative results and unexplained peaks.

  Avoid universal labels such as “above this score is confirmed” unless the exact threshold has been validated for the specific method and decision. When a standard is required, say so. A recent implementation of the Schymanski framework keeps spectral-library matches and reference-standard confirmation at separate confidence levels ([Krakko, Tautenhahn, and Stutts, 2026](https://doi.org/10.1021/acs.analchem.5c03229)).

  ## Where AI confidence scoring fits

  Learned systems can compare spectra through representations that capture more than hand-selected peaks, rank structures beyond exact library matches, and expose a scored shortlist for expert review. They also introduce familiar confidence problems: training-set overlap, class imbalance, domain shift, out-of-distribution inputs, and overconfident predictions.

  Spectra AI is a distinct Rombo product line for compound identification, separate from the broader NMR AI platform. Its public compound-identification page describes an NMR workflow that highlights discriminating patterns and returns ranked candidate structures with confidence scores, while the chemist retains the final decision ([Rombo AI compound identification](https://rombo.ai/use-cases/nmr-compound-identification/)).

  The review questions remain the same: What does the score mean? Was it calibrated on independent data? Does calibration hold across the relevant instruments and sample types? How does the system signal that an unknown is outside its experience? Which spectral features support the rank, and what experiment would separate the leading candidates?

  To evaluate a scored NMR shortlist on a compound-identification case, [analyze a spectrum with Spectra AI](https://spectra.rombo.ai). Treat the result as prioritized evidence for chemist review, not as automatic confirmation.

  ## FAQs

  ### Is a 90% library match a 90% probability that the compound is correct?

  Not unless the software documentation explicitly defines it as a calibrated probability under conditions that match your case. It may instead be a similarity value on a rescaled or arbitrary range. Check the algorithm, assumptions, validation set, and library-coverage condition.

  ### What is the difference between a match factor and a reverse match factor?

  A direct match considers disagreement from peaks in the query that are absent from the reference. A reverse match can ignore those additional query peaks, which may help with background or mixtures but can also hide contamination. Interpret both beside the raw spectra.

  ### Does a large gap between the first and second candidate prove the top hit?

  No. It shows separation within the candidates returned. If the correct compound is absent or screened out, the top hit can lead by a large margin and still be wrong.

  ### How should a laboratory choose a confidence threshold?

  Validate candidate thresholds on independent, representative samples and choose the operating point from the consequences of false positives and false negatives. Document separate actions for automatic acceptance, expert review, and reacquisition rather than relying on one universal cutoff.

  ### What evidence is needed for confirmed compound identification?

  Requirements depend on the field and method, but confirmation commonly requires an authentic standard matched under comparable conditions plus independent, orthogonal evidence. A high software score alone should be reported as the level of support it actually provides.
---

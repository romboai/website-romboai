---
title: 'Impurity Identification in Pharmaceutical Quality Control'
seo_title: 'Impurity Identification in Pharmaceutical Quality Control | Rombo AI'
date: 2026-09-01T07:00:00.000Z
permalink: /blog/impurity-identification-pharmaceutical-quality-control
layout: article
image: /img/blog/pharmaceutical-impurity-hplc-2026-09-01.jpg
image_alt: High-performance liquid chromatography system used to separate pharmaceutical components and impurities
image_caption: 'A high-performance liquid chromatography system, commonly used to separate and measure pharmaceutical impurities. Photo: <a href="https://commons.wikimedia.org/wiki/File:High-performance_liquid_chromatography.jpg" rel="noopener noreferrer" target="_blank">Dqwyy, via Wikimedia Commons</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/" rel="license noopener noreferrer" target="_blank">CC0 1.0</a>. Cropped and resized by Rombo AI.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: A practical guide to classifying, isolating, identifying, and documenting pharmaceutical impurities with chromatography, mass spectrometry, and NMR.
markdown_content: |-
  ## TL;DR

  - **A chromatographic peak is not yet an identified impurity.** Detection, quantitation, structural identification, safety qualification, and control are separate decisions.
  - **Start with the applicable regulatory scope.** Drug-substance process impurities, drug-product degradation products, residual solvents, elemental impurities, and potentially mutagenic impurities are not routed through one universal threshold table.
  - **Chromatography answers “how much” and “where”; spectroscopy helps answer “what.”** LC–MS often supplies formula and fragmentation hypotheses, while NMR can establish connectivity and distinguish isomers after sufficient enrichment or isolation.
  - **Identification strength should match the decision.** A tentative exact-mass assignment may guide an investigation; a specification, toxicological assessment, or reference standard requires stronger and traceable evidence.
  - **Preserve the chain of evidence.** Sample lineage, method version, peak tracking, isolation history, raw spectra, rejected candidates, reference-material characterization, and reviewer decisions all belong in the record.
  - **Automation can accelerate selected interpretation steps, but it does not qualify an impurity or release a batch.** Validated procedures, quality systems, and accountable scientific review remain essential.

  ## Begin with the regulatory question, not the instrument

  “Unknown peak” describes an observation, not a regulatory category. Before selecting an identification technique, establish what material is being tested, where the impurity could originate, and which guideline and regional requirements apply.

  For chemically synthesised new drug substances within its scope, ICH Q3A(R2) addresses organic impurities, inorganic impurities, and residual solvents. It distinguishes reporting, identification, and qualification concepts and expects the impurity profile of relevant batches to support proposed specifications ([ICH Q3A(R2)](https://database.ich.org/sites/default/files/Q3A%28R2%29%20Guideline.pdf)). The applicable threshold depends on context including maximum daily dose; a single percentage should not be copied across products.

  ICH Q3B(R2) has a different scope. It addresses degradation products in new drug products, including reaction products of the drug substance with excipients or the immediate container-closure system. It excludes several other categories, including extraneous contaminants, polymorphic forms, and enantiomeric impurities, and points readers to other guidance where appropriate ([ICH Q3B(R2)](https://database.ich.org/sites/default/files/Q3B%28R2%29%20Guideline.pdf)).

  Potentially DNA-reactive impurities require a separate risk-based assessment. ICH M7(R2) provides a framework for identifying, categorising, qualifying, and controlling mutagenic impurities within its stated scope; it does not simply replace Q3A or Q3B ([ICH M7(R2)](https://database.ich.org/sites/default/files/ICH_M7%28R2%29_Guideline_Step4_2023_0216_0.pdf)).

  This classification step prevents a common error: treating every peak above an internal alert as the same analytical problem. It also determines whether the team needs structural elucidation, a root-cause investigation, a safety assessment, a quantitative method, or several of these in parallel.

  ## Impurity classes and the evidence they trigger

  A useful triage table connects the suspected origin to likely evidence without assuming that origin from retention time alone.

  | Working class | Typical origin | Early evidence to collect | Identification challenge | Separate control question |
  | --- | --- | --- | --- | --- |
  | **Process-related organic impurity** | Starting material, intermediate, by-product, reagent-derived product, or synthesis condition | Process map, batch history, LC/UV, LC–HRMS, spiking with known materials | Closely related analogues may share fragments and chromatographic behaviour | Can the process prevent, purge, or consistently limit it? |
  | **Drug-product degradation product** | Heat, light, oxidation, hydrolysis, excipient interaction, or packaging interaction | Stability trend, stress studies, mass balance, LC–MS, comparison across formulations | Low abundance and matrix interference; several pathways may yield isomers | Does formation remain controlled through shelf life and storage? |
  | **Residual solvent or volatile impurity** | Synthesis, purification, cleaning, or packaging | Headspace GC, appropriate reference materials, manufacturing history | Co-elution and matrix effects; structure elucidation may be unnecessary when a standard confirms identity | Which solvent-specific limits and process controls apply? |
  | **Inorganic or elemental impurity** | Catalyst, reagent, equipment, water, or raw material | Element-specific methods, supplier data, process knowledge | Organic structure-elucidation tools are generally the wrong route | Is the source understood and the elemental control strategy adequate? |
  | **Potentially mutagenic impurity** | Reactive starting material, reagent, intermediate, by-product, or degradant | Predicted and observed structures, process fate, purge arguments, hazard information | The structure may be needed before an appropriate hazard assessment is possible | Which ICH M7 assessment and control approach is justified? |
  | **Extraneous contaminant or mix-up** | Carryover, cleaning failure, environmental source, wrong material, or sample handling | Blank and carryover checks, chain of custody, adjacent batches, laboratory investigation | The peak may not belong to the product chemistry at all | What quality-system investigation and corrective action are required? |

  The labels are provisional until supported. A peak that grows during accelerated stability may suggest degradation, but sample preparation can also create artifacts. A mass compatible with a known process intermediate is not proof that the intermediate survived purification. Triage should produce competing hypotheses and discriminating tests.

  ## From an unknown peak to a defensible structure

  The identification workflow should reduce uncertainty in stages rather than demand full isolation for every signal.

  **1. Verify that the peak is real.** Review blanks, placebo, diluent, carryover, system suitability, integration, detector response, and repeat preparations. Confirm that the signal follows the sample and is reproducible under the procedure. An integration event or baseline disturbance should not enter a structure-elucidation queue.

  **2. Establish the impurity profile.** Compare drug substance, drug product, stressed samples, stability time points, process stages, and relevant lots. Trend retention time and relative response using a controlled method version. Chromatographic area percentage is not automatically mass percentage: response factors can differ from the main component.

  **3. Generate source hypotheses.** Map the observed mass difference or spectral features against starting materials, intermediates, reagents, known degradants, excipients, and plausible transformations. Use process knowledge to prioritise candidates, but preserve an “unknown” branch so a familiar mechanism does not become confirmation bias.

  **4. Acquire orthogonal structural evidence.** LC–high-resolution MS can support elemental composition, isotope pattern, adduct assignment, and fragments while the impurity remains in a mixture. UV or diode-array data may reveal chromophore similarity. When MS cannot distinguish constitutional or positional isomers, enrich or isolate the impurity for 1D and 2D NMR. A published pharmaceutical workflow similarly moves from LC–MS to LC–NMR or isolated-sample NMR when LC–MS is inconclusive, with synthesis and comparison used where complete verification is needed ([Alsante et al., *Journal of Pharmaceutical Sciences*, 2004](https://doi.org/10.1002/jps.20120)).

  **5. Challenge the proposed structure.** Predict expected ions, fragments, chemical shifts, correlations, and degradation behaviour. Ask which observations the structure does not explain. Search for plausible isomers and alternative adducts. A candidate wins by surviving falsification, not because it was proposed first.

  **6. Confirm to the level required by the decision.** Co-injection with a characterised reference can support chromatographic identity, but co-elution alone is weak when selectivity is limited. Matching retention, MS, and NMR data to an isolated or synthesised material provides stronger support. The team should state exactly what was confirmed and which attributes remain inferred.

  **7. Connect identity to qualification and control.** Structural identification enables toxicological assessment and root-cause work; it does not itself establish safety. Likewise, an impurity can be structurally known but poorly controlled. The final package must connect analytical findings to the applicable quality and safety strategy.

  ## An evidence ladder for identification claims

  Terms such as *identified*, *characterised*, and *confirmed* should not depend on individual writing style. Define internal claim levels and the minimum evidence for each use.

  | Claim level | Suitable wording | Typical evidence | What it does not establish |
  | --- | --- | --- | --- |
  | **Detected feature** | “An additional peak was observed” | Reproducible chromatographic or spectral signal; blanks and artifacts reviewed | Chemical identity, concentration, or product origin |
  | **Class or formula hypothesis** | “Data are consistent with…” | Accurate mass, isotope pattern, UV, diagnostic fragments, process or degradation context | Unique constitutional structure |
  | **Probable structure** | “The leading structure is…” | Multiple orthogonal observations; alternatives explicitly evaluated; predicted data fit | Equivalence to a characterised reference or complete stereochemical assignment |
  | **Confirmed identity** | “Identity was confirmed against…” | Fit-for-purpose comparison to isolated or synthesised material using discriminating techniques | Toxicological qualification or adequate process control |
  | **Qualified and controlled impurity** | Use the quality-system terminology applicable to the dossier | Confirmed or justified identity, safety rationale, validated quantitative procedure, specification or process control, lifecycle evidence | Freedom from future change or need for ongoing monitoring |

  This ladder is not a regulatory standard; it is a documentation framework. Its value is consistency. A reviewer can see why a mass-only hypothesis was adequate for one root-cause experiment but insufficient for a specification or safety conclusion.

  Analytical procedures used for release and stability decisions must be suitable for their intended purpose. FDA’s final Q2(R2) guidance describes validation principles including specificity or selectivity, accuracy, precision, and reportable range, while Q14 addresses science- and risk-based procedure development and lifecycle management ([FDA Q2(R2), 2024](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q2r2-validation-analytical-procedures); [FDA Q14, 2024](https://www.fda.gov/media/161202/download)). An exploratory LC–MS method used to generate a structure hypothesis and a validated procedure used to report an impurity are therefore related but not interchangeable deliverables.

  ## Worked example: a stability degradant in a tablet

  Consider a hypothetical tablet stability study. A new HPLC peak appears at a later time point and exceeds the applicable identification threshold for the product and dose. Its integrated area is 0.18%, but the team records that value as detector response—not yet a concentration—because the impurity response factor is unknown.

  **Verification.** Duplicate preparations reproduce the peak. It is absent from the diluent and placebo and is not carried over after a high-concentration injection. System suitability passes. The peak is therefore treated as a sample-related feature.

  **Source triage.** The peak is absent from the drug substance and release sample but increases under heat and humidity. Oxidative and hydrolytic stress samples are compared. Growth under oxidative stress makes oxidation a working hypothesis, not a conclusion.

  **LC–HRMS hypothesis.** The protonated ion is consistent with the parent plus one oxygen, and fragments retain the main scaffold. Two regioisomeric oxidation products remain plausible. The report records the formula tolerance, adduct assignment, isotope fit, fragments, and both candidates; it does not call the impurity a confirmed N-oxide from mass difference alone.

  **Isolation and NMR.** The team enriches the degradant using a stability sample and develops a preparative separation that avoids additional conversion. The isolated fraction is checked for purity and stability. <sup>1</sup>H, <sup>13</sup>C, HSQC, and HMBC data support one oxidation site and contradict the alternative. The structure explains the observed mass and degradation pathway.

  **Reference comparison and quantitation.** A suitably characterised material is obtained or synthesised. Retention and orthogonal spectra are compared under defined conditions. Its response factor is then used where scientifically appropriate to revise the impurity result, and the quantitative method is validated for its intended use.

  **Decision and prevention.** The stability, formulation, process, packaging, toxicology, and regulatory teams determine qualification and control actions. The investigation also tests whether oxygen exposure, excipient attributes, or container performance drives formation. The structural answer becomes useful because it leads to a defensible control strategy.

  ## Documentation that survives review and transfer

  A final structure image without provenance is not an identification package. Retain the original chromatograms and spectra, sample and fraction lineage, acquisition parameters, processing and integration versions, peak-tracking rationale, isolation conditions, purity checks, candidate history, calculations, reference-material characterisation, and reviewer approvals.

  Record negative results as well. An absent peak in placebo, a candidate rejected by HMBC, or a formula discarded after adduct review explains why the conclusion is specific. Link each figure and table to a raw-data object and method version rather than copying screenshots into an isolated report.

  The transfer package should distinguish exploratory procedures from validated quantitative methods. It should also state the impurity’s working class, applicable guideline scope, threshold rationale, identification status, qualification status, control location, and remaining lifecycle commitments. This makes later batch investigations and method changes auditable instead of forcing a new team to reconstruct the reasoning.

  ## The next step: AI-assisted NMR within a controlled workflow

  AI can shorten spectral review and candidate ranking after the quality team has verified the peak, preserved sample lineage, and acquired suitable data. Rombo AI’s foundation-model approach is described as pre-trained on millions of NMR spectra and designed to generalise across instrument brands and sample types rather than requiring a traditional chemometric recalibration for every instrument. Cross-instrument performance still needs to be evaluated with held-out spectra representative of the laboratory’s own methods and impurity chemistry.

  Spectra AI is a distinct product line for compound identification and full structure elucidation, separate from Rombo AI’s broader NMR material-analysis platform. It should be positioned as an interpretation layer, not as a validated release method, safety assessment, LIMS integration, or replacement for accountable review unless those capabilities are separately documented and qualified.

  For a low-level impurity, the practical test is whether the workflow can preserve alternative structures, expose supporting spectral regions, abstain on insufficient data, and export evidence into the laboratory’s review process. If NMR interpretation is the bottleneck after enrichment or isolation, [evaluate Spectra AI with a representative impurity spectrum](https://spectra.rombo.ai/), then confirm the result to the level required by the quality decision.

  ## FAQs

  ### Is every pharmaceutical impurity above a threshold required to be identified?

  The answer depends on product type, guideline scope, dose, impurity category, development stage, region, and scientific justification. Use the applicable current guidance and product-specific regulatory strategy; do not apply one copied percentage to every impurity.

  ### Can LC–MS alone confirm an impurity structure?

  LC–MS can provide strong evidence for formula, isotope pattern, and fragmentation, especially when compared with a characterised standard. It may not uniquely distinguish positional or constitutional isomers, so NMR, synthesis, isolation, or another discriminating technique can be necessary.

  ### Why isolate an impurity if it is visible by LC–MS?

  Isolation can provide enough material for NMR, reference-material characterisation, toxicology, response-factor determination, and orthogonal confirmation. The isolation procedure must also show that the impurity was not created or transformed during preparation.

  ### Does identifying an impurity mean it is qualified?

  No. Identification establishes or supports chemical structure. Qualification addresses safety at the relevant exposure, while control addresses how the impurity is monitored, limited, prevented, or purged.

  ### What belongs in an impurity-identification report?

  Include scope and threshold rationale, sample lineage, method versions, raw-data references, peak history, source hypotheses, isolation and purity data, candidate structures, orthogonal evidence, rejected alternatives, reference comparisons, conclusion strength, qualification status, control actions, and approvals.
---

---
title: 'De Novo Structure Elucidation with AI'
seo_title: 'De Novo Structure Elucidation with AI | Rombo AI'
date: 2026-08-29T07:00:00.000Z
permalink: /blog/de-novo-structure-elucidation-ai
layout: article
image: /img/blog/de-novo-structure-elucidation-ai-2026-08-29.jpg
image_alt: A collection of plastic molecular models representing alternative candidate structures during de novo structure elucidation
image_caption: 'Plastic molecular models used in teaching laboratories. Photo: <a href="https://commons.wikimedia.org/wiki/File:Plastic_molecular_model.jpg" rel="noopener noreferrer" target="_blank">Peter Highton, via Wikimedia Commons</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/" rel="license noopener noreferrer" target="_blank">CC0 1.0</a>. Cropped and resized by Rombo AI.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: De novo structure elucidation goes beyond library matching by generating, ranking, and falsifying structures that could explain an unknown compound's experimental spectra.
markdown_content: |-
  ## TL;DR

  - **De novo structure elucidation is not library matching.** It must propose a structure even when no reference spectrum for the compound exists.
  - **Every measurement acts as a constraint.** Molecular formula, NMR environments and correlations, MS fragments, IR bands, and stereochemical observations progressively remove impossible candidates.
  - **Candidate generation and candidate ranking are different problems.** A system can rank a list accurately yet fail if the correct structure was never generated.
  - **The best candidate is still a hypothesis.** Predicted-versus-observed agreement, unexplained signals, close alternatives, sample purity, and orthogonal experiments determine whether the assignment is defensible.
  - **AI changes how chemical space is searched.** Learned representations, spectrum predictors, and graph search can prioritize promising structures, but their scope and uncertainty must remain visible.
  - **A chemist should control the stopping rule.** When multiple candidates explain the data, the correct output is the next discriminating experiment—not artificial certainty.

  ## What “de novo” means in structure elucidation

  A spectral library search asks, “Which stored reference most resembles this measurement?” De novo structure elucidation asks a harder question: “Which molecular structure could have produced all of these observations?” The distinction matters whenever the unknown is a novel synthetic product, natural product, degradant, metabolite, impurity, or proprietary compound absent from available libraries.

  Dereplication is still a sensible first step. A strong match can prevent a team from solving an already characterized molecule again. But a no-match result does not identify a new structure, and a close analogue is not necessarily the unknown. True structure elucidation must move from retrieval to construction and testing.

  Computer-assisted structure elucidation (CASE) predates modern machine learning. A traditional CASE system converts experimental observations into a molecular connectivity model, enumerates structures compatible with those rules, predicts properties for the candidates, and ranks the survivors. ACD/Labs, which has occupied this territory for decades, describes a workflow that combines a molecular formula with NMR-derived connectivity, user-defined restrictions, candidate generation, and chemical-shift-based ranking ([ACD/Structure Elucidator Suite](https://www.acdlabs.com/products/spectrus-platform/structure-elucidator-suite/)).

  Newer methods alter the search strategy, not the scientific obligation. Whether a candidate comes from combinatorial enumeration, fragment assembly, database-guided mutation, a transformer, or a graph algorithm, it must account for the measured evidence and survive comparison with realistic alternatives.

  ## Turn spectra into constraints before generating structures

  Structure elucidation becomes tractable when each observation reduces the search space. The most useful input is therefore not “all the data” in the abstract, but a documented set of reliable constraints with known uncertainty.

  | Evidence | What it can constrain | What it cannot establish alone | Frequent failure mode |
  | --- | --- | --- | --- |
  | Accurate mass and isotope pattern | Molecular formula candidates, heteroatom combinations, isotope-bearing elements | Connectivity, positional isomers, most stereochemistry | Wrong ion, adduct, charge state, or co-eluting species |
  | 1D <sup>1</sup>H NMR | Proton environments, integrals, multiplicity, coupling relationships | Complete carbon skeleton in crowded or overlapping spectra | Solvent, exchange, second-order effects, mixture overlap |
  | 1D <sup>13</sup>C NMR and DEPT | Carbon count, symmetry clues, carbon types | Direct connectivity between all carbons | Missing weak/quaternary signals or accidental overlap |
  | COSY and TOCSY | Proton–proton networks and spin systems | Long-range carbon framework by themselves | Ambiguous cross-peaks in congested regions |
  | HSQC | One-bond proton–carbon assignments | Quaternary-carbon connections | Peak picking or assignment errors |
  | HMBC | Longer-range proton–carbon relationships that join fragments | A unique bond path in every case | Variable transfer efficiency and multiple possible path lengths |
  | NOESY/ROESY or RDC data | Through-space proximity and configuration evidence | Constitution without supporting connectivity | Conformational averaging or spin diffusion |
  | IR and MS/MS | Functional-group evidence and fragmentation-compatible substructures | A unique full structure for many small molecules | Treating a non-specific band or fragment as diagnostic |

  Start with hard constraints: permitted elements, molecular formula, valence, degree of unsaturation, and unequivocal one-bond assignments. Add softer evidence—chemical-shift ranges, weak HMBC peaks, predicted fragments, biosynthetic expectations—with explicit weights or flags. If uncertain observations are encoded as absolute rules, the correct answer can be excluded before ranking begins.

  Data quality sets an upper bound on the result. Confirm that the spectra belong to one component, inspect phase and baseline, reconcile integrals, review automatic peak picking, and retain the raw data. A contradictory constraint may reveal unusual chemistry, but it more often reveals an impurity, missed signal, wrong assignment, or acquisition artifact.

  ## Three ways to generate candidate structures

  Candidate generation is the inverse problem: moving from partial spectral consequences back to molecular graphs. Three broad strategies are useful, and practical systems can combine them.

  **Constraint-based enumeration** builds every chemically valid graph allowed by the molecular formula, valence rules, required or forbidden bonds, fragments, and NMR correlations. Its strength is auditability: a chemist can see why a structure was admitted or rejected. Its weakness is combinatorial growth. Too few reliable constraints produce an unmanageable candidate set; one incorrect hard constraint can remove the correct graph.

  **Retrieve, then modify** begins with molecules or fragments close to the observed data and edits their graphs. This supplies a chemical prior without requiring the final structure to be in a spectral library. NMR-Solver, for example, starts from database retrieval or user candidates, recombines molecular fragments, predicts <sup>1</sup>H and <sup>13</sup>C shifts, and iterates toward better spectral agreement ([Nature Communications, 2026](https://www.nature.com/articles/s41467-026-71315-0)). SECS similarly retrieves a starting population using aligned spectral and molecular representations, then uses an evolutionary graph algorithm to add, remove, or change atoms, bonds, and substructures ([Nature Communications, 2026](https://www.nature.com/articles/s41467-026-73846-y)). Retrieval seeds the search; it does not limit the output to exact database entries.

  **Direct learned generation** predicts substructures or molecular representations from spectra and assembles them into complete structures. NMR2Struct combines convolutional substructure prediction with a transformer that assembles molecular fragments. In its published benchmark, the framework used routine 1D <sup>1</sup>H and/or <sup>13</sup>C spectra and evaluated molecules containing up to 19 heavy atoms ([ACS Central Science, 2024](https://doi.org/10.1021/acscentsci.4c01132)). Those conditions are essential context: benchmark performance within a defined chemical space is not a universal guarantee for larger molecules, mixtures, unusual elements, or experimental conditions absent from training.

  These strategies fail differently. Enumeration can explode; retrieval can anchor the search near familiar chemistry; learned generation can prefer structures common in its training distribution. Running more than one strategy, preserving candidate diversity, and recording why candidates disappear are safeguards against a deceptively neat answer.

  ## Rank candidates by agreement—and by contradiction

  After generation, each candidate must be tested in the forward direction: if this were the structure, what spectra and correlations should appear?

  A useful score combines several evidence channels rather than hiding them inside one number. It can include predicted-versus-observed chemical-shift errors, required and violated correlations, formula agreement, spectral-embedding similarity, fragmentation plausibility, and stereochemical evidence. Keep component scores visible. A candidate that fits chemical shifts but violates an unequivocal HMBC relationship is not rescued by a high average.

  Ranking is comparative. DP4, for example, was introduced to distinguish candidate stereoisomers by comparing computed and experimental NMR shifts. Its probability is conditioned on the candidate set; it does not prove that a missing alternative is impossible ([Smith and Goodman, *JACS*, 2010](https://doi.org/10.1021/ja105035r)). The same caution applies to learned rankings: “top one” means best among those considered under that scoring method.

  Review the margin between candidates, not just the winner. If several constitutional isomers have similar scores, the result should trigger another experiment. If all candidates fit poorly, revisit the formula, sample purity, peak list, and search space. A good system should be able to return “insufficient evidence” or “outside validated scope.”

  ## Worked example: solve a simple unknown without a library hit

  Consider a deliberately simplified teaching case. An isolated, apparently pure compound gives a high-resolution mass consistent with **C<sub>9</sub>H<sub>10</sub>O<sub>2</sub>**. Its degree of unsaturation is five. IR supports a conjugated carbonyl. The <sup>1</sup>H NMR spectrum contains two aromatic doublets integrating to two protons each and two three-proton singlets. HSQC assigns the protonated carbons; HMBC links one methyl singlet to a carbonyl carbon and an aromatic ipso carbon, while the other methyl singlet correlates to an oxygenated aromatic carbon.

  This example resolves to 4-methoxyacetophenone; its formula and identity are independently catalogued by [PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/7476). Imagine, however, that its reference spectrum is deliberately withheld. The elucidation must stand on constraints rather than recognition.

  **1. Establish the skeleton budget.** Five degrees of unsaturation accommodate an aromatic ring plus one carbonyl. The formula contains no spare oxygen for both an ester and an additional ether unless the remaining atoms and proton count still reconcile.

  **2. Identify symmetry and fragments.** Two aromatic doublets with equal two-proton integrals strongly support a para-disubstituted aromatic pattern. The two isolated three-proton signals suggest groups without adjacent hydrogens. The oxygenated-carbon correlation supports a methoxy group; the carbonyl correlation supports an acetyl methyl.

  **3. Generate constitutional alternatives.** Candidate generation should still include ortho- and meta-methoxyacetophenone, structures with different oxygen placement, and other formula-compatible graphs. It should not jump directly from “methoxy plus carbonyl” to a single answer.

  **4. Eliminate by explicit contradictions.** Ortho and meta substitution do not explain the simple two-pair aromatic pattern. An ester arrangement conflicts with the observed methyl-to-ketone-carbonyl relationship and the oxygenated aromatic carbon. Candidates with hidden symmetry assumptions should be checked against the number of distinct <sup>13</sup>C environments.

  **5. Rank the survivors.** Predicted shifts and complete cross-peak agreement should place 4-methoxyacetophenone above the alternatives. The report should show the runner-up structures and the observations they fail, not only the winning score.

  **6. Define the validation claim.** This dataset strongly supports the planar constitution in a clean teaching example. In real work, reacquisition, full assignments, purity evidence, and comparison with an authentic standard may be appropriate. If stereocentres were present, the same evidence would not establish absolute configuration.

  The lesson is reusable: the worked result is convincing because independent constraints converge and alternatives are falsified—not because software produced a familiar drawing.

  ## A decision framework for ambiguous results

  Use the remaining ambiguity to choose the next action.

  | Result after ranking | Interpretation | Next action |
  | --- | --- | --- |
  | One candidate fits all reliable constraints; alternatives have specific contradictions | Strong constitutional hypothesis | Reinspect assignments, use orthogonal data, and confirm at the level required by the decision |
  | Several positional isomers remain close | Existing correlations do not locate a substituent uniquely | Acquire a discriminating long-range or selective NMR experiment; consider derivatization or synthesis |
  | Constitution is stable but stereoisomers remain | Connectivity evidence is stronger than spatial evidence | Add NOE/ROE, coupling, RDC, chiroptical, crystallographic, or computed-NMR evidence as appropriate |
  | Every candidate has a poor fit | Input or search space is probably wrong or incomplete | Recheck purity, formula, adduct, peak picking, assignments, allowed elements, and acquisition conditions |
  | Top candidate changes under small processing choices | Result is fragile | Treat as unresolved; improve signal quality and test pipeline sensitivity |
  | Candidate lies outside the model's validated domain | Score may not be calibrated | Escalate to expert review and independent methods; do not extrapolate confidence |

  Stopping is a scientific decision, not a score threshold. Discovery triage may accept a ranked hypothesis; release testing, safety investigations, and novel-structure publication demand more. Record raw inputs, processing, software and model versions, constraints, eliminated candidates, uncertainty, and the experiment that would most efficiently challenge the conclusion.

  ## The next step: foundation models for de novo NMR analysis

  Rule-based CASE systems show the value of explicit constraints, but their preprocessing and configuration can be labor-intensive. New AI methods learn reusable spectral representations, predict spectra rapidly, or navigate molecular graphs toward better agreement. The opportunity is to combine these capabilities without losing the evidence trail: raw-data awareness, cross-instrument robustness, diverse candidate generation, component-level scores, and clear escalation to a chemist.

  Spectra AI is Rombo AI's distinct product line for compound identification and full structure elucidation—not a spectral-library matching extension. Rombo AI describes its approach as a foundation model pre-trained on millions of spectra and designed to generalize across instruments and sample types. The product claim is that analysis can be reduced from weeks to approximately 15 minutes; laboratories should validate performance on their own instruments, chemistry, sample quality, and decision criteria.

  For teams evaluating automated structure elucidation, the useful question is not whether a model can return a structure. It is whether the system can expose alternatives, show which evidence supports the ranking, recognize insufficient information, and fit a defensible review workflow. [Explore Spectra AI for compound identification](https://spectra.rombo.ai/).

  ## FAQs

  ### Is de novo structure elucidation the same as unknown compound identification?

  De novo elucidation is the most demanding form of unknown compound identification: it constructs a structure without requiring an exact reference spectrum. Unknown-identification workflows can also end earlier with a library match, class assignment, formula, or tentative candidate, depending on the decision.

  ### Can <sup>1</sup>H NMR alone determine a molecular structure?

  Sometimes a constrained, clean, simple molecule can be narrowed substantially from 1D data. In general, overlapping signals and degenerate solutions make complementary <sup>13</sup>C, 2D NMR, accurate-mass MS, IR, or other evidence valuable. Published models trained on 1D spectra are promising, but their reported domains and benchmark conditions must accompany any performance figure.

  ### Does the highest-ranked candidate prove the structure?

  No. It is the candidate that best fits the tested set under the chosen model and score. Confirmation depends on candidate-set completeness, data quality, score calibration, unexplained observations, close alternatives, and the consequence of a wrong assignment.

  ### How is AI different from traditional CASE software?

  Traditional CASE commonly applies explicit chemical rules, connectivity constraints, enumeration, and predicted-shift ranking. AI can learn spectral features, predict substructures or spectra, retrieve chemically related starting points, and guide graph search. Hybrid workflows can combine learned prioritization with explicit, auditable constraints.

  ### What should a structure-elucidation report contain?

  Include sample and acquisition details, raw-data locations, processing, assignments, formula and constraints, candidate-generation method, ranked alternatives, predicted-versus-observed evidence, contradictions, uncertainty, software or model versions, and the validation performed. State separately what is established about constitution, relative configuration, and absolute configuration.
---

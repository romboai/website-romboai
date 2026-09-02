---
title: 'Structure Elucidation Workflows for Natural Products'
seo_title: 'Structure Elucidation Workflows for Natural Products | Rombo AI'
date: 2026-09-02T07:00:00.000Z
permalink: /blog/structure-elucidation-natural-products-workflow
layout: article
image: /img/blog/natural-products-column-chromatography-2026-09-02.jpg
image_alt: Test-tube fractions collected during column chromatography of a fungal extract
image_caption: 'Fractions collected during silica column chromatography of an ethyl acetate extract from an endophytic fungus. Photo: <a href="https://commons.wikimedia.org/wiki/File:Sampling_in_Column_Chromatography.jpg" rel="noopener noreferrer" target="_blank">Ikramul Hasan Imran, via Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by/4.0/" rel="license noopener noreferrer" target="_blank">CC BY 4.0</a>. Cropped by Rombo AI.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: A practical structure elucidation workflow for natural products—from extract provenance and dereplication to isolation, NMR connectivity, stereochemistry, and confirmation.
markdown_content: |-
  ## TL;DR

  - **Natural-product structure elucidation starts before NMR acquisition.** Biological provenance, extraction, fraction history, stability, and purity determine whether the spectra describe one compound at all.
  - **Dereplication and de novo elucidation are different decisions.** Dereplication asks whether the feature matches known chemistry; de novo work constructs and tests a structure when the evidence does not support a known match.
  - **LC–HRMS is an efficient front end, not a complete structural answer.** Accurate mass, isotope patterns, and MS/MS can prioritise formulas, families, and analogues, while isomers and novel scaffolds usually require orthogonal evidence.
  - **NMR builds connectivity, but missing correlations are not automatically broken bonds.** <sup>1</sup>H, <sup>13</sup>C, COSY, HSQC, and HMBC observations must be interpreted with signal overlap, exchange, sensitivity, and non-standard coupling paths in mind.
  - **Plan stereochemical work separately from the planar structure.** Relative and absolute configuration may require NOE/ROE, coupling analysis, derivatisation, chiroptical methods, computation, crystallography, or synthesis.
  - **The most useful workflow preserves alternatives.** A ranked candidate, its violated constraints, the remaining ambiguity, and the next discriminating experiment are more defensible than one unexplained structure.

  ## Why natural products need a different workflow

  A synthetic reaction usually begins with known starting materials and a bounded set of transformations. A natural-product investigation begins with a biological matrix containing primary metabolites, secondary metabolites, salts, lipids, pigments, polymers, and compounds whose abundance can change during collection or extraction.

  That difference changes the structure elucidation problem. A signal can disappear during fractionation, a bioactivity can belong to several components, and a minor compound can co-elute with a more abundant analogue. Taxonomy and biosynthetic context help prioritise hypotheses, but they cannot prove identity: related organisms can produce different chemistry, while the same metabolite class can appear across distant taxa.

  The first analytical object is therefore not “the molecule.” It is a traceable feature linked across the source material, crude extract, fractions, chromatograms, mass spectra, bioassays, and isolated sample. If that linkage is lost, later high-resolution spectra may solve the wrong component.

  Natural products also expose the limit of libraries. Databases are valuable for avoiding rediscovery, yet an absent match can mean a novel scaffold, a known compound without reference spectra, an adduct, an in-source fragment, an analogue, or poor data. The workflow must distinguish “not matched” from “new.”

  ## A decision framework from extract to final assignment

  The following framework treats each stage as a gate. Move forward only when its minimum evidence is met.

  | Stage | Question to answer | Minimum evidence | If the answer is uncertain |
  | --- | --- | --- | --- |
  | **Provenance** | Which organism, tissue, culture, condition, and collection produced the feature? | Voucher or strain record, sample identifiers, extraction and storage history | Re-establish lineage; do not merge data from undocumented sources |
  | **Feature tracking** | Is the same component followed through fractionation? | Consistent retention, accurate mass, isotope pattern, and linked fraction records | Reanalyse adjacent fractions and check adducts, co-elution, and degradation |
  | **Dereplication** | Is this known chemistry? | Search across formula, MS/MS, UV, NMR, taxonomy, and literature with match limitations recorded | Label as unknown or analogue; do not promote a database suggestion to identity |
  | **Isolation** | Is there enough stable, sufficiently pure material for the intended experiments? | Orthogonal purity evidence and repeat spectra under documented conditions | Re-purify, enrich, use microprobe or hyphenated methods, or redesign acquisition |
  | **Planar structure** | Which atoms are connected? | Compatible formula, proton/carbon inventory, and an internally consistent correlation map | Retain candidate structures and acquire the experiment that separates them |
  | **Stereochemistry** | What are the relative and absolute configurations? | Technique-specific evidence appropriate to the scaffold and conformational behaviour | Report only the level established; avoid assigning absolute configuration by analogy alone |
  | **Confirmation** | Does one structure explain all material observations? | Orthogonal data, explicit alternatives, reproducible sample provenance, and fit-for-purpose comparison or synthesis where needed | State the unresolved ambiguity and stopping condition |

  This is not a rigid instrument sequence. It is an evidence sequence. For example, NMR can enter early for mixture profiling and dereplication, then return after isolation for complete connectivity and configuration.

  ## Stage 1: preserve provenance and chemical integrity

  Record the biological source at the level the project requires: taxonomy, voucher or strain, tissue, location, collection date, growth conditions, harvest stage, and any co-culture or elicitation. Link those records to every extraction and fraction identifier.

  Extraction is a chemical operation, not a neutral transfer. Solvent, pH, temperature, oxygen, light, time, and concentration can change the sample. An apparent natural product may be produced by hydrolysis, oxidation, rearrangement, esterification, or reaction with a processing solvent. Use mild conditions where possible, retain aliquots from earlier stages, and compare fresh and stored extracts when stability is uncertain.

  Track the target feature with more than retention time. Chromatography can shift between methods and matrices. Combine retention with accurate mass, isotope pattern, MS/MS, UV or other detector response, and fraction lineage. Where bioactivity guides isolation, retest fractions and purified material: loss, gain, or non-linear activity can indicate instability, synergy, interference, or an incorrectly tracked component.

  Before detailed NMR, assess whether the isolated material is one stable chemical entity. A single LC peak is not sufficient when isomers co-elute or the detector is insensitive to a contaminant. Compare orthogonal chromatographic conditions, inspect NMR for minor signals, check mass spectra for co-isolated ions, and repeat measurements if the compound changes in solution.

  ## Stage 2: dereplicate without overclaiming identity

  Dereplication aims to recognise known compounds early enough to avoid spending a full isolation and elucidation effort on them. It is strongest when several independent descriptors converge.

  LC–HRMS supplies candidate elemental compositions, isotope information, and retention-linked MS/MS. Molecular networking groups related fragmentation patterns and can expose families of known and unknown analogues. Allard and colleagues combined molecular networking with in-silico MS/MS fragmentation databases to navigate complex natural-product extracts, dereplicate metabolites, and annotate analogues in two case studies ([*Analytical Chemistry*, 2016](https://doi.org/10.1021/acs.analchem.5b04804)). The word *annotate* matters: a related node is not automatically the same structure.

  Add biological and spectroscopic context. Taxonomy and biosynthetic pathways can prioritise candidates; UV can identify chromophore families; NMR can reveal a scaffold pattern even in a fraction. The open NP-MRD was designed to hold experimental 1D and 2D NMR data, assignments, structures, and biological-source metadata for natural products, making it useful for both searching and checking the quality of a proposed match ([Wishart et al., *Nucleic Acids Research*, 2022](https://academic.oup.com/nar/article/50/D1/D665/6430498)).

  Record the query, database version or access date, tolerances, filters, candidate list, and which evidence each hit explains. A formula-only match is a hypothesis. A close MS/MS match can still confuse stereoisomers or constitutional isomers. Even a spectral-library match should be challenged against source, retention, and an authentic material when the project requires confirmed identity.

  End dereplication with one of three outcomes: known compound with defined confidence; likely analogue requiring targeted work; or unresolved feature requiring de novo elucidation. This explicit gate keeps novelty from being inferred merely from a failed search.

  ## Stage 3: build the planar structure from constraints

  For an unresolved compound, establish the molecular formula and an atom inventory before assembling a graph. HRMS can narrow elemental composition, but inspect charge state, adducts, isotope patterns, and source fragments. Compare the formula with the number and type of carbon signals, proton count where reliable, heteroatom-bearing environments, and unsaturation.

  Each NMR experiment owns a different constraint. <sup>1</sup>H NMR provides chemical shifts, integrals, multiplicities, and coupling. <sup>13</sup>C and edited experiments classify carbon environments. HSQC links protons to directly attached heteronuclei. COSY identifies coupled proton networks. HMBC connects those networks across longer bond paths and is often crucial around quaternary centres.

  Build fragments first, then connect them. Mark every proposed bond as directly observed, indirectly supported, biosynthetically plausible, or assumed. Missing HMBC correlations should not automatically prohibit a bond because coupling magnitude, relaxation, overlap, and acquisition settings affect visibility. Conversely, one unexpected long-range correlation may reflect a non-standard pathway rather than a new bond.

  Computer-assisted structure elucidation can enumerate graphs consistent with a molecular formula and correlation map, then rank them using predicted shifts and other evidence. ACD/Labs has built a large public content territory around natural-product CASE examples and revisions; its current “Elucidation of the Month” collection describes candidates generated from NMR, MS, UV, and IR constraints ([ACD/Labs](https://www.acdlabs.com/resources/elucidation-of-the-month/)). The practical lesson is broader than any tool: generation tests whether alternatives exist, while ranking tests how well each alternative explains the data.

  Do not accept the first graph that fits the key correlations. Predict its complete <sup>1</sup>H and <sup>13</sup>C behaviour, locate large residuals, inspect unexplained signals, and test alternative ring closures or substitution patterns. Published structure revisions show why this matters: calculated NMR shifts and DP4-type comparisons can distinguish candidates that look plausible by manual inspection, but the calculation protocol and candidate set still define the conclusion ([Smith and Goodman, *JACS*, 2010](https://doi.org/10.1021/ja105035r)).

  ## Stage 4: treat stereochemistry as its own problem

  A correct planar graph does not establish relative or absolute configuration. Natural products often contain several stereocentres, flexible rings, remote chiral elements, atropisomerism, or mixtures of epimers.

  Relative configuration may be constrained by coupling constants, NOE or ROE observations, conformational analysis, and comparison with calculated data. These signals depend on geometry, motion, mixing time, and conformer populations; a missing NOE is not always negative evidence.

  Absolute configuration can require a different evidence layer: anomalous-dispersion X-ray crystallography when a suitable crystal and scattering information are available; chiral derivatisation; total or partial synthesis; electronic or vibrational circular dichroism; optical rotation; or combined computation and experiment. No one method dominates every scaffold. Reviews of natural-product configuration assignment emphasise selecting methods case by case and accounting for conformational flexibility and technique-specific limits ([Menna et al., *Natural Product Reports*, 2019](https://doi.org/10.1039/C8NP00053K)).

  State the result at the level actually demonstrated: planar structure only, relative configuration for a subset of centres, absolute configuration, or unresolved stereochemical alternatives. This discipline prevents a strong connectivity assignment from lending unjustified confidence to a weak stereochemical analogy.

  ## Worked example: an unknown fungal-metabolite analogue

  Consider a hypothetical active fraction from an endophytic fungal culture. LC–HRMS detects a feature that tracks with activity across two fractionation steps. A blank and uninoculated-medium control exclude common background signals.

  **Dereplication.** The precursor mass and isotope pattern support two formulas. Molecular networking places the MS/MS spectrum beside a known polyketide family, but no reference spectrum provides an exact match. Taxonomy makes the family plausible, while a distinct fragment suggests a modified side chain. The result is recorded as “unknown family analogue,” not a new compound or confirmed polyketide.

  **Isolation.** Preparative chromatography yields a small fraction that appears as one peak under the collection method. A second stationary phase reveals a minor co-eluting component, so the fraction is purified again. The target remains stable long enough for replicate NMR acquisition, and all spectra are linked to the final fraction identifier.

  **Formula and fragments.** The carbon inventory resolves the formula ambiguity. HSQC and COSY define three protonated fragments. HMBC links two fragments through a quaternary carbonyl region, but the remaining ring closure has two plausible solutions. Both candidate graphs explain the degree of unsaturation and most correlations.

  **Discrimination.** Predicted carbon shifts strongly disagree with one candidate around the proposed ring junction. A targeted HMBC acquisition optimised for a different coupling range adds a correlation supporting the other graph. The rejected structure, prediction settings, and new evidence remain in the record.

  **Stereochemistry.** Couplings and ROESY establish relative configuration within one ring, but a remote centre remains unconnected. ECD calculations are sensitive to conformational weighting, so the team reports the planar structure and partial relative configuration while acquiring additional evidence. The workflow ends with a bounded claim rather than filling the gap by analogy.

  The example shows why natural-product elucidation is iterative. Separation, MS, NMR, computation, and stereochemical methods do not vote once; each resolves a specific ambiguity and can send the project back to an earlier gate.

  ## The next step: AI-assisted elucidation for library-sparse chemistry

  AI is most useful here when it reduces candidate space without hiding the evidence. A model can learn reusable spectral patterns, retrieve related chemistry, predict substructures or shifts, and rank candidate graphs. It should also expose alternatives and abstain when purity, domain coverage, or spectral information is insufficient.

  Rombo AI describes its NMR foundation model as pre-trained on millions of spectra and designed to generalise across instruments and sample types rather than requiring traditional chemometric recalibration for each instrument. Natural products remain a demanding validation case because novel scaffolds, low sample amounts, mixtures, and unusual acquisition conditions can differ from the model’s training evidence.

  Spectra AI is the distinct Rombo product line for compound identification and full structure elucidation, separate from the broader NMR material-analysis platform. Its role in a natural-product project should be evaluated as one interpretation layer after provenance, dereplication, and purity review—not as a claim of automated extraction, chromatography, MS integration, stereochemical proof, or biological validation.

  If NMR interpretation or candidate ranking is the bottleneck after isolation, [evaluate Spectra AI with a representative natural-product spectrum](https://spectra.rombo.ai/). Compare its candidates against the complete correlation map and preserve chemist review and orthogonal confirmation.

  ## FAQs

  ### What is dereplication in natural-products research?

  Dereplication is the early recognition of known compounds or compound families using spectral, chromatographic, biological, taxonomic, and literature evidence. It prevents unnecessary re-isolation, but a database suggestion must be reported at the confidence level its evidence supports.

  ### Can LC–MS identify a novel natural product?

  LC–HRMS and MS/MS can establish powerful formula, fragment, and family hypotheses. They rarely determine every constitutional and stereochemical detail of an unfamiliar scaffold without NMR, isolation, computation, crystallography, synthesis, or other orthogonal evidence.

  ### Which NMR experiments are essential for structure elucidation?

  A common small-molecule set includes <sup>1</sup>H, <sup>13</sup>C, COSY, HSQC, and HMBC, but the correct set depends on the molecule and ambiguity. NOESY or ROESY, selective experiments, different HMBC delays, heteronuclear experiments, or solid-state methods may be needed.

  ### How pure must a natural product be before NMR?

  There is no universal percentage. Required purity depends on signal separation, contaminant identity, sample amount, field strength, probe, experiment, and claim. Demonstrate that assigned signals belong to the same stable component and document residual ambiguity.

  ### Does a complete planar structure include absolute configuration?

  No. Connectivity, relative configuration, and absolute configuration are separate claims. Report each explicitly and select stereochemical methods appropriate to the scaffold, conformational behaviour, sample quantity, and available reference evidence.
---

---
title: 'Unknown Compound Identification: An End-to-End Workflow'
seo_title: 'Unknown Compound Identification Workflow | Rombo AI'
date: 2026-08-26T07:00:00.000Z
permalink: /blog/unknown-compound-identification-workflow
layout: article
image: /img/blog/unknown-compound-identification-sample-vials-2026-08-26.jpg
image_alt: Rows of clear laboratory sample vials used to preserve and track analytical samples during unknown compound identification
image_caption: 'Laboratory sample vials. Image: <a href="https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_11474_Vials.jpg" rel="noopener noreferrer" target="_blank">CSIRO, via Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by/3.0/" rel="license noopener noreferrer" target="_blank">CC BY 3.0</a>. Resized by Rombo AI.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: A practical unknown compound identification workflow, from representative sampling and complementary spectra to candidate falsification, confirmation, and defensible reporting.
markdown_content: |-
  ## TL;DR

  - **Define the required identification before collecting data.** A tentative candidate, a probable structure, and an identity confirmed against an authentic standard are different claims.
  - **Protect the sample and its context.** Representative sampling, blanks, storage history, matrix, and chain of custody can matter as much as instrument performance.
  - **Acquire complementary evidence.** Chromatography separates components; accurate mass constrains formula; MS/MS tests fragments; NMR maps chemical environments and connectivity; IR can support functional-group assignments.
  - **Generate candidates, then try to disprove them.** A library hit or formula is a hypothesis, not a completed identification.
  - **Match confidence to evidence.** Report what was measured, which alternatives were excluded, what remains ambiguous, and whether an authentic standard was run under comparable conditions.
  - **Automated NMR ranking can shorten candidate review, but the chemist still controls sample quality, orthogonal confirmation, and the final claim.**

  ## Start with the decision, not the instrument

  Unknown compound identification is not a single test. It is an evidence chain that begins with a decision: what must the laboratory be able to say when the work is finished?

  A process-development team may only need to recognize a recurring impurity. A forensic or regulated investigation may require an identity confirmed with an authentic reference material. A discovery team may accept a plausible structure temporarily, provided the uncertainty and next experiment are explicit. Those endpoints require different sample controls, techniques, time, and reference materials.

  Confidence language helps prevent a promising candidate from silently becoming a confirmed identity. The Metabolomics Standards Initiative proposed four reporting levels, from identified compounds to unknown features. For a non-novel compound at its highest level, it recommends at least two independent and orthogonal properties matched to an authentic compound analyzed under identical conditions ([Sumner et al., 2007](https://pmc.ncbi.nlm.nih.gov/articles/PMC3772505/)). Schymanski and colleagues proposed a five-level system for high-resolution mass spectrometry, separating exact-mass evidence, formula assignment, tentative candidates, probable structures, and confirmation by a reference standard ([Schymanski et al., 2014](https://doi.org/10.1021/es5002105)).

  The terminology differs by field, but the practical rule is stable: define the claim first, then build enough independent evidence to support it.

  ## The eight-stage evidence workflow

  The following framework makes the handoffs visible. A weak result at one stage should change the next action rather than being hidden by more sophisticated analysis later.

  | Stage | Question to answer | Minimum recorded output | Stop or escalate when… |
  | --- | --- | --- | --- |
  | 1. Define | What identity claim and decision are required? | Intended confidence level, matrix, concentration range, deadline, consequences of error | “Identify it” has no agreed meaning |
  | 2. Preserve | Is the material representative and unchanged? | Sample origin, storage, preparation, blanks, custody, visible changes | The sample may have degraded, volatilized, reacted, or been contaminated |
  | 3. Separate | Is the signal one compound or a mixture? | Chromatographic or spectral evidence of purity, co-elution, and matrix background | A major interferent shares the observed feature |
  | 4. Constrain | Which formulas, classes, or substructures remain possible? | Accurate mass/isotopes, elemental information, IR bands, basic NMR features | The evidence conflicts or is too weak to narrow the space |
  | 5. Connect | Which structure explains the relationships in the data? | MS/MS fragments, 1D/2D NMR assignments, correlations, candidate list | Required atoms or correlations remain unexplained |
  | 6. Falsify | What observation would make each candidate wrong? | Predicted-versus-observed checklist and eliminated alternatives | Several candidates explain the same evidence |
  | 7. Confirm | Does an authentic material behave the same under comparable conditions? | Co-analysis or orthogonal matches appropriate to the claim | No standard is available or a mismatch persists |
  | 8. Report | What is known, probable, and unresolved? | Data, methods, confidence level, alternatives, limitations, next action | The wording is stronger than the evidence |

  This is not a rigid instrument sequence. It is a decision sequence. For example, an LC-MS feature in a complex extract may need separation before NMR is practical, while a clean isolated synthetic product may go directly to accurate mass and a set of NMR experiments.

  ## Stage 1: preserve a representative unknown

  Analytical confidence cannot exceed sample confidence. Before opening a vial, capture where the material came from, how it was collected, its container and headspace, storage temperature and duration, light or air exposure, prior processing, and any suspected hazards. Photograph unusual appearance and keep an untouched reserve when the amount permits.

  Preparation must preserve the analyte while reducing interference. Filtration may remove particles but also adsorb a trace compound. Extraction can enrich the target but introduce selectivity or contamination. Evaporation can lose volatile components or accelerate oxidation. pH adjustment can improve recovery while changing ionization, speciation, or stability. Record each operation, including consumables and lots, so a surprising result can be traced rather than rationalized afterward.

  Run controls that answer specific questions. A solvent blank tests solvents and the analytical system. A procedural blank passes through preparation and exposes contamination from filters, vials, columns, or handling. A matrix blank helps separate the target from normal background. Replicate preparation tests whether the unknown survives the workflow reproducibly.

  If the feature disappears, changes retention time, or produces a different spectral pattern after preparation, stop. The laboratory may be identifying a preparation product rather than the original unknown.

  ## Stage 2: acquire complementary evidence

  Choose experiments for the ambiguity they remove. Repeating one type of evidence at higher precision is not always as valuable as adding an orthogonal measurement.

  | Technique | What it contributes | What it cannot establish alone |
  | --- | --- | --- |
  | GC or LC | Separates components and supplies retention behavior | Molecular identity; co-elution can remain hidden |
  | High-resolution MS | Accurate mass, isotope pattern, adducts, possible elemental formulas | Connectivity or discrimination among structural isomers |
  | Tandem MS | Fragment ions and neutral losses that test substructures | A unique full structure in every case |
  | ¹H and ¹³C NMR | Proton/carbon environments, counts, multiplicities, integrations | Complete connectivity when signals overlap or sensitivity is limited |
  | COSY, HSQC, HMBC | Through-bond relationships that assemble fragments and connectivity | Unambiguous stereochemistry or every quaternary connection in difficult data |
  | NOESY/ROESY | Through-space proximity that can test conformation or relative configuration | A unique configuration without adequate controls and conformational analysis |
  | IR/Raman | Functional groups, bonding motifs, and rapid material comparison | A unique molecular structure for most organic unknowns |

  A sensible acquisition ladder starts with inexpensive observations and adds information only where the candidate space remains broad. Chromatography and full-scan MS can reveal the number of components and approximate abundance. Accurate mass and isotope patterns constrain elemental formulas. MS/MS asks whether proposed substructures produce the observed fragments. NMR then tests environments and connectivity directly; 2D experiments become valuable when 1D signals cannot distinguish candidates.

  Preserve raw data and acquisition metadata. Reference spectra are only comparable when ionization, collision energy, field strength, solvent, concentration, temperature, pH, processing, and related conditions are known. The standards initiative explicitly emphasizes reporting metadata with spectral references because the measured properties depend on experimental context ([Sumner et al., 2007](https://pmc.ncbi.nlm.nih.gov/articles/PMC3772505/)).

  ## Stage 3: generate candidates—and design ways to reject them

  Candidate generation can start from a spectral library, formula database, known process chemistry, degradation pathways, likely metabolites, starting materials, or de novo structure assembly. Each source has a boundary.

  Library search is powerful when the true compound and comparable spectrum are present. NIST describes reference-library matching as the established route for mass-spectral identification, while noting that standards exist for only a small fraction of known analytes ([NIST DIMSpec user guide](https://pages.nist.gov/dimspec/docs/index.html)). A high match score therefore supports a candidate inside the library’s coverage; it does not prove that an absent alternative is impossible.

  Formula search has a different boundary. Exact mass and isotope evidence may yield a short elemental-formula list, but every formula can represent multiple constitutional and stereochemical structures. Process knowledge can prioritize likely candidates, yet it can also bias the investigation toward expected chemistry and away from contaminants or unexpected reactions.

  Turn each candidate into a testable ledger:

  1. List every observation the structure explains.
  2. Predict the signals, fragments, correlations, or properties that should appear.
  3. Mark observations that are missing, shifted, or contradictory.
  4. Identify the closest alternative and the cheapest experiment that separates it.
  5. Keep unexplained peaks visible; do not assign them automatically to “impurities.”

  Computer-assisted structure elucidation formalizes part of this process. ACD/Labs, for example, describes a workflow that processes NMR data, obtains a molecular formula from HRMS, constructs a connectivity diagram, generates structures consistent with restrictions, and ranks candidates ([ACD/Structure Elucidator Suite](https://www.acdlabs.com/products/spectrus-platform/structure-elucidator-suite/)). The durable lesson is not a particular interface: candidate ranking becomes useful only after the inputs and constraints are scientifically defensible.

  ## Worked example: one formula, two ester structures

  Suppose an isolated volatile impurity gives an accurate-mass result consistent with `C8H8O2`. Formula search returns multiple isomers. Two chemically plausible candidates are methyl benzoate (`C6H5CO2CH3`) and phenyl acetate (`CH3CO2C6H5`). The NIST Chemistry WebBook records the same molecular formula and molecular weight, 136.1479, for both [methyl benzoate](https://webbook.nist.gov/cgi/cbook.cgi?ID=C93583) and [phenyl acetate](https://webbook.nist.gov/cgi/cbook.cgi?ID=C122792).

  The formula is therefore a constraint, not an identity. The next task is to find observations that reflect connectivity.

  **1. Inspect the proton singlet.** Published ¹H NMR data for methyl benzoate in CDCl₃ show a three-proton singlet at 3.90 ppm, consistent with `OCH3`, plus aromatic signals including two protons near 8.02 ppm ([supporting information, Royal Society of Chemistry](https://www.rsc.org/suppdata/c6/ra/c6ra02889f/c6ra02889f1.pdf)). Published data for phenyl acetate show its three-proton `COCH3` singlet at 2.29 ppm, with five aromatic protons from about 7.07 to 7.40 ppm ([Qiu et al., 2010](https://doi.org/10.1016/j.jorganchem.2010.02.009)). Those patterns distinguish which side of the ester oxygen carries the methyl group.

  **2. Test the aromatic environments.** Methyl benzoate places the carbonyl directly next to the phenyl ring, producing a different aromatic pattern from phenyl acetate, where oxygen connects the ring to the acetyl group. The full set of shifts and integrations must agree; one isolated peak is not enough.

  **3. Use orthogonal spectra.** Compare the experimental EI mass spectrum and IR carbonyl region with reference data collected under suitable conditions. The NIST pages provide both IR and EI records for these compounds, but a library match should be checked against retention behavior and the NMR result rather than treated as the final answer.

  **4. Challenge mixture assumptions.** Confirm that the three-proton singlet and aromatic signals belong to the same chromatographic component. A co-eluting species can make individually plausible fragments appear to support one impossible structure.

  **5. Confirm at the required level.** If the decision requires a confirmed identity, analyze an authentic candidate under comparable conditions and compare at least two orthogonal properties. Co-injection can strengthen a chromatographic match, while NMR and MS/IR provide independent spectral tests.

  The bookmark-worthy conclusion is simple: accurate mass reduced the search to formulas; NMR separated constitutional candidates; orthogonal data and a reference material elevated the confidence. No single result did all four jobs.

  ## Confirmation and reporting: make uncertainty auditable

  The report should let another chemist reconstruct why the selected identity won. Include sample history, preparation, raw-data locations, instrument and acquisition parameters, processing, calibration, reference databases and versions, candidate list, match metrics, assignments, contradictory evidence, controls, and analyst review.

  Match the conclusion to the weakest unresolved link:

  - **Unknown feature:** reproducible signal with a documented analytical signature, but no defensible structure.
  - **Formula or class assigned:** elemental composition or compound family supported, connectivity unresolved.
  - **Tentative candidate:** a plausible structure explains much of the data, but close alternatives remain or no decisive reference is available.
  - **Probable structure:** multiple independent observations support one candidate and meaningful alternatives have been excluded, without full reference-standard confirmation.
  - **Confirmed identity:** an authentic material matches the unknown using the orthogonal properties and comparable conditions required by the laboratory’s method or field.

  Also report negative evidence. A missing predicted HMBC correlation, unexplained isotope pattern, retention mismatch, or unstable match across collision energies may be more informative than another supporting peak. If several candidates remain, state the experiment most likely to separate them. “Inconclusive pending X” is a useful analytical result; false certainty is not.

  ## Where AI-assisted NMR ranking fits

  Automation is most valuable between acquisition and expert confirmation: the point where a chemist must compare many candidate structures against a spectrum. Spectra AI is a distinct Rombo product for compound identification, separate from Rombo’s broader NMR AI platform. Its foundation-model approach is designed to take an NMR spectrum, identify discriminating patterns, propose structures, and return a ranked shortlist with confidence scores. The chemist remains responsible for sample integrity, orthogonal evidence, reference-standard work, and the final assignment.

  This changes one stage, not the scientific standard. A faster shortlist can help the team decide which candidate to test and which experiment to run next; it cannot repair a degraded sample, prove that co-eluting signals belong together, or convert a database candidate into a confirmed identity by itself.

  For an unknown-compound workflow based on NMR candidate ranking, [analyze a spectrum with Spectra AI](https://spectra.rombo.ai). Treat the output as prioritized hypotheses to review against the complete evidence chain.

  ## FAQs

  ### What is the first step in unknown compound identification?

  Define the decision and required confidence level, then document and preserve a representative sample. Instrument selection should follow the question; otherwise a team can collect excellent data that do not support the claim it needs.

  ### Can mass spectrometry identify an unknown compound by itself?

  Sometimes it can support a very strong assignment, particularly with a suitable library spectrum, retention evidence, and reference standard. Accurate mass alone usually constrains elemental formula rather than unique connectivity, so isomers often require MS/MS, NMR, chromatography, IR, or authentic-material comparison.

  ### Is a spectral library match a confirmed identity?

  Not automatically. Confidence depends on library coverage, spectral quality, acquisition conditions, match specificity, retention behavior, possible co-elution, and the requirements of the application. Report a library hit at the level justified by those checks.

  ### When is NMR most useful in the workflow?

  NMR is especially useful when the laboratory must distinguish structural isomers or establish connectivity. ¹H and ¹³C spectra describe chemical environments, while experiments such as COSY, HSQC, and HMBC connect atoms into fragments and structures.

  ### What if no reference standard is available?

  Report the best-supported candidate and the confidence level without calling it confirmed. Preserve the spectra, list unresolved alternatives and contradictory evidence, and specify what new measurement or synthesized standard would be needed to advance the assignment.
---

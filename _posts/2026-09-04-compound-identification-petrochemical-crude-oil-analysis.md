---
title: 'Compound Identification in Petrochemical and Crude Oil Analysis'
seo_title: 'Compound Identification in Petrochemical and Crude Oil Analysis | Rombo AI'
date: 2026-09-04T01:09:00.000Z
permalink: /blog/compound-identification-petrochemical-crude-oil-analysis
layout: article
image: /img/blog/petrochemical-compound-identification-2026-09-04.jpg
image_alt: Scientist separating petroleum samples with liquid chromatography columns in a laboratory
image_caption: 'Liquid chromatography provides a preliminary separation of petroleum compounds before further analysis. Photo: <a href="https://commons.wikimedia.org/wiki/File:Samples_Undergo_Liquid_Chromatograph_Column_Analysis_(4688602876).jpg" rel="noopener noreferrer" target="_blank">U.S. Geological Survey, via Wikimedia Commons</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/" rel="license noopener noreferrer" target="_blank">CC0 1.0</a>. Cropped by Rombo AI.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: A practical framework for identifying hydrocarbons, heteroatom species, contaminants, and additives across crude oil and petrochemical workflows.
markdown_content: |-
  ## TL;DR

  - **“Identify the compound” is too vague for petroleum.** A defensible result may be a hydrocarbon class, an elemental formula, a library-supported candidate, or a confirmed individual structure. The required level depends on the refinery decision.
  - **No instrument sees the whole barrel.** GC–MS is strongest for compounds that can be vaporised and separated; NMR describes structural environments and group composition; ultrahigh-resolution MS resolves thousands of formula assignments in heavy, compositionally dense fractions.
  - **Sample history is part of the evidence.** Volatile loss, phase separation, contamination, and fractionation bias can change the material before acquisition. Representative sampling and traceable preparation are therefore analytical requirements, not administrative details.
  - **A library hit is a hypothesis unless orthogonal evidence supports it.** Coelution, isomers, matrix effects, and incomplete libraries make retention behaviour, standards, additional spectra, and process context essential.
  - **Automation should report scope and uncertainty.** In complex mixtures, the useful output is not an unqualified list of names; it is a ranked, reviewable set of assignments tied to the fraction, method, and evidence that produced them.

  Crude oil is not one analytical problem. Light ends, middle distillates, resids, process contaminants, and formulated products occupy different volatility, polarity, concentration, and molecular-mass ranges. The right compound-identification workflow begins by defining the decision and the permitted strength of the answer—not by sending the unchanged sample to every available instrument.

  ## Three levels of identification that should not be confused

  Petroleum reports often mix three different claims. **Group-type analysis** estimates families such as paraffins, naphthenes, aromatics, or asphaltenes. **Formula assignment** proposes an elemental composition for an ion, often organised by heteroatom class, carbon number, and double-bond equivalent. **Individual compound identification** assigns a specific molecular structure. Each can be valuable, but none automatically implies the next.

  The distinction matters because crude oil contains an extraordinary number of constituents. The foundational petroleomics literature showed that ultrahigh-resolution FT-ICR mass spectrometry can resolve thousands of elemental compositions in a crude-oil spectrum; it did not claim that accurate mass alone uniquely establishes every molecular structure ([Marshall and Rodgers, *Accounts of Chemical Research*](https://doi.org/10.1021/ar020177t)). Isomers share formulas, and a single formula may represent several structures present at once.

  A practical claim ladder is:

  | Identification level | Defensible output | Typical evidence | What it does **not** establish |
  | --- | --- | --- | --- |
  | Bulk property | Density, viscosity, boiling profile, total sulfur, or another method-defined result | Validated physical or elemental test | Which molecules caused the result |
  | Compound class | Paraffinic, naphthenic, aromatic, heteroatom, or solubility-defined fraction | Chromatography, NMR regions, fractionation, or class-selective detection | A unique molecular formula or structure |
  | Molecular formula | Element counts, often with carbon-number and unsaturation descriptors | Accurate mass, isotope pattern, ionisation constraints | Connectivity or isomer identity |
  | Candidate identity | Ranked name or structure consistent with the data | Library spectrum, retention index, fragments, NMR features | Confirmation when alternatives remain plausible |
  | Confirmed identity | Specific compound supported at the required confidence | Orthogonal spectra, retention match, authentic standard, or isolation plus full characterisation | That the result applies outside the sampled material and method scope |

  This ladder prevents a common reporting failure: converting a class-level or formula-level result into a compound name because software can display one. The final report should state the level actually supported and the unresolved alternatives.

  ## Start with the refinery question and analytical window

  Method selection becomes clearer when the team first asks what decision the identification must support. Is the goal to explain an off-spec product, trace an unexpected contaminant, verify an additive, compare crude origins, investigate a deposit, or understand feed behaviour? The answer determines which material must be sampled and whether the lab needs a target concentration, a chemical family, or a specific structure.

  Representative sampling comes first. ASTM’s petroleum standards collection distinguishes manual and automatic sampling practices and includes a separate practice for volatile crude oils and condensates, reflecting the fact that one handling protocol does not preserve every petroleum matrix equally ([ASTM petroleum standards](https://regional.astm.org/industry/petroleum-collection)). A light fraction can lose volatile constituents; a heterogeneous crude can stratify; a deposit scraped from equipment may contain corrosion products or cleaning residues absent from the flowing stream.

  Next, locate the unknown in an analytical window:

  | Sample or question | Useful first-line approach | Strongest initial output | Escalate when… |
  | --- | --- | --- | --- |
  | Gas, condensate, naphtha, or volatile contaminant | GC with selective detection and/or GC–MS | Separated peaks, retention behaviour, library candidates | Peaks coelute, the library has no credible match, or confirmation is consequential |
  | Middle distillate or formulated fuel | Detailed GC, GC×GC, GC–MS, targeted assays | Individual volatile/semi-volatile compounds and group patterns | The unresolved envelope remains important or additives interfere |
  | Whole crude or heavy fraction | Fractionation followed by complementary methods | Reduced-complexity fractions and class distributions | A molecular formula or connectivity is required |
  | Aromaticity and average structural features | Quantitative <sup>1</sup>H/<sup>13</sup>C NMR under a fit-for-purpose method | Aromatic/aliphatic distributions and structural parameters | An individual isomer or trace constituent must be named |
  | Polar, heteroatom-rich, high-mass material | High-resolution MS with suitable ionisation, often after fractionation | Formula distributions and heteroatom classes | Isomer discrimination or full structure is required |
  | Known contaminant or additive | Targeted chromatography/spectroscopy with reference material | Presence and concentration in the validated range | Matrix interference or degradation products create ambiguity |

  The table is a routing framework, not a substitute for a laboratory method. Scope restrictions matter. For example, ASTM D5134 covers detailed analysis of defined light petroleum streams and explicitly warns that some peaks can contain coeluting compounds; it does not support attributing separate concentrations to those coelutants without additional information ([ASTM D5134](https://store.astm.org/standards/d5134)).

  ## How GC–MS, NMR, and high-resolution MS divide the work

  **GC–MS separates before it identifies.** A capillary column distributes sufficiently volatile components in time, and electron-ionisation mass spectra can then be searched against reference data. NIST maintains evaluated EI spectra and retention-index data specifically for chemical identification by GC–MS ([NIST Standard Reference Database 1A](https://www.nist.gov/srd/nist-standard-reference-database-1a)). Agreement in both spectral pattern and retention behaviour is stronger than a spectral score alone; an authentic standard under matched conditions can strengthen a high-consequence assignment further.

  One-dimensional GC can run out of peak capacity in petroleum. Comprehensive two-dimensional GC applies two separation mechanisms and produces structured chromatograms with higher peak capacity. NIST’s review identifies targeted, non-targeted, group, and fingerprinting uses for GC×GC ([Murray, *Journal of Chromatography A*](https://doi.org/10.1016/j.chroma.2012.05.012)). The gain is substantial, but GC×GC still does not make every peak self-identifying: retention alignment, detector response, data reduction, and reference coverage remain part of the method.

  **NMR observes structural environments across the sample.** It can distinguish broad proton or carbon environments, quantify selected group contributions under appropriate acquisition conditions, and reveal average structural features without first requiring every component to elute as a separate chromatographic peak. Bruker’s current petroleum overview emphasises aromaticity and fuel/additive analysis as core high-resolution NMR applications ([Bruker, “Petroleum Chemistry”](https://www.bruker.com/en/products-and-solutions/mr/chemistry/petroleum-chemistry.html)).

  Here too, scope controls interpretation. ASTM D5292 describes aromatic hydrogen and carbon measurements for specified soluble hydrocarbon oils, but excludes samples above stated olefinic or phenolic limits and explicitly distinguishes aromatic atom percentages from mass or volume percent aromatic compounds ([ASTM D5292](https://store.astm.org/d5292-99r04e01.html)). A broad aromatic-region integral is therefore not a list of aromatic molecules.

  **Ultrahigh-resolution MS maps compositional space.** FT-ICR MS and high-resolution Orbitrap approaches can separate densely packed ion signals and assign elemental formulas across complex petroleum fractions. Petroleomics commonly organises those formulas by heteroatom class, carbon number, and double-bond equivalent. Ionisation is selective, however: ESI, APPI, APCI, and other sources favour different chemical populations. Relative signal abundance is not automatically bulk concentration, and formula assignment is not isomer resolution. Reviews of petroleomics treat ionisation, calibration, alignment, and data interpretation as central parts of the measurement rather than afterthoughts ([Cho et al., *Mass Spectrometry Reviews*](https://doi.org/10.1002/mas.21438)).

  These techniques answer complementary questions. The most defensible workflow assigns each one a bounded role, then combines results only where the sampled fraction and evidence are commensurate.

  ## An end-to-end compound-identification workflow

  A repeatable investigation can be organised into seven gates:

  1. **Write the decision and acceptance criterion.** Specify whether the lab needs screening, class assignment, a ranked candidate, confirmed identity, or quantitation. Define what evidence will be considered sufficient before seeing the result.
  2. **Preserve a representative sample.** Record sampling point, container, temperature, phase, headspace, preservation, custody, and any homogenisation. Retain a control or archive portion when practical.
  3. **Characterise the matrix.** Use the appropriate bulk and physical tests to determine whether water, sediment, volatility, viscosity, or asphaltene behaviour will compromise preparation. ASTM D6560, for example, defines a specific heptane-insoluble asphaltene measurement and warns that additive-containing oils may give erroneous results ([ASTM D6560](https://store.astm.org/standards/d6560)).
  4. **Reduce complexity without losing the analyte.** Select distillation, solvent extraction, chromatography, or another fractionation route based on the unknown’s expected volatility and polarity. Run blanks and recovery checks: cleaner spectra are not useful if the preparation removed or transformed the target.
  5. **Acquire complementary evidence.** Use GC–MS for separated volatile candidates, NMR for structural environments and connectivity where concentration permits, and high-resolution MS for elemental-composition constraints in complex fractions. Do not combine measurements from non-equivalent fractions as if they describe the same molecule.
  6. **Generate and reject candidates.** Search spectra and retention data, test formulas against isotope and adduct behaviour, and compare NMR observations with the proposed structure. Record contradictions as carefully as matches.
  7. **Confirm at the level the decision requires.** Reanalyse with an orthogonal method, spike an authentic standard, isolate the constituent, or acquire higher-dimensional data. Report unresolved isomers, coelution, detection limits, and the exact sample scope.

  The workflow produces an evidence trail, not merely a spreadsheet of names. That trail is what allows operations, process chemistry, and quality teams to decide whether a result can explain the plant observation.

  ## Worked example: an unexpected signal in a middle distillate

  Consider a hypothetical refinery investigation. A middle-distillate stream develops an unexpected chromatographic feature after a feed change. The immediate question is whether it represents a process-derived hydrocarbon, carryover from another stream, or an additive-related compound.

  The lab first resamples upstream and downstream locations using the same documented procedure and runs a solvent blank. The feature appears only downstream, so gross sampling contamination becomes less likely. A one-dimensional GC–MS run returns two similar library candidates, but the peak shape suggests coelution. The team therefore records a **candidate-level** result rather than choosing the top library name.

  A higher-resolution chromatographic separation resolves the feature into two components. Retention data and EI spectra support an alkylated aromatic series, while a targeted sulfur detector shows that neither resolved peak contains sulfur. A fraction enriched around the relevant retention window is then examined by NMR. The aromatic-to-aliphatic pattern is consistent with the proposed family, but the concentration is insufficient for complete individual connectivity.

  At this point the evidence supports a **compound-class assignment** and two ranked structures, not two confirmed identities. If the operational decision is simply to trace the source, comparison with upstream units and additive records may be enough. If the result will trigger a supplier claim or a product release decision, the lab should obtain authentic standards or isolate enough material for orthogonal confirmation.

  The useful lesson is the sequence of claims. The library search narrowed possibilities; improved separation removed a false assumption that one peak meant one compound; selective detection rejected a sulfur-containing explanation; NMR supported the family. No single output was silently promoted beyond its evidence.

  ## Common failure modes and controls

  Complex-mixture identification fails predictably. **Coelution** produces composite mass spectra; use deconvolution cautiously and improve separation when the decision warrants it. **Library absence** makes a low-quality nearest neighbour look more certain than it is; retain the no-match outcome. **Ionisation bias** hides chemical classes or exaggerates others; compare sources or standards rather than interpreting signal intensity as universal abundance. **Fractionation bias** loses volatiles and poorly recovered polar material; use blanks, spikes, mass balance, and archive samples.

  Two further traps are particularly relevant in petroleum. First, a formula-rich FT-MS dataset can look molecularly complete while leaving isomers unresolved. Second, group-level NMR or chromatographic results can be operationally valuable without identifying individual molecules. Good reporting protects both kinds of result by naming the measurement level, method scope, and remaining ambiguity.

  ## The next step: AI-assisted review across complex spectra

  Manual petroleum interpretation does not scale well when each sample creates hundreds or thousands of signals, repeated candidate searches, and several instrument-specific files. Machine-learning systems can help standardise preprocessing, learn recurring spectral patterns, rank candidates, and surface inconsistent assignments for review. Their main risk is domain shift: a model trained on isolated compounds or clean reference spectra may not generalise to coeluting peaks, heavy fractions, altered baselines, or a different acquisition setup.

  Rombo AI’s approach uses a foundation model pre-trained on millions of spectra rather than a traditional chemometric model rebuilt for every instrument. The intended advantage is reusable representation across instruments and sample types, but any petroleum deployment still requires validation on the actual matrices, sample preparation, instruments, and decisions in scope. It must not convert class evidence into unjustified individual structures.

  For structure-level questions, [Spectra AI](https://spectra.rombo.ai) is a distinct product line for NMR compound identification. It can propose and rank candidate structures from a spectrum so that chemists review a shortlist. In crude-oil work, that role is most appropriate after the relevant component has been isolated or the spectrum is sufficiently resolved—not as a claim to enumerate every molecule in an untreated crude sample.

  ## FAQs

  ### Can GC–MS identify every compound in crude oil?

  No. GC–MS is powerful for constituents that can be transferred through the inlet and separated on the column, but heavy, non-volatile, thermally labile, and coeluting material falls outside that ideal window. Even within scope, a library match is strongest when supported by retention data and, where necessary, an authentic standard.

  ### What is the difference between hydrocarbon typing and compound identification?

  Hydrocarbon typing reports classes or distributions—such as paraffinic, naphthenic, or aromatic material. Compound identification assigns a specific molecular structure. The class result can answer process questions without supporting a unique compound name.

  ### Why use NMR if GC–MS already provides library matches?

  NMR supplies structural-environment and connectivity evidence that is different from retention and fragmentation. It can also characterise group composition in unresolved mixtures, although sensitivity and overlap may prevent trace-level individual identification.

  ### Does an exact molecular formula confirm a petroleum compound?

  No. A formula constrains element counts but not atomic connectivity or stereochemistry, and several isomers may share it. Confirmation needs evidence capable of discriminating the plausible structures.

  ### When should a refinery use an authentic standard?

  Use one when a specific identity or concentration will support a consequential decision and the candidate can be sourced safely. The standard should be analysed under comparable conditions; agreement with both retention behaviour and spectral response is more persuasive than a library score alone.
---

---
title: 'Transformer Oil Testing: Which Properties Matter, How They Are Measured, and Where NMR Fits'
seo_title: 'Transformer Oil Testing: Properties, Methods and NMR | Rombo AI'
date: 2026-10-19T06:00:00.000Z
permalink: /blog/transformer-oil-testing-properties-methods-nmr
layout: article
author: 'Martina [Marketing Specialist, Rombo AI]'
image: /img/blog/transformer-oil-testing-map.jpg
image_alt: 'Overview of routine transformer oil tests grouped into four questions: dielectric condition (breakdown voltage, dissipation factor, water), oxidation indicators (acidity, interfacial tension, colour, inhibitor), fault and paper markers (dissolved gases, furanic compounds) and contaminants (corrosive sulphur, PCB, particles), with the standard method for each and a note on where benchtop NMR may play a role.'
image_width: 1600
image_height: 900
image_caption: 'Routine transformer oil tests grouped by the question they answer. Original overview by Rombo AI; simplified and not exhaustive.'
excerpt: Which insulating oil properties utility labs test, which IEC and ASTM methods measure them, what decision each result supports, and what benchtop NMR can and cannot add to the panel.
markdown_content: |-
  ## TL;DR

  - **Routine transformer oil testing answers four questions:** can the oil still insulate, is it ageing, is a fault developing inside the transformer, and is there a specific hazard such as corrosive sulphur or PCBs.
  - **IEC 60422:2024 is the main framework for mineral oil in service.** It groups equipment into categories and recommends a test frequency for each; IEC 60296:2020 specifies the oil as delivered.
  - **Not every number on a report is a direct measurement.** Water and acidity are measured; a DGA fault type and the condition of the paper are interpreted from measured concentrations.
  - **No single technique covers the panel.** Dissolved gases need gas chromatography, furanic compounds need liquid chromatography, and breakdown voltage is an electrical test.
  - **Benchtop NMR can characterize the hydrocarbon matrix and may help track ageing, but published evidence on transformer oil is thin.** Treat any NMR-based property estimate as a hypothesis to validate on paired samples against the IEC or ASTM method.

  Insulating oil does two jobs in a transformer: it insulates and it carries heat away. A laboratory that tests it runs a panel, not a single analysis, and each result supports a different decision: keep the oil in service, dry or filter it, re-inhibit or reclaim it, resample sooner, or plan an internal inspection.

  This guide maps the routine tests to those decisions and names the standard method behind each one. It also states where a newer technique such as benchtop NMR might help and where it cannot.

  ## How a transformer oil test programme is organized

  Two IEC documents frame most programmes based on IEC standards.

  **IEC 60296:2020** (*Fluids for electrotechnical applications – Mineral insulating oils for electrical equipment*) is the specification for oil as supplied. Its fifth edition covers unused oil and oil that has been re-refined or reclaimed off site, with or without additives, and it divides transformer oils into [Type A and Type B by performance](https://connect.snv.ch/en/iec-60296-2020-ed5). Oil treated on site falls under IEC 60422 instead.

  **IEC 60422:2024** (*Mineral insulating oils in electrical equipment – Supervision and maintenance guidance*, edition 5.0) covers oil in service. Its [table of contents](https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec60422%7Bed5.0%7Db.pdf) shows how a programme is built: a table of equipment categories, a table of recommended test frequencies, a clause on sampling oil from equipment, and one clause per test, from colour and breakdown voltage to PCBs, corrosive sulphur and dibenzyl disulphide (DBDS). The 2024 edition removed category O and merged it into category A.

  Two consequences follow. Limits and intervals depend on the category of each unit, so read them from the standard rather than from a generic table. And IEC 60422 states that condition monitoring by furanic compounds is outside its scope; furan analysis has its own method, IEC 61198.

  Sampling has its own standard as well. The 2023 edition of [IEC 60567](https://connect.snv.ch/en/iec-60567-2023-ed5) now refers oil sampling to IEC 60475:2022 and keeps the guidance on free-gas sampling, gas extraction and gas chromatography.

  Laboratories that work to North American practice often use ASTM methods and IEEE guides. IEEE C57.106-2015, the *Guide for Acceptance and Maintenance of Insulating Mineral Oil in Electrical Equipment*, covers tests, reconditioning and reclaiming, and restoring oxidation resistance with inhibitors. The IEEE SA page lists it as [inactive-reserved since 26 March 2026](https://standards.ieee.org/ieee/C57.106/5361), so confirm which document your procedures cite. Many ASTM methods remain active, for example [ASTM D1816](https://store.astm.org/d1816-12r19.html) for breakdown voltage with VDE electrodes.

  ## The routine panel: what each property tells you

  The table groups the common tests by the four questions in the overview diagram. Method names follow the normative references of IEC 60422. The "what it tells you" column follows EA Technology's [guide to oil test information](https://eatechnology.com/media/iiqdwibb/quick-guide-oil-test-information.pdf) and the scopes of the standards. The last column describes the kind of action a result can trigger, not a limit.

  | Property | Standard method | What it tells you | Typical decision |
  | --- | --- | --- | --- |
  | Water content | IEC 60814 (coulometric Karl Fischer); ASTM D1533 | Water dissolved in the oil; read with temperature, a window on moisture in the paper | Dry the oil or the insulation; confirm with a resample at a recorded temperature |
  | Breakdown voltage | IEC 60156; ASTM D1816 | Withstand under electrical stress; a low value points to water, fibres or particles | Filter and dry; check water and particle count (IEC 60970) |
  | Dissipation factor and resistivity | IEC 60247 | Dielectric losses from contamination and ageing products | Look for contamination; trend against acidity |
  | Acidity | IEC 62021-1 (potentiometric), IEC 62021-2 (colourimetric) | Acidic oxidation products | Trend; consider reclaiming or replacing the oil |
  | Interfacial tension | IEC 62961; ASTM D971 | Soluble polar contaminants and early degradation products | Early warning of ageing |
  | Colour and appearance | ISO 2049; ASTM D1500 | Visible contamination or deterioration | Trigger for further tests |
  | Inhibitor content | IEC 60666; ASTM D2668 (infrared) | Remaining antioxidant (DBPC, DBP) in inhibited oil | Re-inhibit before depletion |
  | Dissolved gases (DGA) | IEC 60567 (extraction and GC); interpretation per IEC 60599 | Gases formed by thermal and electrical faults | Resample sooner; diagnose fault type; plan inspection |
  | Furanic compounds | IEC 61198 (HPLC) | By-products of cellulose (paper) degradation | Assess paper ageing; plan for replacement |
  | Corrosive sulphur and DBDS | IEC 62535; IEC 62697-1 | Risk of copper sulphide formation | Mitigation per IEC 60422 guidance, which includes a clause on metal passivators |
  | PCB | IEC 61619 (capillary GC) | Regulatory status of the oil; no effect on transformer condition | Handling and disposal under local rules |

  **Electrical tests react to many contaminants at once.** ASTM D1816 notes that a low breakdown voltage can indicate water, dirt, cellulosic fibres or conducting particles. It also states that a high breakdown voltage does not necessarily mean the oil is free of contaminants, only that not enough of them were between the electrodes to lower the average. Read breakdown voltage together with water and particles.

  **Ageing indicators move at different speeds.** The EA Technology guide notes that interfacial tension detects soluble polar contaminants and degradation products and levels off while deterioration is still moderate. It is most informative early. Acidity, sediment and sludge carry more of the signal later. Trends for the same unit are more useful than any single value.

  **Some tests concern hazards, not condition.** CIGRE working groups investigated transformer failures caused by copper sulphide from corrosive sulphur; the test method developed in that work [became IEC 62535](https://www.cigreaustralia.org.au/in-the-loop/in-the-loop-news/corrosive-sulphur-in-transformers-a-serious-problem/). PCB analysis, by contrast, is an environmental question whose limits are set by local regulation.

  ## Measured, derived or interpreted

  A laboratory report mixes three kinds of numbers. The difference matters as soon as someone proposes a new method.

  **Measured by a defined procedure.** Water by Karl Fischer, acidity by titration, interfacial tension by the ring method, inhibitor content by infrared, and individual gas, furan or PCB concentrations by chromatography. Some results are also defined by the test geometry: ASTM D1816 specifies VDE electrodes, so its breakdown voltage is not interchangeable with a result obtained with different electrodes.

  **Derived.** Relative saturation of water is calculated from the measured water content and the solubility of water in that oil at a given temperature. As our application note on [water in transformer oil](/blog/water-content-transformer-oil-karl-fischer) shows, the same 40 ppm can correspond to very different relative saturation in new and aged oil.

  **Interpreted.** The fault type behind a DGA result is not measured. IEC 60599:2022 is [guidance on interpreting dissolved and free gas concentrations](https://connect.snv.ch/en/iec-60599-2022-ed4); its methods include basic gas ratios such as CO2/CO, O2/N2 and C2H2/H2, and graphical tools including Duval's triangles, as its [published table of contents](https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec60599%7Bed4.0%7Db.pdf) shows. The guide states that any action should rest on engineering judgment. Paper condition inferred from furanic compounds is also an interpretation: IEC 61198 measures [2-furfural and related compounds](https://scc-ccn.ca/standardsdb/standards/2007615) that form when cellulosic insulation degrades.

  A method that estimates a property should be compared with the measured value from the reference method, never with an interpretation built on top of it.

  ## A worked decision path for one result set

  Consider a hypothetical annual sample from a mineral-oil power transformer. The pattern is illustrative; the comparisons are against the unit's own history and the limits for its IEC 60422 category.

  - Breakdown voltage is lower than last year.
  - Water content is higher than last year, at a similar oil temperature.
  - Acidity has risen for three consecutive samples, while interfacial tension has fallen.
  - Inhibitor content is well below the value measured when the oil was new.
  - DGA shows stable hydrocarbon gases and a gradual rise in CO and CO2.
  - Furanic compounds have not been tested.

  **Step 1: check the sample before the transformer.** A drop in breakdown voltage together with more water can come from a wet bottle, humid sampling weather or long transport. Confirm the sampling temperature and the time to analysis, and resample if in doubt. If the result holds, the oil is a candidate for drying and filtration. Because water moves between oil and paper, a wetter oil also raises a question about the solid insulation.

  **Step 2: separate contamination from ageing.** Rising acidity, falling interfacial tension and a depleted inhibitor point to oxidation, not to an external contaminant. EA Technology frames inhibitor monitoring as a way to top up before depletion. When ageing has progressed further, the reconditioning and reclaiming options described in guides such as IEEE C57.106 come into play.

  **Step 3: ask whether the ageing has reached the paper.** A sustained rise in carbon oxides is interpreted under IEC 60599, where CO2/CO is one of the basic ratios. Furanic compounds are a more specific marker of cellulose degradation, so this result set justifies adding an IEC 61198 furan analysis.

  **Step 4: set the next sample date.** The frequency recommended for the equipment category is a baseline, not a ceiling. One laboratory, for example, advises [more frequent DGA](https://en.oelcheck.com/wiki/dissolved-gas-analysis) when gas levels exceed IEC 60599 guideline values.

  The outcome is four actions: confirm and treat the water, check the inhibitor strategy, add a furan test and shorten the interval. None of them follows from a single number.

  ## Where NMR fits

  Proton NMR counts hydrogen nuclei in different chemical environments, and under controlled acquisition the signal area is proportional to the number of nuclei. That is the basis of [quantitative NMR](/blog/what-is-quantitative-nmr-qnmr). A benchtop instrument at low field resolves broad groups, such as aromatic and aliphatic hydrogen, rather than every compound in a mineral oil; our article on [how low-field NMR works](/blog/how-low-field-NMR-works/) explains the trade-offs.

  The published evidence on insulating oil is limited and mixed.

  - **Hydrocarbon composition is established ground at high field.** ASTM D5292 describes [1H and 13C NMR procedures for aromatic hydrogen and aromatic carbon content](https://store.astm.org/d5292-99r04.html) of hydrocarbon oils, including mineral oils, in mole percent. The ASTM store lists this version as historical; check the current status.
  - **Oxidation products are hard to see directly.** El-Sulaiman and colleagues (1986) recorded [1H spectra at 60 MHz and 13C spectra](https://agjsr.agu.edu.bh/publications/paperpdf/465) of fresh and service-aged transformer oil. They found aliphatic signals and an aromatic signal they attributed to antioxidant additives, but no carbonyl signals, and the spectra of fresh and aged oil were essentially identical, while electrical tests suggested that oxidation products were present.
  - **Aromatics and sediment.** Turanova and colleagues used UV and NMR spectroscopy on fresh and aged oil and concluded that [sediment formation depended mainly on aromatic hydrocarbons](https://link.springer.com/article/10.1007/s10553-014-0478-4) rather than oxidized compounds.
  - **Water.** Sukhanov and colleagues (2013) recorded 1H, 13C and 17O spectra of fresh, used and model-aged oil and describe 1H NMR as [a fast and reliable way to determine moisture](https://link.springer.com/article/10.1007/s10553-013-0440-x). The abstract does not report an inter-laboratory comparison with Karl Fischer at the low levels typical of dry oil, which remains the reference.
  - **Relaxometry and service age.** Li and colleagues (2019) used [low-field relaxation measurements at 17.173 MHz](https://xbna.pku.edu.cn/EN/Y2019/V55/I5/865) on oil from a 110 kV transformer after 1, 10 and 20 years in service. The peak relaxation time fell from 203.83 ms to 145.82 ms and 141.95 ms, with a detection time under one minute. Three samples from one site show a trend, not a calibration.

  From this evidence, three roles for benchtop NMR are plausible but unproven for transformer oil:

  1. **Oil identity and composition**, such as an aromatic-to-aliphatic fingerprint to check incoming deliveries or blends for consistency, alongside the IEC 60296 acceptance tests.
  2. **Ageing trend indicators**, where spectral or relaxation changes are correlated with acidity and interfacial tension measured on the same samples.
  3. **Inhibitor content**, since the phenolic inhibitor gives an aromatic signal. The reference stays infrared spectroscopy, which [ASTM D2668 and IEC 60666](https://www.anton-paar.com/ch-de/service-support/dokumente/applikationsberichte/ftir-spectroscopic-quantification-of-dbpc-and-dbp-in-insulating-oil-according-to-astm-d2668-and-iec-60666/) use for DBPC and DBP.

  Other parts of the panel stay with other methods. Dissolved gases must be extracted and separated by gas chromatography, as IEC 60567 describes. Furanic compounds are measured by HPLC; one laboratory notes that GC is [unsuitable for them](https://en.oelcheck.com/wiki/furan-determination/) because they decompose when vaporized. PCBs are determined by capillary GC under IEC 61619. Breakdown voltage, dissipation factor and resistivity are electrical properties measured on the liquid. Corrosive sulphur and DBDS have their own tests, IEC 62535 and IEC 62697-1.

  Each plausible role is a hypothesis to test on your own samples. Build a paired set measured by the IEC or ASTM method, cover the range in which decisions are made, agree the acceptance metrics before any modelling, and keep an independent validation set.

  ## Where Rombo AI fits

  Rombo AI builds property models on benchtop NMR spectra and benchmarks each property against the customer's reference method. The company states that its [foundation model](/blog/rose_foundation_model_NMR_spectral_data) is pre-trained on millions of spectra and is designed to need fewer reference samples per property than a model trained from scratch, and to transfer across instruments. It also states an analysis time of about 15 minutes per sample; how that fits a given laboratory workflow has to be confirmed in practice.

  For transformer oil, Rombo has not yet published validation results. A useful first step is to decide which properties in your panel are candidates, which reference data you already hold, and what accuracy would change a decision.

  The [transformer oil monitoring use case](/use-cases/transformer-oil-monitoring/) describes how an oil-condition workflow can be structured. To test whether NMR-based estimates hold on your oils, request a free [NMR feasibility review](/nmr-feasibility/).

  ## FAQ

  ### How often should transformer oil be tested?
  It depends on the equipment category. IEC 60422 groups equipment into categories and recommends a test frequency for each, and a changing trend is a reason to sample sooner than the baseline.

  ### Is dissolved gas analysis part of IEC 60422?
  The test clauses of IEC 60422 cover oil quality. Sampling of free gases and the analysis of dissolved gases are in IEC 60567, and their interpretation is in IEC 60599.

  ### Does a high breakdown voltage mean the oil is clean?
  Not necessarily. ASTM D1816 states that a high value does not prove the absence of contaminants, so read breakdown voltage together with water content and particle count.

  ### Can benchtop NMR replace the routine oil panel?
  No. Gases, furans and PCBs need chromatography, and breakdown voltage is an electrical test. NMR may estimate some composition-related properties, but each one has to be validated on paired samples against the standard method.
---

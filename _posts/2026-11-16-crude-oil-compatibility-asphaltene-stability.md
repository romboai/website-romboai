---
title: 'Crude Oil Compatibility and Asphaltene Stability: Tests, Limits and Predictive Approaches'
seo_title: 'Crude Oil Compatibility Tests Compared | Rombo AI'
date: 2026-11-16T06:00:00.000Z
last_modified_at: 2026-11-16T06:00:00.000Z
permalink: /blog/crude-oil-compatibility-asphaltene-stability
layout: article
author: 'Martina [Marketing Specialist, Rombo AI]'
image: /img/blog/crude-oil-compatibility-oil-compatibility-model.jpg
image_alt: 'Line chart from the oil compatibility model for blends of Forties and Souedie crude. The blend solubility blending number falls from 62 with pure Souedie to 27 with pure Forties. It crosses 1.4 times the Souedie insolubility number at about 23 percent Forties and the insolubility number of 38.5 at about 67 percent Forties, dividing the chart into compatible with margin, nearly incompatible with fouling risk, and incompatible.'
image_width: 1600
image_height: 900
image_caption: 'Calculated from the published solubility blending and insolubility numbers of the Forties and Souedie example in an ExxonMobil patent. Original diagram by Rombo AI.'
excerpt: 'How the oil compatibility model turns two titrations into a blending rule, what ASTM D7157, D7112 and D8253 report, why methods disagree and how spectroscopy can predict asphaltene stability.'
markdown_content: |-
  Two crude oils can each be perfectly stable and still form a blend that cannot keep its asphaltenes in solution. The result is sludge in tanks, upsets in the desalter and fouling in the preheat train and furnace tubes. This guide explains what crude oil compatibility means, how the oil compatibility model turns two lab tests into a blending rule, what the standard stability tests report and where they stop, and which predictive approaches exist, including spectroscopy with machine learning.

  *Last reviewed: 16 November 2026.*

  ## TL;DR

  - **Compatibility is a property of the blend, not of each crude.** A blend is incompatible when its ability to dissolve asphaltenes falls below what the least soluble asphaltenes in it require.
  - **The oil compatibility model reduces this to two numbers per crude:** a solubility blending number (S<sub>BN</sub>) and an insolubility number (I<sub>N</sub>), from titrations with toluene and n-heptane. The blend's S<sub>BN</sub> is a volume average and must stay above the highest I<sub>N</sub>.
  - **Order of addition and margin matter.** Blending in the wrong order can pass through incompatible proportions, and blends just above the limit can still foul.
  - **Standard tests are not interchangeable.** ASTM D7157, D7112 and D8253 cover crude oils; D7060, D4740 and D7061 were written for residues and fuel oils. Published comparisons find that methods do not always agree.
  - **Quick indices such as the colloidal instability index (CII) are useful screens but unreliable on their own.**
  - **Spectroscopy with machine learning can estimate stability parameters from one spectrum,** and published work has done this with proton NMR. Every such model needs validation against the lab's reference test.

  ## What crude oil compatibility means

  Asphaltenes are the heaviest, most aromatic and most polar fraction of crude oil, defined by solubility: insoluble in n-heptane, soluble in toluene. In a stable crude they stay dispersed because the rest of the oil, its aromatics and resins, keeps them in solution. Blending changes that balance. Adding a paraffinic, light crude to an asphaltenic one lowers the solvency of the mixture, and if it falls far enough, the asphaltenes flocculate.

  Two words are often used loosely. **Stability** describes one oil: how much margin its asphaltenes have before they precipitate. **Compatibility** describes a blend: whether the oils can be mixed in a given proportion without precipitation. A refinery cares about the second, because crude slates change and every tank and blend header mixes oils that were never tested together.

  Incompatibility also differs from the physical layering of a tank. Our guide to [crude oil tank stratification](/blog/crude-oil-tank-stratification) separates three problems that look alike in a tank: stratification, incompatibility and sediment. A mixer cures the first; it does not cure the second.

  The consequences show up downstream. Wiehe, Kennedy and Dickakian reported that heat exchanger fouling comes not only from incompatible blends but also from [nearly incompatible ones](https://doi.org/10.1021/ef010063i), because asphaltenes adsorb more readily on hot metal as the blend approaches the precipitation point. In a refinery example of the original model, choosing the right blending order mitigated coking of vacuum furnace tubes, according to the [paper's abstract](https://doi.org/10.1021/ef990133%2B).

  ## The oil compatibility model: S<sub>BN</sub> and I<sub>N</sub>

  The oil compatibility model of Wiehe and Kennedy, published in *Energy & Fuels* in 2000 and covered by [US patent 5,871,634](https://patents.justia.com/patent/5871634), rests on two ideas: asphaltenes precipitate at a fixed solvency, expressed on a toluene–n-heptane scale, and the solvency of a mixture is the volume average of its components. Each oil gets two numbers on a 0–100 scale where n-heptane is 0 and toluene is 100:

  - **Solubility blending number (S<sub>BN</sub>):** the solvency the oil brings to a blend.
  - **Insolubility number (I<sub>N</sub>):** the solvency its asphaltenes need to stay in solution. An oil without asphaltenes has an I<sub>N</sub> of zero.

  Both come from two titrations, described in a [later paper by Wiehe and co-authors](https://www.ucalgary.ca/ENCH/AER/papers/Wiehe,Yarranton,Akbarzadeh,Rahimi,Teclemariam_EnergyFuels,2005,19,1261.pdf). The **heptane dilution test** finds the largest volume of n-heptane that can be added to the oil before asphaltenes appear. The **toluene equivalence test** finds the smallest percentage of toluene in a toluene–heptane mixture that keeps them dissolved. Precipitation is detected under a microscope. Two equations convert the two results into S<sub>BN</sub> and I<sub>N</sub>.

  The blending rule follows directly. For a blend with volume fractions v<sub>i</sub>:

  - S<sub>BN,blend</sub> = Σ v<sub>i</sub> · S<sub>BN,i</sub>
  - the blend is compatible if S<sub>BN,blend</sub> is greater than the highest I<sub>N</sub> of any oil in it.

  Two refinements matter in practice. First, **order of addition**: the patent's claims call for combining oils in order of decreasing S<sub>BN</sub>, so that the mixture never passes through an incompatible proportion on its way to the final blend. Second, **margin**: in a related [ExxonMobil patent](https://data.epo.org/publication-server/rest/v1.2/patents/EP1133461NWB1/document.pdf), low fouling requires the blend's S<sub>BN</sub> to exceed 1.4 times the highest I<sub>N</sub>, and the 2001 paper places nearly incompatible blends at a ratio between 1.0 and 1.4.

  ## Worked example: Forties and Souedie

  The ExxonMobil patent gives values for two crudes: Forties, from the North Sea (S<sub>BN</sub> 27, I<sub>N</sub> 11.5), and Souedie, from Syria (S<sub>BN</sub> 62, I<sub>N</sub> 38.5). The highest I<sub>N</sub> in any blend containing Souedie is therefore 38.5.

  With x as the volume fraction of Forties, the blend's S<sub>BN</sub> is 27x + 62(1 − x). The chart at the top of this guide plots that line against the two limits:

  | Forties in blend | Blend S<sub>BN</sub> | S<sub>BN</sub> / highest I<sub>N</sub> | Reading |
  | --- | ---: | ---: | --- |
  | 10% | 58.5 | 1.52 | Compatible, above the 1.4 margin |
  | 30% | 51.5 | 1.34 | Compatible but nearly incompatible |
  | 50% | 44.5 | 1.16 | Compatible but nearly incompatible |
  | 70% | 37.5 | 0.97 | Incompatible |

  The model puts the limit at about 67% Forties. The patent reports precipitation above about 69% Forties and the highest fouling at 75%: close to the calculation, which is the point of the model.

  Order of addition follows from the same line. Pumping Souedie into a tank that already holds Forties starts at the right-hand end of the chart: the first portions of Souedie meet a mixture with an S<sub>BN</sub> near 27, well below 38.5, and their asphaltenes can precipitate even if the final 50/50 blend would be compatible. Adding Forties to Souedie, in order of decreasing S<sub>BN</sub>, moves from the left and stays above the limit until 67%. In a tank, the heel left from the previous crude is the first component.

  ## Standard stability and compatibility tests

  Several ASTM methods measure asphaltene stability, and their scopes differ more than their titles suggest. The summaries below paraphrase the scope statements on the ASTM store pages.

  | Test | What it reports | Samples in scope | Use for crude blending |
  | --- | --- | --- | --- |
  | [ASTM D7157](https://store.astm.org/d7157-23.html) | Intrinsic stability as an S-value, with the stability of the oil medium (S<sub>o</sub>) and the solvency requirement of the asphaltenes (S<sub>a</sub>); automated titration with optical detection | Residues, heavy fuel oils and crude oils with at least 0.5% asphaltenes by mass | Yes, for crudes with enough asphaltenes |
  | [ASTM D7112](https://store.astm.org/d7112-24.html) | Stability and compatibility parameters, including a stability reserve; titration with optical detection | Residues, fuel oils and crude oils with at least 0.05% asphaltenes; not oils already flocculated | Yes, including low-asphaltene crudes |
  | [ASTM D8253](https://store.astm.org/d8253-21.html) | Asphaltene solvency properties that give solubility parameters for stability, compatibility and fouling; manual microscopy | Crude oil, condensate, bitumen and blends | Yes; like the titrations above, it gives solubility parameters |
  | [ASTM D7060](https://store.astm.org/d7060-20.html) | Maximum flocculation ratio and peptizing power of the asphaltenes | Residues and residual fuel oils with at least 1% asphaltenes; crude oil not named | Outside the stated scope |
  | [ASTM D4740](https://store.astm.org/d4740-24.html) | Spot rating of cleanliness and compatibility with a blend stock | Residual fuel oils | No |
  | [ASTM D7061](https://store.astm.org/d7061-23.html) | Separability number by optical scanning | Heavy fuel oils and their components; it does not predict compatibility before mixing | No |
  | SARA and CII | Ratio of saturates and asphaltenes to aromatics and resins | Any oil that can be fractionated | Screening only (see below) |

  Two practical points follow. A test that gives one stability number for the sample in the cell has to be repeated for each blend ratio, while solubility parameters measured per oil, such as S<sub>BN</sub> and I<sub>N</sub>, can be combined with a mixing rule. And every one of these tests measures oil in a lab vessel: none says how a tank will mix.

  ## Why the methods disagree

  Different methods express the onset of precipitation on different scales and with different detection: a microscope, an optical sensor, a spot on filter paper. [Guzmán and co-authors](https://doi.org/10.1021/acs.energyfuels.0c03301), testing Mexican crudes from API 10 to 52 with SARA-based indices, the oil compatibility model, spot tests, S-value and a static column test, found that the results were not uniform, and advised using more than one method and taking precautions whenever any of them flags a sample. A [KBC article](https://www.digitalrefining.com/article/1003260/thermodynamic-solution-for-evaluating-crude-compatibility) makes a related point: onsets measured in different units do not correlate with asphaltene content, and averaging them is unreliable.

  The **colloidal instability index** is the most common shortcut. Computed from a SARA analysis as (saturates + asphaltenes) / (aromatics + resins), it is usually read as stable below 0.7 and unstable above 0.9, as summarized in a [2023 study in *Scientific Reports*](https://doi.org/10.1038/s41598-023-42886-5). Several studies question it. [Xiong and co-authors](https://doi.org/10.1021/acsomega.0c01779) found CII results on five crudes that differed greatly from field observations. In a [2024 conference paper](https://heatexchanger-fouling.com/wp-content/uploads/2024/11/6.-Krishnaswamy-et-al-2024-04-22.pdf) covering 68 oils with known refinery behavior, CII classified about half correctly. [Saboor and co-authors](https://doi.org/10.1007/s13202-021-01407-8) add that SARA results themselves depend on the separation technique. An older comparison against field deposition data by [Asomaning](https://doi.org/10.1081/LFT-120018540) found CII and titration more predictive than a spot test or the asphaltene-to-resin ratio, and found that most tests struggle with low-asphaltene oils.

  The practical lesson: agree on one reference method that fits the crude slate, use it consistently, and confirm flagged or borderline results with a second method rather than averaging them.

  ## Predictive approaches

  Testing every crude pair at every ratio is slow, so refineries and their suppliers use models. They fall into four groups.

  **Mixing rules on measured parameters.** The oil compatibility model is the clearest case: test each crude once, then calculate any blend and any order. Its limit is the test itself, which must be repeated for each new crude and cargo.

  **Correlations from bulk composition.** CII and similar SARA indices need no titration, but as shown above they misclassify a substantial share of oils.

  **Thermodynamic and vendor models.** KBC describes an equation-of-state approach in its simulation software that needs a crude assay and at least one measured onset. Process-chemical and service companies offer blend-screening programs: [Intertek](https://intertek.com/exploration-production/crude-blending-minimise-deposition) describes combining NIR fingerprinting, microscopy and a blending algorithm, and [Baker Hughes](https://www.bakerhughes.com/lifespan-blending-model-campaign-lp) describes a browser-based model of blend stability. These descriptions are the vendors' own; the methods behind them are not always published.

  **Spectroscopy with machine learning.** If a spectrum carries information about the aromatic and aliphatic balance that keeps asphaltenes in solution, a model can learn the link to measured stability parameters. Published work supports this, on limited sample sets:

  - [Castillo and co-authors](https://doi.org/10.1021/acs.energyfuels.9b03720) used proton NMR spectra and partial least squares to predict I<sub>N</sub> and S<sub>BN</sub> of Colombian crudes (API 6–27), reporting R² above 0.92 in that study.
  - [Raljević and co-authors](https://doi.org/10.1016/j.fuel.2021.121561) used diffusion NMR (DOSY) with multi-way analysis to predict crude oil stability.
  - [Aske and co-authors](https://doi.org/10.1021/ef010088h) predicted SARA fractions from infrared and NIR spectra on 18 crudes and condensates.

  These studies show that the information is in the spectrum. They do not show that a given model works on another refinery's slate. The validation questions are the same as for any spectroscopic property model: independent samples, acceptance limits tied to the reference method's precision and checks on crudes outside the calibration range, as set out in our guide to [validating a property model against ASTM methods](/blog/validating-spectroscopic-property-model-astm-reference-methods). Our comparison of [NIR and NMR for crude oil analysis](/blog/nir-vs-nmr-crude-oil-analysis) covers where each spectroscopy fits.

  ## How Rombo AI approaches crude compatibility

  Rombo AI builds property models on benchtop NMR spectra of crude oil. A proton spectrum records how hydrogen is distributed between aromatic and aliphatic environments, which relates to an oil's ability to keep asphaltenes in solution. For compatibility, that means:

  - **Compatibility screening from the same scan.** Stability indicators are estimated from the spectrum of each crude or tank level, alongside the other properties, so a new cargo can be screened when it arrives rather than when a titration slot is free.
  - **A blending check before the decision.** With indicators for each crude, the mixing rule can be applied across the ratios and the order the tank will actually go through, heel included.
  - **Your reference test stays the reference.** Each indicator is benchmarked against the method your lab already trusts (D7157, D7112 or titrations), with acceptance metrics agreed before a pilot. Borderline blends go to the reference test.

  This complements the lab, it does not replace it. If your refinery processes a changing slate, the [crude oil monitoring use case](/use-cases/crude-oil-monitoring/) shows the workflow, and our [feasibility review](/nmr-feasibility/) starts from your crudes and your reference methods. Where the crude is sampled and what each result decides is covered in [why crude oil analysis matters at every stage of the refinery](/blog/crude-oil-analysis-refinery-process-economics). To receive new guides like this one, subscribe to the Rombo AI newsletter at the bottom of this page.

  ## FAQ

  ### What is the difference between crude oil stability and compatibility?

  Stability describes one oil: how much margin its asphaltenes have before they precipitate. Compatibility describes a blend: whether two or more oils can be mixed in a given proportion without precipitation. Two stable crudes can be incompatible.

  ### Which test should a refinery use for crude oil compatibility?

  It depends on the slate. ASTM D7157 covers crude oils with at least 0.5% asphaltenes, D7112 reaches down to 0.05%, and D8253 and the titrations of the oil compatibility model give solubility parameters that can be applied to any blend ratio. Use one reference method consistently and confirm flagged or borderline results with a second method rather than averaging them.

  ### Why does the order of blending matter?

  Because the mixture passes through every intermediate proportion. Adding a high-solvency crude to a low-solvency one can briefly create an incompatible mixture even when the final blend is compatible. Blending in order of decreasing S<sub>BN</sub> avoids this.

  ### Can the colloidal instability index replace a stability test?

  No. CII is quick to compute from SARA data, but published studies report frequent misclassification and SARA results vary with the separation method. Use it as a screen and confirm borderline cases with a stability test.
---

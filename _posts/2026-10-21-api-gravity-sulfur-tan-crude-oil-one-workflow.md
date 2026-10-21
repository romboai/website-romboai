---
title: 'API Gravity, Sulfur and TAN in One Workflow: What Changes for the Crude Lab'
seo_title: 'API Gravity, Sulfur and TAN in One NMR Workflow | Rombo AI'
date: 2026-10-21T06:00:00.000Z
permalink: /blog/api-gravity-sulfur-tan-crude-oil-one-workflow
layout: article
author: 'Martina [Marketing Specialist, Rombo AI]'
image: /img/blog/crude-api-sulfur-tan-one-workflow.jpg
image_alt: 'Schematic comparing two crude oil lab workflows. Top: one sample split across a digital density analyzer for API gravity, an X-ray fluorescence analyzer for total sulfur and a titrator for total acid number. Bottom: one benchtop proton NMR scan feeding three property models, each validated on paired samples against its reference method.'
image_width: 1600
image_height: 900
image_caption: 'Three reference methods or one scan and three property models. Original schematic by Rombo AI; simplified, method numbers are examples.'
excerpt: How crude labs measure API gravity, sulfur and total acid number today, what each result decides, and what changes, and what does not, when the three come from one benchtop NMR scan.
markdown_content: |-
  ## TL;DR

  - **API gravity, sulfur and TAN answer different questions.** API gravity corrects volumes and places a crude on the light–heavy scale. Sulfur drives treating needs and product specifications. TAN flags acidic crudes for corrosion review.
  - **In most labs they come from three instruments.** A digital density analyzer, an X-ray fluorescence analyzer and a titrator each have their own preparation, range and precision statement.
  - **One benchtop NMR scan can feed three property models.** A peer-reviewed study on more than 170 crude oils estimated all three, plus distillation yields, from 60 MHz proton spectra.
  - **The three predictions are not equally direct.** API gravity follows the hydrogen structure the spectrum records. Sulfur and acidity are inferred from correlated features, so they depend more on how well the calibration set covers your crude slate.
  - **The reference methods stay the reference.** Each property needs its own validation on paired samples, its own acceptance limit and a rule for samples outside the model's domain.

  Crude labs rarely read these three numbers in isolation. A new cargo, a tank blend or a change of slate triggers all three, and the answers feed the same decisions: accept, segregate, blend or flag for corrosion review. This note looks at the reference workflow first, then at what changes, and what does not, when one benchtop NMR scan replaces three measurements. For where crude is sampled across the refinery and why, see [Why Crude Oil Analysis Matters at Every Stage of the Refinery](/blog/crude-oil-analysis-refinery-process-economics).

  ## Three numbers, three decisions

  | Property | Typical reference method | What the result supports | What it cannot tell you alone |
  | --- | --- | --- | --- |
  | API gravity | Digital density analyzer, e.g. [ASTM D5002](https://store.astm.org/d5002-22.html) for crude oils | Volume correction to standard temperature, light/heavy classification, blend calculations | Yields, compatibility or product quality |
  | Total sulfur | Energy-dispersive X-ray fluorescence, e.g. [ASTM D4294](https://store.astm.org/d4294-24.html) | Treating and hydrodesulfurization load, product specifications, crude valuation | Which sulfur compounds are present or how corrosive they are |
  | TAN (total acid number) | Titration, e.g. [ASTM D8045](https://store.astm.org/d8045-17r23.html) (thermometric) or ASTM D664 (potentiometric) | Screening of acidic crudes, blend limits, input to corrosion review | The corrosion rate of a given unit |

  API gravity is derived from relative density (specific gravity, SG) at 60 °F: API = 141.5 / SG − 131.5. A crude with a relative density of 0.876 therefore sits at about 30 °API. The scale runs opposite to density: lighter crudes have higher API values.

  The last column matters as much as the third. Tebbal and Kane's [review of crude corrosivity](https://doi.org/10.5006/C1996-96607) (NACE CORROSION 1996) notes that total sulfur and TAN thresholds have long served as rules of thumb, and that they are not accurate predictors on their own. Naphthenic acid content, sulfur compounds, velocity, temperature and materials of construction act together. A faster TAN does not change that.

  ## What the reference workflow involves

  Each method brings its own handling.

  **Density.** ASTM D5002 covers crude oils that can be handled as liquids between 15 °C and 35 °C. Light, volatile crudes need care to avoid vapor loss during transfer. For custody transfer, the density result may also need water and sediment measured on the same parcel.

  **Sulfur.** ASTM D4294 lists crude oil within its scope. Its interlaboratory precision covers 17 mg/kg to 4.6% by mass; samples above that range are diluted, at the cost of larger errors.

  **Acidity.** Crude is a difficult matrix for titration. The ASTM D8045 scope notes that D664 was developed for lubricants and biodiesel and that its solvent does not dissolve some crudes, bitumen and waxy samples well, while color-indicator methods struggle with dark samples. Different acid number methods may not give numerically equivalent results, so the method belongs on the report next to the number.

  In practice, that is one sample split into three aliquots, three preparations, three instruments to calibrate and three sets of quality control charts. None of this is wasted effort: it is what makes the results defensible.

  ## What changes with one NMR scan

  A proton (¹H) NMR spectrum records how hydrogen is distributed across aromatic, aliphatic and other chemical environments; our [introduction to quantitative NMR](/blog/what-is-quantitative-nmr-qnmr) explains why the signal areas are quantitative. Property models translate that fingerprint into estimates. This is the practical core of NMR crude oil analysis, and it is published. [Sassu et al. (Magnetic Resonance in Chemistry, 2020)](https://doi.org/10.1002/mrc.5093) built partial least-squares models on 60 MHz benchtop spectra of more than 170 crude oils to estimate API gravity, sulfur, TAN and distillation yields. On an external validation set, the authors report prediction errors in line with the precision of the corresponding ASTM methods, with results available within minutes. That supports the approach for the crude population they studied; it does not validate other models or other slates.

  What changes in the lab:

  - **One aliquot, one measurement.** The three numbers come from the same spectrum, so they describe the same portion of the sample.
  - **Three models, not three instruments.** Each property is still a separate model with its own error, validation and monitoring.
  - **Direct and indirect are not the same.** Density relates closely to hydrogen content and aromaticity, which the spectrum records. Sulfur atoms give no proton signal, and acid groups are a tiny fraction of the hydrogen. Those two properties are inferred from features that co-vary with them in the calibration crudes.

  A worked example shows how small the acid signal is. A TAN of 1.0 mg KOH/g corresponds to 1.0 / 56.1 ≈ 0.018 mmol of acid groups per gram, or about 18 mmol/kg. Assume, for illustration, a crude with 13% hydrogen by mass: it holds roughly 130 mol of hydrogen per kilogram. If each acid group carries one acidic proton, that is about one hydrogen in 7,000. A model that predicts TAN is therefore learning correlations, and those correlations hold only as far as the calibration set represents your crudes.

  ## How to validate a one-scan workflow

  The validation logic is the same as for any new method, applied property by property. Our comparison of [lab testing, NIR and high-field NMR](/blog/ai-crude-oil-analysis-lab-vs-nir-vs-high-field-nmr) sets the alternatives side by side on common criteria.

  1. **Paired samples.** Scan and test the same samples with your reference methods, covering the grades and blends you actually process.
  2. **Acceptance limits agreed in advance,** per property, and referenced to the reproducibility of the reference method rather than to a single headline figure.
  3. **A domain check.** Flag spectra that fall outside the calibration population and route those samples to the reference methods.
  4. **Ongoing checks.** Re-test a share of samples with the reference methods to catch drift when the slate or the instrument changes.

  Plan for the three properties to behave differently. Where the slate is diverse or includes acidic crudes, sulfur and TAN are the properties most likely to need extra reference samples, for the reasons above.

  ## Where Rombo AI fits

  Rombo AI builds property models on NMR spectra and benchmarks each property against the customer's reference method, with acceptance metrics agreed before a pilot starts. Our [foundation model](/blog/rose_foundation_model_NMR_spectral_data) is pre-trained on NMR spectra and is designed to need fewer reference samples per property and to carry across instruments. Whether it does so for API gravity, sulfur and TAN on your crudes is something to show on paired samples, not to assume. The [crude oil monitoring use case](/use-cases/crude-oil-monitoring/) describes how the workflow is set up. To test it on your own samples and methods, start with a [feasibility review](/nmr-feasibility/).

  ## FAQ

  ### Can NMR replace ASTM D4294 or D8045 in our lab?
  Not as a blanket replacement. A validated NMR-based model can provide fast estimates for routine samples; the reference methods remain for out-of-domain samples, disputes and periodic checks.

  ### Does a benchtop NMR see the acids behind TAN directly?
  Not at typical TAN levels: acid protons are around one hydrogen in several thousand. Models estimate TAN from correlated spectral features, which is why the calibration crudes must represent your slate.

  ### Does a fast TAN result tell us how corrosive a crude will be?
  No. Corrosivity also depends on the acid species, sulfur compounds, temperature, velocity and metallurgy. A faster TAN helps screening and blending decisions; corrosion assessment still needs the wider review.
---

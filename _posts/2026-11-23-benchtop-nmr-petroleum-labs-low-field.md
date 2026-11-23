---
title: "Benchtop NMR for Petroleum Labs: What Low-Field Instruments Can and Cannot Measure"
seo_title: 'Benchtop NMR for Petroleum Labs: What Low-Field NMR Measures | Rombo AI'
date: 2026-11-23T06:00:00.000Z
last_modified_at: 2026-11-23T06:00:00.000Z
permalink: /blog/benchtop-nmr-petroleum-labs
layout: article
author: 'Martina [Marketing Specialist, Rombo AI]'
image: /img/blog/benchtop-nmr-petroleum-labs-measure-model-reference.jpg
image_alt: 'Three-column map of what a benchtop low-field NMR instrument offers a petroleum laboratory. Measured from the signal: hydrogen content (ASTM D7171, D4808, D3701), aromatic and aliphatic hydrogen, relaxation times. Estimated by a validated model: API gravity, sulfur, TAN, distillation yields, viscosity, gasoline properties. Stays with the reference method: metals, organic chlorides, trace water, breakdown voltage, compatibility tests, certification results.'
image_width: 1600
image_height: 900
image_caption: 'What a benchtop NMR instrument measures, what it estimates through a model, and what stays with the reference method. Original diagram by Rombo AI.'
excerpt: 'A practical map for refinery, fuel and oil laboratories: which properties low-field NMR measures directly, which it can only estimate through a validated model, and which stay with the ASTM reference method.'
markdown_content: |-
  ## TL;DR

  - **"Low-field NMR" covers two kinds of instrument.** Time-domain analyzers measure the total hydrogen signal and relaxation; benchtop spectrometers also record a chemical-shift spectrum. They answer different questions.
  - **A few things are measured directly.** Hydrogen content has its own ASTM methods based on low-resolution NMR, and a benchtop spectrum gives the split between aromatic and aliphatic hydrogen.
  - **Most reported properties are model estimates.** API gravity, sulfur, TAN, distillation yields and viscosity come from a model calibrated against reference results, and hold only where the calibration samples represent your oils.
  - **Some properties stay with the reference method:** metals, organic chlorides, trace water, electrical tests, compatibility tests and any result used for certification.
  - **The useful question is property by property:** which results an NMR model can provide at the agreed precision, validated against your own ASTM methods.

  Benchtop NMR instruments have become common enough that many petroleum laboratories now ask a practical question: what could one of these do for us? Vendor brochures and published studies tend to answer with long lists of properties. The lists mix three different things: values read from the NMR signal, values estimated by a model trained on reference results, and values the technique does not reach at all.

  This guide separates the three for crude oil, fuels and related oils. It assumes you know what NMR is; if not, our introduction to [how low-field NMR works](/blog/how-low-field-NMR-works/) covers the principle, the resolution and sensitivity limits, and how machine learning turns a spectrum into property estimates. Here the focus is the laboratory decision: which tests a benchtop instrument can support, and under which conditions.

  ## Two instruments share the name "low-field NMR"

  Both kinds of instrument use permanent magnets, need no cryogens and fit on a bench. What they record is different.

  **Time-domain NMR (TD-NMR)** measures the decay of the hydrogen signal after a radiofrequency pulse. It reports how much hydrogen is in the coil and how fast its signal relaxes (the relaxation times T1 and T2), but not where each hydrogen sits in a molecule. This is the instrument behind the standard hydrogen-content methods described below, and behind many quality-control applications in other industries.

  **Benchtop NMR spectrometers** add frequency resolution. After Fourier transformation the signal becomes a spectrum in which hydrogen in aromatic rings, next to double bonds or in aliphatic chains appears at different chemical shifts. A [Magritek application note](https://magritek.com/wp-content/uploads/2020/08/App-Note-Hydrogen-content.pdf) makes the distinction concrete: a time-domain instrument gives total hydrogen content but cannot separate aromatic hydrogen, which its 43 MHz benchtop spectrometer resolves.

  The difference matters when you read a claim. "Low-field NMR measures viscosity" usually refers to relaxometry on a time-domain instrument. "Low-field NMR predicts API gravity and sulfur" usually refers to a model built on benchtop spectra. Neither statement is about the same measurement, and neither transfers automatically to the other kind of instrument.

  ## What a benchtop instrument measures directly

  A short list of quantities comes from the NMR signal itself, with a physical relationship between the signal and the result.

  **Hydrogen content.** Low-resolution NMR is a standardized way to measure hydrogen content in petroleum products. [ASTM D4808](https://store.astm.org/d4808-23.html) covers products from light distillates to vacuum residua with a continuous-wave low-resolution spectrometer, in three test methods by boiling range, and names ASTM D3701 as the preferred NMR method for aviation turbine fuels. [ASTM D7171](https://store.astm.org/d7171-20.html) uses a pulsed instrument for middle distillates boiling between 150 °C and 390 °C and is presented as an alternative to D3701, D4808 and the combustion method D5291. The standard explains why the number matters: hydrogen content is linked to the combustion behaviour of gas turbine fuels, and it is a procurement requirement for several military fuels. Results are calibrated against reference standards, as any quantitative method is, but the quantity reported is the one the signal measures.

  **Hydrogen type distribution.** On a benchtop spectrometer, the share of hydrogen in aromatic, olefinic and aliphatic environments comes from integrating regions of the spectrum. Under quantitative acquisition conditions the integral is proportional to the number of nuclei, the principle explained in our [introduction to quantitative NMR](/blog/what-is-quantitative-nmr-qnmr). The limit is resolution: at benchtop frequencies, signals that high-field instruments separate overlap, so finer groups are harder to quantify than the broad aromatic and aliphatic regions.

  **Relaxation times.** T1 and T2 describe molecular mobility. They are measured directly, but they are not a property a laboratory reports. Their value lies in correlations, covered in the next section.

  That is a short list. Almost every other number in a crude assay or a fuel certificate is something else.

  ## What it estimates through a model

  Most of the properties a petroleum laboratory reports are not visible as a peak or a relaxation time. They can be estimated because they correlate with the hydrogen distribution or with molecular mobility, and a model learns that correlation from samples measured both by NMR and by the reference method.

  **Crude oil properties.** [Sassu and co-authors](https://doi.org/10.1002/mrc.5093) built partial least squares (PLS) models on 60 MHz proton spectra of more than 170 crude oils to estimate API gravity, sulfur, total acid number (TAN) and distillation yields. On an external validation set they report prediction errors matching the precision of the ASTM methods. Sulfur shows what "estimate" means: sulfur atoms give no proton signal, so the model infers sulfur from the hydrocarbon structure that tends to accompany it in the crudes it was trained on. Our [application note on API gravity, sulfur and TAN](/blog/api-gravity-sulfur-tan-crude-oil-one-workflow) goes through what this means for each of the three properties.

  **Gasoline properties.** [Aguiar and co-authors](https://doi.org/10.1016/j.fuel.2020.118684) combined low-field, medium-resolution proton spectra with PLS and support vector machine models to estimate specific gravity, the 50% and 90% distillation temperatures, and olefin and aromatic content of commercial Brazilian gasoline. The spectra were acquired without pre-treatment or dilution in deuterated solvents, and the authors compare the prediction errors with those of the reference methodologies.

  **Viscosity.** In NMR well logging, the logarithmic mean of T1 and T2 of dead (gas-free) crude oils is correlated with viscosity divided by temperature and with the Larmor frequency, as [Hirasaki, Lo and Zhang](https://pubmed.ncbi.nlm.nih.gov/12850718/) describe for oils ranging from below 1 cP to above 10,000 cP. The same paper notes that live oils, with dissolved methane, depart from that correlation. For a laboratory this means relaxometry can track viscosity within a family of oils at controlled temperature, but the correlation has to be calibrated against kinematic viscosity (for example ASTM D445) on your own samples.

  **Biodiesel content.** A [Bruker application note](https://www.bruker.com/en/resources/library/application-notes-mr/nmr-determination-biodiesel-content.html) summarises a time-domain NMR method for the biodiesel content of diesel blends. It describes the method as rapid and portable but less precise than the current infrared standards. A useful screening tool, in other words, but not a substitute for the standard method where a blend limit is enforced.

  Two conditions apply to every item in this section. First, the model is only as good as its calibration set: a crude from a new basin, a refinery stream with unusual chemistry or a contaminated sample can fall outside it. Second, the published results belong to the authors' samples and instruments. Our pillar on [NIR vs NMR for crude oil](/blog/nir-vs-nmr-crude-oil-analysis) compares several of these studies and shows how much results vary from one property to the next.

  ## What stays with the reference method

  Some measurements are out of reach for a benchtop instrument, either because the analyte gives no useful signal or because it is present at levels far below what low-field NMR can see.

  - **Metals** such as vanadium, nickel and iron, and **organic chlorides**, are measured at trace levels by elemental methods (for example ASTM D5708 and ASTM D4929). A proton spectrum carries no direct information on them.
  - **Trace water** in crude, fuels or insulating oil is measured by Karl Fischer titration (for example ASTM D4928 for crude, IEC 60814 for insulating oil). Our [application note on water in transformer oil](/blog/water-content-transformer-oil-karl-fischer) explains why relative saturation, not ppm alone, drives the risk.
  - **Electrical tests** such as breakdown voltage depend on contaminants in a defined electrode gap. They stay with the electrical test, as our [breakdown voltage note](/blog/transformer-oil-breakdown-voltage) explains.
  - **Compatibility and stability tests** observe phase behaviour (when asphaltenes flocculate). NMR can characterize each crude; the test, or a validated predictive approach, decides whether two crudes can be blended. Our guide to [crude oil compatibility and asphaltene stability](/blog/crude-oil-compatibility-asphaltene-stability) covers the tests and their limits.
  - **Results used for certification, custody transfer or a contractual specification** come from the method the specification names, whatever else the laboratory uses for screening.

  Sensitivity sets the boundary in most of these cases. Major hydrocarbon groups are easy to see at 60 MHz; minor and trace constituents are not, which is one of the limits described in our [low-field NMR introduction](/blog/how-low-field-NMR-works/).

  ## Property map: measured, estimated, or reference only

  The table summarises the three categories for common petroleum laboratory properties. "Estimated" means a model calibrated against the reference method, validated on independent samples.

  | Property | What the NMR instrument provides | Category | Reference method (examples) |
  | --- | --- | --- | --- |
  | Hydrogen content (mass %) | Total hydrogen signal against standards | Measured | ASTM D7171, D4808, D3701 (NMR methods); D5291 (combustion) |
  | Aromatic / aliphatic hydrogen | Integrated regions of the proton spectrum (spectrometer only) | Measured | High-field NMR for finer groups |
  | API gravity, density | Model on the proton spectrum | Estimated | ASTM D5002 |
  | Total sulfur | Model; sulfur itself gives no proton signal | Estimated | ASTM D4294 |
  | TAN | Model on the proton spectrum | Estimated | ASTM D8045, D664 |
  | Distillation yields | Model on the proton spectrum | Estimated | ASTM D2892, D7169 |
  | Viscosity (dead oil) | Correlation with T1/T2 relaxation | Estimated | ASTM D445 |
  | Gasoline gravity, T50/T90, olefins, aromatics | Model on the proton spectrum | Estimated | Distillation and hydrocarbon-type methods named in the specification |
  | Biodiesel content of diesel | Time-domain signal, univariate or multivariate | Estimated (screening) | Infrared standard methods |
  | Metals, organic chlorides | No useful signal at trace level | Reference only | ASTM D5708, D4929 |
  | Trace water | Below useful sensitivity | Reference only | ASTM D4928, IEC 60814 |
  | Breakdown voltage, compatibility | Not an NMR quantity | Reference only | IEC 60156, ASTM D1816; ASTM D7157 and related tests |

  Two cautions on reading the table. "Estimated" is a possibility, not a promise: each property has to pass its own validation on your samples. And a property can move between columns depending on the instrument: aromatic hydrogen is measured on a spectrometer and invisible on a time-domain analyzer.

  ## When a benchtop instrument is not enough

  Beyond the properties in the last column, four situations call for something else.

  **Trace analysis and unknowns.** When the question is a contaminant at mg/kg level, or the structure of an unexpected compound, sensitivity and resolution point to high-field NMR or to chromatographic and mass-spectrometric methods.

  **Samples the instrument cannot present well.** Very viscous residues may need heating or dilution, free water and solids distort the signal, and volatile light ends can be lost during handling. Each preparation step becomes part of the method and has to be fixed before validation.

  **Instrument changes.** A model built on one spectrometer can drift on another, or on the same one after service, because line shape, referencing and field homogeneity change. Our guide to [calibration transfer](/blog/calibration-transfer-spectroscopy-models-break-instruments-change) explains what can be done and how to check it.

  **Decisions that require the reference method.** If a contract, a regulation or a product specification names a method, the screening result informs the decision but does not replace the reported value.

  ## A worked decision path: a crude receiving laboratory

  Consider an illustrative laboratory that reports eight results on each incoming crude parcel: API gravity, sulfur, TAN, distillation yields, viscosity, water, organic chlorides and metals. The question is which of them a benchtop NMR instrument could support.

  1. **Sort the list.** Hydrogen-type information comes directly from the spectrum but is not on the report. API gravity, sulfur, TAN, yields and viscosity are candidates for a model. Water, chlorides and metals stay with their reference methods.
  2. **Agree the targets before collecting data.** For each candidate property, decide the acceptable error against the reference method and the range of crudes the model must cover. Our guide to [validating a property model against ASTM methods](/blog/validating-spectroscopic-property-model-astm-reference-methods) shows how to set these targets.
  3. **Test on paired samples.** Measure independent samples by NMR and by the reference method, and accept each property on its own result. Sulfur may pass while viscosity does not, or the reverse.
  4. **Decide the role of each accepted property.** A validated estimate can screen every parcel, flag a crude that differs from its history, or support blend planning, while the reference method continues on a defined schedule and whenever the estimate falls outside the model's range.

  The outcome is rarely "NMR replaces the lab". More often it is more frequent information on a subset of properties, with the reference methods kept as the reference. Our [guide to crude oil analysis in the refinery](/blog/crude-oil-analysis-refinery-process-economics) shows where more frequent results change a decision.

  ## Where Rombo AI fits

  Rombo AI Platform works on the second column of the table. It is designed to estimate several properties from one benchtop NMR scan, using a foundation model pre-trained on millions of NMR spectra, so that each new application needs less calibration data than a model built from scratch. Each property is validated against the laboratory's own ASTM or IEC method on paired samples, with acceptance metrics agreed before the pilot, and the chemist decides which results to use. Rombo AI is a partner of Nanalysis, a maker of benchtop NMR spectrometers.

  The [crude oil monitoring use case](/use-cases/crude-oil-monitoring/) shows how such a workflow is organised. To check which of your properties are realistic candidates, start with a [feasibility review](/nmr-feasibility/). To receive new guides like this one, subscribe to the Rombo AI newsletter at the bottom of this page.

  ## FAQ

  ### Is a benchtop NMR spectrometer the same as a time-domain NMR analyzer?
  No. Both use permanent magnets, but a time-domain analyzer measures total hydrogen signal and relaxation, while a benchtop spectrometer also records a chemical-shift spectrum. The standard hydrogen-content methods use low-resolution instruments; property models such as API gravity or sulfur are usually built on spectra.

  ### Can benchtop NMR measure sulfur in crude oil?
  Not directly: sulfur gives no proton signal. Published studies estimate total sulfur with models calibrated against reference results, and those estimates hold only for crudes like the ones in the calibration set. X-ray fluorescence methods such as ASTM D4294 remain the reference.

  ### Do petroleum samples need deuterated solvents on a benchtop instrument?
  Not necessarily. In the gasoline study cited above, spectra were acquired without dilution in deuterated solvents. Heavy or viscous samples may still need heating or dilution, and whatever preparation you choose becomes part of the validated method.

  ### Can a benchtop NMR result replace an ASTM test?
  For hydrogen content, NMR is itself the ASTM method. For estimated properties, a validated model can supply more frequent results and screening, but a reported value for certification or a specification comes from the method that specification names.
---

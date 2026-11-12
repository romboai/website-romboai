---
layout: article
permalink: /blog/ml-for-crude-oil/
title: "Low-Field NMR for Crude Oil Analysis: Harnessing Machine Learning for Predicting Properties"
seo_title: "Low-Field NMR for Crude Oil Analysis | Rombo AI"
date: "2024-09-20"
last_modified_at: 2026-11-12
image: "img/blog/ml-for-crude.webp"
image_alt: "Crude oil samples analyzed with low-field NMR and machine learning"
markdown_content: |

    > **Update, November 2026:** This article was first published in September 2024 and describes our approach at that time. We revised it in November 2026 to qualify the claims and add the reference methods each property is checked against. Our current property models build on an [NMR foundation model](/blog/rose_foundation_model_NMR_spectral_data) pre-trained on spectral data, and each property is validated against the customer's reference method. See the [crude oil monitoring use case](/use-cases/crude-oil-monitoring/).

    *Last reviewed: 12 November 2026.*

    In the oil industry, understanding the properties of crude oil is essential for refining, quality control and production planning. Traditionally, this has involved [complex and time-consuming laboratory methods](/blog/crude-oil-analysis-refinery-process-economics), one test per property.

    Low-field Nuclear Magnetic Resonance (NMR) spectroscopy, combined with machine learning, offers a fast and non-destructive complement to those methods. At Rombo AI we use this approach to predict several physical and chemical properties of crude oil from one spectrum, including distillation yields. The predictions complement the laboratory's reference methods; they do not replace them.

    ## The Role of Low-Field NMR in Crude Oil Analysis

    Low-field NMR spectroscopy measures the magnetic properties of atomic nuclei, providing information about the molecular environment in crude oil. Unlike [high-field NMR instruments](/blog/ai-crude-oil-analysis-lab-vs-nir-vs-high-field-nmr), which are used for detailed molecular structure analysis, low-field NMR is simpler, more affordable, and suited to routine analysis.

    It provides a rich dataset that reflects the chemical composition and physical characteristics of crude oil.

    ### Why We Use Low-Field NMR

    - **Rapid Analysis**: A benchtop low-field NMR records a crude oil spectrum quickly, and one spectrum can feed several property models.
    - **Cost-Effective**: These systems are more accessible and easier to maintain compared to high-field NMR spectrometers.
    - **Non-Destructive**: The oil samples remain intact after analysis, allowing further testing if needed.

    ## How We Predict Crude Oil Properties Using NMR and Machine Learning

    A proton NMR spectrum records how hydrogen is distributed among aromatic and aliphatic environments in the oil, and that distribution is related to many bulk properties. Machine learning models learn the relationship between the spectra and the results of the laboratory's reference methods.

    How well a model predicts a new crude depends on how well its calibration covers that kind of crude. That is why each property has to be checked on the lab's own samples, against its own method, with limits agreed in advance, as our guide to [validating a spectroscopic property model against ASTM reference methods](/blog/validating-spectroscopic-property-model-astm-reference-methods) explains.

    ### Key Properties We Predict Using Low-Field NMR and Machine Learning

    1. **Viscosity**: Viscosity matters for pumping, transport, blending and desalting. NMR-based models can estimate it from the same spectrum as the other properties. Kinematic viscosity by ASTM D445 remains the reference.

    2. **Density**: Density, or API gravity, drives crude valuation and refining plans. It is also one of the quickest reference tests, with a digital density analyzer (for example [ASTM D5002](https://store.astm.org/d5002-22.html) for crude oils), so a predicted density is most useful as part of a multi-property result rather than on its own.

    3. **Hydrocarbon Group Analysis**: Models can relate the spectrum to the hydrocarbon group composition of a crude (paraffins, naphthenes and aromatics). These results inform decisions on distillation, cracking and reforming.

    4. **Aromatic and Aliphatic Content**: This is the closest of these properties to a direct measurement. The shares of aromatic and aliphatic hydrogen are read from the spectrum itself, while the other properties in this list are predicted by a model. Note that it is a hydrogen fraction, not the mass fraction of aromatic compounds.

    5. **Asphaltene Content**: Asphaltenes can foul equipment and destabilize blends. Models can estimate asphaltene content, measured in the lab as n-heptane insolubles (ASTM D6560 / IP 143), as an early flag. Whether a blend of crudes stays stable is a separate question, answered by compatibility and stability tests, as our article on [crude oil tank stratification](/blog/crude-oil-tank-stratification) explains.

    6. **Distillation Yields**: One of the most valuable applications is estimating distillation yields, the proportions of naphtha, kerosene, diesel and residue a crude can produce. The reference is a laboratory distillation, such as the true boiling point (TBP) method of ASTM D2892 followed by ASTM D5236 for the heavier fractions, which is labor-intensive and needs a large sample.

    A model can estimate the yield profile of every receipt from one spectrum, so the picture is available between full assays rather than only when one is run. These are potential yields from a laboratory distillation, not the yields a specific unit will achieve.

    7. **And Many More**: Sulfur and total acid number (TAN) are two common examples; our guide to [API gravity, sulfur and TAN in one workflow](/blog/api-gravity-sulfur-tan-crude-oil-one-workflow) covers them. Published benchtop work has reported models for API gravity, sulfur, TAN and distillation yields from 60 MHz proton spectra of more than 170 crudes ([Sassu and co-authors, 2020](https://doi.org/10.1002/mrc.5093)). Each additional property needs reference data from the lab's own method and its own validation.

    ## What to Check Before Trusting a Prediction

    Every predicted property has a reference method behind it, and the prediction is only as useful as its agreement with that method on the crudes you actually run.

    | Property | Usual reference method | What the result drives |
    | --- | --- | --- |
    | Density / API gravity | Digital density analyzer, e.g. ASTM D5002 | Valuation, volume correction, blend planning |
    | Kinematic viscosity | ASTM D445 | Pumping, transport, desalter operation |
    | Total sulfur | X-ray fluorescence, e.g. [ASTM D4294](https://store.astm.org/d4294-24.html) | Treating and hydrotreating load, product specifications |
    | Total acid number | Titration, e.g. [ASTM D8045](https://store.astm.org/d8045-17r23.html) or ASTM D664 | Corrosion risk, crude acceptance |
    | Asphaltenes (n-heptane insolubles) | ASTM D6560 / IP 143 | Fouling and blend stability flags |
    | Distillation yields | TBP distillation, ASTM D2892, with ASTM D5236 for the residue | Crude valuation, CDU planning |

    Three checks decide whether a model is ready for routine use:

    - **Coverage.** The crude being tested should sit inside the range of crudes the model was calibrated on. A new grade from an unfamiliar field is the case to check first.
    - **Validation against your method.** Bias, individual agreement and outlier rules, per property and per sub-range, agreed before the first sample. Our [validation guide](/blog/validating-spectroscopic-property-model-astm-reference-methods) gives a worked example in which a model passes on the full set and fails on one sub-range.
    - **Instrument and site changes.** A model built on one spectrometer does not automatically hold on another; our article on [calibration transfer](/blog/calibration-transfer-spectroscopy-models-break-instruments-change) explains why and how it is handled.

    ## Where This Approach Fits

    Low-field NMR with machine learning is one way to get several crude properties from one measurement. It fits best where a lab has to report several properties per sample on a crude slate that changes. For a stable stream already served by an online NIR analyzer, NIR may remain the better choice, as our [comparison of NIR and NMR for crude oil](/blog/nir-vs-nmr-crude-oil-analysis) explains.

    To test property prediction on your own crudes and reference methods, start with a [feasibility review](/nmr-feasibility/). To receive new guides like this one, you can subscribe to the Rombo AI newsletter at the bottom of this page.

    ## FAQ

    ### Is the aromatic content from NMR the same as a SARA aromatics result?

    No. NMR reads the share of hydrogen in aromatic environments. A SARA analysis reports the mass fraction of the aromatic fraction separated by chromatography. The two are related, but one cannot be substituted for the other without a model and a validation.

    ### Can a low-field NMR model replace the crude assay?

    Not as the reference. A full assay with TBP distillation remains the basis for valuation and planning. A model can estimate yields between assays and flag crudes that differ from what the plan assumes, once it has been validated against the lab's distillation results.

author: "Carmine Mattia, CTO"  
description: "How low-field NMR and machine learning predict crude oil properties and distillation yields, what they are checked against, and where they fit."
excerpt: "Low-field NMR and machine learning can predict several crude oil properties, including distillation yields, from one spectrum. What each property is checked against, and where the approach fits."
---

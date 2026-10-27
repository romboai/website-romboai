---
layout: article
permalink: /blog/how-low-field-NMR-works/
title: "How Low-Field NMR Works and How Machine Learning Enhances Sample Characterization"
seo_title: "How Low-Field NMR Works | Rombo AI"
date: "2023-08-23"
last_modified_at: 2026-10-27
image: "img/blog/nmr-how-it-works.webp"
image_alt: "Low-field NMR spectrum illustrating how molecular signals characterize a sample"
markdown_content: |
  > **Updated 27 October 2026:** This introduction was first published in 2023. We have qualified the statements on cost, portability and real-time monitoring, replaced an off-topic section on predictive maintenance with one on validation, and added sources. For how we apply low-field NMR and machine learning to crude oil today, with each property validated against your reference method, see the [crude oil monitoring use case](/use-cases/crude-oil-monitoring/).

  ## Understanding Low-Field NMR

  Nuclear Magnetic Resonance (NMR) is an analytical technique used to determine the molecular structure and composition of substances. Low-field NMR here means benchtop spectrometers: they use permanent magnets, need no liquid helium, and operate at proton frequencies of roughly 40 to 125 MHz depending on the model, against 400 MHz and above for the superconducting instruments common in research laboratories ([overview of benchtop NMR](https://en.wikipedia.org/wiki/Benchtop_nuclear_magnetic_resonance_spectrometer)).

  The principle is the same at any field. Nuclei with a magnetic moment, such as hydrogen, align with an external magnetic field. A radiofrequency pulse tips them out of alignment, and as they precess and relax they induce a small signal in a receiver coil. Fourier transformation turns that signal into a spectrum, in which each peak's position (the chemical shift) reflects the chemical environment of the nuclei. Under quantitative acquisition conditions, a signal's integrated area is proportional to the number of nuclei that produced it, which is the basis of [quantitative NMR (qNMR)](/blog/what-is-quantitative-nmr-qnmr).

  For hydrocarbons such as crude oil or refined products, a proton spectrum records how hydrogen is distributed between aromatic, olefinic and aliphatic environments, without consuming the sample. Most properties a laboratory reports, such as density or sulfur content, are not read directly from that spectrum. They are predicted by a model calibrated against reference measurements, as described below.

  ## What Low-Field NMR Offers, and Where Its Limits Are

  **Advantages for industrial laboratories, particularly in oil and energy:**

  - **Lower cost of ownership:** A permanent magnet needs no cryogens and the instrument fits on a bench, so running costs are lower than for a high-field system. It does not replace the laboratory's reference methods: results used for certification or product release still come from the standard test methods.
  - **Non-destructive:** NMR does not damage the sample, so the same sample can be measured again or sent to another test.
  - **Compact:** Benchtop instruments can sit in the laboratory or at-line, close to where samples are taken. They need a stable environment, because the field of a permanent magnet changes with temperature.
  - **Fast acquisition:** A proton spectrum takes minutes to acquire. The turnaround of a reported result also includes sampling, preparation and review, and continuous process monitoring needs a sampling or flow setup that a benchtop instrument does not provide on its own.

  **Limits to plan for:**

  - **Resolution:** At 60 MHz one ppm spans 60 Hz, against 400 Hz at 400 MHz. Coupling constants stay fixed in hertz, so multiplets cover more ppm at low field and overlap with their neighbours more often, as [Nanalysis explains](https://www.nanalysis.com/nmready-blog/what-you-should-know-about-signal-dispersion-in-benchtop-nmr).
  - **Sensitivity:** A 300 MHz system has around eleven times the intrinsic sensitivity of a 60 MHz benchtop, according to [Oxford Instruments](https://nmr.oxinst.com/blogs/high-field-to-benchtop-nmr-spectroscopy-part-3). The major components of an oil are easy to see; trace constituents are not.

  ## Machine Learning and Sample Characterization

  Machine learning turns a low-field spectrum into property estimates. A model learns, from samples measured both by NMR and by the reference method, which spectral patterns go with which property values. It works with the overlap described above rather than requiring every signal to be resolved.

  ### From Spectrum to Property

  Models such as partial least squares (PLS) regression and convolutional neural networks (CNN) can be trained on NMR spectra to predict physical and chemical properties of [crude oil](/blog/ml-for-crude-oil/), such as density, viscosity or sulfur content. A [2020 benchtop NMR study](https://pubmed.ncbi.nlm.nih.gov/32869885/) used 60 MHz proton spectra and PLS models on more than 170 crude samples to estimate API gravity, sulfur, total acid number (TAN) and distillation yields.

  These are predictions, not direct readings. Sulfur atoms give no proton signal, for example, so a model estimates sulfur from correlations with the hydrocarbon structure, and those correlations hold only as far as the calibration samples represent your crudes. Our [application note on API gravity, sulfur and TAN](/blog/api-gravity-sulfur-tan-crude-oil-one-workflow) explains what this means for each property.

  ### More Frequent Checks, Not Real-Time Control

  Because acquisition is fast, a validated model can let a laboratory check some properties more often than the full reference test allows, for example at crude receipt or before a blend. Whether that becomes at-line or online monitoring depends on the sampling setup. A comprehensive crude assay still takes longer, because it combines fractionation, several instruments, queues and review, as our [guide to crude oil analysis in the refinery](/blog/crude-oil-analysis-refinery-process-economics) describes.

  ### Automation and the Chemist's Role

  Automated processing (phasing, baseline correction, referencing) and a fixed prediction pipeline reduce manual spectrum interpretation and the variation between operators. They do not remove the chemist: someone decides which results to accept, checks samples unlike anything in the calibration set, and keeps the reference method as the reference.

  ### Validation and Instrument Changes

  A property model is only as useful as its validation. Each property should be compared with the reference method on independent samples, with acceptance limits agreed in advance. When the model moves to another spectrometer, or after a service, line shape, referencing and gain can change, and the model needs to be checked again. Our guide to [calibration transfer](/blog/calibration-transfer-spectroscopy-models-break-instruments-change) explains the options and how to validate them. The same approach applies to insulating oil, covered in our [transformer oil testing guide](/blog/transformer-oil-testing-properties-methods-nmr).

  To check whether your samples and properties are a good fit for NMR-based prediction, start with a [feasibility review](/nmr-feasibility/).


author: "Andrea Zanda"  
description: "How low-field benchtop NMR works, what it can and cannot measure, and how machine learning turns spectra into validated property estimates."
excerpt: "How low-field benchtop NMR works, where its limits are, and how machine learning turns a spectrum into property estimates that must be validated against the laboratory's reference methods."
---

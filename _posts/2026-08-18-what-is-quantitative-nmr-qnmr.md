---
title: 'What Is Quantitative NMR (qNMR) and How Does It Work?'
date: 2026-08-18T09:00:00.000Z
permalink: /blog/what-is-quantitative-nmr-qnmr
layout: article
image: /img/blog/qnmr-nmr-tubes-2026-08-18.jpg
image_alt: Rack of NMR tubes holding coloured solutions of organic compounds prepared for NMR acquisition
image_caption: 'Solutions of organic substances prepared in NMR tubes for structure and purity analysis. Photo: <a href="https://commons.wikimedia.org/wiki/File:Solutions_of_organic_substances_for_NMR_analysis.jpg" rel="noopener noreferrer" target="_blank">Ryabitskii</a>, via Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/4.0/" rel="license noopener noreferrer" target="_blank">CC BY 4.0</a>.'
author: 'Silvia Bongiovanni [BD Representative, Rombo AI]'
excerpt: Quantitative NMR determines the amount or purity of a compound from integrated NMR signals, so a certified internal standard can quantify an unrelated analyte without a matched calibration curve. Accuracy depends on complete relaxation, accurate weighing, and resolved peaks.
markdown_content: |-
  ## TL;DR

  - Quantitative nuclear magnetic resonance, or qNMR, determines the amount or purity of a compound by comparing integrated NMR signals. It is a [primary ratio method](https://www.bipm.org/en/organic-analysis/qnmr) that does not require a matched calibration standard.
  - The internal-standard workflow weighs the sample and a certified standard, dissolves both, acquires a spectrum, integrates suitable peaks, and calculates the analyte amount from their signal ratio.
  - An insufficient relaxation delay prevents some nuclei from returning to equilibrium between scans. Their signals then integrate too low and bias the purity calculation.
  - qNMR supports organic-compound purity determination, pharmaceutical quality control, reference-standard certification, and natural-product or food analysis, while Rombo AI automates spectral interpretation to shorten analysis time.

  ## What quantitative NMR measures and why it needs no calibration curve

  Quantitative NMR measures the amount of a compound by relating an NMR signal’s integrated area to the number of nuclei that produced it. Under quantitative acquisition conditions, the relationship follows **I = kN**, where **I** represents integrated signal area, **N** represents the contributing nuclei, and **k** represents a constant set by the instrument and experiment.

  An internal-standard measurement removes the unknown instrument constant. The analyte and standard experience the same experiment, so **k** cancels when their corrected integrals are divided. Correcting each integral for the number of contributing protons gives a molar ratio, which can then produce concentration, mass, or purity from the known amount of standard.

  Protons from different compounds produce the same molar response when excitation and relaxation are complete. This universal response lets an unrelated certified compound quantify the analyte, provided its signal remains resolved and it does not react with the sample. qNMR therefore needs a traceable internal standard but does not need a matched analyte standard or a calibration curve, which supports its use as a [primary ratio method](https://numegalabs.com/quantnmr.html).

  By comparison, HPLC-UV and GC-FID generally relate detector response to concentration through calibration curves made with suitable reference standards. qNMR instead derives quantity directly from the [ratio of integrated nuclear signals](https://emerypharma.com/blog/a-guide-to-quantitative-nmr-qnmr/).

  ## The internal-standard method, step by step

  1. **Weigh the sample accurately.** Record the analyte mass with a microbalance. Milligram-scale work commonly uses a 0.001 mg readout and controls static because any weighing error transfers directly into the [calculated purity result](https://emerypharma.com/blog/a-guide-to-quantitative-nmr-qnmr/).
  2. **Add a known mass of internal standard.** Choose a stable, nonreactive reference material with certified purity above 99.5 percent and a well-resolved signal. The standard can differ chemically from the analyte because proton signal area depends on the number of contributing nuclei rather than [molecular identity alone](https://numegalabs.com/quantnmr.html).
  3. **Dissolve both materials completely.** Select a deuterated solvent that dissolves the analyte and standard without causing reaction or signal overlap. Incomplete dissolution changes the effective concentration in the NMR tube and biases the result.
  4. **Acquire a quantitative spectrum.** Use consistent excitation and enough scans to reach a signal-to-noise ratio near 250, which supports integration precision below 1 percent. Set the relaxation delay according to the slowest relevant T1 value so each signal recovers adequately between scans.
  5. **Integrate separate analyte and standard peaks.** Correct each integral for the number of protons represented by that signal. A method should aim for an analyte-to-standard integral ratio near 1 to reduce relative integration error, while sufficiently wide integration regions capture the full peak area.
  6. **Calculate purity or amount.** The internal-standard purity equation is

  **P<sub>a</sub> = (I<sub>a</sub> / I<sub>std</sub>) × (N<sub>std</sub> / N<sub>a</sub>) × (M<sub>a</sub> / M<sub>std</sub>) × (m<sub>std</sub> / m<sub>a</sub>) × P<sub>std</sub>**

  Here, P denotes purity, I denotes integrated peak area, N denotes the number of contributing protons, M denotes molar mass, and m denotes weighed mass. Subscripts a and std identify the analyte and internal standard. The corrected integral ratio gives the analyte-to-standard mole ratio, so you can also use it to calculate analyte amount when the standard amount is known.

  ## Why relaxation delay determines integration accuracy

  Relaxation delay controls whether each resonance has recovered enough longitudinal magnetization before the next scan. After a pulse, nuclei return toward equilibrium at rates described by their T1 relaxation times. A longer T1 requires more time between pulses.

  Different resonances often have different T1 values. When the recycle period is too short, a fast-relaxing proton may recover almost completely while a slow-relaxing proton remains partly saturated. The slow-relaxing peak then produces a smaller integral than its proton count warrants. Additional scans can improve signal-to-noise, but averaging cannot remove this systematic distortion.

  For a 90° pulse, the recycle period should be based on the longest relevant T1 in the analyte and internal standard. The recycle period includes the acquisition time and the separate relaxation delay. Common working rules follow the exponential recovery relationship.

  - A period of 3 × T1 recovers about 95% of equilibrium signal and can provide [greater than 95% integration accuracy](https://nmr.chem.ucsb.edu/protocols/fast1pulse.html) under suitable conditions.
  - A period of 5 × T1 recovers about 99.3% and supports more demanding quantitative work.
  - A period near 7 × T1 recovers about 99.9% when the method requires minimal saturation error.

  Shorter periods reduce acquisition time, but they trade integration accuracy for speed. Smaller pulse angles can lessen saturation when short delays are necessary, though the method then requires validated pulse and delay settings.

  A distorted integral ratio directly biases the purity calculation. If the analyte peak relaxes more slowly than the standard peak, the calculation underestimates the analyte amount. If the standard relaxes more slowly, the calculation can overestimate it. Measuring the longest relevant T1 before setting the acquisition parameters prevents either error.

  ## Worked example: calculating purity from an internal standard

  The following calculation illustrates the method and does not represent a validated assay result. A 15.00 mg analyte sample falls within the [typical 10 to 20 mg range](https://emerypharma.com/blog/a-guide-to-quantitative-nmr-qnmr/) for small-molecule qNMR.

  | Parameter | Analyte | Maleic acid standard |
  | --- | --- | --- |
  | Mass | 15.00 mg | 9.50 mg |
  | Molar mass | 180.16 g/mol | 116.07 g/mol |
  | Quantified protons | 2 | 2 |
  | Integral | 1.003 | 1.000 |
  | Certified purity | Not known | 99.5% |

  Using the internal-standard equation established above, the purity calculation becomes

  **Purity = (1.003 ÷ 1.000) × (2 ÷ 2) × (180.16 ÷ 116.07) × (9.50 ÷ 15.00) × 0.995**

  **Purity = 0.9811, or 98.11%**

  The proton-count term equals one because both selected signals represent two protons. The near-equal integrals also indicate that the analyte and standard signals have similar intensities, which reduces relative integration error.

  The calculation assumes complete dissolution, accurate weighing, adequate relaxation, and non-overlapping peaks. It also assumes that the spectrum met the previously stated signal-to-noise target and used a sufficiently wide integration window. A validated result would document those conditions and include replicate measurements or another suitable precision assessment.

  ## Where qNMR is used

  qNMR supports purity assignment when the result must connect to SI units through certified standards and mass measurements. The [BIPM describes qNMR](https://www.bipm.org/en/organic-analysis/qnmr) as a potential primary reference measurement procedure and publishes internal-standard reference data for suitable certified materials. Its 2023 IUPAC technical report also sets out methods for assigning SI-traceable purity values to organic compounds.

  | Application | How qNMR is used | Accuracy requirement |
  | --- | --- | --- |
  | Purity determination | Laboratories compare an analyte signal with a certified internal standard to assign mass-fraction purity without a matched analyte standard. | Complete relaxation and accurate integration must preserve the molar signal ratio. |
  | Pharmaceutical QC and reference-standard certification | Analysts assay active ingredients, characterize impurities, and assign values to reference materials used in later tests. | A sufficiently long relaxation delay prevents compounds with different T1 values from producing biased purity results. |
  | Natural products and food authenticity | Analysts quantify compounds such as carminic acid, quercetin, and other chemical markers in complex extracts. Measured concentrations can support label checks and authenticity assessments. | Resolved peaks, adequate signal strength, and complete relaxation allow reliable comparison with the internal standard. |

  Published standards provide a common measurement framework. [ISO 24583](https://www.jeol.com/products/scientific/nmr/qnmr_index.php) specifies general requirements for proton qNMR purity determination of organic compounds used in foods, while Japan’s JIS K 0138 covers quantitative NMR practice. Both standards reinforce the same analytical principle. Reliable applications depend on integrals that accurately represent the number of observed nuclei.

  ## qNMR versus HPLC: a parameter comparison

  qNMR reduces calibration and reference-standard requirements, while HPLC and GC provide chromatographic separation for targeted assays.

  | Parameter | qNMR | HPLC or GC |
  | --- | --- | --- |
  | Calibration requirement | Uses integral ratios without a calibration curve | Requires a calibration curve |
  | Reference standard specificity | Can use an unrelated certified compound | Typically requires a matched analyte standard |
  | Traceability basis | Supports [SI-traceable purity assignment](https://www.bipm.org/en/organic-analysis/qnmr) through a certified internal standard | Relies on the calibration standard and validated method |
  | Typical turnaround | Common laboratory service takes [three to five business days](https://numegalabs.com/quantnmr.html) | Varies by method, calibration work, and laboratory capacity |
  | Typical use case | Absolute purity assignment, reference-standard certification, and natural-product quantification | Targeted assays and separation of mixture components |

  ## Where AI changes the qNMR workflow

  AI can shorten qNMR turnaround by automating spectral interpretation after sample preparation and acquisition. At [Rombo AI](https://rombo.ai), we can reduce turnaround measured in weeks to about 15 minutes. Our model identifies analyte and internal-standard peaks, checks integrations, and applies the purity calculation faster than manual peak picking.

  At Rombo AI, we pre-train our foundation model on millions of spectra. Broad pretraining helps the model interpret new sample types and instrument data with less application-specific calibration than traditional chemometric models. Faster interpretation can improve consistency, but AI cannot correct poor weighing, incomplete relaxation, low signal-to-noise ratio, or unsuitable reference peaks.

  Regulatory-grade qNMR still requires a certified internal standard and documented acquisition parameters. The calculation must preserve SI-traceable mass ratios, known proton counts, and validated integration rules. You must also retain spectra and processing records for review.

  Bruker and Mestrelab support qNMR acquisition and processing through instrument and software workflows that often rely on expert parameter selection and manual review. At Rombo AI, we add model-based interpretation to those established measurement principles rather than replacing them.

  ## FAQs

  ### Why doesn’t qNMR need a matched reference standard?

  qNMR compares integrated signals according to the number of contributing nuclei. At Rombo AI, we apply this ratio principle without requiring the standard to match the analyte. You can quantify compounds that lack dedicated reference materials.

  ### What internal standards are commonly used?

  Common standards include maleic acid, dimethyl sulfone, and ethylene carbonate. With Rombo AI, you still need a stable, certified standard with a resolved signal. Proper selection supports traceable purity calculations.

  ### What happens if relaxation delay is too short?

  A short delay suppresses signals from slower-relaxing nuclei. Even with Rombo AI, we cannot correct an integral whose acquisition parameters caused unknown saturation. Adequate delay keeps signal ratios proportional to nucleus counts.

  ### Is qNMR accepted for pharmaceutical regulatory submissions?

  Validated qNMR can support pharmaceutical purity and reference-standard data, subject to the relevant authority’s requirements. Using Rombo AI still requires documented acquisition, calculation, and review controls. This approach can shorten analysis time while maintaining an auditable method.

  ### How does qNMR differ from an HPLC purity assay?

  qNMR measures nucleus-count ratios, while HPLC usually compares detector response against calibration standards. Rombo AI uses our models to interpret spectra rather than chromatographic peak responses. qNMR can determine absolute purity without a matched analyte standard.
---

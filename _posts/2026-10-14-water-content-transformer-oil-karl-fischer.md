---
title: 'How to Measure Water Content in Transformer Oil: Karl Fischer (IEC 60814) and Faster Alternatives'
seo_title: 'Water Content in Transformer Oil: Karl Fischer and Alternatives | Rombo AI'
date: 2026-10-14T06:00:00.000Z
permalink: /blog/water-content-transformer-oil-karl-fischer
layout: article
author: 'Martina [Marketing Specialist, Rombo AI]'
image: /img/blog/water-content-transformer-oil-methods.jpg
image_alt: 'Schematic of a transformer with three measurement points: an oil sample for coulometric Karl Fischer titration, a capacitive probe in the oil reporting relative saturation, and a dielectric response test estimating water in paper and pressboard.'
image_width: 1600
image_height: 900
image_caption: 'Three ways to look at water in a transformer. Original schematic by Rombo AI; simplified, positions are illustrative.'
excerpt: How coulometric Karl Fischer titration (IEC 60814, ASTM D1533) measures water in transformer oil, why results scatter, and what online moisture sensors and dielectric response tests report instead.
markdown_content: |-
  ## TL;DR

  - **Coulometric Karl Fischer titration is the reference method for water in insulating oil.** IEC 60814 and ASTM D1533 describe it; it reports an absolute concentration in mg/kg (ppm by weight).
  - **Sampling and handling are major error sources.** Humid weather, wet bottles and long transport can add water; a published round robin found poor agreement between laboratories on dry oils.
  - **A ppm value is not a risk level on its own.** The same 40 ppm can mean very different relative saturation in new and aged oil, and therefore different dielectric behavior.
  - **Faster methods answer different questions.** Online capacitive sensors report relative saturation continuously; dielectric response tests estimate water in the paper. Neither is a drop-in replacement for Karl Fischer.
  - **Any new or model-based method should be validated against IEC 60814 results** on paired samples, with the acceptance criteria agreed in advance.

  Water is one of the transformer oil properties that utility labs track most routinely. The titration itself is mature and sensitive. The difficulty is everything around it: getting a representative sample to the lab, choosing the right Karl Fischer variant, and interpreting a number that depends on temperature and on the age of the oil.

  ## Why water in transformer oil matters

  Water degrades the electrical properties of an insulating liquid. ASTM D1533 notes that excessive water can make a liquid unsuitable for some applications because it lowers properties such as [dielectric breakdown voltage](https://store.astm.org/d1533-20.html). Laboratory work on transformer oil shows the same direction: [breakdown voltage and resistivity rise as water content falls](https://doi.org/10.3390/en14082089).

  The oil is only part of the picture. Water is shared between the oil and the cellulose insulation (paper and pressboard), and it moves between them as the transformer heats and cools. Oil moisture is therefore a window on the solid insulation, not a direct measurement of it. Researchers at the University of Stuttgart found that estimating paper moisture from oil moisture with [equilibrium diagrams not adapted to the material and its aging state](https://www.ieh.uni-stuttgart.de/dokumente/publikationen/2009_Cigre_Koch_Comparing_Various_Moisture_Determinations.pdf) gives unreliable results, partly because equilibrium is rarely reached in service.

  ## The reference method: coulometric Karl Fischer

  **What it measures.** IEC 60814 (*Insulating liquids – Oil-impregnated paper and pressboard – Determination of water by automatic coulometric Karl Fischer titration*) and ASTM D1533 cover the same principle. Iodine is generated electrochemically and reacts with water in the sample; the charge needed to reach the endpoint gives the amount of water. ASTM D1533 cites a typical detection limit of about 10 µg of water and applies to oil below 100% relative saturation.

  **Direct injection or oven.** In direct injection, the oil goes straight into the titration cell. In the oven (evaporation) variant, the sample is heated and the released water is carried into the cell by a dry gas. The oven keeps the matrix out of the cell, which is why it is common for petroleum products with [interfering additives](https://www.metrohm.com/content/metrohm/en/applications/application-notes/aa-k-001-100/an-k-070.download.pdf) and necessary for paper and pressboard.

  For transformer oil the choice matters. In a study by [Koch, Tenbohlen, Blennow and Höhlein](https://www.ieh.uni-stuttgart.de/dokumente/publikationen/2007_ISH_Koch_Uni_Stuttgart_KFT.web.pdf) (ISH 2007), coulometric titration with direct injection gave the most reliable results for oil. The oven method gave the lowest values on new oil and was not recommended for aged oil, where persistent drift suggested side reactions with aging products.

  **Where results scatter.** The same study ran a round robin with eight laboratories from four European countries. Agreement on oil was reasonable only for the wet sample. For dry oils, a standard deviation of 20% within a single laboratory was not unusual. The authors also point to the sample itself: moisture can enter in humid weather, from bottles that are not dry, and during long transport. They advise testing within about one week, depending on how tight the container is.

  Temperature is the last piece. A thesis on [moisture diagnosis in transformer insulation](https://research.chalmers.se/en/publication/9851) (Chalmers, 2006) found that oil-based and dielectric estimates agreed when the correct temperature, the transformer's service temperature, was used for the Karl Fischer results. Record the oil temperature at sampling with every Karl Fischer result. It is the same principle we described for [crude oil sampling in refineries](/blog/crude-oil-analysis-refinery-process-economics): a precise measurement cannot correct an unrepresentative sample.

  ## Faster alternatives and what each one reports

  | Method | What it reports | Where and when | Strengths | Limits |
  | --- | --- | --- | --- | --- |
  | Coulometric KF, direct injection (IEC 60814, ASTM D1533) | Water in oil, mg/kg (absolute) | Lab, on a periodic sample | Reference method; high sensitivity | Sampling and transport errors; scatter on dry oils; a snapshot at one temperature |
  | KF with oven evaporation | Water in oil or in solids, mg/kg or % | Lab | Keeps interfering matrices out of the cell; needed for paper | Not recommended for aged oil (Koch et al.); result depends on oven temperature |
  | Online capacitive sensor | Relative saturation, or water activity from 0 to 1 | On the transformer, continuous | Trends and temperature cycles without sampling | ppm needs oil-specific solubility coefficients; not directly comparable with KF ppm |
  | Dielectric response (FDS, PDC) | Estimated water in paper and pressboard, % | Test set on the windings, typically during an outage | Targets the solid insulation directly | Model-based; oil conductivity affects interpretation |

  **Online capacitive sensors** use a thin polymer film whose capacitance changes with water activity. They report how close the oil is to saturation, on a scale from 0 (dry) to 1 (saturated). One vendor specifies an accuracy of [up to ±0.01 water activity](https://www.vaisala.com/sites/default/files/documents/VIM-G-POW-Moisture-in-oil-Technical-descption-B211231EN-B-LOW.pdf). Converting the reading to ppm requires solubility coefficients for the specific oil, which sensor vendors publish for [common mineral transformer oils](https://docs.vaisala.com/r/M212022EN-K/en-US/GUID-305BC98E-3A62-4454-B225-3CCCC9C16266/GUID-C7D8B2BA-1E67-4152-AF53-593B5BF75F7A/GUID-80023545-60D1-4E4D-A1E4-15DE02B4B05D). CIGRE Working Group D1.52 examined the limits and uncertainty of that conversion in [Technical Brochure 741](https://e-cigre.org/publication/741-moisture-measurement-and-assessment-in-transformer-insulation-evaluation-of-chemical-methods-and-moisture-capacitive-sensors-2) (2018). It also reported that plotting relative saturation against temperature is an effective way to indicate how wet the insulation is.

  **Dielectric response** methods (frequency domain spectroscopy, FDS, and polarization and depolarization currents, PDC) estimate water in the solid insulation from its electrical response. Koch and colleagues reported that conductive aging products in the oil can shift the estimate unless the analysis compensates for them.

  ## Worked example: same ppm, different risk

  Koch et al. give a clear illustration. In new oil at 40 °C, 40 ppm of water corresponds to a relative saturation of 33%, and the expected breakdown voltage in their example is 58 kV. In aged oil, the same 40 ppm corresponds to only 16% relative saturation, and the breakdown voltage is unexpectedly high at 69 kV.

  Water solubility changes as oil ages. In this example the aged oil could hold more dissolved water, so the same absolute concentration sat further from saturation. Two practical consequences follow:

  1. **Compare Karl Fischer results like with like.** Trend the same transformer, at a recorded sampling temperature, rather than comparing ppm values across units with oils of very different age.
  2. **Do not expect a sensor's ppm output to match the lab exactly.** The difference may come from the solubility coefficients, not from either instrument being wrong.

  ## A short checklist for the oil lab

  - Sample in dry weather, into dry bottles, and record oil temperature and sampling point.
  - Test within a week; note the elapsed time on the report.
  - Use direct-injection coulometric KF for oil; reserve the oven for matrices that need it, and state which variant you used.
  - Run duplicates on dry oils, where relative scatter is highest.
  - Interpret results with the maintenance guidance your organization follows, such as [IEC 60422:2024](https://online.standard.no/en/iec-60422-2024-ed5), and with the trend for that unit.

  ## Where NMR-based property models fit

  Rombo AI builds property models on benchtop NMR spectra and benchmarks each property against the customer's reference method. Our [foundation model](/blog/rose_foundation_model_NMR_spectral_data) is pre-trained on NMR spectra and is designed to need fewer reference samples per property than a model trained from scratch.

  For water, the reference stays IEC 60814. Trace water in dry oil is a demanding target for any indirect method, so we treat it as a question to answer with your data, not as an assumption. The useful starting point is the same discipline described above: paired samples, a documented sampling temperature, duplicate Karl Fischer analyses, and acceptance metrics agreed before a pilot begins. NMR signals are quantitative when acquisition is controlled, as our guide to [qNMR purity, calibration and accuracy](/blog/quantitative-nmr-qnmr-purity-calibration-accuracy) explains. Predicting a property such as water from a spectrum is a further step, and that step is what a validation has to test.

  The [transformer oil monitoring use case](/use-cases/transformer-oil-monitoring/) summarizes how an oil-condition workflow can be structured. To test it on your own samples and reference methods, start with a [feasibility review](/nmr-feasibility/).

  ## FAQ

  ### What is a normal water content for transformer oil?
  It depends on the equipment, its voltage class and the oil temperature at sampling. Use the maintenance guidance your organization applies, such as IEC 60422, and judge each result against the trend for that transformer.

  ### Can an online moisture sensor replace Karl Fischer titration?
  Not directly. A sensor reports relative saturation continuously, while Karl Fischer gives an absolute concentration on a sample. They are complementary: the sensor shows behavior over temperature cycles, the titration anchors the absolute value.

  ### Can NMR measure water in transformer oil?
  Not as a replacement for IEC 60814 at the low levels found in dry oil. Whether an NMR-based model can predict water reliably for a given oil and range must be shown on paired samples against Karl Fischer results.
---

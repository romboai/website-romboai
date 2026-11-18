---
title: "Transformer Oil Breakdown Voltage: What IEC 60156 and ASTM D1816 Tell You, and What They Don't"
seo_title: 'Transformer Oil Breakdown Voltage: IEC 60156 vs ASTM D1816 | Rombo AI'
date: 2026-11-18T06:00:00.000Z
last_modified_at: 2026-11-18T06:00:00.000Z
permalink: /blog/transformer-oil-breakdown-voltage
layout: article
author: 'Martina [Marketing Specialist, Rombo AI]'
image: /img/blog/transformer-oil-breakdown-voltage-methods.jpg
image_alt: 'Schematic comparison of three breakdown voltage test cells for insulating oil. IEC 60156: spherical or spherical-segment electrodes, 2.5 mm gap, voltage rising at 2 kV per second, stirring recommended, mean of six breakdowns. ASTM D1816: VDE electrodes, 1 or 2 mm gap, 0.5 kV per second, stirred cell. ASTM D877: flat disk electrodes, 2.54 mm gap, 3 kV per second, no stirring.'
image_width: 1600
image_height: 900
image_caption: 'Three breakdown voltage methods, three test geometries. Original schematic by Rombo AI; not to scale. ASTM D877 values as reported by an instrument maker and a transformer service company.'
excerpt: 'What the transformer oil breakdown voltage test measures, how IEC 60156, ASTM D1816 and ASTM D877 differ, what moves the result, and why a high value does not prove the oil is healthy.'
markdown_content: |-
  ## TL;DR

  - **Breakdown voltage is a contamination test.** It shows whether water, fibres or particles lower the oil's ability to withstand AC stress between two electrodes. It says little about oxidation or ageing.
  - **The number belongs to its method.** IEC 60156 and ASTM D1816 use different electrodes, gaps and voltage ramps, so their results are not interchangeable. ASTM D877 is less sensitive to water and is not recommended for filtered and degassed oil.
  - **Water acts through relative saturation, not ppm,** and its effect is much stronger when particles are present.
  - **A high breakdown voltage does not prove the oil is clean or healthy.** Read it with water, particles, acidity and interfacial tension.
  - **Any faster or model-based method complements the electrical test.** It does not replace it, and it has to be validated against the reference methods for the properties it predicts.

  Breakdown voltage (BDV) is one of the most common tests on insulating oil. Laboratories run it when new oil is delivered, after drying and filtration, before a transformer is energised, and as part of routine condition monitoring. It is quick and the result is a single number in kV, which makes it easy to misread. This note explains what the test measures, how the main methods differ and what a result can and cannot tell you. For the wider panel of transformer oil tests, see our [transformer oil testing guide](/blog/transformer-oil-testing-properties-methods-nmr).

  ## What the test measures

  A sample is poured into a test cell with two electrodes at a fixed gap. An AC voltage at power frequency rises at a constant rate until the oil breaks down and an arc forms. The test is repeated on the same filling and the results are averaged.

  Clean, dry oil withstands a high field. Water, cellulose fibres and conducting particles in the gap make it fail earlier. [ASTM D1816](https://store.astm.org/d1816-12r19.html) states both sides of this clearly: a low value can indicate water, dirt, fibres or conducting particles, while a high value does not mean the oil is free of contaminants. It also limits comparisons of field results to samples tested at 20–30 °C.

  ## IEC 60156, ASTM D1816 and ASTM D877 compared

  | Parameter | IEC 60156:2025 | ASTM D1816-12(2019) | ASTM D877/D877M-19e1 |
  | --- | --- | --- | --- |
  | Electrodes | Spherical or spherical-segment | VDE, spherically capped | Flat disks |
  | Gap | 2.5 mm | 1 mm or 2 mm | 2.54 mm |
  | Voltage rise | 2.0 kV/s | 0.5 kV/s | 3 kV/s |
  | Stirring | Recommended | Required (impeller in the cell) | No |
  | Result | Mean of 6 breakdowns per filling, with standard deviation and coefficient of variation | Average of a series of breakdowns | Average of a series of breakdowns |
  | Typical use | Acceptance and condition monitoring of insulating liquids | Sensitive to dissolved water and fibres; recommended for filtered and degassed oils | In-service oils; not recommended for oil that is vacuum-treated and filtered before service |

  **IEC 60156.** The [2025 edition](https://webstore.iec.ch/en/publication/66317) (edition 4.0) covers insulating liquids up to 350 mm²/s at 40 °C, both for acceptance and for condition monitoring. Its foreword states that the test method itself was kept unchanged. The first voltage is applied about five minutes after filling, breakdowns are at least two minutes apart, and the report gives the mean, the standard deviation and the coefficient of variation. The standard also notes that different electrode shapes give different results, so the shape belongs on the report.

  **ASTM D1816.** The VDE electrodes, the narrow gap, the slow ramp and continuous stirring make this method sensitive to dissolved water, especially in combination with cellulose fibres. If the oil does not break down at 2 mm, the 1 mm gap is used.

  **ASTM D877.** The [ASTM scope](https://store.astm.org/d0877_d0877m-19e01.html) says its sensitivity to water drops below 60% saturation and that it is not recommended for liquids that are vacuum-treated and filtered before service; ASTM D1816 is named for those. The disk geometry and the 3 kV/s ramp are reported by [SDMyers](https://transformer-technology.com/article-hub/6-things-every-transformer-owner-should-know-about-dielectric-breakdown-voltage/), a transformer service company.

  Gap, ramp, electrode shape and stirring all change the result, so there is no fixed factor to convert one method into another. Trend each transformer with one method and state the method and gap on every report.

  ## What moves the result

  **Water, as relative saturation.** Breakdown voltage follows how close the oil is to saturation, not the absolute water content. A [Vaisala white paper](https://cdn-documents.yodify.com/documents/Vaisala/Hand-Held-Moisture-and-Temperature-Meter-for-Spot-Checking-in-Oil-MM70/White-Paper/CEN-TIA-power-whitepaper-Moisture-and-Breakdown-Voltage-B211282EN-A-LOW.pdf) shows that curves for different oils line up when water is expressed as relative saturation. In laboratory tests at the University of Stuttgart, [Koch, Fischer and Tenbohlen](https://www.ieh.uni-stuttgart.de/dokumente/publikationen/2007_Aptadm_Koch_Oil_Breakdown.Paper.web.pdf) measured a drop from about 72 kV to about 61 kV between dry oil and 20% relative saturation. Our [application note on water in transformer oil](/blog/water-content-transformer-oil-karl-fischer) shows why the same 40 ppm can mean very different saturation in new and aged oil.

  **Particles together with water.** In a study published in IEEE Transactions on Power Apparatus and Systems, [Miners](https://doi.org/10.1109/TPAS.1982.317291) found that raising water from 5 to 20 ppm cut the ASTM D1816 breakdown voltage by about 25%. Iron, copper or cellulose particles lowered it further, and particles combined with moisture gave very low values. Dry cellulose fibres alone had little effect in the Stuttgart tests.

  **Temperature.** Relative saturation changes with temperature, so the same oil tested warm or cold can give different values. Record the sample temperature with every result.

  **The sample itself.** [IEC 60475:2022](https://webstore.iec.ch/publication/66495) sets out how to sample insulating liquids: clean, dry equipment, protection from light and from rain or fog, and letting the container reach room temperature before opening it. A wet bottle can fail a good oil. The same logic applies to crude oil, where [the middle of a tank is not the tank](/blog/crude-oil-tank-stratification): a precise test cannot correct an unrepresentative sample.

  **Statistics.** Individual breakdowns scatter, and the scatter is larger at low values. Reading the IEC guidance, [Gurin and Grisaru](https://hrcak.srce.hr/file/464340) put the expected coefficient of variation at about 20% near 40 kV and under 7.5% above about 90 kV. A filling with unusually high scatter is a reason to test a fresh filling.

  ## What a breakdown voltage result does not tell you

  **It is not an ageing indicator.** [Doble](https://www.doble.com/assessing-transformer-condition-part-3/) assesses oil ageing with power factor, colour, interfacial tension and acidity, not with breakdown voltage. One caveat: low-molecular-weight acids such as formic acid did lower breakdown voltage sharply in the Stuttgart tests, so ageing products are not invisible, only poorly read by this test.

  **It does not see faults or the paper directly.** Gas from a developing fault needs dissolved gas analysis. Moisture in the paper is inferred from oil water content and temperature, or from dielectric response measurements.

  **Limits depend on the oil and the equipment.** For new mineral oil, IEC 60296:2020 requires at least 30 kV as delivered and at least 70 kV after laboratory treatment, as [summarised in Transformers Magazine](https://hrcak.srce.hr/file/363648). For oil in service, [IEC 60422:2024](https://webstore.iec.ch/en/publication/66421) gives good, fair and poor ranges by equipment category. Read the limits from the edition your organisation applies rather than from a generic table.

  ## From result to next check

  | What you see | What it can mean | Next check |
  | --- | --- | --- |
  | Low BDV, water higher than last sample | Wet oil, or a wet sample | Sampling temperature and container; Karl Fischer (IEC 60814) and relative saturation; resample |
  | Low BDV, water unchanged | Particles, fibres or conducting contamination | Particle count (IEC 60970); filtration; condition of the sampling point |
  | Low BDV with high scatter between breakdowns | Uneven contamination, bubbles or handling | Fresh filling after the specified standing time |
  | High BDV, acidity rising and interfacial tension falling | Clean but ageing oil | Trend acidity (IEC 62021) and interfacial tension; check inhibitor content |
  | Values jump between laboratories | Different method, gap or temperature | Confirm method, electrodes, gap and sample temperature on both reports |

  ## Where an NMR-based property panel fits

  Breakdown voltage is an electrical property of the oil and its contaminants in a defined gap. It stays with the electrical test.

  Rombo AI Platform is designed to estimate several properties from one benchtop NMR scan and to flag samples that move away from their own history. For transformer oil, published evidence on NMR is still limited, so we treat each property as a hypothesis until it passes validation on paired samples against the IEC or ASTM method, with acceptance metrics agreed in advance. Our guide to [validating a spectroscopic property model against ASTM methods](/blog/validating-spectroscopic-property-model-astm-reference-methods) describes that process. The plausible role is screening the chemistry around the electrical test, such as ageing indicators, so that the next sample or the next action is chosen sooner.

  The [transformer oil monitoring use case](/use-cases/transformer-oil-monitoring/) shows how such a workflow can be structured. To test it on your own oils and reference methods, start with a [feasibility review](/nmr-feasibility/). To receive new guides like this one, subscribe to the Rombo AI newsletter at the bottom of this page.

  ## FAQ

  ### What is a good breakdown voltage for transformer oil?
  It depends on the method, the gap, whether the oil is new or in service, and the equipment category. For new oil, IEC 60296:2020 sets minimum values as delivered and after treatment; for oil in service, IEC 60422 gives ranges by category. Compare each result with the trend for that unit.

  ### Why do IEC 60156 and ASTM D1816 give different values for the same oil?
  The electrodes, gap, voltage ramp and stirring differ, and each changes how contaminants reach the gap. A value is meaningful only together with the method that produced it.

  ### Can a high breakdown voltage hide a problem?
  Yes. A clean but oxidised oil can pass the test while acidity rises and interfacial tension falls. ASTM D1816 itself states that a high value does not prove the absence of contaminants.
---

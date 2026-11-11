---
title: 'Crude Oil Tank Stratification: Why It Happens, How to Detect It and What It Means for the CDU'
seo_title: 'Crude Oil Tank Stratification | Rombo AI'
date: 2026-11-11T06:00:00.000Z
last_modified_at: 2026-11-11T06:00:00.000Z
permalink: /blog/crude-oil-tank-stratification
layout: article
author: 'Martina [Marketing Specialist, Rombo AI]'
image: /img/blog/crude-oil-tank-stratification-levels.jpg
image_alt: 'Left: a crude oil storage tank shaded from light crude at the top to heavier crude at the bottom, with settled sediment and water on the floor and three spot-sampling points at the upper, middle and lower levels. Right: illustrative density profiles by height. After receipt, density changes sharply with height; after partial mixing the change is smaller; a mixed tank has the same density at every level.'
image_width: 1600
image_height: 900
image_caption: 'Illustrative profile after a lighter crude is received on top of a heavier one. Values are examples, not measurements. Original diagram by Rombo AI.'
excerpt: 'Why a crude tank can stop being one sample, how stratification differs from incompatibility and sediment, the tools refineries use to find it, and what to check before a transfer.'
markdown_content: |-
  A crude oil tank is usually treated as one sample. After two crudes of different density are received into it, it can hold several: lighter crude above, heavier crude below and a transition zone that changes as the tank is mixed or drawn down. The crude distillation unit (CDU) then sees the tank one layer at a time, and if the two crudes are also incompatible, mixing them can precipitate asphaltenes. This guide covers the causes, the tools refineries use today and where each stops, and what to check before a transfer.

  *Last reviewed: 11 November 2026.*

  ## TL;DR

  - **Three problems look alike in a crude tank.** Physical stratification of miscible crudes, chemical incompatibility of the blend and settling of sediment and water have different causes and need different tests.
  - **Density difference alone does not decide stratification.** Viscosity, temperature, filling rate, inlet position, tank geometry, the heel already in the tank and mixing all shape how long a tank stays layered.
  - **One sample can miss it.** ASTM D4057 / API MPMS Chapter 8.1 define upper, middle and lower spot samples; a spot sample represents one point, and a composite averages the layers together.
  - **Current tools each answer part of the question:** mixers, multi-level sampling, density profiling by tank gauges and stability tests such as ASTM D7157, D7112 and D8253, which do not always agree.
  - **Five questions decide a transfer,** and most need lab data on each crude and each level of the tank.
  - **Rombo AI uses benchtop NMR to report several properties per level from one scan each**, so a layered tank shows up before the transfer; compatibility screening from the same spectrum is still being validated.

  ## What is crude oil tank stratification?

  Stratification is a change in composition and properties with height in a tank. It typically follows a receipt: a lighter crude pumped onto a heavier heel, or a heavier crude onto a lighter one, without enough mixing to even them out.

  Two crude oils are miscible: unlike oil and water, they are not two phases, so diffusion, filling turbulence and mixers eventually make the tank uniform. The question is how long that takes. In a [2004 study](https://doi.org/10.1016/j.petrol.2004.01.003), Dakhel and Rahimi used computational fluid dynamics to predict the homogenization time of two crude layers from different reservoirs in a 19,000 m³ floating-roof tank with a side-entry mixer, and found good agreement with density measured over time at three sampling points. In a modelling example published by [Reliance Technology Group](https://digitalrefining.com/article/1001188/mixing-in-large-crude-tanks), a mixing services company, a large tank with heavy crude under light crude needed about 18 hours with three mixers and about 11 hours with six to bring the top-to-bottom density difference below 1 kg/m³. That is one modelled tank, not a rule, but "mixed" is clearly measured in hours.

  ### Why it matters for the CDU

  A layered tank feeds the unit one layer after another, so feed density, sulfur and light-ends content change during the run. In an [AFPM question-and-answer session](https://afpm.org/data-reports/technical-papers/qa-search/question-56-current-domestic-conventional-and) on processing different crudes, one panelist noted that stratification can cause variation in blend component concentrations. In practice that means preheat duty that shifts during the draw, desalter conditions set for a feed that has already changed and cut points that drift.

  Incompatible crudes make it worse. Precipitated asphaltenes can stabilize emulsions and upset the desalter, as [Baker Petrolite authors described in Oil & Gas Journal](https://www.ogj.com/home/article/17233005/new-method-prevents-desalter-upsets-from-blending-incompatible-crudes); blends close to the compatibility limit [foul heat exchangers](https://doi.org/10.1021/ef010063i), and [Rogel and co-authors](https://doi.org/10.1021/acs.energyfuels.8b02030) identify blend compatibility as the primary driver of the fouling they measured. In the same AFPM session, a refiner described a heavy crude received on top of a light paraffinic crude that left several feet of precipitate in the tank bottom. Our overview of [why crude oil analysis matters at every stage of the refinery](/blog/crude-oil-analysis-refinery-process-economics) shows where the tank sits among the other sampling points.

  ## Three problems that look alike

  "Stratification" is often used for three different things. Separating them decides which test to run and which fix will work.

  1. **Physical stratification.** Two miscible crudes sit in layers because of differences in density and viscosity. It is transient: time and mixing remove it. The risk is a feed that changes during the draw.
  2. **Chemical incompatibility.** The blend can no longer keep the asphaltenes of one of its crudes in solution. In the [oil compatibility model of Wiehe and Kennedy](https://doi.org/10.1021/ef990133%2B), each oil has a solubility blending number (S<sub>BN</sub>) and an insolubility number (I<sub>N</sub>), from titrations with toluene and n-heptane. The blend's S<sub>BN</sub> is the volume average of its components and must stay above the highest I<sub>N</sub> of any component. A tank passes through intermediate proportions as it fills, so the [order of addition matters](https://patents.google.com/patent/US5871634). Mixing does not cure incompatibility; it can trigger it.
  3. **Sedimentation.** Mineral solids, water and asphaltene aggregates settle to the floor as sludge. Stokes' law, v = (ρ<sub>p</sub> − ρ<sub>f</sub>) g d² / (18 μ), gives a first estimate of settling velocity: it grows with the square of particle diameter and falls as viscosity rises. It assumes dilute, spherical particles in laminar flow, so in real crude it is a starting point only; water and emulsions need multiphase models.

  A tank can be well mixed and still incompatible, or compatible and still layered. Each problem needs its own model and its own test.

  ## What decides whether a tank stratifies

  A density difference between the two crudes is necessary but not sufficient. These variables decide how strong the layering is and how long it lasts:

  - **Density and viscosity of each crude.** A viscous heel resists mixing; a large density difference resists exchange between layers.
  - **Temperatures.** A warm, light crude received on top of a cooler, heavy one reinforces the layering.
  - **Filling rate, inlet velocity and inlet position.** A fast fill through a low inlet mixes; a slow fill lays the new crude down gently.
  - **Tank geometry and starting level.** A small heel under a large receipt behaves differently from the reverse.
  - **Mixers, recirculation and residence time** before the tank is drawn.

  What summarizes all of this is the vertical density profile over time: density at the bottom, middle and top, hour by hour after the receipt. A lab cannot predict that profile from the fluids alone; tank geometry, levels, flow rates, temperatures and mixer operation are needed too.

  The fluid data still matter: density and viscosity at several temperatures, water and sediment, and asphaltene content at minimum. Blends are worth testing at several ratios, for example 90/10, 50/50 and 10/90, because viscosity does not blend linearly and compatibility depends on the proportion. Static tests (the blend at rest) and dynamic tests (a controlled transfer) answer different questions, and neither reproduces a large tank on its own.

  ## How refineries find and manage it today

  Refineries already have a tool for each part of the problem. Each does something well and stops somewhere.

  | Approach | What it tells you | Where it stops |
  | --- | --- | --- |
  | Side-entry mixers, jet mixing, recirculation | Homogenizes the tank and keeps BS&W off the floor ([AIChE paper](https://www.aiche.org/conferences/aiche-annual-meeting/2017/proceeding/paper/298c-effective-homogenization-stratified-liquids-using-side-entry-mixing); vendors such as [SPX FLOW](https://www.spxflow.com/assets/pdf/philadelphia-mixing-solutions-bser-og-se-mixer-us-0522.pdf) describe re-suspending sludge) | Does not tell you when the tank is ready; time to homogeneity depends on the tank and the crudes; cannot fix an incompatible blend |
  | Multi-level spot sampling (ASTM D4057 / API MPMS 8.1) and lab analysis | Properties at the upper, middle and lower levels | Three samples triple the lab work for each property; a composite averages the layers away |
  | Density profiling by servo tank gauges | Density at many heights in place, for example up to 50 points on the [Endress+Hauser Proservo NMS83](https://bdih-download.endress.com/files/DLA/005056A500261EDFB0FCDD33EC568A19/TI01250GEN_0824-00.pdf); also offered on the [Honeywell Enraf Servo 954](https://process.honeywell.com/us/en/products/terminals/enraf-tank-gauging/enraf-servo-954) | Density only: shows layering, not sulfur, asphaltenes or stability |
  | Asphaltene stability and compatibility tests | Whether the asphaltenes stay in solution, for each oil and blend tested | Lab time per blend and ratio; methods can disagree; nothing about tank physics |
  | Supplier screening programs and online NIR at the blend header | Process-chemical suppliers offer blend screening (one [method](https://www.ogj.com/home/article/17233005/new-method-prevents-desalter-upsets-from-blending-incompatible-crudes) targets desalter upsets); online NIR is marketed for [crude characterization in blending](https://www.controlglobal.com/industrynews/2017/emerson-topnir-blend-solution-characterizes-crude) | They see the stream or the samples sent to them, not the layers in a tank; the NIR material we found does not cover stability |

  **Sampling by level is defined by standard.** [ASTM D4057](https://store.astm.org/d4057-22.html), jointly designated API MPMS Chapter 8.1, defines upper, middle and lower spot samples (the middle of the upper third, half depth and the middle of the lower third), plus all-levels and running samples and tank composites, and notes that a spot sample represents only one point in the tank. Analysing the levels separately, not only as a composite, is what makes a gradient visible.

  **Stability tests are standardized, but not interchangeable.** [ASTM D7157](https://store.astm.org/d7157-23.html) reports the intrinsic stability of residues, heavy fuel oils and crude oils as an S-value, by n-heptane phase separation with optical detection, for samples with at least 0.5% asphaltenes by mass. [ASTM D7112](https://store.astm.org/d7112-24.html) determines stability and compatibility of heavy fuel oils and crude oils with an optical stability analyzer. [ASTM D8253](https://store.astm.org/d8253-21.html) measures asphaltene solvency properties by microscopy, as inputs for stability, blending compatibility and fouling. The P-value of [ASTM D7060](https://store.astm.org/d7060-20.html) and the spot test of [ASTM D4740](https://store.astm.org/d4740-24.html) are written for residual and heavy fuel oils. On Mexican crudes from 10 to 52 °API, [Guzmán and co-authors](https://doi.org/10.1021/acs.energyfuels.0c03301) found that SARA-based indexes and experimental tests did not agree uniformly; they recommend several methods, and care with any crude that one of them flags.

  ## Five questions before a transfer

  Before a new crude goes into a tank, or a tank goes to the unit, five questions decide the plan:

  1. **Can the new crude go into this tank with what is already there?** That is a compatibility question, at every ratio the tank will pass through, heel included.
  2. **How likely is layering, and how strong?** Density, viscosity, temperatures, fill rate and inlet position answer it.
  3. **How long until the tank is uniform enough to feed?** That depends on mixing and on the acceptance criterion, for example a maximum top-to-bottom density difference.
  4. **What could go wrong in the first hours of the draw?** Feed swings, desalter upsets, fouling.
  5. **Which transfer mode lowers the risk?** Proportions, rate, temperature, order of addition and recirculation.

  The table below links what a multi-level check can show to what it may mean and what to do next.

  | What you see by level | What it may mean | What to do before the transfer |
  | --- | --- | --- |
  | Density differs between levels; other properties match the two crudes received | Physical stratification of compatible crudes | Mix or recirculate, then sample the three levels again against your acceptance criterion; or plan the feed shift if the draw cannot wait |
  | Lower level denser and richer in asphaltenes or sediment than either crude received | Accumulated heel, sludge or precipitated asphaltenes | Check water and sediment, run a stability test on the bottom sample, review the cleaning schedule |
  | Stability result low at one level or at one blend ratio | Possible incompatibility | Confirm with a reference stability test at the real ratios; change ratio or order of addition; do not rely on mixing |
  | Levels agree within the repeatability of the method | Uniform for these properties | Feed, with one check during the draw |

  ## Worked example: three levels, one decision

  *Hypothetical example; all values are illustrative.* A terminal tank holds a heel of a heavier crude. A lighter crude has been received on top through a slow fill, without mixing. The upper, middle and lower spot samples give densities at 15 °C of 848, 864 and 872 kg/m³, the profile shown in the diagram above, and sulfur rises from the upper to the lower sample.

  **Reading.** A 24 kg/m³ difference from top to bottom says the tank is layered. Fed now, the CDU would first receive the heavier, higher-sulfur crude from the bottom and then the lighter one, with the transition somewhere in the run.

  **Before mixing, check compatibility.** Mixing moves the whole tank through intermediate ratios, so a stability test at the final ratio and at the ratios of the transition zone tells you whether it is safe. If the heavier crude's asphaltenes are close to the limit, the answer may be a different order or ratio for the next receipt, not more mixing now.

  **Decide.** If the blend is stable, mix or recirculate, then sample the three levels again until the top-to-bottom difference meets your criterion. If the unit cannot wait, feed the tank and plan for the change in feed during the draw.

  **Count the measurements.** Three levels with density, sulfur and a stability result make nine lab results before any blend test, and a second round after mixing. That workload is one reason multi-level checks are often kept for tanks already suspected of trouble. Our guide to [API gravity, sulfur and TAN in one workflow](/blog/api-gravity-sulfur-tan-crude-oil-one-workflow) looks at the same bottleneck from the lab bench.

  ## Where Rombo AI fits

  Rombo AI builds property models on benchtop NMR spectra of crude oil and applies them to tank stratification and blend compatibility, treated as separate problems.

  - **Characterization and stratification by level.** Each crude received and each level sample is scanned once on a benchtop NMR, and each spectrum feeds several property models. Comparing the levels with one another and with the crudes received shows whether the tank is layered and what each layer contains. Published benchtop work supports the measurement side: [Sassu and co-authors](https://doi.org/10.1002/mrc.5093) predicted API gravity, sulfur, TAN and distillation yields from 60 MHz proton spectra of more than 170 crudes.
  - **Compatibility screening.** A proton spectrum records how hydrogen is split between aromatic and aliphatic environments, which is related to the oil's ability to keep asphaltenes in solution. Low-field NMR has also been used to [probe asphaltene aggregation in native crude oils](https://doi.org/10.1021/la904309k). We treat NMR-based compatibility screening as work in progress: before it informs a decision, it has to be validated on your crudes against your stability tests, such as ASTM D7157, D7112 or titrations.
  - **Pre-transfer prediction.** Combining these data with tank geometry and operating data, to estimate the vertical profile after a receipt and compare transfer options, is under development, with separate models for compatibility, physical separation and sedimentation.

  NMR does not replace the reference methods: each property is benchmarked against your reference method, with acceptance metrics agreed before a pilot, as our guide to [validating a spectroscopic property model](/blog/validating-spectroscopic-property-model-astm-reference-methods) explains. For a stable stream already served by an online analyzer, see our comparison of [NIR and NMR for crude oil](/blog/nir-vs-nmr-crude-oil-analysis).

  If stratified tanks or blend compatibility are recurring questions in your lab, the [crude oil monitoring use case](/use-cases/crude-oil-monitoring/) shows the workflow, and our [feasibility review](/nmr-feasibility/) starts from your crudes, your tanks and your reference tests. To receive new guides like this one, you can subscribe to the Rombo AI newsletter at the bottom of this page.

  ## FAQ

  ### What causes stratification in crude oil storage tanks?
  Receiving a crude of different density and viscosity into a tank without enough mixing. Temperature differences, a slow fill, the inlet position, the heel already in the tank and the absence of mixers make the layering stronger and longer-lasting.

  ### Is stratification the same as crude oil incompatibility?
  No. Stratification is a physical gradient between miscible crudes and disappears with time and mixing. Incompatibility is chemical: the blend cannot keep the asphaltenes in solution, and mixing can make it worse.

  ### How should a stratified tank be sampled?
  With upper, middle and lower spot samples as defined in ASTM D4057 / API MPMS Chapter 8.1, analysed separately rather than only as a composite. Repeat after mixing to confirm the tank is uniform.

  ### Can a mixer fix an incompatible blend?
  No. A mixer removes physical layering, but if the blend cannot keep its asphaltenes in solution, mixing only brings the incompatible proportions together faster. The fix is a different ratio, order of addition or crude.
---

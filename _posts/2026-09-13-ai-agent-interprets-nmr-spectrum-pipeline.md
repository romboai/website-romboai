---
title: 'How an AI Agent Interprets an NMR Spectrum: A Step-by-Step Pipeline'
seo_title: 'AI Agent NMR Identification Pipeline | Rombo AI'
date: 2026-09-13T01:00:00.000Z
permalink: /blog/ai-agent-interprets-nmr-spectrum-pipeline
layout: article
image: /img/blog/ai-agent-nmr-spectrum-pipeline.jpg
image_alt: NMR laboratory with spectrometers and computer workstations used for spectral analysis
image_caption: 'Nuclear magnetic resonance laboratory. Image: <a href="https://commons.wikimedia.org/wiki/File:Nuclear_Magnetic_Resonance_Laboratory.jpg" rel="noopener noreferrer" target="_blank">Shandchem, via Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by/2.0/" rel="license noopener noreferrer" target="_blank">CC BY 2.0</a>. Cropped by Rombo AI.'
author: 'Martina [Marketing Specialist, Rombo AI]'
excerpt: Follow an auditable AI-agent pipeline for NMR compound identification, from data-quality checks and preprocessing to candidate ranking, contradiction testing, and expert review.
markdown_content: |-
  ## TL;DR

  - **An NMR agent should begin with the analytical question, not a structure guess.** The objective determines which evidence is relevant, which tools are allowed, and what level of confidence is sufficient.
  - **Raw data and metadata are evidence.** Before interpretation, the workflow should verify sample identity, nucleus, field strength, solvent, reference, acquisition parameters, and data integrity.
  - **Processing must be reversible and traceable.** Every correction, peak-picking threshold, excluded region, and software version should remain linked to the untouched acquisition.
  - **Candidate generation is only the midpoint.** A useful agent ranks alternatives, searches for contradictions, chooses the next informative action, and records why a candidate survived or failed.
  - **The right outcome may be escalation.** Overlap, impurities, missing metadata, weak signal-to-noise, or insufficient experiments can make “request more evidence” more defensible than a confident identification.

  An AI agent for NMR compound identification is best understood as a controlled analytical loop. It observes the available evidence, selects an approved operation, evaluates the result, updates its hypotheses, and either continues, stops, or sends the case to a spectroscopist. This is different from asking a model for a one-shot molecular answer.

  The pipeline below is a reference architecture, not a claim that every implementation supports every instrument, file format, experiment, or action. The exact tools and review gates must match the laboratory’s intended use and validation plan.

  ## Start with the question and an evidence contract

  “What is this compound?” can describe several different jobs. A known-material check asks whether the spectrum is consistent with an expected structure. Dereplication asks whether the sample matches a previously observed compound. Unknown compound identification may require generating structures rather than searching a library. A mixture adds another layer: signals may not belong to one molecular graph at all.

  Before touching the spectrum, the agent should convert the request into an **evidence contract**:

  | Contract field | Example | Why it matters |
  | --- | --- | --- |
  | Objective | Identify a purified unknown | Prevents a verification workflow being mistaken for de novo elucidation |
  | Available evidence | ¹H, ¹³C, HSQC, HMBC and HRMS | Defines which constraints can legitimately be used |
  | Allowed actions | Process spectra, search an approved library, predict candidate spectra | Keeps the agent inside validated tools and data boundaries |
  | Required output | Ranked candidates, evidence map, unresolved conflicts | Makes alternatives and uncertainty visible |
  | Stop condition | No candidate satisfies mandatory constraints | Prevents forced conclusions from incomplete evidence |
  | Review gate | Spectroscopist approves final disposition | Separates machine recommendation from laboratory decision |

  This contract prevents task drift. If only a proton spectrum is available, the system should not behave as if it had carbon connectivity. If a tool is authorised for research screening but not release testing, the output must retain that limitation.

  ## Stage 1: ingest and validate the raw evidence

  Interpretation begins with provenance. The agent links the acquisition to stable sample and experiment identifiers, preserves the original export, computes an integrity checksum, and reads the associated metadata. A filename is not enough: copies can be renamed, and two acquisitions may share an informal label.

  The first tool calls should therefore be validators rather than predictors. They can check whether the declared nucleus matches the spectral axis, whether key metadata are present, and whether expected experiment pairs belong to the same sample. They should also flag truncated files, duplicated datasets, and missing reference information.

  Open exchange specifications such as [JCAMP-DX](https://en.wikipedia.org/wiki/JCAMP-DX) exist to carry spectra and metadata, but using a standard container does not guarantee that every required field is populated correctly. Vendor conversion, normalisation, and metadata mapping remain transformations that must be recorded.

  A practical intake result is not “file accepted.” It is a structured inventory:

  - original object, checksum, acquisition ID, and source system;
  - experiment type, nucleus, field strength, solvent, temperature, and reference where available;
  - expected and observed dimensions, axis units, and digital resolution;
  - completeness warnings and relationships among 1D, 2D, and orthogonal measurements;
  - permission to continue automatically, continue with warnings, or stop for correction.

  This stage catches a class of errors that no stronger inference model can repair. A spectrum assigned to the wrong sample can still look chemically convincing.

  ## Stage 2: process without erasing provenance

  The agent next creates a derived working copy. Typical operations may include Fourier transformation when starting from time-domain data, phase and baseline correction, chemical-shift referencing, solvent-region annotation, peak detection, integration, multiplet analysis, and alignment across experiments. Which operations are appropriate depends on the input and the objective.

  Processing is not neutral. A baseline algorithm can alter broad features; a denoiser can suppress weak peaks; and a high peak-picking threshold can remove decisive signals. The agent should preserve both the input and each derived state, together with parameters and software versions.

  Tool selection should be conditional. For example:

  1. Estimate signal-to-noise and inspect the baseline.
  2. If the baseline fails a defined quality test, run an approved correction and retest.
  3. If phase quality remains unacceptable, stop or request manual phasing rather than continuing with unreliable integrals.
  4. Detect peaks at a documented threshold, then compare them with local noise and known solvent or reference regions.
  5. Link 1D signals with cross-peaks only after axis calibration and experiment identity have passed validation.

  Every step should emit an observation that the controller can evaluate. “Baseline correction completed” is merely an execution status. “Median residual in signal-free regions fell below the validated threshold, with two broad regions still flagged” is analytically useful. An agentic loop depends on observations, not just successful software calls.

  ## Stage 3: turn signals into constraints and hypotheses

  Once the derived spectra are fit for interpretation, the system converts observations into constraints. A proton signal can contribute chemical shift, multiplicity, coupling, and integral evidence. HSQC can associate proton and carbon environments. COSY can propose proton networks; HMBC can add longer-range connectivity; NOE-type data can provide through-space evidence. Molecular formula or mass-spectrometry information may constrain elemental composition and unsaturation when it is genuinely available.

  Constraints should carry provenance and strength. “Required molecular formula” is different from “formula candidate inferred from a noisy isotope pattern.” A strong one-bond correlation is different from an ambiguous cross-peak in an overlapped region. Treating both as equally certain creates brittle candidate generation.

  Computer-assisted structure elucidation already demonstrates a structured version of this workflow. [ACD/Labs describes](https://www.acdlabs.com/products/spectrus-platform/structure-elucidator-suite/) processing NMR data, extracting a molecular formula from high-resolution MS, building a molecular connectivity diagram, applying user restrictions, generating compatible structures, and ranking candidates. [Bruker’s CMC-se documentation](https://www.bruker.com/en/products-and-solutions/mr/nmr-software/cmc-se.html) similarly describes correlation tables, structure proposals, chemical-shift-based ranking, and interactive expert input.

  An agentic controller adds a decision layer around such specialised operations. It may choose among library search, substructure retrieval, constraint-based enumeration, spectrum prediction, or a request for another experiment. It does not need to replace those tools. Research on the [ReAct pattern](https://arxiv.org/abs/2210.03629) formalises the general idea: reasoning updates a plan, actions obtain observations from external tools, and the new observations inform the next step.

  Candidate creation should produce a set, not a winner. Each candidate needs its origin, satisfied constraints, unexplained evidence, and generation assumptions.

  ## Stage 4: rank, challenge, and select the next action

  Ranking asks which candidate best explains the evidence. Hypothesis testing asks what would prove that ranking wrong. Both are necessary.

  A candidate can be scored against predicted chemical shifts, assignments, peak coverage, coupling or correlation consistency, molecular formula, and orthogonal measurements. Scores from different tools should not be collapsed into an unexplained percentage. The agent should retain component metrics, model and database versions, applicability warnings, and the margin between leading alternatives.

  Then it should run contradiction checks. Does the candidate predict a signal that is absent in a region with adequate sensitivity? Does an observed HMBC correlation require an implausible path under the candidate? Are unmatched peaks better explained by an impurity, exchange, or a second component? Could two positional isomers remain indistinguishable with the current experiment set?

  The next action should maximise information within cost and permission limits. That action might be to inspect an overlapped multiplet at a different processing setting, compare predicted spectra for the top two candidates, query an approved spectral library, or recommend an additional 2D experiment. Instrument control is a separate capability: recommending an acquisition does not imply that the agent can safely schedule or execute it.

  ## Worked trace: from an unknown spectrum to expert disposition

  Consider a purified small-molecule sample with ¹H, ¹³C, HSQC, and HMBC spectra plus a trusted molecular formula from HRMS. The example is intentionally procedural; it does not claim that this evidence always yields a unique structure.

  | Step | Agent action | Observation recorded | Decision |
  | --- | --- | --- | --- |
  | 1. Frame | Set task to de novo identification of one major component | Formula and four NMR experiments supplied; final approval requires a spectroscopist | Continue under the evidence contract |
  | 2. Validate | Check identifiers, axes, metadata, checksums and experiment relationships | ¹H and HSQC share the sample ID; ¹³C reference field is missing | Continue with a warning; prohibit absolute ¹³C-shift claims until reviewed |
  | 3. Process | Create versioned working spectra and run quality checks | Phase and baseline pass; one solvent region and two low-S/N cross-peaks are flagged | Exclude solvent region from scoring; retain uncertain cross-peaks with lower weight |
  | 4. Extract | Build signal, correlation and formula constraints | Two proton networks, six confident HSQC pairs, three strong and two uncertain HMBC links | Generate candidates from mandatory constraints; do not hard-filter on uncertain links |
  | 5. Generate | Run an authorised structure generator | Four candidates satisfy the formula and strong connectivity constraints | Preserve all four and their generation provenance |
  | 6. Rank | Compare candidate predictions and evidence coverage | Candidate A leads on average shift agreement; B is close; C and D miss strong correlations | Reject C and D; challenge A against B |
  | 7. Falsify | Identify evidence that separates A and B | One HMBC cross-peak would favour A, but it lies in a crowded region and was low-confidence | Do not use it as decisive evidence |
  | 8. Act | Recommend the least costly discriminating check | Targeted review of the raw 2D region may resolve the ambiguity; otherwise another experiment is required | Route to spectroscopist with A and B, not a forced top-one answer |
  | 9. Dispose | Record reviewer decision and rationale | Reviewer confirms the cross-peak is an artefact and requests additional data | Close as inconclusive pending evidence; retain the complete trace |

  This trace illustrates why the audit trail is part of the scientific result. If the system returned only candidate A and a confidence number, the reviewer would not see that the apparent separation from candidate B depended on a disputed cross-peak. The agent’s useful contribution is organising the evidence, exposing that dependency, and stopping before an unsupported conclusion.

  ## Review checkpoints and stopping rules

  Human review should occur where a decision changes the evidential meaning of the case, not merely at the end. The [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is use-case agnostic, but its lifecycle approach is relevant: roles, monitoring, risk controls, and accountability need to be designed around the intended use.

  A compact checkpoint framework is:

  | Gate | Continue automatically when | Escalate when |
  | --- | --- | --- |
  | Intake | Identity, integrity, metadata and permissions pass | Sample linkage or essential metadata is missing |
  | Processing | Quality metrics fall inside validated bounds | Phase, baseline, sensitivity or overlap can alter interpretation |
  | Hypotheses | Mandatory constraints are consistent and generation is in scope | Constraints conflict or imply a mixture or unsupported chemistry |
  | Ranking | Independent evidence supports a stable lead | The lead depends on one ambiguous feature or candidates remain near-equivalent |
  | Disposition | Output type is authorised and evidence is sufficient | A new acquisition, expert judgement or out-of-scope action is required |

  Hard stops should include corrupt data, uncertain sample identity, an unavailable required experiment, no candidate satisfying mandatory evidence, and tool failures that invalidate downstream scores. A maximum action budget also matters: without one, an agent can repeat searches or transformations without increasing information.

  ## Where Rombo’s agentic approach fits

  Rombo’s direction is an auditable reasoning layer for NMR: specialised models and analytical tools can contribute observations, while the workflow keeps hypotheses, evidence, conflicts, and review decisions visible. ROSE, Rombo’s open-weight ¹H NMR foundation model, provides reusable spectral representations for several downstream tasks; its [code, paper links, and model-weight references are public](https://github.com/romboai/rose-1h-nmr). A foundation model is one possible component of an agent, not the entire agentic system.

  Spectra is Rombo AI’s AI agent for NMR analysis, distinct from Rombo AI Platform. Any API access is an interface to Spectra, not a separate product. This article does not assert particular endpoints, instrument integrations, file formats, autonomous acquisition capabilities, or performance levels. Those must be confirmed against current product documentation and validated for the laboratory’s intended use.

  **Evaluating an unknown-compound workflow? [Explore Spectra](https://spectra.rombo.ai) and discuss the evidence, review gates, and deployment boundaries required for your use case.**

  ## Frequently asked questions

  ### Is an NMR agent the same as an NMR prediction model?

  No. A model maps an input to an output, such as a spectrum embedding, predicted shift, or ranked candidate. An agent manages a goal across multiple steps: it selects authorised tools, observes results, revises hypotheses, and stops or escalates under explicit rules.

  ### Can an AI agent identify a compound from a ¹H NMR spectrum alone?

  Sometimes a proton spectrum may support a library match or a narrow verification task, but unknown structures can be underdetermined. The agent should state what the available evidence can support and request ¹³C, 2D NMR, MS, or expert review when alternatives cannot be resolved.

  ### What should be stored in the audit trail?

  Keep the original data checksum, metadata, transformations, parameters, software and model versions, tool inputs and outputs, candidate history, rejected hypotheses, warnings, reviewer actions, and final disposition. The record should make it possible to reconstruct why the workflow reached—or declined to reach—a conclusion.

  ### Should the agent always return one top structure?

  No. A ranked set, an inconclusive result, or a request for more evidence can be more scientifically defensible. A top-one requirement encourages false certainty when multiple candidates explain the measured data.

  ### How should a laboratory validate this pipeline?

  Define the intended use first, then test complete cases that represent instruments, field strengths, sample classes, data quality, mixtures, and failure modes expected in operation. Validate the workflow and its review rules, not only an isolated model metric, and re-evaluate material changes to tools, models, thresholds, or data mappings.
---

---
layout: products
title: "Products"
permalink: /product/
seo_title: "Products | Rombo.ai – Material Intelligence Platform"
description: "One platform integrating benchtop NMR and domain-specific AI for industrial material analysis, delivered through structured pilots."
lang: en

hero_product_title: "AI solutions for advanced material analysis"
hero_product_sub_title: "Software that integrates benchtop NMR spectroscopy and Artificial Intelligence to support analysis and characterization of complex industrial materials."


products:
  - title: "NMR AI Analyzer"
    badge: "NMR + AI module"
    description: "End-to-end benchtop NMR workflow, automated signal analysis, and interpretable outputs that remain comparable over time."
    link: "/product/#nmr-ai-analysis-tool"
    image: "/img/client-results.png"
  - title: "AutoML for material analysis"
    badge: "Advanced module (pilot-driven)"
    description: "Build and validate domain-specific AI models: feature selection, training/validation, performance comparison, and adaptation to new datasets."
    link: "/product/#automl-materials"
    image: "/img/framework.png"
---

<section class="container-fluid py-4 py-lg-5">
  <div class="container custom_container">
    <div class="row g-4 align-items-center">
      <div class="col-12 col-lg-7">
        <h2 class="fw-bold text-dark" style="font-size: 38px; line-height: 1.15;">
          Built for real materials, not synthetic demos
        </h2>
        <p class="text-dark mt-3" style="max-width: 60ch;">
          Industrial materials are not “standard”: they vary by process, supplier, operating conditions, and intrinsic variability.
          That is why <strong>generic models</strong> often fail when moving from the lab to real workflows.
        </p>
        <ul class="text-dark mt-3" style="max-width: 70ch;">
          <li>Materials are not standard</li>
          <li>Generic models rarely generalize reliably</li>
          <li>AI must be built and verified on <strong>real experimental data</strong></li>
          <li>We work closely with customers to define metrics, datasets, and validation criteria</li>
        </ul>
        <div class="mt-4 d-flex flex-wrap gap-3">
          {% include ui/button.html href="/contact/" label="Discuss a pilot" %}
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="products-visual products-visual--ball">
          <img src="{{ '/img/forma51.png' | relative_url }}" class="img-fluid products-ball" alt="Rombo.ai shape" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container-fluid py-4 py-lg-5" style="background:#F7F7F7;">
  <div class="container custom_container">
    <div class="row g-4 align-items-center">
      <div class="col-12 col-lg-5 pe-lg-5">
        {% include products/visual.html
          src="/img/solution-hardware.jpg"
          alt="Material Intelligence Platform"
          wrapper_class="products-visual--compact"
        %}
      </div>
      <div class="col-12 col-lg-7 ps-lg-4">
        <h2 class="fw-bold text-dark" style="font-size: 38px; line-height: 1.15;">
          The platform: Material Intelligence Platform
        </h2>
        <p class="text-dark mt-3" style="max-width: 75ch;">
          <strong>Material Intelligence Platform</strong> is platform designed to bring
          benchtop NMR and domain-specific AI into industrial workflows—with traceability and reproducibility as first-class requirements.
        </p>
        <div class="row g-3 mt-2">
          <div class="col-12 col-md-6">
            <div class="p-3 bg-white border rounded-4 h-100">
              <div class="fw-bold">NMR instrument workflow</div>
              <div class="text-muted" style="font-size: 14px;">Acquisition, organization, and preprocessing of spectra.</div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="p-3 bg-white border rounded-4 h-100">
              <div class="fw-bold">Feature extraction</div>
              <div class="text-muted" style="font-size: 14px;">Reproducible pipelines designed for material families.</div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="p-3 bg-white border rounded-4 h-100">
              <div class="fw-bold">Model training & validation</div>
              <div class="text-muted" style="font-size: 14px;">Clear metrics and robust evaluation across datasets.</div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="p-3 bg-white border rounded-4 h-100">
              <div class="fw-bold">Interpretability & traceability</div>
              <div class="text-muted" style="font-size: 14px;">Comparable outputs over time and across campaigns.</div>
            </div>
          </div>
        </div>
        <p class="text-dark mt-3" style="max-width: 75ch;">
          Designed for a reliable path to industrialization: measurable validation, traceability, and a clear roadmap from pilot to production.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="container-fluid py-4 py-lg-5">
  <div class="container custom_container">
    {% include ui/section_heading_center.html
      kicker="Overview"
      title="Two modules, one platform"
      text="Material Intelligence Platform is delivered through pilots and industrialization programs. The modules below are part of one platform—designed to be validated on your experimental data and to remain comparable over time."
      max_width="85ch"
    %}
  </div>
</section>

<h2 id="nmr-ai-analysis-tool" class="visually-hidden">4. Module 1 — NMR AI Analyzer</h2>
<section class="container-fluid py-4 py-lg-5">
  <div class="container custom_container">
    <div class="row g-4 align-items-center">
      <div class="col-12 col-lg-7">
        {% include ui/kicker.html text="Module 1" class="text-center w-100" %}
        <h2 class="fw-bold text-dark" style="font-size: 38px; line-height: 1.15;">NMR AI Analyzer</h2>
        <p class="text-dark mt-3" style="max-width: 75ch;">
          A module focused on benchtop NMR operations and on keeping analysis consistent over time.
          Designed for industrial labs where traceability and comparability matter.
        </p>
        <div class="row g-3 mt-2">
          <div class="col-12 col-md-6">
            <div class="p-3 border rounded-4 h-100">
              <div class="fw-bold">End-to-end workflow</div>
              <div class="text-muted" style="font-size: 14px;">Measurement workflows, acquisition, organization.</div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="p-3 border rounded-4 h-100">
              <div class="fw-bold">Automated signal analysis</div>
              <div class="text-muted" style="font-size: 14px;">Preprocessing + extraction tailored to your context.</div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="p-3 border rounded-4 h-100">
              <div class="fw-bold">Material-family models</div>
              <div class="text-muted" style="font-size: 14px;">AI models specific to the material family under study.</div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="p-3 border rounded-4 h-100">
              <div class="fw-bold">Comparable outputs</div>
              <div class="text-muted" style="font-size: 14px;">Interpretable results consistent across campaigns.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        {% include products/visual.html
          src="/img/client-results.jpg"
          alt="NMR AI Analyzer results"
          wrapper_class="products-visual--compact"
        %}
      </div>
    </div>
  </div>
</section>

<h2 id="automl-materials" class="visually-hidden">5. Module 2 — AutoML for material analysis</h2>
<section class="container-fluid py-4 py-lg-5" style="background:#F7F7F7;">
  <div class="container custom_container">
    <div class="row g-4 align-items-center">
      <div class="col-12 col-lg-5">
        {% include products/visual.html
          src="/img/framework.png"
          alt="AutoML framework"
          wrapper_class="products-visual--compact products-visual--contain"
        %}
      </div>
      <div class="col-12 col-lg-7">
        {% include ui/kicker.html text="Module 2" class="text-center w-100" %}
        <h2 class="fw-bold text-dark" style="font-size: 38px; line-height: 1.15;">AutoML for material analysis</h2>
        <p class="text-dark mt-3" style="max-width: 75ch;">
          An advanced module to build <strong>custom AI models</strong>, designed for technical and R&amp;D teams.
          It supports model selection, validation, and comparison—grounded in experimental datasets.
        </p>
        <ul class="text-dark mt-3" style="max-width: 75ch;">
          <li>Feature selection and pipeline comparison</li>
          <li>Training and validation with agreed metrics</li>
          <li>Performance comparison across approaches/models</li>
          <li>Support for adapting to new datasets (data quality + validation criteria)</li>
        </ul>
        <div class="p-3 bg-white border rounded-4 mt-3" style="max-width: 75ch;">
          <div class="fw-bold">How it’s delivered</div>
          <div class="text-muted" style="font-size: 14px;">
            Best for technical and R&amp;D teams. We typically start with a <strong>structured pilot</strong> to define objectives, validate on your experimental data,
            and agree on success metrics before scaling to industrial workflows.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container-fluid py-4 py-lg-5">
  <div class="container custom_container">
    {% include ui/section_heading_center.html
      kicker="Use cases"
      title="Validated on your experimental datasets"
      text="Two examples of where the platform delivers measurable value. Each deployment starts with a structured pilot: clear objectives, success metrics, and validation on your data—then scales across batches, operating conditions, and sites."
      max_width="90ch"
    %}

    <div id="useCasesCarousel" class="carousel slide mt-4" data-bs-ride="carousel" data-bs-interval="8000">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#useCasesCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Crude oil"></button>
        <button type="button" data-bs-target="#useCasesCarousel" data-bs-slide-to="1" aria-label="Mineral oil (transformers)"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row g-4 align-items-center">
            <div class="col-12 col-lg-7">
              <h3 class="fw-bold text-dark" style="font-size: 28px; line-height: 1.2;">Crude oil</h3>
              <ul class="text-dark" style="max-width: 85ch;">
                <li>Fingerprinting and comparison across blends, batches, and suppliers</li>
                <li>Classification and similarity search with traceable features</li>
                <li>Link spectral patterns to properties and process variability</li>
                <li>Early detection of off-spec / drift with agreed thresholds</li>
              </ul>
              <div class="p-3 border rounded-4 mt-3" style="background:#fff; max-width: 85ch;">
                <div class="fw-bold">What you can expect</div>
                <div class="text-muted" style="font-size: 14px;">
                  A validated workflow on your crude family and NMR setup: reproducible preprocessing, model performance on held-out data,
                  decision criteria, and a path to scaling across new datasets and operating conditions.
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-5">
              {% include products/visual.html
                src="/img/usecase-crude-oil-1200x800.svg"
                alt="Crude oil use case"
                wrapper_class="products-visual--compact products-visual--contain"
              %}
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row g-4 align-items-center">
            <div class="col-12 col-lg-7">
              <h3 class="fw-bold text-dark" style="font-size: 28px; line-height: 1.2;">Mineral oil (transformers)</h3>
              <ul class="text-dark" style="max-width: 85ch;">
                <li>Batch comparison and classification with reproducible indicators</li>
                <li>Condition / aging proxies designed with technical teams</li>
                <li>Trend monitoring over time and across maintenance cycles</li>
                <li>Reporting outputs that remain comparable across campaigns</li>
              </ul>
              <div class="p-3 border rounded-4 mt-3" style="background:#fff; max-width: 85ch;">
                <div class="fw-bold">What you can expect</div>
                <div class="text-muted" style="font-size: 14px;">
                  A pilot-defined set of indicators and validation metrics, tested on your samples; plus a scalable workflow to extend coverage
                  to new oils, conditions, and sites without losing comparability.
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-5">
              {% include products/visual.html
                src="/img/usecase-mineral-oil-1200x800.svg"
                alt="Mineral oil use case"
                wrapper_class="products-visual--compact products-visual--contain"
              %}
            </div>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#useCasesCarousel" data-bs-slide="prev" aria-label="Previous use case">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#useCasesCarousel" data-bs-slide="next" aria-label="Next use case">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</section>

<section class="container-fluid justify-content-center text-center text-white py-5 h-100" style="background:#303767;">
  <div class="container custom_container d-flex flex-column justify-content-center align-items-center text-center">
    <p class="fw-bold pt-2 text-uppercase" style="font-size: 14px; color:#FE900F; letter-spacing:.06em;">How we work</p>
    <h2 class="fw-bold py-3 text-white secondary-headline" style="font-size: 42px;">Product-oriented pilots</h2>
    <p class="px-3" style="font-size: 16px; max-width: 900px;">
      We start with a structured pilot: clear objectives, agreed success metrics, and validation on your experimental data.
      You get a working solution and a roadmap to scale into operations.
    </p>

    <div class="row g-3 w-100 mt-4" style="max-width: 1000px;">
      <div class="col-12 col-md-6">
        <div class="p-3 rounded-4 h-100" style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.16); text-align:left;">
          <div class="fw-bold text-white">1) Define objectives</div>
          <div class="text-white-50" style="font-size: 14px;">What we measure and what we predict/classify.</div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="p-3 rounded-4 h-100" style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.16); text-align:left;">
          <div class="fw-bold text-white">2) Validation metrics</div>
          <div class="text-white-50" style="font-size: 14px;">Accuracy, robustness, reproducibility, stability over time.</div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="p-3 rounded-4 h-100" style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.16); text-align:left;">
          <div class="fw-bold text-white">3) Data plan</div>
          <div class="text-white-50" style="font-size: 14px;">Quality, quantity, and acquisition protocols.</div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="p-3 rounded-4 h-100" style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.16); text-align:left;">
          <div class="fw-bold text-white">4) Industrialization roadmap</div>
          <div class="text-white-50" style="font-size: 14px;">Integration, governance, and model maintenance.</div>
        </div>
      </div>
    </div>

    <div class="text-white-50 mt-3" style="font-size: 14px; max-width: 1000px;">
      <strong class="text-white">What you get:</strong> validated results, clear documentation of metrics and datasets, and an industrialization roadmap.
    </div>

    <a href="{{ '/contact/' | relative_url }}" class="text-decoration-none pt-4" aria-label="Evaluate a pilot">
      <div class="d-flex justify-content-center align-items-center gap-0">
        <button class="btn rounded-pill" style="background:#FE900F; color: white; padding:15px 25px; margin-right:-8px;">
          Evaluate
        </button>
        <img class="d-inline-block" src="{{ '/img/group-2-2.png' | relative_url }}" alt="Group" style="width: 35px; height: 41px;">
        <button class="btn rounded-pill" style="background:#FE900F; color: white; padding:15px; margin-left:-8px;">
          a pilot
        </button>
      </div>
    </a>
  </div>
</section>


(() => {
  "use strict";

  function track(eventName, params) {
    var payload = Object.assign({
      page_location: location.href,
      page_path: location.pathname
    }, params || {});

    if (typeof window.romboTrack === "function") {
      window.romboTrack(eventName, payload);
      return;
    }

    window.__romboEvents = window.__romboEvents || [];
    window.__romboEvents.push({ event: eventName, params: payload });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: eventName }, payload));
  }

  function normalizePath(href) {
    try {
      var url = new URL(href, window.location.origin);
      return url.pathname.replace(/\/+$/, "") || "/";
    } catch (e) {
      return (href || "").split("?")[0].replace(/\/+$/, "") || "/";
    }
  }

  function isContactHref(href) {
    var path = normalizePath(href);
    return path === "/contact" || path.endsWith("/contact");
  }

  function getPageType() {
    var meta = document.querySelector('meta[name="rombo-page-type"]');
    if (meta && meta.getAttribute("content")) return meta.getAttribute("content");

    var path = normalizePath(window.location.pathname);
    if (path === "/") return "home";
    if (path === "/blog" || path.indexOf("/blog/") === 0) return "blog";
    if (path === "/spectra" || path.indexOf("/spectra/") === 0) return "spectra";
    if (path === "/product" || path.indexOf("/product/") === 0) return "platform";
    if (path === "/use-cases" || path.indexOf("/use-cases/") === 0) return "use_cases";
    if (path === "/about") return "about";
    if (path === "/contact") return "contact";
    if (path === "/privacy") return "privacy";
    return "other";
  }

  function getLinkText(link) {
    var aria = link.getAttribute("aria-label");
    if (aria) return aria.trim();
    var hidden = link.querySelector(".visually-hidden");
    if (hidden && hidden.textContent.trim()) return hidden.textContent.trim();
    var buttonText = link.querySelector(".button-text");
    if (buttonText) return buttonText.textContent.trim();
    return (link.textContent || "").replace(/\s+/g, " ").trim();
  }

  function getCtaLocation(link, pageType) {
    if (link.dataset.ctaLocation) return link.dataset.ctaLocation;

    if (link.closest(".hero-section")) {
      return pageType === "home" ? "home_header" : "hero";
    }
    if (link.closest(".hero-contact-section")) return "contact_page";
    if (link.closest("nav, .navbar")) {
      if (pageType === "home") return "home_header";
      if (pageType === "blog") return "blog";
      return "header";
    }
    if (link.closest("[data-cta-section='engage']")) {
      return pageType === "blog" ? "blog" : "engage";
    }
    if (link.closest(".markdown-content")) return "blog_inline";
    if (link.classList.contains("github-cta")) return "technology_github";
    if (link.closest(".button") || link.classList.contains("button")) return "button";
    return "content";
  }

  function getCtaSource(link, pageType, location) {
    if (pageType === "blog" || location === "blog" || location === "blog_inline" || location === "blog_header") {
      return "blog";
    }

    if (pageType === "home") {
      if (
        link.closest("nav, .navbar") ||
        link.closest(".hero-section") ||
        location === "home_header" ||
        location === "navigation" ||
        location === "hero_primary" ||
        location === "hero"
      ) {
        return "home_header";
      }
    }

    return "other";
  }

  function getFunnelStep(href) {
    if (isContactHref(href)) return "cta_to_contact";
    if ((href || "").indexOf("spectra.rombo.ai") !== -1) return "cta_to_spectra";
    if ((href || "").indexOf("github.com") !== -1) return "cta_to_github";
    if ((href || "").charAt(0) === "#") return "cta_in_page";
    return "cta_click";
  }

  function isTrackedCta(link, href) {
    if (isContactHref(href)) return true;
    if (link.hasAttribute("data-cta-location")) return true;
    if (link.classList.contains("nav-cta")) return true;
    if (link.classList.contains("github-cta")) return true;
    return false;
  }

  function ctaContext(link, href) {
    var pageType = getPageType();
    var location = getCtaLocation(link, pageType);
    return {
      cta_text: getLinkText(link),
      cta_location: location,
      cta_source: getCtaSource(link, pageType, location),
      page_type: pageType,
      link_url: href,
      funnel_step: getFunnelStep(href)
    };
  }

  function initCtaTracking() {
    document.addEventListener("click", function (event) {
      var link = event.target.closest("a[href]");
      if (!link) return;

      var href = link.getAttribute("href") || "";

      if (isTrackedCta(link, href)) {
        track("cta_click", ctaContext(link, href));
        return;
      }

      var path = normalizePath(href);
      if (path.indexOf("/use-cases/") !== -1 && path !== "/use-cases") {
        var pageType = getPageType();
        var location = getCtaLocation(link, pageType);
        track("use_case_click", {
          use_case_path: path,
          link_text: getLinkText(link),
          cta_location: location,
          cta_source: getCtaSource(link, pageType, location),
          page_type: pageType,
          funnel_step: "use_case_exploration"
        });
        return;
      }

      if (href.indexOf("mailto:") === 0) {
        track("contact_intent_click", {
          contact_method: "email",
          link_url: href,
          page_type: getPageType(),
          funnel_step: "direct_contact"
        });
        return;
      }

      if (href.indexOf("tel:") === 0) {
        track("contact_intent_click", {
          contact_method: "phone",
          link_url: href,
          page_type: getPageType(),
          funnel_step: "direct_contact"
        });
        return;
      }

      if (href.indexOf("calendly.com") !== -1) {
        var callCtx = ctaContext(link, href);
        track("book_call_click", {
          link_url: href,
          cta_location: callCtx.cta_location,
          cta_source: callCtx.cta_source,
          page_type: callCtx.page_type,
          funnel_step: "book_call"
        });
        return;
      }

      if (href.indexOf("linkedin.com") !== -1) {
        track("social_click", {
          network: "linkedin",
          link_url: href,
          page_type: getPageType(),
          funnel_step: "social"
        });
      }
    });
  }

  function initContactFormTracking() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var search = window.location.search || "";
    var isStatusOk = search.indexOf("status=ok") !== -1;
    var pageType = getPageType();

    if (isStatusOk) {
      if (!sessionStorage.getItem("rombo_contact_success_tracked")) {
        sessionStorage.setItem("rombo_contact_success_tracked", "1");
        track("contact_form_success", {
          form_name: "contact",
          page_type: pageType,
          funnel_step: "lead_confirmed"
        });
      }
      return;
    }

    var flags = { start: false, email: false, message: false, company: false };

    track("contact_form_view", {
      form_name: "contact",
      page_type: pageType,
      funnel_step: "form_view"
    });

    form.addEventListener("focusin", function () {
      if (flags.start) return;
      flags.start = true;
      track("contact_form_start", {
        form_name: "contact",
        page_type: pageType,
        funnel_step: "form_start"
      });
    });

    var emailField = document.getElementById("email");
    if (emailField) {
      emailField.addEventListener("blur", function () {
        if (flags.email || !emailField.validity.valid || !emailField.value.trim()) return;
        flags.email = true;
        track("contact_email_entered", {
          form_name: "contact",
          page_type: pageType,
          funnel_step: "email_entered"
        });
      });
    }

    var companyField = document.getElementById("company");
    if (companyField) {
      companyField.addEventListener("blur", function () {
        if (flags.company || !companyField.value.trim()) return;
        flags.company = true;
        track("contact_company_entered", {
          form_name: "contact",
          page_type: pageType,
          funnel_step: "company_entered"
        });
      });
    }

    var messageField = document.getElementById("query");
    if (messageField) {
      messageField.addEventListener("input", function () {
        if (flags.message || !messageField.value.trim()) return;
        flags.message = true;
        track("contact_message_start", {
          form_name: "contact",
          field_name: "query",
          page_type: pageType,
          funnel_step: "message_start"
        });
      });
    }

    form.addEventListener("submit", function () {
      track("contact_form_submit", {
        form_name: "contact",
        message_length: messageField ? messageField.value.trim().length : 0,
        page_type: pageType,
        funnel_step: "form_submit"
      });
      track("generate_lead", {
        form_name: "contact",
        lead_type: "feasibility_analysis",
        page_type: pageType,
        currency: "EUR",
        value: 0
      });
    });
  }

  function initScrollTracking() {
    var keyPrefixes = ["/product", "/use-cases", "/contact", "/about"];
    var path = normalizePath(window.location.pathname);
    var isKeyPage = keyPrefixes.some(function (prefix) {
      return path === prefix || path.indexOf(prefix + "/") === 0;
    });
    if (!isKeyPage) return;

    var marks = { 50: false, 90: false };
    var pageType = getPageType();

    function onScroll() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) return;

      var pct = Math.round((doc.scrollTop / max) * 100);
      [50, 90].forEach(function (mark) {
        if (marks[mark] || pct < mark) return;
        marks[mark] = true;
        track("scroll_depth", {
          percent_scrolled: mark,
          page_path: path,
          page_type: pageType,
          funnel_step: "page_engagement"
        });
      });
    }

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initHighIntentPageView() {
    var path = normalizePath(window.location.pathname);
    var pageType = getPageType();
    var intentType = null;

    if (pageType === "contact" || path === "/contact" || path.endsWith("/contact")) intentType = "contact";
    else if (pageType === "platform" || path === "/product" || path.indexOf("/product/") === 0) intentType = "platform";
    else if (pageType === "use_cases" || path === "/use-cases" || path.indexOf("/use-cases/") === 0) intentType = "use_cases";
    else if (pageType === "about" || path === "/about") intentType = "about";

    if (!intentType) return;

    track("high_intent_page_view", {
      page_type: intentType,
      funnel_step: "intent_page"
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initCtaTracking();
    initContactFormTracking();
    initScrollTracking();
    initHighIntentPageView();
  });
})();

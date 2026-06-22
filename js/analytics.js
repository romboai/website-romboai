(() => {
  "use strict";

  function track(eventName, params) {
    if (typeof window.romboTrack === "function") {
      window.romboTrack(eventName, params);
    }
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

  function getLinkText(link) {
    var aria = link.getAttribute("aria-label");
    if (aria) return aria.trim();
    var buttonText = link.querySelector(".button-text");
    if (buttonText) return buttonText.textContent.trim();
    return (link.textContent || "").replace(/\s+/g, " ").trim();
  }

  function getCtaLocation(link) {
    if (link.dataset.ctaLocation) return link.dataset.ctaLocation;

    if (link.closest(".hero-section")) return "hero";
    if (link.closest(".hero-contact-section")) return "contact_page";
    if (link.closest("nav, .navbar")) return "navigation";
    if (link.closest("[data-cta-section='engage']")) return "engage";
    if (link.closest(".button") || link.classList.contains("button")) return "button";
    return "content";
  }

  function initCtaTracking() {
    document.addEventListener("click", function (event) {
      var link = event.target.closest("a[href]");
      if (!link) return;

      var href = link.getAttribute("href") || "";

      if (isContactHref(href)) {
        track("cta_click", {
          cta_text: getLinkText(link),
          cta_location: getCtaLocation(link),
          link_url: href,
          funnel_step: "cta_to_contact"
        });
        return;
      }

      var path = normalizePath(href);
      if (path.indexOf("/use-cases/") !== -1 && path !== "/use-cases") {
        track("use_case_click", {
          use_case_path: path,
          link_text: getLinkText(link),
          cta_location: getCtaLocation(link),
          funnel_step: "use_case_exploration"
        });
        return;
      }

      if (href.indexOf("mailto:") === 0) {
        track("contact_intent_click", {
          contact_method: "email",
          link_url: href,
          funnel_step: "direct_contact"
        });
        return;
      }

      if (href.indexOf("tel:") === 0) {
        track("contact_intent_click", {
          contact_method: "phone",
          link_url: href,
          funnel_step: "direct_contact"
        });
        return;
      }

      if (href.indexOf("calendly.com") !== -1) {
        track("book_call_click", {
          link_url: href,
          cta_location: getCtaLocation(link),
          funnel_step: "book_call"
        });
        return;
      }

      if (href.indexOf("linkedin.com") !== -1) {
        track("social_click", {
          network: "linkedin",
          link_url: href,
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

    if (isStatusOk) {
      if (!sessionStorage.getItem("rombo_contact_success_tracked")) {
        sessionStorage.setItem("rombo_contact_success_tracked", "1");
        track("contact_form_success", {
          form_name: "contact",
          funnel_step: "lead_confirmed"
        });
      }
      return;
    }

    var flags = { start: false, email: false, message: false, company: false };

    track("contact_form_view", {
      form_name: "contact",
      funnel_step: "form_view"
    });

    form.addEventListener("focusin", function () {
      if (flags.start) return;
      flags.start = true;
      track("contact_form_start", {
        form_name: "contact",
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
          funnel_step: "message_start"
        });
      });
    }

    form.addEventListener("submit", function () {
      track("contact_form_submit", {
        form_name: "contact",
        message_length: messageField ? messageField.value.trim().length : 0,
        funnel_step: "form_submit"
      });
      track("generate_lead", {
        form_name: "contact",
        lead_type: "feasibility_analysis",
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
          funnel_step: "page_engagement"
        });
      });
    }

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initHighIntentPageView() {
    var path = normalizePath(window.location.pathname);
    var pageType = null;

    if (path === "/contact" || path.endsWith("/contact")) pageType = "contact";
    else if (path === "/product" || path.indexOf("/product/") === 0) pageType = "product";
    else if (path === "/use-cases" || path.indexOf("/use-cases/") === 0) pageType = "use_cases";
    else if (path === "/about" || path.indexOf("/about/") === 0) pageType = "about";

    if (!pageType) return;

    track("high_intent_page_view", {
      page_type: pageType,
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

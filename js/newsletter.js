(() => {
  "use strict";

  function initNewsletter(form) {
    var button = form.querySelector('button[type="submit"]');
    var status = form.querySelector("[data-newsletter-status]");

    var email = form.querySelector('[name="email"]');
    var honeypot = form.querySelector('[name="website"]');
    var sending = false;
    var completed = false;

    if (!button || !status || !email) return;
    button.disabled = !(form.getAttribute("action") || "").trim();

    function showStatus(message, state) {
      status.textContent = message;
      status.dataset.state = state;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (sending || completed) return;

      var endpoint = (form.getAttribute("action") || "").trim();
      if (!endpoint) return;

      if (!form.checkValidity() || !email.value.trim()) {
        form.reportValidity();
        return;
      }

      if (honeypot && honeypot.value.trim()) return;

      var payload = new FormData();
      payload.set("form_type", "newsletter");
      payload.set("email", email.value.trim());
      payload.set("newsletter_opt_in", "true");
      payload.set("newsletter_source", form.dataset.newsletterLocation);
      payload.set("newsletter_page_path", window.location.pathname);
      payload.set("newsletter_consent_at", new Date().toISOString());
      payload.set("newsletter_consent_version", form.dataset.consentVersion);
      payload.set("newsletter_consent_text", form.dataset.consentText);

      var controller = new AbortController();
      var timeout = window.setTimeout(function () { controller.abort(); }, 15000);
      sending = true;
      button.disabled = true;
      form.setAttribute("aria-busy", "true");
      showStatus("Sending your signup request…", "sending");

      fetch(endpoint, {
        method: "POST",
        headers: { "x-make-apikey": "geTba5-bicxej-wacsep" },
        body: payload,
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: controller.signal
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Newsletter request was not accepted");

          completed = true;
          form.reset();
          showStatus("Thank you — your signup request has been received.", "success");
          document.dispatchEvent(new CustomEvent("rombo:newsletter-requested", {
            detail: { newsletter_location: form.dataset.newsletterLocation }
          }));
        })
        .catch(function () {
          showStatus("We could not send your signup request. Please try again.", "error");
        })
        .finally(function () {
          window.clearTimeout(timeout);
          sending = false;
          button.disabled = completed;
          form.removeAttribute("aria-busy");
        });
    });
  }

  function init() {
    document.querySelectorAll("[data-newsletter-form]").forEach(initNewsletter);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

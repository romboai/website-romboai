(() => {
  "use strict";

  const headerArea = document.querySelector(".header-area");
  const sitebarBtn = document.querySelector(".siteBar-btn");
  const upBtn = document.getElementById("UpBtn");

  const getScrollTop = () =>
    window.pageYOffset || document.documentElement.scrollTop || 0;

  const toggleUpBtn = (shouldShow) => {
    if (!upBtn) return;
    if (shouldShow) {
      upBtn.classList.remove("d-none");
      upBtn.style.opacity = "1";
      upBtn.style.pointerEvents = "auto";
    } else {
      upBtn.classList.add("d-none");
      upBtn.style.opacity = "0";
      upBtn.style.pointerEvents = "none";
    }
  };

  // Header + Up button visibility on scroll
  const onScroll = () => {
    const y = getScrollTop();

    if (headerArea) {
      if (y < 100) headerArea.classList.remove("scrolled");
      else headerArea.classList.add("scrolled");
    }

    toggleUpBtn(y >= 300);
  };

  document.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("load", onScroll, { once: true });

  // Mobile menu toggle
  sitebarBtn?.addEventListener("click", () => {
    document.querySelector(".mobile-menu")?.classList.toggle("siteBar");
  });

  // Smooth scroll for anchor links
  document.querySelectorAll(".sliding-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href") || "";
      if (!href.includes("#")) return;

      const anchor = href.split("#").pop();
      if (!anchor) return;

      const el = document.getElementById(anchor);
      if (!el) return;

      e.preventDefault();
      const top = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - 80);
      window.scrollTo({ top: top, behavior: "smooth" });
      if (history.replaceState) {
        history.replaceState(null, "", "#" + anchor);
      }
    });
  });

  // Smooth scroll on initial hash (after load)
  if (window.location.hash) {
    window.addEventListener(
      "load",
      () => {
        const el = document.querySelector(window.location.hash);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => window.scrollBy({ top: -180, left: 0, behavior: "instant" }), 0);
      },
      { once: true }
    );
  }

  // Up button scroll-to-top
  upBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();





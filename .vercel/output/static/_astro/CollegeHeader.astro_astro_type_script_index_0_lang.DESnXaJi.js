document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById("modern-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMobileMenuButton = document.getElementById("close-mobile-menu");
  const mobileMenuOverlay = document.getElementById(
    "mobile-menu-overlay"
  );
  const mobileMenuContainer = document.getElementById(
    "mobile-menu-container"
  );
  const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");
  const searchButton = document.getElementById("search-button");
  const searchButtonMobile = document.getElementById(
    "search-button-mobile"
  );
  const searchOverlay = document.getElementById("search-overlay");
  const searchContainer = document.getElementById("search-container");
  const closeSearchButton = document.getElementById("close-search");
  const mobileThemeToggle = document.getElementById(
    "mobile-theme-toggle"
  );
  const hamburgerLines = document.querySelectorAll(".hamburger-line");
  const enrollmentDisabledBtn = document.getElementById(
    "enrollment-disabled-btn"
  );
  const enrollmentDisabledBtnMobile = document.getElementById(
    "enrollment-disabled-btn-mobile"
  );
  const enrollmentDisabledModal = document.getElementById(
    "enrollment-disabled-modal"
  );
  const enrollmentModalContainer = document.getElementById(
    "enrollment-modal-container"
  );
  const closeEnrollmentModalBtn = document.getElementById(
    "close-enrollment-modal"
  );
  const confirmEnrollmentModalBtn = document.getElementById(
    "confirm-enrollment-modal"
  );
  let lastScrollY = window.scrollY;
  function updateHeaderOnScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      header?.classList.add("shadow-lg", "shadow-black/5");
      header?.classList.remove("shadow-sm");
    } else {
      header?.classList.remove("shadow-lg", "shadow-black/5");
      header?.classList.add("shadow-sm");
    }
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      if (header) header.style.transform = "translateY(-100%)";
    } else {
      if (header) header.style.transform = "translateY(0)";
    }
    lastScrollY = currentScrollY;
  }
  window.addEventListener("scroll", updateHeaderOnScroll);
  function openMobileMenu() {
    document.body.style.overflow = "hidden";
    if (mobileMenuOverlay && mobileMenuContainer) {
      mobileMenuOverlay.style.visibility = "visible";
      mobileMenuOverlay.style.opacity = "1";
      mobileMenuOverlay.style.pointerEvents = "auto";
      animateHamburgerToX();
      mobileMenuButton?.setAttribute("aria-expanded", "true");
      setTimeout(() => {
        mobileMenuContainer.style.transform = "translateX(0)";
      }, 50);
    }
  }
  function closeMobileMenu() {
    if (mobileMenuOverlay && mobileMenuContainer) {
      mobileMenuContainer.style.transform = "translateX(100%)";
      mobileMenuOverlay.style.opacity = "0";
      animateXToHamburger();
      mobileMenuButton?.setAttribute("aria-expanded", "false");
      setTimeout(() => {
        mobileMenuOverlay.style.visibility = "hidden";
        mobileMenuOverlay.style.pointerEvents = "none";
        document.body.style.overflow = "";
      }, 300);
    }
  }
  function animateHamburgerToX() {
    if (hamburgerLines.length >= 3) {
      hamburgerLines[0].style.transform = "rotate(45deg) translate(6px, 6px)";
      hamburgerLines[1].style.opacity = "0";
      hamburgerLines[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
    }
  }
  function animateXToHamburger() {
    if (hamburgerLines.length >= 3) {
      hamburgerLines[0].style.transform = "";
      hamburgerLines[1].style.opacity = "1";
      hamburgerLines[2].style.transform = "";
    }
  }
  mobileMenuButton?.addEventListener("click", (e) => {
    e.preventDefault();
    openMobileMenu();
  });
  closeMobileMenuButton?.addEventListener("click", (e) => {
    e.preventDefault();
    closeMobileMenu();
  });
  mobileMenuOverlay?.addEventListener("click", function(e) {
    if (e.target === mobileMenuOverlay) {
      closeMobileMenu();
    }
  });
  mobileDropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const content = dropdown.querySelector(".dropdown-content");
    const icon = dropdown.querySelector(".dropdown-icon");
    button?.addEventListener("click", () => {
      const isHidden = content?.classList.contains("hidden");
      if (isHidden) {
        content?.classList.remove("hidden");
        if (icon)
          icon.style.transform = "rotate(180deg)";
      } else {
        content?.classList.add("hidden");
        if (icon) icon.style.transform = "";
      }
    });
  });
  function openSearch() {
    document.body.style.overflow = "hidden";
    if (searchOverlay && searchContainer) {
      searchOverlay.classList.remove("hidden");
      setTimeout(() => {
        if (searchContainer) {
          searchContainer.style.opacity = "1";
          searchContainer.style.transform = "scale(1)";
        }
      }, 10);
    }
  }
  function closeSearch() {
    if (searchContainer) {
      searchContainer.style.opacity = "0";
      searchContainer.style.transform = "scale(0.95)";
      setTimeout(() => {
        if (searchOverlay) {
          searchOverlay.classList.add("hidden");
          document.body.style.overflow = "";
        }
      }, 300);
    }
  }
  searchButton?.addEventListener("click", openSearch);
  searchButtonMobile?.addEventListener("click", openSearch);
  closeSearchButton?.addEventListener("click", closeSearch);
  searchOverlay?.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      closeSearch();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (searchOverlay && !searchOverlay.classList.contains("hidden")) {
        closeSearch();
      } else if (mobileMenuOverlay && !mobileMenuOverlay.classList.contains("invisible")) {
        closeMobileMenu();
      }
    }
  });
  mobileThemeToggle?.addEventListener("click", () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
  navLinks.forEach((link) => {
    const htmlLink = link;
    htmlLink.addEventListener("mouseenter", () => {
      htmlLink.style.transform = "translateY(-1px)";
    });
    htmlLink.addEventListener("mouseleave", () => {
      htmlLink.style.transform = "";
    });
  });
  function openEnrollmentModal() {
    document.body.style.overflow = "hidden";
    if (enrollmentDisabledModal) {
      enrollmentDisabledModal.classList.remove("hidden");
      setTimeout(() => {
        if (enrollmentModalContainer) {
          enrollmentModalContainer.style.opacity = "1";
          enrollmentModalContainer.style.transform = "scale(1)";
        }
      }, 10);
    }
  }
  function closeEnrollmentModal() {
    if (enrollmentModalContainer) {
      enrollmentModalContainer.style.opacity = "0";
      enrollmentModalContainer.style.transform = "scale(0.95)";
      setTimeout(() => {
        if (enrollmentDisabledModal) {
          enrollmentDisabledModal.classList.add("hidden");
          document.body.style.overflow = "";
        }
      }, 300);
    }
  }
  enrollmentDisabledBtn?.addEventListener("click", openEnrollmentModal);
  enrollmentDisabledBtnMobile?.addEventListener(
    "click",
    openEnrollmentModal
  );
  closeEnrollmentModalBtn?.addEventListener(
    "click",
    closeEnrollmentModal
  );
  confirmEnrollmentModalBtn?.addEventListener(
    "click",
    closeEnrollmentModal
  );
  enrollmentDisabledModal?.addEventListener("click", (e) => {
    if (e.target === enrollmentDisabledModal) {
      closeEnrollmentModal();
    }
  });
  document.querySelectorAll(".mobile-nav-item:not(button)").forEach((item) => {
    item.addEventListener("click", () => {
      setTimeout(() => closeMobileMenu(), 150);
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const href = anchor.getAttribute("href");
      const target = document.querySelector(href || "");
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        if (mobileMenuOverlay && mobileMenuOverlay.style.visibility === "visible") {
          closeMobileMenu();
        }
      }
    });
  });
});

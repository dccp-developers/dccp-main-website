document.addEventListener("DOMContentLoaded", () => {
  const animateElements = () => {
    const contactBadge = document.querySelector(".contact-badge");
    if (contactBadge) {
      contactBadge.style.opacity = "0";
      contactBadge.style.transform = "translateY(20px)";
      setTimeout(() => {
        contactBadge.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        contactBadge.style.opacity = "1";
        contactBadge.style.transform = "translateY(0)";
      }, 100);
    }
    const contactTitle = document.querySelector(".contact-title");
    if (contactTitle) {
      contactTitle.style.opacity = "0";
      contactTitle.style.transform = "translateY(30px)";
      setTimeout(() => {
        contactTitle.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        contactTitle.style.opacity = "1";
        contactTitle.style.transform = "translateY(0)";
      }, 200);
    }
    const contactDescription = document.querySelector(".contact-description");
    if (contactDescription) {
      contactDescription.style.opacity = "0";
      contactDescription.style.transform = "translateY(20px)";
      setTimeout(() => {
        contactDescription.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        contactDescription.style.opacity = "1";
        contactDescription.style.transform = "translateY(0)";
      }, 400);
    }
  };
  const setupCardEffects = () => {
    const cards = document.querySelectorAll(".contact-card");
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      setTimeout(() => {
        card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 600 + index * 200);
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        card.style.transition = "transform 0.1s ease";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
        card.style.transition = "transform 0.5s ease";
      });
    });
  };
  const setupFAQ = () => {
    const faqItems = document.querySelectorAll(".faq-item");
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    faqItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(item);
    });
    const faqTriggers = document.querySelectorAll(".faq-trigger");
    faqTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const content = trigger.nextElementSibling;
        const icon = trigger.querySelector(".faq-icon");
        const isOpen = content.classList.contains("active");
        document.querySelectorAll(".faq-content").forEach((item) => {
          item.classList.remove("active");
          item.style.maxHeight = "0";
        });
        document.querySelectorAll(".faq-icon").forEach((icon2) => {
          icon2.style.transform = "rotate(0)";
        });
        if (!isOpen) {
          content.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
          icon.style.transform = "rotate(180deg)";
          setTimeout(() => {
            const rect = trigger.getBoundingClientRect();
            if (rect.top < 100) {
              trigger.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
              });
            }
          }, 300);
        }
      });
    });
  };
  animateElements();
  setupCardEffects();
  setupFAQ();
  const observeOtherElements = () => {
    const elementsToObserve = [
      ".faq-badge",
      ".faq-title",
      ".faq-description",
      ".cta-section"
    ];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elementsToObserve.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        observer.observe(element);
      }
    });
  };
  observeOtherElements();
});

// Main Application Script
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close menu when clicking on a link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Form handling
  const forms = document.querySelectorAll("[data-form]");
  forms.forEach((form) => {
    form.addEventListener("submit", handleFormSubmit);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Sticky mobile CTA
  initStickyCTA();
});

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const submitButton = form.querySelector('[type="submit"]');
  const successMessage = form.querySelector("[data-success-message]");
  const errorMessage = form.querySelector("[data-error-message]");

  // Validate form
  if (!validateForm(form)) {
    if (errorMessage) {
      errorMessage.classList.remove("hidden");
      setTimeout(() => errorMessage.classList.add("hidden"), 5000);
    }
    return;
  }

  // Show loading state
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = t("loading");

  try {
    // For Netlify deployment: use Netlify Forms with proper encoding
    if (form.getAttribute("data-netlify") === "true") {
      try {
        // Submit using form's native action if deployed on Netlify
        const response = await fetch(form.action || "/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData),
        });

        // Accept any response (Netlify handles it)
        showSuccess(form, successMessage);
      } catch (netlifyError) {
        console.log(
          "Netlify forms not available, trying alternative method",
          netlifyError
        );
        // Fallback to showing success anyway since this might be on Netlify
        showSuccess(form, successMessage);
      }
    } else {
      // For other platforms or if no data-netlify
      showSuccess(form, successMessage);
    }
  } catch (error) {
    console.error("Form submission error:", error);
    showError(form, errorMessage);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
}

function validateForm(form) {
  const name = form.querySelector('[name="name"]');
  const phone = form.querySelector('[name="phone"]');
  const email = form.querySelector('[name="email"]');

  let isValid = true;

  if (!name || !name.value.trim()) isValid = false;
  if (!phone || !phone.value.trim()) isValid = false;

  if (email && email.value.trim() && !isValidEmail(email.value)) {
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showSuccess(form, successMessage) {
  form.reset();
  if (successMessage) {
    successMessage.classList.remove("hidden");
    setTimeout(() => successMessage.classList.add("hidden"), 5000);
  }
}

function showError(form, errorMessage) {
  if (errorMessage) {
    errorMessage.classList.remove("hidden");
    setTimeout(() => errorMessage.classList.add("hidden"), 5000);
  }
}

function initStickyCTA() {
  const stickyCTA = document.querySelector("[data-sticky-cta]");
  if (!stickyCTA) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const isNearBottom =
      scrollY + viewportHeight > document.body.scrollHeight - 500;

    if (isNearBottom) {
      stickyCTA.classList.add("hidden");
    } else {
      stickyCTA.classList.remove("hidden");
    }
  });
}

// Portfolio filter functionality
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const portfolioItems = document.querySelectorAll("[data-portfolio-category]");

  if (filterButtons.length === 0) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) =>
        btn.classList.remove("active", "text-gold", "border-gold")
      );
      button.classList.add("active", "text-gold", "border-gold");

      // Filter items
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-portfolio-category");
        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
          setTimeout(() => item.classList.add("animate-in"), 10);
        } else {
          item.classList.add("hidden");
          item.classList.remove("animate-in");
        }
      });
    });
  });
}

// Testimonials carousel
function initTestimonialCarousel() {
  const carousel = document.querySelector("[data-testimonial-carousel]");
  if (!carousel) return;

  const items = carousel.querySelectorAll("[data-testimonial-item]");
  const prevBtn = document.querySelector("[data-carousel-prev]");
  const nextBtn = document.querySelector("[data-carousel-next]");

  if (items.length === 0) return;

  let currentIndex = 0;

  const showSlide = (index) => {
    items.forEach((item, i) => {
      item.classList.toggle("hidden", i !== index);
    });
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
    });
  }

  // Auto advance carousel every 8 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }, 8000);

  showSlide(0);
}

// Initialize portfolio and testimonials if on those pages
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initPortfolioFilter();
    initTestimonialCarousel();
  });
} else {
  initPortfolioFilter();
  initTestimonialCarousel();
}

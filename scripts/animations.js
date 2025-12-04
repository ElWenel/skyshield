// Animations Module - IntersectionObserver & GSAP Integration
const animationConfig = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, animationConfig);

function initAnimations() {
  // Observe all animate-on-scroll elements
  document.querySelectorAll("[data-animate]").forEach((el) => {
    observer.observe(el);
  });

  // Magnetic button effect
  initMagneticButtons();

  // Scroll animations with GSAP if available
  if (window.gsap) {
    initGSAPAnimations();
  }
}

function initMagneticButtons() {
  const buttons = document.querySelectorAll(".btn-magnetic");

  buttons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 50;

      if (distance < maxDistance) {
        const moveX = (x / distance) * (maxDistance - distance) * 0.3;
        const moveY = (y / distance) * (maxDistance - distance) * 0.3;

        button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      }
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0, 0) scale(1)";
    });
  });
}

function initGSAPAnimations() {
  // Hero section parallax
  const heroImages = document.querySelectorAll(".hero-image");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    heroImages.forEach((img, index) => {
      img.style.transform = `translateY(${scrollY * (0.3 + index * 0.1)}px)`;
    });
  });

  // Stagger animations for service cards
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card, index) => {
    if (gsap) {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    }
  });
}

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll("[data-counter]");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-counter"));
    const duration = 2000;
    const start = Date.now();

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * target);

      counter.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  });
}

// Observe counter section
function initCounterAnimation() {
  const counterSection = document.querySelector("[data-counter-section]");
  if (!counterSection) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("animated")
        ) {
          entry.target.classList.add("animated");
          animateCounters();
        }
      });
    },
    { threshold: 0.5 }
  );

  counterObserver.observe(counterSection);
}

// Portfolio image lightbox
function initPortfolioLightbox() {
  const portfolioImages = document.querySelectorAll("[data-lightbox]");

  console.log("Portfolio lightbox items found:", portfolioImages.length);

  if (portfolioImages.length === 0) {
    console.log("No portfolio lightbox items found");
    return;
  }

  portfolioImages.forEach((item, index) => {
    item.style.cursor = "pointer";

    // Debug: Log what we found
    const imgElement = item.querySelector("img");
    if (imgElement) {
      console.log(
        `Item ${index}: Image src =`,
        imgElement.src,
        "alt =",
        imgElement.alt
      );
    }

    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Get the image from inside the item
      const imgElement = item.querySelector("img");
      if (!imgElement) {
        console.warn("No image found in lightbox item");
        return;
      }

      // IMPORTANT: Get src from the data attribute first, then from the HTML attribute, then from .src property
      let imgSrc = imgElement.dataset.src || imgElement.getAttribute("src") || imgElement.src;
      let imgAlt = imgElement.alt || imgElement.getAttribute("alt") || "Portfolio Image";

      // Debug logging
      console.log("imgElement:", imgElement);
      console.log("imgSrc attempts:", {
        dataset: imgElement.dataset.src,
        attribute: imgElement.getAttribute("src"),
        property: imgElement.src
      });

      // Ensure src is valid
      if (!imgSrc || imgSrc === "undefined" || imgSrc === "") {
        console.error("Image src is invalid:", imgSrc);
        console.error("Full imgElement:", imgElement.outerHTML);
        alert("Error loading image. Please try again.");
        return;
      }

      console.log("Opening lightbox with image src:", imgSrc, "alt:", imgAlt);

      const modal = document.createElement("div");
      modal.className =
        "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm";

      // Use the full URL directly - no need to sanitize for URLs
      modal.innerHTML = `
        <div class="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden">
          <button class="absolute top-4 right-4 text-white hover:text-gold transition z-10 text-2xl font-bold" onclick="this.closest('.fixed').remove()">
            ×
          </button>
          <div class="relative bg-gray-800 flex items-center justify-center min-h-96">
            <img 
              src="${imgSrc}" 
              alt="${imgAlt}" 
              class="w-full h-auto max-h-screen object-contain" 
              onerror="
                this.parentElement.innerHTML = '<div class=\"flex flex-col items-center justify-center text-white p-8 w-full\"><p class=\"text-lg mb-4\">⚠️ Error loading image</p><p class=\"text-sm text-gray-300\">The image file could not be loaded. Please try again.</p><p class=\"text-xs text-gray-500 mt-4\">URL: ${imgSrc}</p></div>';
                console.error('Image failed to load from lightbox:', this.src);
              "
              onload="console.log('Image loaded successfully:', this.src)"
            >
          </div>
          <p class="p-4 text-white text-center text-sm">${imgAlt}</p>
        </div>
      `;

      document.body.appendChild(modal);

      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
      });

      // Close on ESC key
      const closeOnEsc = (e) => {
        if (e.key === "Escape") {
          modal.remove();
          document.removeEventListener("keydown", closeOnEsc);
        }
      };
      document.addEventListener("keydown", closeOnEsc);
    });
  });
}

// Initialize all animations
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initAnimations();
    initCounterAnimation();
    initPortfolioLightbox();
  });
} else {
  initAnimations();
  initCounterAnimation();
  initPortfolioLightbox();
}

// CSS animations will be defined in styles/custom.css

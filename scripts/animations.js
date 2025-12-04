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
  
  if (portfolioImages.length === 0) {
    console.log("No portfolio lightbox items found");
    return;
  }

  portfolioImages.forEach((item) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Get the image from inside the item
      const imgElement = item.querySelector("img");
      if (!imgElement) {
        console.warn("No image found in lightbox item");
        return;
      }

      const imgSrc = imgElement.src;
      const imgAlt = imgElement.alt || "Portfolio Image";
      
      console.log("Opening lightbox with image:", imgSrc);

      const modal = document.createElement("div");
      modal.className =
        "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm";
      modal.innerHTML = `
        <div class="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden">
          <button class="absolute top-4 right-4 text-white hover:text-gold transition z-10 text-2xl font-bold" onclick="this.closest('.fixed').remove()">
            ×
          </button>
          <img src="${imgSrc}" alt="${imgAlt}" class="w-full h-auto" onerror="console.error('Image failed to load: ${imgSrc}')">
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

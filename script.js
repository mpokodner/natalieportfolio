// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(
    ".nav-link, .btn-learn-more, .footer-link"
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Check if it's an internal link
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href;
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });

          // Close mobile menu if open
          const navbarCollapse = document.querySelector(".navbar-collapse");
          if (navbarCollapse.classList.contains("show")) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            bsCollapse.hide();
          }
        }
      }
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector(".navbar");

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  }

  window.addEventListener("scroll", updateNavbar);
  updateNavbar(); // Call once on load

  // Performance Card Functionality
  const performanceCards = document.querySelectorAll(".performance-card");

  performanceCards.forEach((card) => {
    const performanceBtn = card.querySelector(".btn-performance");

    if (performanceBtn) {
      performanceBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        const performanceId = card.getAttribute("data-performance");

        // Here you can add functionality to open performance details
        console.log(`Opening performance ${performanceId}`);

        // Example: Open a modal or navigate to a new page
        alert(`Performance ${performanceId} details would be shown here.`);

        // Example of opening in new window:
        // window.open(`/performance/${performanceId}`, '_blank');
      });
    }
  });

  // Social Media Icons Functionality
  const socialIcons = document.querySelectorAll(
    ".social-icon, .footer-social-icon"
  );

  socialIcons.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      e.preventDefault();
      const iconClass = this.querySelector("i").className;
      let platform = "";

      if (iconClass.includes("instagram")) platform = "instagram";
      else if (iconClass.includes("facebook")) platform = "facebook";
      else if (iconClass.includes("twitter")) platform = "twitter";
      else if (iconClass.includes("linkedin")) platform = "linkedin";
      else if (iconClass.includes("pinterest")) platform = "pinterest";
      else if (iconClass.includes("youtube")) platform = "youtube";

      // Example URLs - replace with actual social media URLs
      const socialUrls = {
        instagram: "https://instagram.com/nataliemarie",
        facebook: "https://facebook.com/nataliemarie",
        twitter: "https://twitter.com/nataliemarie",
        linkedin: "https://linkedin.com/in/nataliemarie",
        pinterest: "https://pinterest.com/nataliemarie",
        youtube: "https://youtube.com/@nataliemarie",
      };

      if (socialUrls[platform]) {
        window.open(socialUrls[platform], "_blank");
      }
    });
  });

  // Image Loading Animation
  const images = document.querySelectorAll(".performance-image");

  images.forEach((img) => {
    // Add loading class initially
    img.classList.add("loading");

    // Remove loading class when image loads
    img.addEventListener("load", function () {
      this.classList.remove("loading");
    });

    // Handle error case
    img.addEventListener("error", function () {
      console.log("Image failed to load:", this.src);
      this.classList.remove("loading");
      // Optionally set a placeholder image
      // this.src = 'images/placeholder.jpg';
    });
  });

  // Performance Card Touch Support
  if ("ontouchstart" in window) {
    performanceCards.forEach((card) => {
      card.addEventListener("touchstart", function () {
        // For mobile devices, toggle the overlay on touch
        const overlay = this.querySelector(".performance-overlay");
        const isVisible = overlay.style.opacity === "1";

        // Hide all other overlays
        performanceCards.forEach((otherCard) => {
          if (otherCard !== this) {
            otherCard.querySelector(".performance-overlay").style.opacity = "0";
          }
        });

        // Toggle this overlay
        overlay.style.opacity = isVisible ? "0" : "1";
      });
    });
  }

  // Email Button Functionality
  const emailBtn = document.querySelector(".btn-email");

  if (emailBtn) {
    emailBtn.addEventListener("click", function (e) {
      // The mailto link will handle opening the email client
      console.log("Email button clicked");

      // Optional: Add click tracking or analytics here
      // gtag('event', 'click', { event_category: 'contact', event_label: 'email' });
    });
  }

  // Active Navigation Link Highlighting
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-link");

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach((item) => {
          item.classList.remove("active");
          if (item.getAttribute("href") === `#${sectionId}`) {
            item.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation);
  highlightNavigation(); // Call once on load

  // Keyboard Navigation Support
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      // Close mobile menu on escape key
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        bsCollapse.hide();
      }
    }
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".about-paragraph, .performance-card"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Prevent default behavior for placeholder links
document.addEventListener("click", function (e) {
  if (e.target.tagName === "A" && e.target.getAttribute("href") === "#") {
    e.preventDefault();
  }
});

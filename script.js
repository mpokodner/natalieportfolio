// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// Performance Card Functionality
document.addEventListener("DOMContentLoaded", function () {
  const performanceCards = document.querySelectorAll(".performance-card");

  performanceCards.forEach((card) => {
    const performanceBtn = card.querySelector(".performance-btn");

    if (performanceBtn) {
      performanceBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent card click event
        const performanceId = card.getAttribute("data-performance");

        // Here you can add functionality to open performance details
        // For now, we'll just show an alert
        alert(
          `Opening performance ${performanceId}. This would link to a detailed performance page.`
        );

        // Example of how to open a new page:
        // window.open(`performance-${performanceId}.html`, '_blank');
      });
    }
  });
});

// Navbar Background on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Image Loading Animation
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.classList.remove("loading");
    });

    img.addEventListener("error", function () {
      console.log("Image failed to load:", this.src);
    });
  });
});

// Performance Card Hover Effects for Touch Devices
document.addEventListener("DOMContentLoaded", function () {
  const performanceCards = document.querySelectorAll(".performance-card");

  performanceCards.forEach((card) => {
    let isHovered = false;

    // For touch devices, show overlay on touch
    card.addEventListener("touchstart", function () {
      if (!isHovered) {
        this.querySelector(".performance-overlay").style.opacity = "1";
        isHovered = true;
      } else {
        this.querySelector(".performance-overlay").style.opacity = "0";
        isHovered = false;
      }
    });

    // For desktop, use hover
    card.addEventListener("mouseenter", function () {
      if (!("ontouchstart" in window)) {
        this.querySelector(".performance-overlay").style.opacity = "1";
      }
    });

    card.addEventListener("mouseleave", function () {
      if (!("ontouchstart" in window)) {
        this.querySelector(".performance-overlay").style.opacity = "0";
      }
    });
  });
});

// Email Button Functionality
document.addEventListener("DOMContentLoaded", function () {
  const emailBtn = document.querySelector(".email-btn");

  if (emailBtn) {
    emailBtn.addEventListener("click", function (e) {
      // The mailto link will handle opening the email client
      // This is just for additional functionality if needed
      console.log("Email button clicked");
    });
  }
});

// Social Media Icons Functionality
document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelectorAll(".social-icon");

  socialIcons.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      e.preventDefault();
      const platform = this.querySelector("i").classList[1].split("-")[1];

      // Example URLs - replace with actual social media URLs
      const socialUrls = {
        instagram: "https://instagram.com/nataliemarie",
        youtube: "https://youtube.com/@nataliemarie",
      };

      if (socialUrls[platform]) {
        window.open(socialUrls[platform], "_blank");
      }
    });
  });
});

// Add loading state to performance images
document.addEventListener("DOMContentLoaded", function () {
  const performanceImages = document.querySelectorAll(".performance-image");

  performanceImages.forEach((img) => {
    img.classList.add("loading");

    img.addEventListener("load", function () {
      this.classList.remove("loading");
    });
  });
});

// Keyboard Navigation Support
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // Close mobile menu on escape key
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }
});

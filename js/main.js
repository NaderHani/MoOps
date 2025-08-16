// Modern JavaScript for MoOps Portfolio
console.log("Starting MoOps Portfolio JavaScript...");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded - Initializing...");

  // Initialize AOS Animation Library
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    offset: 100,
  });

  // Enhanced Navigation Menu Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");

      // Prevent body scroll when menu is open
      document.body.style.overflow = navMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close menu when clicking on nav links
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // Enhanced Smooth Scroll with offset for fixed navbar
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const targetPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }

  // Update all smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      if (target && target !== "#") {
        smoothScroll(target);
      }
    });
  });

  // Enhanced Active Navigation Link Detection
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    const scrollPos = window.scrollY + navbarHeight + 100;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const navLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );

      if (navLink) {
        if (scrollPos >= top && scrollPos <= bottom) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLink.classList.add("active");
        }
      }
    });
  }

  // Navbar scroll effect
  function handleNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "var(--shadow-md)";
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "var(--shadow-sm)";
      }
    }
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById("back-to-top");

  function toggleBackToTopBtn() {
    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Portfolio Section Data
  const portfolioData = [
    {
      id: 1,
      title: "حملة إعلانية لمطعم",
      description:
        "تصميم حملة إعلانية متكاملة لمطعم محلي تشمل فيديو موشن جرافيك وتصاميم للسوشيال ميديا",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&q=80",
      category: "advertising",
      tags: ["موشن جرافيك", "إعلان", "مطاعم"],
    },
    {
      id: 2,
      title: "فيديو موشن جرافيك تعريفي",
      description:
        "إنتاج فيديو موشن جرافيك لشركة تقنية للتعريف بخدماتها بطريقة مبسطة وجذابة",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80",
      category: "motion",
      tags: ["موشن جرافيك", "فيديو تعريفي", "شركات"],
    },
    {
      id: 3,
      title: "إدارة صفحة سوشيال ميديا",
      description:
        "إدارة شاملة لصفحة Instagram لعلامة تجارية في مجال الأزياء مع إنشاء المحتوى اليومي",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
      category: "social",
      tags: ["سوشيال ميديا", "Instagram", "أزياء"],
    },
    {
      id: 4,
      title: "تصميم شعار وهوية بصرية",
      description:
        "تصميم شعار وهوية بصرية متكاملة لشركة ناشئة في مجال التكنولوجيا",
      image:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80",
      category: "design",
      tags: ["شعار", "هوية بصرية", "شركات ناشئة"],
    },
    {
      id: 5,
      title: "حملة إعلانية للعقارات",
      description:
        "تصميم حملة إعلانية متكاملة لشركة عقارات تشمل فيديوهات ترويجية وتصاميم رقمية",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
      category: "advertising",
      tags: ["عقارات", "فيديو ترويجي", "حملات"],
    },
    {
      id: 6,
      title: "إنفوجرافيك تعليمي",
      description:
        "تصميم سلسلة من الإنفوجرافيك التعليمي لمؤسسة تعليمية لشرح المفاهيم بطريقة بصرية",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
      category: "design",
      tags: ["إنفوجرافيك", "تعليم", "تصميم بصري"],
    },
    {
      id: 7,
      title: "محتوى سوشيال ميديا للصحة",
      description:
        "إنشاء محتوى متكامل لصفحة Instagram لعيادة طبية مع تصاميم طبية متخصصة",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
      category: "social",
      tags: ["صحة", "طب", "محتوى طبي"],
    },
    {
      id: 8,
      title: "انيميشن شرح خدمة",
      description:
        "إنتاج فيديو انيميشن لشرح خدمة مالية بطريقة مبسطة ومفهومة للعملاء",
      image:
        "https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c1?w=600&q=80",
      category: "motion",
      tags: ["انيميشن", "خدمات مالية", "شرح"],
    },
  ];

  // Render Portfolio Items
  function renderPortfolio(items = portfolioData) {
    console.log("Rendering portfolio items...", items.length);
    const portfolioGrid = document.getElementById("portfolio-grid");
    if (!portfolioGrid) {
      console.error("Portfolio grid not found!");
      return;
    }

    portfolioGrid.innerHTML = "";

    items.forEach((item, index) => {
      const portfolioItem = document.createElement("div");
      portfolioItem.className = `portfolio-item ${item.category}`;
      portfolioItem.setAttribute("data-aos", "fade-up");
      portfolioItem.setAttribute("data-aos-delay", (index * 100).toString());

      portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${
        item.title
      }" class="portfolio-image" loading="lazy">
                <div class="portfolio-content">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p class="portfolio-description">${item.description}</p>
                    <div class="portfolio-tags">
                        ${item.tags
                          .map(
                            (tag) => `<span class="portfolio-tag">${tag}</span>`
                          )
                          .join("")}
                    </div>
                    <a href="#" class="portfolio-link">عرض التفاصيل →</a>
                </div>
            `;

      portfolioGrid.appendChild(portfolioItem);
    });

    console.log("Portfolio rendered successfully!");
    // Re-initialize AOS for new elements
    AOS.refresh();
  }

  // Portfolio Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Filter clicked:", button.getAttribute("data-filter"));

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter items
      const filterValue = button.getAttribute("data-filter");
      let filteredItems = portfolioData;

      if (filterValue !== "all") {
        filteredItems = portfolioData.filter(
          (item) => item.category === filterValue
        );
      }

      console.log("Filtered items:", filteredItems.length);

      // Animate out
      const portfolioItems = document.querySelectorAll(".portfolio-item");
      portfolioItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "scale(0.8)";
      });

      // Render new items after animation
      setTimeout(() => {
        renderPortfolio(filteredItems);
      }, 300);
    });
  });

  // Animated Counter for Statistics
  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const isPercentage = element.textContent.includes("%");

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      let displayValue = Math.floor(current);
      if (target > 10 && !isPercentage) {
        displayValue += "+";
      } else if (isPercentage) {
        displayValue += "%";
      }

      element.textContent = displayValue;
    }, 30);
  }

  // Statistics Counter Observer
  const statNumbers = document.querySelectorAll(".stat-number");
  console.log("Found stat numbers:", statNumbers.length);

  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const count = parseInt(target.getAttribute("data-count"));
          console.log("Animating counter:", count);
          animateCounter(target, count);
          observer.unobserve(target);
        }
      });
    });

    statNumbers.forEach((stat) => {
      observer.observe(stat);
    });
  }

  // Form Enhancement
  const contactFormElement = document.querySelector(".contact-form");
  if (contactFormElement) {
    const formInputs = contactFormElement.querySelectorAll("input, textarea");

    formInputs.forEach((input) => {
      // Add focus/blur effects
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        if (!input.value) {
          input.parentElement.classList.remove("focused");
        }
      });

      // Check if input has value on load
      if (input.value) {
        input.parentElement.classList.add("focused");
      }
    });

    // Contact Form Handling
    contactFormElement.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitButton = contactFormElement.querySelector(
        'button[type="submit"]'
      );
      const originalText = submitButton.innerHTML;

      // Show loading state
      submitButton.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; border-top: 2px solid white; animation: spin 1s linear infinite;"></div>
                    <span>جاري الإرسال...</span>
                </div>
            `;
      submitButton.disabled = true;

      // Simulate form submission
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Show success message
        showNotification(
          "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
          "success"
        );
        contactFormElement.reset();

        // Reset form focus states
        const formGroups = contactFormElement.querySelectorAll(".form-group");
        formGroups.forEach((group) => {
          group.classList.remove("focused");
        });
      } catch (error) {
        showNotification(
          "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
          "error"
        );
      } finally {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }
    });
  }

  // Notification System
  function showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            background: ${
              type === "success"
                ? "linear-gradient(135deg, #10b981 0%, #34d399 100%)"
                : "linear-gradient(135deg, #ef4444 0%, #f87171 100%)"
            };
            color: white;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            font-weight: 600;
        `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }

  // Window scroll events
  window.addEventListener("scroll", () => {
    updateActiveNavLink();
    handleNavbarScroll();
    toggleBackToTopBtn();
  });

  // Initial calls
  updateActiveNavLink();

  console.log("MoOps Portfolio - Basic Setup Complete");
});

// Window load event for final setup
window.addEventListener("load", () => {
  console.log("Window loaded - Final setup...");

  document.body.classList.add("loaded");

  // Trigger AOS refresh after load
  setTimeout(() => {
    AOS.refresh();
  }, 100);

  // Smooth reveal animation for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all cards for animation
  document
    .querySelectorAll(".service-card, .portfolio-item, .testimonial-card")
    .forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      cardObserver.observe(card);
    });

  // Initialize Portfolio
  const portfolioGrid = document.getElementById("portfolio-grid");
  if (portfolioGrid) {
    console.log("Initializing portfolio...");
    // Portfolio Data
    const portfolioData = [
      {
        id: 1,
        title: "حملة إعلانية لمطعم",
        description:
          "تصميم حملة إعلانية متكاملة لمطعم محلي تشمل فيديو موشن جرافيك وتصاميم للسوشيال ميديا",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&q=80",
        category: "advertising",
        tags: ["موشن جرافيك", "إعلان", "مطاعم"],
      },
      {
        id: 2,
        title: "فيديو موشن جرافيك تعريفي",
        description:
          "إنتاج فيديو موشن جرافيك لشركة تقنية للتعريف بخدماتها بطريقة مبسطة وجذابة",
        image:
          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80",
        category: "motion",
        tags: ["موشن جرافيك", "فيديو تعريفي", "شركات"],
      },
      {
        id: 3,
        title: "إدارة صفحة سوشيال ميديا",
        description:
          "إدارة شاملة لصفحة Instagram لعلامة تجارية في مجال الأزياء مع إنشاء المحتوى اليومي",
        image:
          "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
        category: "social",
        tags: ["سوشيال ميديا", "Instagram", "أزياء"],
      },
      {
        id: 4,
        title: "تصميم شعار وهوية بصرية",
        description:
          "تصميم شعار وهوية بصرية متكاملة لشركة ناشئة في مجال التكنولوجيا",
        image:
          "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80",
        category: "design",
        tags: ["شعار", "هوية بصرية", "شركات ناشئة"],
      },
      {
        id: 5,
        title: "حملة إعلانية للعقارات",
        description:
          "تصميم حملة إعلانية متكاملة لشركة عقارات تشمل فيديوهات ترويجية وتصاميم رقمية",
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
        category: "advertising",
        tags: ["عقارات", "فيديو ترويجي", "حملات"],
      },
      {
        id: 6,
        title: "إنفوجرافيك تعليمي",
        description:
          "تصميم سلسلة من الإنفوجرافيك التعليمي لمؤسسة تعليمية لشرح المفاهيم بطريقة بصرية",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
        category: "design",
        tags: ["إنفوجرافيك", "تعليم", "تصميم بصري"],
      },
      {
        id: 7,
        title: "محتوى سوشيال ميديا للصحة",
        description:
          "إنشاء محتوى متكامل لصفحة Instagram لعيادة طبية مع تصاميم طبية متخصصة",
        image:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
        category: "social",
        tags: ["صحة", "طب", "محتوى طبي"],
      },
      {
        id: 8,
        title: "انيميشن شرح خدمة",
        description:
          "إنتاج فيديو انيميشن لشرح خدمة مالية بطريقة مبسطة ومفهومة للعملاء",
        image:
          "https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c1?w=600&q=80",
        category: "motion",
        tags: ["انيميشن", "خدمات مالية", "شرح"],
      },
    ];

    // Render Portfolio Function
    function renderPortfolio(items = portfolioData) {
      console.log("Rendering portfolio items...", items.length);
      portfolioGrid.innerHTML = "";

      items.forEach((item, index) => {
        const portfolioItem = document.createElement("div");
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.setAttribute("data-aos", "fade-up");
        portfolioItem.setAttribute("data-aos-delay", (index * 100).toString());

        portfolioItem.innerHTML = `
                    <img src="${item.image}" alt="${
          item.title
        }" class="portfolio-image" loading="lazy">
                    <div class="portfolio-content">
                        <h3 class="portfolio-title">${item.title}</h3>
                        <p class="portfolio-description">${item.description}</p>
                        <div class="portfolio-tags">
                            ${item.tags
                              .map(
                                (tag) =>
                                  `<span class="portfolio-tag">${tag}</span>`
                              )
                              .join("")}
                        </div>
                        <a href="#" class="portfolio-link">عرض التفاصيل →</a>
                    </div>
                `;

        portfolioGrid.appendChild(portfolioItem);
      });

      console.log("Portfolio rendered successfully!");
      // Re-initialize AOS for new elements
      AOS.refresh();
    }

    // Initialize portfolio immediately
    renderPortfolio();

    // Setup portfolio filters
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("Filter clicked:", button.getAttribute("data-filter"));

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter items
        const filterValue = button.getAttribute("data-filter");
        let filteredItems = portfolioData;

        if (filterValue !== "all") {
          filteredItems = portfolioData.filter(
            (item) => item.category === filterValue
          );
        }

        console.log("Filtered items:", filteredItems.length);

        // Animate out
        const portfolioItems = document.querySelectorAll(".portfolio-item");
        portfolioItems.forEach((item) => {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
        });

        // Render new items after animation
        setTimeout(() => {
          renderPortfolio(filteredItems);
        }, 300);
      });
    });
  }

  // Scroll to Top on Page Load
  window.scrollTo(0, 0);

  console.log("MoOps Portfolio - Loaded Successfully! 🚀");
});

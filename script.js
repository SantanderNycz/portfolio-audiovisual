// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Portfolio Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const videoItems = document.querySelectorAll(".video-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    videoItems.forEach((item) => {
      if (filterValue === "all") {
        item.classList.remove("hidden");
        setTimeout(() => {
          item.style.display = "block";
        }, 10);
      } else {
        if (item.getAttribute("data-category") === filterValue) {
          item.classList.remove("hidden");
          setTimeout(() => {
            item.style.display = "block";
          }, 10);
        } else {
          item.classList.add("hidden");
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      }
    });
  });
});

// Video Modal
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.querySelector(".close");
const playButtons = document.querySelectorAll(".play-button");

// Sample video URLs (replace with actual video URLs)
const videoUrls = {
  "hero-video": "/hero-video-placeholder.png",
  "comercial-1": "/commercial-video-placeholder.png",
  "doc-1": "/placeholder-6gno3.png",
  "evento-1": "/event-video-placeholder.png",
  "corp-1": "/corporate-video-placeholder.png",
  "music-1": "/music-video-placeholder.png",
  "produto-1": "/product-video-placeholder.png",
};

playButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const videoId = button.getAttribute("data-video");

    // For demo purposes, we'll show a placeholder
    // In a real implementation, you would set the video source
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Replace this with actual video loading
    console.log(`Loading video: ${videoId}`);
    // modalVideo.src = videoUrls[videoId];
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  modalVideo.pause();
  modalVideo.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    modalVideo.pause();
    modalVideo.src = "";
  }
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(25, 25, 25, 0.98)";
  } else {
    header.style.background = "rgba(25, 25, 25, 0.95)";
  }
});

// Contact form
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
  const message = contactForm.querySelector("textarea").value;

  // Simple validation
  if (name && email && subject && message) {
    // Here you would typically send the data to a server
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    contactForm.reset();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".video-item, .stat, .contact-info, .contact-form")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

// Add loading animation for video thumbnails
document.querySelectorAll(".video-thumbnail img").forEach((img) => {
  img.addEventListener("load", () => {
    img.style.opacity = "1";
  });
  img.style.opacity = "0";
  img.style.transition = "opacity 0.3s ease";
});

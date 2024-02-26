ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".tagline", { delay: 500 });

ScrollReveal().reveal(".home-content, .heading", { origin: "top" }); // Corrected the selector for heading

ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" } // Corrected the typo in "bottom"
);

ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" }); // Corrected the selector for h1

ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" }); // Corrected the selector for p

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Developer", "Student at RVCE"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
});

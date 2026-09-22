// Mobile navigation toggle
// Opens/closes the stacked nav menu on small screens and keeps the
// hamburger icon + aria-expanded state in sync with the menu state.

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-active", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Close the mobile menu automatically after a nav link is clicked,
// so the menu doesn't stay open when navigating to a section.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

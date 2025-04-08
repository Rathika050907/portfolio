// Toggle nav menu (for mobile view)
function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Show the clicked section only
function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");

  sections.forEach((section) => {
    // Hide all sections
    section.style.display = "none";
    section.classList.remove("animate-section");
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = "block";

    // Trigger slide-in animation
    setTimeout(() => {
      targetSection.classList.add("animate-section");
    }, 50);

    // Smooth scroll to the section
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Handle link clicks
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("href").substring(1);
    showSection(sectionId);
  });
});

// On page load, show home section
window.onload = () => {
  showSection("home");
};

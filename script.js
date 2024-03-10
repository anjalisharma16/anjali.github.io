document.addEventListener("DOMContentLoaded", (event) => {
  // Smooth Scrolling for all anchor tags
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Simulate dynamic loading for projects (example)
  setTimeout(() => {
    document.getElementById("projects-loading").style.display = "none"; // Hide loading text
    document.getElementById("projects-container").style.display = "block"; // Show projects
  }, 1500); // Wait 1.5 seconds

  // Light/Dark Mode Toggle
  const modeToggle = document.getElementById("mode-toggle");
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    modeToggle.innerText = document.body.classList.contains("dark-mode")
      ? "Light Mode"
      : "Dark Mode";
  });
});

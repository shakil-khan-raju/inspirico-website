// Inspirico starter website interactions.
// Before publishing, replace the placeholder email in this file and in index.html.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById("enquiry-form");
const status = document.getElementById("form-status");
const BUSINESS_EMAIL = "YOUR_EMAIL@example.com"; // Replace with your real business email.

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !service) {
      status.textContent = "Please complete your name, email and service selection.";
      return;
    }
    if (BUSINESS_EMAIL === "YOUR_EMAIL@example.com") {
      status.textContent = "Demo mode: please replace YOUR_EMAIL@example.com in script.js with your business email before using this form.";
      return;
    }

    const subject = encodeURIComponent(`Inspirico enquiry: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterested in: ${service}\n\nMessage:\n${message || "No additional message."}`
    );
    status.textContent = "Opening your email app with your enquiry…";
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  });
}

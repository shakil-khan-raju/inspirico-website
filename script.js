// Inspirico website interactions
// Business email: inspiricobd@gmail.com

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
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

// Automatically update copyright year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Enquiry form
const form = document.getElementById("enquiry-form");
const status = document.getElementById("form-status");

const BUSINESS_EMAIL = "inspiricobd@gmail.com";

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    // Validate required fields
    if (!name || !email || !service) {
      status.textContent =
        "Please enter your name, email address, and select a service.";
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      status.textContent =
        "Please enter a valid email address.";
      return;
    }

    // Prepare enquiry email
    const subject = encodeURIComponent(
      `Inspirico Enquiry: ${service}`
    );

    const body = encodeURIComponent(
      `Hello Inspirico Team,

I would like to enquire about your services.

Name: ${name}
Email: ${email}
Interested in: ${service}

Message:
${message || "No additional message provided."}

Best regards,
${name}`
    );

    // Open the visitor's default email application
    const mailtoLink =
      `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;

    status.textContent =
      "Opening your email application. Please send the prepared enquiry to complete your submission.";

    window.location.href = mailtoLink;
  });
}

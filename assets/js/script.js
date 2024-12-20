'use strict';

// Element toggle function
const toggleElement = (element) => {
  element.classList.toggle("active");
};

// Sidebar toggle for mobile
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn?.addEventListener("click", () => {
  toggleElement(sidebar);
});

// Page navigation functionality
const navLinks = document.querySelectorAll(".sidebar ul li a");
const sections = document.querySelectorAll(".section");

// Add event listener to all navigation links
navLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Activate the clicked link and corresponding section
    navLinks.forEach((nav) => nav.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));

    link.classList.add("active");
    sections[index].classList.add("active");

    // Scroll to the top of the section
    sections[index].scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form validation
const form = document.querySelector("form");
const formInputs = form?.querySelectorAll("input, textarea");
const formSubmit = form?.querySelector("button[type='submit']");

formInputs?.forEach((input) => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formSubmit.removeAttribute("disabled");
    } else {
      formSubmit.setAttribute("disabled", "disabled");
    }
  });
});

// Project filter functionality
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

filterButtons?.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.dataset.filter;

    // Toggle button active state
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Show/Hide projects based on filter
    filterItems.forEach((item) => {
      const itemCategory = item.dataset.category;

      if (filterValue === "all" || itemCategory === filterValue) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});

// Testimonials modal functionality
const testimonials = document.querySelectorAll("[data-testimonials-item]");
const modal = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");

// Open modal
testimonials?.forEach((testimonial) => {
  testimonial.addEventListener("click", () => {
    const avatar = testimonial.querySelector("[data-testimonials-avatar]").src;
    const name = testimonial.querySelector("[data-testimonials-title]").textContent;
    const text = testimonial.querySelector("[data-testimonials-text]").textContent;

    modal.querySelector("[data-modal-img]").src = avatar;
    modal.querySelector("[data-modal-title]").textContent = name;
    modal.querySelector("[data-modal-text]").textContent = text;

    toggleElement(modal);
    toggleElement(overlay);
  });
});

// Close modal
[modalCloseBtn, overlay]?.forEach((closeTrigger) => {
  closeTrigger.addEventListener("click", () => {
    toggleElement(modal);
    toggleElement(overlay);
  });
});

// ======= Mobile Navigation Toggle =======
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      nav.classList.toggle("open");
    });
  }
});

// ======= Popup Login & Register Form =======
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("#login-btn");
  const popupContainer = document.querySelector(".popup-container");
  const closePopup = document.querySelector(".close-popup");
  const loginForm = document.querySelector("#login-form");
  const registerForm = document.querySelector("#register-form");
  const toggleToRegister = document.querySelector("#to-register");
  const toggleToLogin = document.querySelector("#to-login");

  // Show popup
  if (loginBtn && popupContainer) {
    loginBtn.addEventListener("click", () => {
      popupContainer.style.display = "flex";
    });
  }

  // Close popup
  if (closePopup) {
    closePopup.addEventListener("click", () => {
      popupContainer.style.display = "none";
    });
  }

  // Switch between login and register
  if (toggleToRegister && toggleToLogin) {
    toggleToRegister.addEventListener("click", () => {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    });

    toggleToLogin.addEventListener("click", () => {
      registerForm.style.display = "none";
      loginForm.style.display = "block";
    });
  }

  // ======== 🍔 HAMBURGER MENU TOGGLE ========
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Optional: close menu when a link is clicked (for mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

  // ======= Form Submission (Demo) =======
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your form has been submitted successfully.");
      form.reset();
    });
  });
});

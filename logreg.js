document.addEventListener("DOMContentLoaded", () => {
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");

  const closeLogin = document.getElementById("closeLogin");
  const closeRegister = document.getElementById("closeRegister");

  // Open modals
  loginBtn.onclick = () => loginModal.style.display = "block";
  registerBtn.onclick = () => registerModal.style.display = "block";

  // Close modals
  closeLogin.onclick = () => loginModal.style.display = "none";
  closeRegister.onclick = () => registerModal.style.display = "none";

  // Close modal when clicking outside
  window.onclick = (event) => {
    if (event.target === loginModal) loginModal.style.display = "none";
    if (event.target === registerModal) registerModal.style.display = "none";
  };

  // Form submission (temporary)
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Welcome back 🌾");
    loginModal.style.display = "none";
  });

  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Account created successfully 🌱");
    registerModal.style.display = "none";
  });
});


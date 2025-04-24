// Greet user based on time of day
function greetUser() {
  const hour = new Date().getHours();
  let greeting = "Hello";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  const alertBox = document.createElement("div");
  alertBox.textContent = `${greeting}, welcome to my portfolio!`;
  alertBox.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0,255,255,0.4);
    color: #fff;
    padding: 1rem;
    border-radius: 10px;
    font-weight: bold;
    z-index: 999;
    backdrop-filter: blur(6px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(alertBox);
  setTimeout(() => alertBox.remove(), 4000);
}

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      const phonePattern = /^[0-9]{9,14}$/;

      if (!name || !email || !phone || !message) {
        alert("Please fill in all fields.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return;
      }

      if (!phonePattern.test(phone)) {
        alert("Enter a valid phone number.");
        return;
      }

      alert("Message sent successfully! Thank you.");
      form.reset();
    });
  }

  // Toggle dark mode with localStorage support
  const toggleBtn = document.getElementById("toggleTheme");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");

      // Save preference
      const isDark = document.body.classList.contains("dark-theme");
      localStorage.setItem("preferredTheme", isDark ? "dark" : "light");
    });

    // Load preference on page load
    const savedTheme = localStorage.getItem("preferredTheme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }

  // Card click effect on portfolio.html
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("highlighted");
      card.style.transition = "all 0.3s ease";
      card.style.transform = card.classList.contains("highlighted") ? "scale(1.03)" : "scale(1)";
      card.style.boxShadow = card.classList.contains("highlighted")
        ? "0 6px 20px rgba(0,255,255,0.3)"
        : "0 4px 12px rgba(0,0,0,0.1)";
    });
  });
});

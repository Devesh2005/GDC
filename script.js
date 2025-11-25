import * as emailjs from "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/+esm";

// EmailJS KEYS
const EMAILJS_PUBLIC_KEY = "M-uuWpF11udB9j0gD";
const EMAILJS_SERVICE_ID = "service_nuat95n";
const EMAILJS_TEMPLATE_ID = "template_mrggm7g";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("❌ contact-form not found!");
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      console.log("Sending email…");

      const response = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form
      );

      console.log("✅ EmailJS response:", response);

      alert("Email sent successfully!");
      document.getElementById("confirmationMessage").style.display = "block";
      form.reset();

    } catch (err) {
      console.error("❌ EmailJS Error:", err);

      if (err.status) {
        console.error("Status:", err.status, "Text:", err.text);
      }

      alert("Failed to send email. Check console for details.");
    }
  });
});


window.funhome = () => {
  const logo = document.querySelector(".logo");
  const nav = document.querySelector(".nav");

  if (!logo || !nav) return;

  // Reset the animation so it can replay
  logo.classList.remove("glow-fade");
  nav.classList.remove("nav-glow");

  void logo.offsetWidth;  // animation reset
  void nav.offsetWidth;

  // Play animations
  logo.classList.add("glow-fade");
  nav.classList.add("nav-glow");

  // Remove classes after animation ends
  setTimeout(() => logo.classList.remove("glow-fade"), 2500);
  setTimeout(() => nav.classList.remove("nav-glow"), 2000);
};

window.funabout = () => {
  const roles = document.getElementsByClassName("role");
  if (roles.length > 0) {
    const role = roles[0];
    const originalColor = window.getComputedStyle(role).color;

    setTimeout(() => {
      role.style.color = "yellow";
      role.style.transition = "color 0.5s ease-in, text-shadow 0.5s ease-in";
      role.style.textShadow = "0 0 5px yellow";
    }, 0);

    setTimeout(() => {
      role.style.color = "#102E50";
      role.style.textShadow = "0 0 5px black";
    }, 700);

    setTimeout(() => {
      role.style.color = "purple";
      role.style.textShadow = "0 0 5px purple";
    }, 1400);

    setTimeout(() => {
      role.style.color = originalColor;
      role.style.textShadow = "none";
    }, 2100);
  }
};


window.funworks = () => {
  const roles = document.getElementsByClassName("works");
  if (roles.length > 0) {
    const role = roles[0];
    const originalColor = window.getComputedStyle(role).color;

    setTimeout(() => {
      role.style.color = "yellow";
      role.style.transition = "color 0.5s ease-in, text-shadow 0.5s ease-in";
      role.style.textShadow = "0 0 5px yellow";
    }, 0);

    setTimeout(() => {
      role.style.color = "#0ae67cff";
      role.style.textShadow = "0 0 5px black";
    }, 700);

    setTimeout(() => {
      role.style.color = "purple";
      role.style.textShadow = "0 0 5px purple";
    }, 1400);

    setTimeout(() => {
      role.style.color = originalColor;
      role.style.textShadow = "none";
    }, 2100);
  }
};

window.funservices = () => {
  const roles = document.getElementsByClassName("service");
  if (roles.length > 0) {
    const role = roles[0];
    const originalColor = window.getComputedStyle(role).color;

    setTimeout(() => {
      role.style.color = "blue";
      role.style.transition = "color 0.5s ease-in, text-shadow 0.5s ease-in";
      role.style.textShadow = "0 0 5px yellow";
    }, 0);

    setTimeout(() => {
      role.style.color = "#0c77f0ff";
      role.style.textShadow = "0 0 5px black";
    }, 700);

    setTimeout(() => {
      role.style.color = "hotpink";
      role.style.textShadow = "0 0 5px purple";
    }, 1400);

    setTimeout(() => {
      role.style.color = originalColor;
      role.style.textShadow = "none";
    }, 2100);
  }
};

window.funcontact = () => {
  const roles = document.getElementsByClassName("contacts");
  if (roles.length > 0) {
    const role = roles[0];
    const originalColor = window.getComputedStyle(role).color;

    setTimeout(() => {
      role.style.color = "black";
      role.style.transition = "color 0.5s ease-in, text-shadow 0.5s ease-in";
      role.style.textShadow = "0 0 5px yellow";
    }, 0);

    setTimeout(() => {
      role.style.color = "#08f5d9ff";
      role.style.textShadow = "0 0 5px black";
    }, 700);

    setTimeout(() => {
      role.style.color = "maroon";
      role.style.textShadow = "0 0 5px purple";
    }, 1400);

    setTimeout(() => {
      role.style.color = originalColor;
      role.style.textShadow = "none";
    }, 2100);
  }
};
  /// Disable inspect keys
document.addEventListener("keydown", function (event) {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) ||
    (event.ctrlKey && event.key === "U")
  ) {
    event.preventDefault();
  }
});

// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

let lastScroll = 0;
const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // scrolling down → hide navbar
        navbar.classList.add('hide');
    } else {
        // scrolling up → show navbar
        navbar.classList.remove('hide');
    }

    lastScroll = currentScroll;
});

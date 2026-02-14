// Splash Screen Preloader
window.addEventListener("load", () => {
  const splashScreen = document.getElementById("splash-screen");
  const loadingPercentage = document.querySelector(".loading-percentage");
  const starsContainer = document.querySelector(".stars");

  // Create stars
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    starsContainer.appendChild(star);
  }

  // Update loading percentage
  let percentage = 0;
  const percentageInterval = setInterval(() => {
    percentage += 1;
    if (loadingPercentage) {
      loadingPercentage.textContent = percentage + "%";
    }
    if (percentage >= 100) {
      clearInterval(percentageInterval);
    }
  }, 30);

  // Hide splash screen after animation completes
  setTimeout(() => {
    splashScreen.classList.add("fade-out");
    setTimeout(() => {
      splashScreen.style.display = "none";
    }, 1000);
  }, 6000);
});


// Theme Toggle
const themeBtn = document.getElementById("theme-toggle");
const html = document.documentElement;
const themeIcon = themeBtn.querySelector("i");

// Check local storage
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);
updateIcon(savedTheme);

themeBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  if (theme === "dark") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

// Bento Menu Toggle
const bentoTrigger = document.getElementById("bento-trigger");
const bentoMenu = document.getElementById("bento-menu");
const bentoItems = document.querySelectorAll(".bento-item");

bentoTrigger.addEventListener("click", (e) => {
  e.stopPropagation();
  bentoMenu.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!bentoMenu.contains(e.target) && !bentoTrigger.contains(e.target)) {
    bentoMenu.classList.remove("active");
  }
});

// Close menu when clicking a link
bentoItems.forEach((item) => {
  item.addEventListener("click", () => {
    bentoMenu.classList.remove("active");
  });
});

// Text Morph
const morphElement = document.querySelector(".morph-text");
const texts = morphElement.getAttribute("data-text").split(",");
let textIndex = 0;

function morphText() {
  textIndex = (textIndex + 1) % texts.length;
  morphElement.style.opacity = 0;

  setTimeout(() => {
    morphElement.textContent = texts[textIndex];
    morphElement.style.opacity = 1;
  }, 500);
}

setInterval(morphText, 3000);

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("active");
}

function closeLightbox() {
  lightbox.classList.remove("active");
}

// Close lightbox on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

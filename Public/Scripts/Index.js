// Handle theme change
const themeDropdown = document.getElementById("bd-theme-dropdown");
const themeButtons = document.querySelectorAll("[data-bs-theme-value]");

themeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const themeValue = this.getAttribute("data-bs-theme-value");
    document.documentElement.setAttribute("data-bs-theme", themeValue);
    localStorage.setItem("theme", themeValue);
    themeButtons.forEach((button) => {
      button.classList.remove("active");
    });
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
  }
});

// Like Button Blinks
const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const icon = this.querySelector("svg");
    const message = document.createElement("div");
    message.classList.add("thank-you-message");
    message.textContent = "Thank you for your like!";
    message.style.fontFamily = "cursive";

    // Add blink class for blinking effect
    icon.classList.add("blink");

    // Append thank you message to the parent element of the button
    button.parentNode.appendChild(message);

    // Remove blink class and thank you message after 1 second
    setTimeout(() => {
      icon.classList.remove("blink");
      button.parentNode.removeChild(message);
    }, 1000);
  });
});

// Redirect to link on view button click
const viewButtons = document.querySelectorAll(".view");

viewButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const url = this.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    }
  });
});

const containerEl = document.querySelector(".conte");

const careers = [
  "MERN Developer",
  "UI UX Designer",
  "Software Engineer",
  "Java Fullstack Developer",
];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
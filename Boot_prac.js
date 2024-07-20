// JavaScript to handle theme change
const themeDropdown = document.getElementById('bd-theme-dropdown');
const themeButtons = document.querySelectorAll('[data-bs-theme-value]');

themeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const themeValue = this.getAttribute('data-bs-theme-value');
    document.documentElement.setAttribute('data-bs-theme', themeValue);
    localStorage.setItem('theme', themeValue);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
  }
});

//Like Button Blinks
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const icon = this.querySelector('svg');
    const message = document.createElement('div');
    message.classList.add('thank-you-message');
    message.textContent = 'Thank you for your like!';
    message.style.fontFamily = 'cursive';
    
    // Add blink class for blinking effect
    icon.classList.add('blink');
    
    // Append thank you message to the parent element of the button
    button.parentNode.appendChild(message);
    
    // Remove blink class and thank you message immediately
    setTimeout(() => {
      icon.classList.remove('blink');
      button.parentNode.removeChild(message);
    }, 1000);
  });
});

// Redirect to link on view button click
const viewButtons = document.querySelectorAll('.view');

viewButtons.forEach(button => {
  button.addEventListener('click', function() {
    const url = this.getAttribute('data-url');
    if (url) {
      window.location.href = url;
    }
  });
});



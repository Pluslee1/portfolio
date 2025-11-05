// Enhanced main.js with fixed typing animation
document.addEventListener('DOMContentLoaded', () => {
  // Fixed Typing animation
  const typingElem = document.querySelector('.typing');
  if (typingElem) {
    const text = typingElem.getAttribute('data-text');
    typingElem.textContent = ''; // Clear existing text
    let index = 0;

    function typeChar() {
      if (index < text.length) {
        typingElem.textContent += text.charAt(index);
        index++;
        setTimeout(typeChar, 100);
      } else {
        // Keep cursor blinking after typing is done
        typingElem.style.borderRight = '3px solid #8b5cf6';
        setInterval(() => {
          typingElem.style.borderRightColor = typingElem.style.borderRightColor === 'transparent' ? '#8b5cf6' : 'transparent';
        }, 800);
      }
    }

    // Start typing after a short delay
    setTimeout(typeChar, 500);
  }

  // Section scroll animation
  const sections = document.querySelectorAll('.section');
  function checkSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  }

  // Active navigation
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  window.addEventListener('scroll', checkSections);
  window.addEventListener('load', checkSections);
});
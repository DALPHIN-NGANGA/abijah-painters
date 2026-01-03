// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navUl.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }

  // Lightbox for gallery
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;

  if (lightbox) {
    galleryItems.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }

  // Contact form submit (placeholder; add real backend if needed)
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent!'); // Creative feedback
    });
  }
});

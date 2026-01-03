document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');
  const dropdowns = document.querySelectorAll('.dropdown');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navUl.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }

  // Mobile dropdown click
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        dropdown.querySelector('.dropdown-content').style.display = 
          (dropdown.querySelector('.dropdown-content').style.display === 'block') ? 'none' : 'block';
      }
    });
  });

  // Gallery lightbox (same)
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

  // Contact form (same)
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent!');
    });
  }
});

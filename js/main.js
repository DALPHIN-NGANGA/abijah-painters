document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.85)';
        }
    });

    // 2. Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const galleryImages = document.querySelectorAll('.portfolio-item img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
        });
    });

    closeBtn.onclick = () => lightbox.style.display = 'none';
    lightbox.onclick = (e) => {
        if (e.target !== lightboxImg) lightbox.style.display = 'none';
    };
});
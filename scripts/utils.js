
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    function addLogoImage() {
        const logoData = {
            src: 'images/logo.png',
            alt: 'Erruki Gulf Club Logo',
            class: 'logo'
        };

        const image = document.createElement('img');
        image.src = logoData.src;
        image.alt = logoData.alt;
        image.className = logoData.class;

        const bounding = image.getBoundingClientRect();
        if (bounding.top >= window.innerHeight || bounding.bottom <= 0) {
            image.setAttribute('loading', 'lazy');
        }

        const headerLink = document.querySelector('header a');
        if (headerLink) {
            headerLink.appendChild(image);
        }
    }

    addLogoImage();
});

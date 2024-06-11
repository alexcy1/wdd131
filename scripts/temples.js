document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = lastModified;

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const title = document.querySelector('.title');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        title.style.display = navLinks.classList.contains('open') ? 'none' : 'block';
        hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
});

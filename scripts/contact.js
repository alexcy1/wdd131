
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'success.html';
    });
});





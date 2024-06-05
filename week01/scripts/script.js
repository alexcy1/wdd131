// Show And Hide Menu
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', function() {
        navigation.classList.toggle('show');
    });
});

// CURRENT YEAR ------------------------------------------------------------------
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;


// LAST MODIFY ------------------------------------------------------------------
function padZero(number) {
    return number < 10 ? '0' + number : number;
}
function formatLastModifiedDate(dateString) {
    const date = new Date(dateString);
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}
const lastModifiedDate = document.lastModified;
const formattedDate = formatLastModifiedDate(lastModifiedDate);
document.getElementById('lastModifiedDateTime').textContent = formattedDate;


window.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var closeIcon = document.querySelector('.close-icon');
    var navigation = document.querySelector('.navigation');

    var screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        hamburger.style.display = 'block';
    }

    hamburger.addEventListener('click', function() {
        navigation.classList.toggle('show');
        hamburger.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        navigation.classList.remove('show');
        closeIcon.style.display = 'none';
        hamburger.style.display = 'block';
    });
});

window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var hamburger = document.querySelector('.hamburger');
    var closeIcon = document.querySelector('.close-icon');
    var navigation = document.querySelector('.navigation');

    if (screenWidth > 768) {
        hamburger.style.display = 'none';
        closeIcon.style.display = 'none';
        navigation.classList.remove('show');
    } else {
        hamburger.style.display = 'block';
        closeIcon.style.display = 'none';
        navigation.classList.remove('show');
    }
});








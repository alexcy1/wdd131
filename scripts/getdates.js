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


// Show And Hide Menu ------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', function() {
        navigation.classList.toggle('show');
    });
});



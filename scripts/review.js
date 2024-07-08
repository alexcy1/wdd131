document.addEventListener('DOMContentLoaded', function() {
    let reviewCounter = localStorage.getItem('reviewCounter');
    if (!reviewCounter) {
        reviewCounter = 0;
    } else {
        reviewCounter = parseInt(reviewCounter); 
    }
    reviewCounter++;
    localStorage.setItem('reviewCounter', reviewCounter);
    document.getElementById('review-counter').textContent = reviewCounter;
});

function padZero(num) {
    return num.toString().padStart(2, '0');
}

document.addEventListener('DOMContentLoaded', function() {
    const imageArray = [
        { src: 'images/about.webp', alt: 'Erruki Gulf Club', class: 'about-image' }
    ];

    imageArray.forEach(imageData => {
        const image = document.createElement('img');
        image.src = imageData.src;
        image.alt = imageData.alt;
        image.className = imageData.class;

        const bounding = image.getBoundingClientRect();
        if (bounding.top >= window.innerHeight || bounding.bottom <= 0) {
            image.setAttribute('loading', 'lazy');
        }

        document.querySelector('.about-image').appendChild(image);
    });
});

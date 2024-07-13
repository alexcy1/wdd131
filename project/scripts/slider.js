const images = [
    {
        src: "images/gulf2.webp",
        alt: "Welcome to Your Golfing Community",
        captionTitle: "Welcome to Your Golfing Community",
        captionText: "At Erruki Gulf Club, we pride ourselves on our welcoming community and excellent amenities. From our immaculate 18-hole course to our inviting clubhouse, you'll find everything you need to enjoy the game of golf. Become a member today.",
        link: "about.html",
        linkText: "Learn More"
    },
    {
        src: "images/gulf1.webp",
        alt: "Experience Premier Golfing",
        captionTitle: "Experience Premier Golfing",
        captionText: "Join us at Erruki Gulf Club and enjoy our top-notch facilities, including a beautifully maintained 18-hole course and a state-of-the-art practice range. Whether you're a seasoned pro or a beginner, you'll find a supportive community and a range of activities to enjoy.",
        link: "about.html",
        linkText: "Learn More"
    },
    {
        src: "images/gulf3.webp",
        alt: "A Tradition of Excellence",
        captionTitle: "A Tradition of Excellence",
        captionText: "Erruki Gulf Club is dedicated to fostering a love for golf, promoting sportsmanship, and providing a friendly and inclusive environment for all members. Become part of our tradition of excellence and camaraderie.",
        link: "about.html",
        linkText: "Learn More"
    },
    {
        src: "images/gulf4.webp",
        alt: "Unparalleled Golf Experience",
        captionTitle: "Unparalleled Golf Experience",
        captionText: "Discover the unparalleled golf experience at Erruki Gulf Club. Our premier facilities and welcoming community offer the perfect environment for golf enthusiasts of all skill levels. Join us and elevate your game.",
        link: "about.html",
        linkText: "Learn More"
    }
];

function renderImages(imageArray) {
    const slidy = document.getElementById('slidy');
    imageArray.forEach((image, index) => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = image.src; 
        img.alt = image.alt;
        img.loading = 'lazy'; 

        const caption = document.createElement('div');
        caption.classList.add('slidy-caption');

        const h3 = document.createElement('h3');
        h3.textContent = image.captionTitle;

        const p = document.createElement('p');
        p.textContent = image.captionText;

        const a = document.createElement('a');
        a.href = image.link;
        a.classList.add('btn');
        a.textContent = image.linkText;

        caption.appendChild(h3);
        caption.appendChild(p);
        caption.appendChild(a);

        div.appendChild(img);
        div.appendChild(caption);
        slidy.appendChild(div);

        if (index === 0) {
            div.style.display = "block"; 
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    renderImages(images);

    let slideIndex = 0;
    const slides = document.querySelectorAll("#slidy > div");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex-1].style.display = "block";
    }

    function prevSlide() {
        slideIndex -= 2;
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        showSlides();
    }

    function nextSlide() {
        showSlides();
    }

    setInterval(nextSlide, 3000); 

    document.querySelector('.slidy-control-prev').addEventListener('click', prevSlide);
    document.querySelector('.slidy-control-next').addEventListener('click', nextSlide);
});


document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const gallery = document.querySelector('.gallery');
    const navLinks = document.querySelector('.nav-links');
    const title = document.querySelector('main h2');
    const hamburger = document.querySelector('.hamburger');
    const searchInput = document.getElementById('search');

    const default_message = "Default members cannot be modified."
    const defaultMembers = [
        {
            name: "Amanda Williams",
            email: "amanda.williams@gmail.com",
            phone: "345-678-9012",
            membershipType: "admin",
            image: "images/amanda.webp",
            description: "I am Amanda Williams, and as the Deputy Governor of Lagos State, I am committed to public service and effective governance. My tenure has been focused on advancing infrastructure, education, and healthcare, with the goal of improving the lives of all Lagosians. My leadership is characterized by inclusivity, transparency, and accountability. I am proud of the economic growth and social development we have achieved. My role allows me to leverage my expertise to drive significant change, and I am honored to be a respected leader across Nigeria. Through my work, I aim to inspire future leaders and demonstrate the power of effective governance.",
            message: default_message
        },   
        {
            name: "Brisbane Johnson",
            email: "brisbane@hotmail.com",
            phone: "123-456-7890",
            membershipType: "member",
            image: "images/Brisbane.webp",
            description: "I am Brisbane Johnson, and my journey as a chemical engineer has been both challenging and rewarding. With a passion for chemistry, I've dedicated my career to advancing industries like pharmaceuticals, petrochemicals, and environmental engineering. My innovative research has led to the development of more efficient and sustainable processes, significantly impacting both industry standards and environmental safety. I take pride in mentoring young engineers, fostering a culture of curiosity and innovation. My commitment to solving complex problems and improving chemical practices has earned me respect and recognition worldwide. I am driven by the belief that through engineering, we can create a safer, cleaner future.",
            message: default_message
        },  
        {
            name: "Cardston Smith",
            email: "cardston@gmail.com",
            phone: "098-765-4321",
            membershipType: "member",
            image: "images/Cardston.webp",
            description: "My name is Cardston Smith, and I am proud to serve as a Human Resource Director. My journey in HR has been defined by a deep commitment to creating people-centric workplaces. I specialize in talent acquisition, employee engagement, and organizational development, always striving to build environments where employees can thrive. My approach is rooted in empathy and strategic thinking, allowing me to navigate complex interpersonal dynamics effectively. I believe in fostering inclusive cultures and transforming traditional HR practices to meet the needs of today’s workforce. Through my leadership, I aim to inspire and drive positive change within organizations and the broader HR community.",
            message: default_message
        },  
        {
            name: "David Brown",
            email: "davidbrown@yahoo.com",
            phone: "234-567-8901",
            membershipType: "member",
            image: "images/David.webp",
            description: "I am David Brown, a pastor dedicated to spiritual growth and community service. For years, I have been passionate about guiding individuals on their spiritual journeys, helping convert many from paganism to Christianity. My ministry extends beyond the church as I actively engage in charitable initiatives to uplift the less fortunate. I believe in providing immediate relief and inspiring long-term positive changes within communities. My work is driven by faith and compassion, aiming to make a tangible difference in people’s lives. Through my pastoral and humanitarian efforts, I strive to be a beacon of hope and a source of inspiration for those around me.",
            message: default_message
        }  
    ];

    const storedMembers = JSON.parse(localStorage.getItem('members')) || [];
    const members = [...defaultMembers, ...storedMembers];

    function renderMembers(filteredMembers) {
        gallery.innerHTML = '';
        filteredMembers.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('card');
    
            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');
    
            const figcaption = document.createElement('figcaption');
    
            figcaption.innerHTML = `
            <img data-src="${member.image}" alt="${member.name}" loading="lazy" width="320" height="350">
            <h3> ${member.name}</h3>
            <div><span><i class="fa fa-envelope"></i> </span> ${member.email}</div>
            <div><span><i class="fa fa-phone"></i> </span> ${member.phone}</div>
            <div><span><i class="fa fa-id-card"></i> </span> ${member.membershipType}</div>
            `;
    
            cardContent.appendChild(figcaption);
            card.appendChild(cardContent);
            gallery.appendChild(card);
    
            card.addEventListener('click', () => {
                localStorage.setItem('selectedMember', JSON.stringify(member));
                window.location.href = 'detail.html';
            });
        });
    
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    


    function filterMembers(filter) {
        let filteredMembers;
        switch (filter) {
            case 'members':
                filteredMembers = members.filter(member => member.membershipType === 'member');
                break;
            case 'admin':
                filteredMembers = members.filter(member => member.membershipType === 'admin');
                break;
            default:
                filteredMembers = members;
                break;
        }
        renderMembers(filteredMembers);
        title.textContent = filter.charAt(0).toUpperCase() + filter.slice(1);
        updateActiveLink(filter);
    }

    function updateActiveLink(filter) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            if (link.dataset.filter === filter) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.dataset.filter) {
            event.preventDefault();
            filterMembers(event.target.dataset.filter);
        } else if (event.target.tagName === 'A' && event.target.getAttribute('href') === 'register.html') {
            window.location.href = 'register.html';
        }
    });

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();
        const filteredMembers = members.filter(member =>
            member.name.toLowerCase().includes(searchTerm)
        );
        renderMembers(filteredMembers);
        title.textContent = searchTerm ? 'Search Results' : 'Home';
    });

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    const hash = window.location.hash;
    if (hash === '#members') {
        filterMembers('members');
    } else if (hash === '#admin') {
        filterMembers('admin');
    } else {
        filterMembers('home');
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



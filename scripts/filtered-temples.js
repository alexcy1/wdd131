

// document.addEventListener('DOMContentLoaded', function () {
//     const yearSpan = document.getElementById('year');
//     const lastModifiedSpan = document.getElementById('lastModified');
//     const gallery = document.querySelector('.gallery');
//     const navLinks = document.querySelector('.nav-links');
//     const title = document.querySelector('main h2');
//     const hamburger = document.querySelector('.hamburger');

//     const temples = [
//         {
//             templeName: "Aba Nigeria",
//             location: "Aba, Nigeria",
//             dedicated: "2005, August, 7",
//             area: 11500,
//             imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
//         },
//         {
//             templeName: "Manti Utah",
//             location: "Manti, Utah, United States",
//             dedicated: "1888, May, 21",
//             area: 74792,
//             imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
//         },
//         {
//             templeName: "Yigo Guam",
//             location: "Yigo, Guam",
//             dedicated: "2020, May, 2",
//             area: 6861,
//             imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
//         },
//         {
//             templeName: "Washington D.C.",
//             location: "Kensington, Maryland, USA",
//             dedicated: "1974, November, 19",
//             area: 156558,
//             imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
//         },
//         {
//             templeName: "Lima Perú",
//             location: "Lima, Perú",
//             dedicated: "1986, January, 10",
//             area: 9600,
//             imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
//         },
//         {
//             templeName: "Mexico City Mexico",
//             location: "Mexico City, Mexico",
//             dedicated: "1983, December, 2",
//             area: 116642,
//             imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
//         },
//         {
//             templeName: "Monticello Utah",
//             location: "Utah, United States",
//             dedicated: "1998, July, 26",
//             area: 11600,
//             imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monticello-utah/320x200/monticello-temple-lds-885488-wallpaper.jpg"
//         },
//         {
//             templeName: "Montreal Quebec",
//             location: "Longueuil, Quebec, Canada",
//             dedicated: "2000, June, 4",
//             area: 8809,
//             imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montreal-quebec/320x200/montreal-quebec-temple-1169262-wallpaper.jpg"
//         },
//         {
//             templeName: "Nauvoo Illinois",
//             location: "Nauvoo, Illinois, United States",
//             dedicated: "2002, June, 27",
//             area: 10210,
//             imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/320x200/nauvoo-temple-756496-wallpaper.jpg"
//         },
//         {
//             templeName: "Payson Utah",
//             location: "Payson, Utah, United States",
//             dedicated: "2015, June, 7",
//             area: 96630,
//             imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
//         },
//     ];

//     function renderTemples(filteredTemples) {
//         gallery.innerHTML = '';
//         filteredTemples.forEach(temple => {
//             const figure = document.createElement('figure');
//             const figcaption = document.createElement('figcaption');
//             const img = document.createElement('img');

//             figcaption.innerHTML = `
//                 <h3>${temple.templeName}</h3>
//                 <div><b>Location:</b> ${temple.location}</div>
//                 <div><b>Dedicated:</b> ${temple.dedicated}</div>
//                 <div><b>Area:</b> ${temple.area} sq ft</div>
//             `;

//             img.src = temple.imageUrl;
//             img.alt = temple.templeName;
//             img.loading = 'lazy';
//             img.width = 320;
//             img.height = 200;

//             figure.appendChild(figcaption);
//             figure.appendChild(img);
//             gallery.appendChild(figure);
//         });
//     }

//     renderTemples(temples);

//     navLinks.addEventListener('click', (event) => {
//         if (event.target.tagName === 'A') {
//             event.preventDefault();

//             let filteredTemples;
//             let filterName = event.target.textContent;
//             switch (event.target.dataset.filter) {
//                 case 'old':
//                     filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
//                     break;
//                 case 'new':
//                     filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
//                     break;
//                 case 'large':
//                     filteredTemples = temples.filter(temple => temple.area > 90000);
//                     break;
//                 case 'small':
//                     filteredTemples = temples.filter(temple => temple.area < 10000);
//                     break;
//                 default:
//                     filteredTemples = temples;
//                     filterName = 'Home';
//                     break;
//             }

//             renderTemples(filteredTemples);
//             title.textContent = filterName;
//         }
//     });

//     hamburger.addEventListener('click', () => {
//         navLinks.classList.toggle('open');
//     });

//     yearSpan.textContent = new Date().getFullYear();
//     lastModifiedSpan.textContent = document.lastModified;
// });













document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const gallery = document.querySelector('.gallery');
    const navLinks = document.querySelector('.nav-links');
    const title = document.querySelector('main h2');
    const hamburger = document.querySelector('.hamburger');

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005-08-07",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888-05-21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020-05-02",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, USA",
            dedicated: "1974-11-19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986-01-10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983-12-02",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Monticello Utah",
            location: "Utah, United States",
            dedicated: "1998-07-26",
            area: 11600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monticello-utah/320x200/monticello-temple-lds-885488-wallpaper.jpg"
        },
        {
            templeName: "Montreal Quebec",
            location: "Longueuil, Quebec, Canada",
            dedicated: "2000-06-04",
            area: 8809,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montreal-quebec/320x200/montreal-quebec-temple-1169262-wallpaper.jpg"
        },
        {
            templeName: "Nauvoo Illinois",
            location: "Nauvoo, Illinois, United States",
            dedicated: "2002-06-27",
            area: 10210,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/320x200/nauvoo-temple-756496-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015-06-07",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Paris France",
            location: "Boulevard Saint Antoine France",
            dedicated: "2017-05-20",
            area: 15210,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/320x200/paris-france-temple-exterior-evening-1905504.jpg"
        },
        {
            templeName: "Phoenix Arizona",
            location: "Pinnacle Peak Rd, Phoenix, United States",
            dedicated: "2011-06-04",
            area: 7980,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/pheonix-arizona/2018/320x200/Phoenix-Arizona-Temple-4-1300737.jpg"
        }
    ];

    function renderTemples(filteredTemples) {
        gallery.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = document.createElement('div');
            card.classList.add('card');

            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

            const figcaption = document.createElement('figcaption');
            const img = document.createElement('img');

            figcaption.innerHTML = `
                <h3>${temple.templeName}</h3>
                <div><span>Location:</span> ${temple.location}</div>
                <div><span>Dedicated:</span> ${temple.dedicated}</div>
                <div><span>Area:</span> ${temple.area} sq ft</div>
            `;

            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = 'lazy';
            img.width = 320;
            img.height = 200;

            cardContent.appendChild(figcaption);
            card.appendChild(cardContent);
            card.appendChild(img);
            gallery.appendChild(card);
        });
    }

    renderTemples(temples);

    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();

            let filteredTemples;
            let filterName = event.target.textContent;
            switch (event.target.dataset.filter) {
                case 'old':
                    filteredTemples = temples.filter(temple => {
                        const dedicatedDate = new Date(temple.dedicated);
                        return dedicatedDate.getFullYear() < 1900;
                    });
                    break;
                case 'new':
                    filteredTemples = temples.filter(temple => {
                        const dedicatedDate = new Date(temple.dedicated);
                        return dedicatedDate.getFullYear() > 2000;
                    });
                    break;
                case 'large':
                    filteredTemples = temples.filter(temple => temple.area > 90000);
                    break;
                case 'small':
                    filteredTemples = temples.filter(temple => temple.area < 10000);
                    break;
                default:
                    filteredTemples = temples;
                    filterName = 'Home';
                    break;
            }

            renderTemples(filteredTemples);
            title.textContent = filterName;
        }
    });

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
});

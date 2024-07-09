


// document.addEventListener('DOMContentLoaded', function () {
//     const registrationForm = document.getElementById('registrationForm');

//     registrationForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;
//         const membershipType = document.getElementById('membershipType').value;
//         const profileImage = document.getElementById('profileImage').files[0];

//         if (name && email && phone && membershipType && profileImage) {
//             const reader = new FileReader();
//             reader.onload = function (event) {
//                 const newMember = {
//                     name,
//                     email,
//                     phone,
//                     membershipType,
//                     profileImage: event.target.result // Save the image as a Base64 string
//                 };

//                 // Fetch the current members from localStorage
//                 let members = JSON.parse(localStorage.getItem('members')) || [];

//                 // Add the new member to the array
//                 members.push(newMember);

//                 // Store the updated members array in localStorage
//                 localStorage.setItem('members', JSON.stringify(members));

//                 alert('Registration successful!');

//                 // Redirect to home page after successful registration
//                 window.location.href = "gulfclub.html";
//             };

//             // Read the image file as a Data URL (Base64)
//             reader.readAsDataURL(profileImage);
//         } else {
//             alert('Please fill in all fields.');
//         }
//     });

//     const yearSpan = document.getElementById('year');
//     const lastModifiedSpan = document.getElementById('lastModified');
//     yearSpan.textContent = new Date().getFullYear();
//     lastModifiedSpan.textContent = document.lastModified;
// });








// ===================================================================================

// document.addEventListener('DOMContentLoaded', function () {
//     const registrationForm = document.getElementById('registrationForm');

//     registrationForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;
//         const membershipType = document.getElementById('membershipType').value;
//         const description = document.getElementById('description').value;
//         const imageUrl = document.getElementById('image').files[0];

//         if (name && email && phone && membershipType && description && imageUrl) {
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 const newMember = {
//                     name,
//                     email,
//                     phone,
//                     membershipType,
//                     description,
//                     image: e.target.result
//                 };

//                 // Fetch the current members from localStorage
//                 let storedMembers = JSON.parse(localStorage.getItem('members')) || [];

//                 // Add the new member to the array
//                 storedMembers.push(newMember);

//                 // Store the updated members array in localStorage
//                 localStorage.setItem('members', JSON.stringify(storedMembers));

//                 alert('Registration successful!');

//                 // Redirect to home page after successful registration
//                 window.location.href = "gulfclub.html";
//             };
//             reader.readAsDataURL(imageUrl);
//         } else {
//             alert('Please fill in all fields.');
//         }
//     });

// });










document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const descriptionTextarea = document.getElementById('description');
    const descriptionCount = document.getElementById('descriptionCount');

    // Add event listener for form submission
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Gather form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const membershipType = document.getElementById('membershipType').value;
        const description = descriptionTextarea.value;
        const imageUrl = document.getElementById('image').files[0];

        // Validate form fields
        if (name && email && phone && membershipType && description && imageUrl) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const newMember = {
                    name,
                    email,
                    phone,
                    membershipType,
                    description,
                    image: e.target.result
                };

                // Fetch the current members from localStorage
                let storedMembers = JSON.parse(localStorage.getItem('members')) || [];

                // Add the new member to the array
                storedMembers.push(newMember);

                // Store the updated members array in localStorage
                localStorage.setItem('members', JSON.stringify(storedMembers));

                alert('Registration successful!');

                // Redirect to home page after successful registration
                window.location.href = "gulfclub.html";
            };
            reader.readAsDataURL(imageUrl);
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Add event listener for input in description textarea
    descriptionTextarea.addEventListener('input', function () {
        const currentLength = this.value.length;
        const maxLength = 300;
        descriptionCount.textContent = `${currentLength} / ${maxLength}`;

        // Optionally, you can change color based on length (e.g., red if exceeding)
        if (currentLength > maxLength) {
            descriptionCount.style.color = 'red';
        } else {
            descriptionCount.style.color = ''; // Reset to default
        }
    });

});

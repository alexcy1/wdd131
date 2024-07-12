// document.addEventListener('DOMContentLoaded', function () {
//     const member = JSON.parse(localStorage.getItem('selectedMember'));

//     if (member) {
//         document.getElementById('memberNameDisplay').textContent = member.name;
//         document.getElementById('name').value = member.name;
//         document.getElementById('email').value = member.email;
//         document.getElementById('phone').value = member.phone;
//         document.getElementById('type').value = member.membershipType;
//         document.getElementById('description').value = member.description;
//         // Show existing image preview
//         if (member.image) {
//             document.getElementById('imagePreview').src = member.image;
//         }
//     }

//     const editForm = document.getElementById('editForm');
//     editForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const updatedMember = {
//             name: document.getElementById('name').value,
//             email: document.getElementById('email').value,
//             phone: document.getElementById('phone').value,
//             membershipType: document.getElementById('type').value,
//             description: document.getElementById('description').value,
//             image: member.image // Keep existing image initially
//         };

//         const editImage = document.getElementById('editImage').files[0];
//         if (editImage) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 updatedMember.image = reader.result;
//                 saveUpdatedMember(updatedMember);
//             };
//             reader.readAsDataURL(editImage);
//         } else {
//             saveUpdatedMember(updatedMember);
//         }
//     });

//     function saveUpdatedMember(updatedMember) {
//         localStorage.setItem('selectedMember', JSON.stringify(updatedMember));

//         const storedMembers = JSON.parse(localStorage.getItem('members')) || [];
//         const memberIndex = storedMembers.findIndex(m => m.email === member.email);
//         if (memberIndex !== -1) {
//             storedMembers[memberIndex] = updatedMember;
//             localStorage.setItem('members', JSON.stringify(storedMembers));
//         }

//         window.location.href = 'detail.html';
//     }

//     const cancelButton = document.getElementById('cancelButton');
//     cancelButton.addEventListener('click', () => {
//         window.location.href = 'detail.html';
//     });

// });







document.addEventListener('DOMContentLoaded', function () {
    const member = JSON.parse(localStorage.getItem('selectedMember'));

    if (member) {
        document.getElementById('memberNameDisplay').textContent = member.name;
        document.getElementById('name').value = member.name;
        document.getElementById('email').value = member.email;
        document.getElementById('phone').value = member.phone;
        document.getElementById('type').value = member.membershipType;
        document.getElementById('description').value = member.description;
        // Show existing image preview
        if (member.image) {
            document.getElementById('imagePreview').src = member.image;
        }
    }

    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const updatedMember = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            membershipType: document.getElementById('type').value,
            description: document.getElementById('description').value,
            image: member.image // Keep existing image initially
        };

        const editImage = document.getElementById('editImage').files[0];
        if (editImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updatedMember.image = reader.result;
                saveUpdatedMember(updatedMember);
            };
            reader.readAsDataURL(editImage);
        } else {
            saveUpdatedMember(updatedMember);
        }
    });

    function saveUpdatedMember(updatedMember) {
        localStorage.setItem('selectedMember', JSON.stringify(updatedMember));

        const storedMembers = JSON.parse(localStorage.getItem('members')) || [];
        const memberIndex = storedMembers.findIndex(m => m.email === member.email);
        if (memberIndex !== -1) {
            storedMembers[memberIndex] = updatedMember;
            localStorage.setItem('members', JSON.stringify(storedMembers));
        }

        window.location.href = 'detail.html';
    }

    const cancelButton = document.getElementById('cancelButton');
    cancelButton.addEventListener('click', () => {
        window.location.href = 'detail.html';
    });

    // Add event listener for input in description textarea
    const descriptionTextarea = document.getElementById('description');
    const descriptionCount = document.getElementById('descriptionCount');

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


document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const descriptionTextarea = document.getElementById('description');
    const descriptionCount = document.getElementById('descriptionCount');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const membershipType = document.getElementById('membershipType').value;
        const description = descriptionTextarea.value;
        const imageUrl = document.getElementById('image').files[0];

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
                let storedMembers = JSON.parse(localStorage.getItem('members')) || [];
                storedMembers.push(newMember);

                localStorage.setItem('members', JSON.stringify(storedMembers));

                alert('Registration successful!');
                window.location.href = "gulfclub.html";
            };
            reader.readAsDataURL(imageUrl);
        } else {
            alert('Please fill in all fields.');
        }
    });

    descriptionTextarea.addEventListener('input', function () {
        const currentLength = this.value.length;
        const maxLength = 300;
        descriptionCount.textContent = `${currentLength} / ${maxLength}`;

        if (currentLength > maxLength) {
            descriptionCount.style.color = 'red';
        } else {
            descriptionCount.style.color = '';
        }
    });

});

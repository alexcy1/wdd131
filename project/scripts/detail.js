
document.addEventListener('DOMContentLoaded', function () {
    const member = JSON.parse(localStorage.getItem('selectedMember'));

    if (member) {
        const memberImage = document.getElementById('memberImage');
        const memberName = document.getElementById('memberName');
        const memberEmail = document.getElementById('memberEmail');
        const memberPhone = document.getElementById('memberPhone');
        const memberType = document.getElementById('memberType');
        const memberDescription = document.getElementById('memberDescription');
        const editButton = document.getElementById('editButton');
        const deleteButton = document.getElementById('deleteButton');

        if (memberImage) {
            memberImage.src = member.image;
            memberImage.alt = member.name;
        }
        if (memberName) memberName.textContent = member.name;
        if (memberEmail) memberEmail.textContent = member.email;
        if (memberPhone) memberPhone.textContent = member.phone;
        if (memberType) memberType.textContent = member.membershipType;
        if (memberDescription) memberDescription.textContent = member.description || 'No description provided.';

        editButton.addEventListener('click', () => {
            window.location.href = 'edit.html';
        });

        deleteButton.addEventListener('click', () => {
            const storedMembers = JSON.parse(localStorage.getItem('members')) || [];
            const updatedMembers = storedMembers.filter(m => m.email !== member.email);
            localStorage.setItem('members', JSON.stringify(updatedMembers));
            window.location.href = 'gulfclub.html';
        });
    } else {
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.innerHTML = '<p>No member data found.</p>';
        }
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const selectedMember = JSON.parse(localStorage.getItem('selectedMember'));
    
    if (selectedMember && window.location.pathname.endsWith('detail.html')) {
        console.log('Selected Member:', selectedMember);

        document.getElementById("memberName").textContent = selectedMember.name;
        document.getElementById("memberEmail").textContent = selectedMember.email;
        document.getElementById("memberPhone").textContent = selectedMember.phone;
        document.getElementById("memberType").textContent = selectedMember.membershipType;
        document.getElementById("memberDescription").textContent = selectedMember.description;
        document.getElementById("memberImage").src = selectedMember.image;

        if (selectedMember.message) {
            console.log('Message:', selectedMember.message); 

            const messageElement = document.getElementById("defaultMessage");
            messageElement.textContent = selectedMember.message;
            messageElement.style.display = 'block'; 
        }
    }
});
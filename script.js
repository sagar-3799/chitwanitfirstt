// scripts.js

// Toggle navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    };
});

// Form submission with success message
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('callbackForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        var formData = new FormData(this);

        fetch(this.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                var successMessage = document.getElementById('successMessage');
                successMessage.style.display = 'block';
                
                // Hide message after 3 seconds
                setTimeout(function() {
                    successMessage.style.display = 'none';
                }, 3000);
                
                // Reset form fields
                event.target.reset();
            } else {
                alert('There was a problem with your submission.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem with your submission.');
        });
    });
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Scroll to top button
document.addEventListener('DOMContentLoaded', () => {
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    document.getElementById("myBtn").onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
});

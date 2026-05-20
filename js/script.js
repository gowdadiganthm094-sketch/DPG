// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check local storage for dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }

    // 2. Add to Cart Alert Popup
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Simple alert as requested
            alert('Great choice! Item has been added to your cart.');
        });
    });

    // 3. Simple Search/Filter Functionality for Menu Page
    const searchInput = document.getElementById('menuSearch');
    const menuItems = document.querySelectorAll('.menu-item');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            menuItems.forEach(item => {
                const itemNameElement = item.querySelector('.card-title');
                if (itemNameElement) {
                    const itemName = itemNameElement.innerText.toLowerCase();
                    if (itemName.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    }

    // 4. Form Validation - Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email.trim() === '' || password.trim() === '') {
                alert('Please fill in all fields to login.');
            } else {
                alert('Login successful! Welcome back to BiteBliss.');
                window.location.href = 'profile.html';
            }
        });
    }

    // 5. Form Validation - Register
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
                alert('Please fill in all required fields.');
            } else if (password.length < 6) {
                alert('Password must be at least 6 characters long for security.');
            } else if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
            } else {
                alert('Registration successful! You can now login.');
                window.location.href = 'login.html';
            }
        });
    }

    // 6. Contact Form Alert
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        const navLinks = document.querySelectorAll('.main-nav ul li a');

        // Add an event listener to the toggle button
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation menu
            mainNav.classList.toggle('active');
            // Toggle the hamburger icon to an 'X' icon
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Close the menu when a navigation link is clicked (for smooth scrolling)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            });
        });
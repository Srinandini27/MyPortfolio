// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Custom cursor
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', function () {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
    });

    document.addEventListener('mouseup', function () {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active menu based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // const sectionHeight = section.clientHeight; // Removed as it is unused

            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Reveal text on scroll
    const revealElements = document.querySelectorAll('.reveal-text');

    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) { element.classList.add('revealed'); }
        });
    } // Initial reveal
    revealOnScroll();
    // Reveal on scroll
    window.addEventListener('scroll', revealOnScroll);
    // Portfolio filter
    const filterBtns = document.querySelectorAll('.filter-btn'); const
        portfolioItems = document.querySelectorAll('.portfolio-item'); filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    // Show all items if filter is 'all'
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                    } else {
                        // Show only items with matching category
                        if (item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });

    // Skill bar animation
    document.addEventListener('DOMContentLoaded', () => {
        const skillBars = document.querySelectorAll('.skill-per');

        skillBars.forEach(skill => {
            const percent = skill.dataset.percent;
            skill.style.width = percent + '%';
            skill.style.animation = 'fillBars 2s ease-in-out forwards';
        });
    });



    // Form submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // const subject = document.getElementById('subject').value; // Removed as it is unused
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple form validation
            if (!name || !email || !message) {
                alert('Please fill all required fields.');
                return;
            }

            // Here you would normally send the form data to a server
            // For this demo, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    document.getElementById("googleForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const formResponse = document.getElementById("formResponse");

        const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSc_IqYsqsd4Yg9yXzOcHAW7gmsL_OCIXBcvIwQOevqKdCzhjQ/formResponse";

        const formData = new URLSearchParams();
        formData.append("entry.2005620554", document.getElementById("name").value);     // Name
        formData.append("entry.1045781291", document.getElementById("email").value);    // Email
        formData.append("entry.1065046570", document.getElementById("subject").value);  // Subject
        formData.append("entry.839337160", document.getElementById("message").value);   // Message

        fetch(googleFormURL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData.toString()
        })
            .then(() => {
                formResponse.innerHTML = "✅ Message sent successfully!";
                formResponse.style.color = "green";
                document.getElementById("googleForm").reset();
                setTimeout(() => formResponse.innerHTML = "", 10000);
            })
            .catch(() => {
                formResponse.innerHTML = "❌ Failed to send message.";
                formResponse.style.color = "red";
                setTimeout(() => formResponse.innerHTML = "", 10000);
            });
    });




});
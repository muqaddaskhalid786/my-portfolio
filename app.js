// Handle Login Click - Opens modal or redirect
function handleLoginClick(event) {
    event.preventDefault();
    
    // Create a simple modal for login
    const loginHTML = `
        <div id="loginModal" class="login-modal">
            <div class="login-modal-content">
                <span class="login-close">&times;</span>
                <h2>Welcome to Login</h2>
                <form id="loginForm">
                    <div class="login-form-group">
                        <label for="loginEmail">Email:</label>
                        <input type="email" id="loginEmail" name="email" required>
                    </div>
                    <div class="login-form-group">
                        <label for="loginPassword">Password:</label>
                        <input type="password" id="loginPassword" name="password" required>
                    </div>
                    <button type="submit" class="btn login-btn">Login</button>
                </form>
            </div>
        </div>
    `;
    
    // Check if modal already exists
    let modal = document.getElementById('loginModal');
    if (!modal) {
        document.body.insertAdjacentHTML('beforeend', loginHTML);
        modal = document.getElementById('loginModal');
    }
    
    modal.style.display = 'block';
    
    // Close modal when X is clicked
    const closeBtn = modal.querySelector('.login-close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.onsubmit = function(e) {
        e.preventDefault();
        alert('Login functionality would be implemented here!');
        modal.style.display = 'none';
        loginForm.reset();
    };
}

// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav') && navList.classList.contains('active')) {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.hero-content, .about-heading, .circular-image, .intro, .main-name, .journey-heading, .education-card, .skills-heading, .skill-card, .projects-heading, .project-card, .contact-heading, .contact-form, .contact-info').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Update active nav link based on scroll position
window.addEventListener('scroll', function() {
    let currentSection = '';
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    // Get all sections
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update nav links active state
    navLinks.forEach(link => {
        link.style.color = '#d7dee6';
        link.style.borderBottom = 'none';
        
        if (link.getAttribute('href') === '#' + currentSection) {
            link.style.color = '#5896e1';
            link.style.borderBottom = '2px solid #5896e1';
        }
    });
});

// Add hover effect to nav links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        if (this.style.color !== '#5896e1') {
            this.style.borderBottom = '2px solid rgba(88, 150, 225, 0.5)';
        }
    });
    link.addEventListener('mouseleave', function() {
        if (this.style.color !== '#5896e1') {
            this.style.borderBottom = 'none';
        }
    });
});

// Project Buttons - Click to open website links (buttons already have href attributes)
// No additional JS needed - links open directly when clicked

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

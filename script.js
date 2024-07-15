document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here

    // Example: Toggle visibility of sections
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const sections = document.querySelectorAll('main section');
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });

    // Initially show only the home section
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });
});
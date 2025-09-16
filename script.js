// Simple script for handling form submissions and displaying status messages

// Report Form
const reportForm = document.getElementById('reportForm');
if (reportForm) {
    reportForm.addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('reportStatus').textContent =
            "Thank you for your report! We will review it as soon as possible.";
        reportForm.reset();
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('contactStatus').textContent =
            "Thank you for your message! We will get back to you soon.";
        contactForm.reset();
    });
}

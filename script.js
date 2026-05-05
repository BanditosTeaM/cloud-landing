// Accordion Logic
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active');
    });
});

// Form Logic
const form = document.getElementById('landingForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    message.classList.remove('hidden');
    console.log('Form submitted');
});
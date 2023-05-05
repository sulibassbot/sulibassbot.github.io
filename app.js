// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;
  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
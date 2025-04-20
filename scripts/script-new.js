let slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      links.forEach(l => l.classList.remove('active'));
      document.querySelector('.navbar a[href="#' + sec.id + '"]').classList.add('active');
    }
  });
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

const words = ['Frontend Developer', 'Web Designer', 'Freelancer'];
const el = document.querySelector('.typing');
let w = 0, c = 0, del = false;
function type() {
  const word = words[w];
  el.textContent = del ? word.slice(0, c--) : word.slice(0, c++);
  if (!del && c > word.length) { del = true; setTimeout(type, 1200); return; }
  if (del && c < 0) { del = false; w = (w + 1) % words.length; c = 0; }
  setTimeout(type, del ? 50 : 100);
}
type();

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  e.target.reset();
});
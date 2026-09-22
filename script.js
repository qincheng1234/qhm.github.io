const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);
revealItems.forEach(item => observer.observe(item));

const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const navObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  }),
  { rootMargin: '-35% 0px -55% 0px' }
);
sections.forEach(section => navObserver.observe(section));

document.querySelector('#year').textContent = new Date().getFullYear();

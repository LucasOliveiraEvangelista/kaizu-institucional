const elements = document.querySelectorAll('.fade');

function animateOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();


  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

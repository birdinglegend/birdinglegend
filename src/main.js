import './style.css';

const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

function setMenu(open) {
  if (open) {
    mobileMenu.classList.remove('pointer-events-none','opacity-0','scale-y-0');
    navToggle.setAttribute('aria-expanded','true');
  } else {
    mobileMenu.classList.add('pointer-events-none','opacity-0','scale-y-0');
    navToggle.setAttribute('aria-expanded','false');
  }
}
setMenu(false);
navToggle?.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  setMenu(open);
});

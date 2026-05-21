const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobilePanel = document.getElementById('mobilePanel');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('opacity-0');
  mobileMenu.classList.toggle('pointer-events-none');

  mobilePanel.classList.toggle('translate-x-full');
});

mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.add('opacity-0');
    mobileMenu.classList.add('pointer-events-none');

    mobilePanel.classList.add('translate-x-full');
  }
});
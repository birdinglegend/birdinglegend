import './style.css';

// ----- Mobile nav (overlay) -----
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileBackdrop = document.getElementById('mobileBackdrop');

function setMenu(open) {
  if (!mobileMenu || !navToggle || !mobileBackdrop) return;

  if (open) {
    // show panel
    mobileMenu.classList.remove('pointer-events-none', 'opacity-0', 'translate-y-[-8px]');
    // show backdrop
    mobileBackdrop.classList.remove('pointer-events-none');
    mobileBackdrop.classList.add('opacity-100');
    // lock scroll
    document.body.classList.add('overflow-hidden');

    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    // hide panel
    mobileMenu.classList.add('pointer-events-none', 'opacity-0', 'translate-y-[-8px]');
    // hide backdrop
    mobileBackdrop.classList.add('pointer-events-none');
    mobileBackdrop.classList.remove('opacity-100');
    // unlock scroll
    document.body.classList.remove('overflow-hidden');

    navToggle.setAttribute('aria-expanded', 'false');
  }
}

setMenu(false);

navToggle?.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  setMenu(open);
});

mobileBackdrop?.addEventListener('click', () => setMenu(false));

// ----- Theme toggle (footer) -----
const footerBtn = document.getElementById('themeToggleFooter');
const footerIcon = document.getElementById('themeIconFooter');

// Adjust these paths if your icons are elsewhere
const ICON_LIGHT = '/src/assets/images/about/moon.svg'; // shown in light mode
const ICON_DARK  = '/src/assets/images/about/sun.svg';  // shown in dark mode

function getTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function setIcon(theme) {
  if (!footerIcon) return;
  footerIcon.src = theme === 'dark' ? ICON_DARK : ICON_LIGHT;
}
function applyTheme(theme) {
  if (theme === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', theme);
  setIcon(theme);
}
function toggleTheme() {
  const now = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(now);
}

// Initialize theme + footer year
applyTheme(getTheme());
footerBtn?.addEventListener('click', toggleTheme);

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.getElementById("menu-toggle");
const icon = document.getElementById("menu-icon");
const panel = document.getElementById("side-menu");
const overlay = document.getElementById("menu-overlay");

function setMenu(open) {
  panel.toggleAttribute("data-open", open);
  overlay.toggleAttribute("data-open", open);
  panel.inert = !open; // keeps hidden links out of the tab order

  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  icon.src = open ? icon.dataset.open : icon.dataset.closed;

  document.documentElement.classList.toggle("overflow-hidden", open); // lock page scroll
}

const isOpen = () => panel.hasAttribute("data-open");

toggle.addEventListener("click", () => setMenu(!isOpen()));
overlay.addEventListener("click", () => setMenu(false));
panel.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isOpen()) {
    setMenu(false);
    toggle.focus();
  }
});

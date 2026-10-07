import { birds } from "./birds.js";

const tbody = document.getElementById("bird-tbody");
const emptyState = document.getElementById("empty-state");
const statSpecies = document.getElementById("stat-species");
const statCountries = document.getElementById("stat-countries");

const dateFormat = new Intl.DateTimeFormat("en-ZA", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return dateFormat.format(new Date(year, month - 1, day));
}

// Escapes &, <, > and quotes so names can never break the markup
function esc(value) {
  return String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
}

// Dev-only safety net: warns if the same species is listed twice
if (import.meta.env.DEV) {
  const seen = new Set();
  for (const bird of birds) {
    if (seen.has(bird.scientific)) {
      console.warn(`Life list: duplicate species "${bird.common}" (${bird.scientific})`);
    }
    seen.add(bird.scientific);
  }
}

function rowTemplate(bird) {
  const watch = bird.videoUrl
    ? `<a
        href="${esc(bird.videoUrl)}"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 transition-all duration-200 hover:border-stone-900 hover:bg-stone-900 hover:text-white"
      >Watch</a>`
    : "";

  return `
    <tr class="transition-colors duration-200 hover:bg-stone-50/80">
      <td class="px-4 py-5 text-center">
        <span class="font-serif text-sm italic text-stone-400">${bird.number}</span>
      </td>
      <td class="min-w-[320px] px-8 py-5">
        <div class="text-[15px] font-medium leading-snug text-stone-800">${esc(bird.common)}</div>
      </td>
      <td class="min-w-60 px-5 py-5">
        <div class="text-sm italic text-stone-500">${esc(bird.scientific)}</div>
      </td>
      <td class="min-w-55 px-5 py-5 text-sm text-stone-600">${esc(bird.location)}</td>
      <td class="px-5 py-5">
        <span class="inline-flex items-center whitespace-nowrap rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">${esc(bird.country)}</span>
      </td>
      <td class="whitespace-nowrap px-5 py-5 text-sm text-stone-500">${formatDate(bird.date)}</td>
      <td class="px-5 py-5">${watch}</td>
    </tr>`;
}

// Stats: the totals never change with the view, so set them once
statSpecies.textContent = birds.length;
statCountries.textContent = new Set(birds.map((bird) => bird.country)).size;

emptyState.classList.toggle("hidden", birds.length > 0);

// Number = position in the data file, so it never changes.
// reverse() puts the newest bird at the top. Remove it for oldest-first.
const rows = birds.map((bird, index) => ({ ...bird, number: index + 1 })).reverse();

tbody.innerHTML = rows.map(rowTemplate).join("");

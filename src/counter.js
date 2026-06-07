const birds = [
  {
    common: "Cape Parrot",
    scientific: "Poicephalus robustus",
    location: "Magoebaskloof",
    country: "South Africa",
    date: "2026-05-29",
    videoUrl: null
  },
  {
    common: "Olive Woodpecker",
    scientific: "Mesopicos griseocephalus",
    location: "Magoebaskloof",
    country: "South Africa",
    date: "2026-05-27",
    videoUrl: null
  }, 
  {
    common: "Yellow-streaked Greenbul",
    scientific: "Phyllastrephus flavostriatus",
    location: "Magoebaskloof",
    country: "South Africa",
    date: "2026-05-27",
    videoUrl: null
  },
  {
    common: "Ashy Flycatcher",
    scientific: "Muscicapa caerulescens",
    location: "Tzaneen",
    country: "South Africa",
    date: "2026-05-18",
    videoUrl: null
  },
  {
    common: "Collared Sunbird",
    scientific: "Spilopelia senegalensis",
    location: "Tzaneen",
    country: "South Africa",
    date: "2026-05-18",
    videoUrl: null
  }
 
  
];

const tbody = document.getElementById('bird-tbody');
const searchInput = document.getElementById('search-input');
const countryFilter = document.getElementById('country-filter');
const emptyState = document.getElementById('empty-state');

const statSpecies = document.getElementById('stat-species');
const statCountries = document.getElementById('stat-countries');

if (tbody && searchInput && countryFilter) {
  let sortField = 'date';
  let sortDir = 'desc';

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function renderStats(list) {
    statSpecies.textContent = new Set(list.map(bird => `${bird.common}-${bird.scientific}`)).size;
    statCountries.textContent = new Set(list.map(bird => bird.country)).size;
  }

  function populateCountryFilter() {
    const countries = [...new Set(birds.map(bird => bird.country))].sort();

    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      countryFilter.appendChild(option);
    });
  }

  function sortBirds(list) {
    return [...list].sort((a, b) => {
      let av = a[sortField];
      let bv = b[sortField];

      if (sortField === 'date') {
        av = new Date(av);
        bv = new Date(bv);
      } else {
        av = String(av || '').toLowerCase();
        bv = String(bv || '').toLowerCase();
      }

      if (av < bv) return sortDir === 'asc' ? -1 : 1;
      if (av > bv) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }

  function getFilteredBirds() {
    const query = searchInput.value.toLowerCase();
    const country = countryFilter.value;

    return birds.filter(bird => {
      const matchesSearch =
        !query ||
        bird.common.toLowerCase().includes(query) ||
        bird.scientific.toLowerCase().includes(query) ||
        bird.location.toLowerCase().includes(query) ||
        bird.country.toLowerCase().includes(query);

      const matchesCountry = !country || bird.country === country;

      return matchesSearch && matchesCountry;
    });
  }

  function renderTable(list) {
    if (!list.length) {
      tbody.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    tbody.innerHTML = list.map((bird, index) => {
      const rowNumber = sortDir === 'desc' && sortField === 'date'
        ? birds.length - index
        : index + 1;

      const watchButton = bird.videoUrl
        ? `
          <a href="${bird.videoUrl}" target="_blank" rel="noopener" class="watch-btn">
            Watch
          </a>
        `
        : '';

      return `
  <tr class="border-b border-stone-100 hover:bg-stone-50/80 transition-colors duration-200">

    <!-- Number -->
    <td class="px-4 py-5 text-center">
      <span class="font-serif italic text-sm text-stone-400">
        ${rowNumber}
      </span>
    </td>

    <!-- Common Name -->
    <td class="px-8 py-5 min-w-[320px]">

      <div class="font-medium text-[15px] text-stone-800 leading-snug">
        ${bird.common}
      </div>

    </td>

    <!-- Scientific -->
    <td class="px-5 py-5 min-w-[240px]">

      <div class="italic text-sm text-stone-500">
        ${bird.scientific}
      </div>

    </td>

    <!-- Location -->
    <td class="px-5 py-5 text-sm text-stone-600 min-w-[220px]">
      ${bird.location}
    </td>

    <!-- Country -->
    <td class="px-5 py-5">

      <span class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700 whitespace-nowrap">
        ${bird.country}
      </span>

    </td>

    <!-- Date -->
    <td class="px-5 py-5 text-sm text-stone-500 whitespace-nowrap">
      ${formatDate(bird.date)}
    </td>

    <!-- Watch -->
    <td class="px-5 py-5">

      ${watchButton
        ? `
          <a
            href="${bird.videoUrl}"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-200"
          >
            Watch
          </a>
        `
        : ''
      }

    </td>

  </tr>
`;
    }).join('');
  }

  function refresh() {
    const filtered = getFilteredBirds();
    const sorted = sortBirds(filtered);

    renderStats(filtered);
    renderTable(sorted);
  }

  function initSortHeaders() {
    document.querySelectorAll('[data-sort]').forEach(header => {
      header.style.cursor = 'pointer';

      header.addEventListener('click', () => {
        const field = header.dataset.sort;

        if (sortField === field) {
          sortDir = sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          sortField = field;
          sortDir = 'asc';
        }

        refresh();
      });
    });
  }

  searchInput.addEventListener('input', refresh);
  countryFilter.addEventListener('change', refresh);

  populateCountryFilter();
  initSortHeaders();
  refresh();
}
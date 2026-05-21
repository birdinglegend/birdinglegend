const birds = [
   {
    common: "Ashy Flycatcher",
    scientific: "Spilopelia senegalensis",
    location: "Aqua Park, Tzaneen",
    country: "South Africa",
    date: "2026-05-18",
    videoUrl: null
  },
  {
    common: "Collared Sunbird",
    scientific: "Spilopelia senegalensis",
    location: "Aqua Park, Tzaneen",
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
const statVideos = document.getElementById('stat-videos');

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
    statVideos.textContent = list.filter(bird => bird.videoUrl).length;
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
        <tr class="bird-row">
          <td class="col-num">
            <span class="row-num">${rowNumber}</span>
          </td>
          <td>
            <span class="bird-name">${bird.common}</span>
          </td>
          <td>
            <span class="sci-name">${bird.scientific}</span>
          </td>
          <td class="col-loc">${bird.location}</td>
          <td>
            <span class="country-badge">${bird.country}</span>
          </td>
          <td class="col-date">${formatDate(bird.date)}</td>
          <td>${watchButton}</td>
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
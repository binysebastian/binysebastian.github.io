const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'Close' : 'Menu';
  });
}

// Restrict the dynamic copyright year to footer spans. Publication cards also
// use data-year for filtering and must retain their content.
document.querySelectorAll('span[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const search = document.querySelector('[data-pub-search]');
const filter = document.querySelector('[data-pub-filter]');
const publications = [...document.querySelectorAll('.publication')];
const empty = document.querySelector('.empty');

function updatePublications() {
  if (!publications.length) return;

  const query = (search?.value || '').toLowerCase();
  const year = filter?.value || 'all';
  let shown = 0;

  publications.forEach((publication) => {
    const matchesText = publication.textContent.toLowerCase().includes(query);
    const matchesYear = year === 'all' || publication.dataset.year === year;
    const visible = matchesText && matchesYear;
    publication.classList.toggle('hidden', !visible);
    if (visible) shown += 1;
  });

  if (empty) empty.style.display = shown ? 'none' : 'block';
}

search?.addEventListener('input', updatePublications);
filter?.addEventListener('change', updatePublications);

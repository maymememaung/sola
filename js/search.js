// Debounced menu search
// Progressive enhancement: the search input starts hidden (the `hidden` attribute
// is set in the HTML). This script reveals it, so without JS the full menu shows
// with no search box — still fully usable.

const searchWrap = document.querySelector('.menu-search');
const input      = document.getElementById('menu-search-input');
const emptyState = document.querySelector('.menu-empty');
const sections   = document.querySelectorAll('.menu-category');
const dividers   = document.querySelectorAll('.menu-divider');

// Reveal the search box now that JS is running
if (searchWrap) searchWrap.hidden = false;

// --- Debounce ---
// Wait 250 ms after the user stops typing before filtering.
// This avoids re-running on every keystroke.
let debounceTimer;

input.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(filterMenu, 250);
});

// Also clear on the 'search' event (fires when the user hits Escape or clicks ✕)
input.addEventListener('search', filterMenu);

function filterMenu() {
  const query = input.value.trim().toLowerCase();

  // Hide all dividers while a search is active; show them when the field is empty
  dividers.forEach(hr => { hr.hidden = query.length > 0; });

  let anyVisible = false;

  sections.forEach(section => {
    const rows = section.querySelectorAll('.menu-row');
    let sectionHasMatch = false;

    rows.forEach(row => {
      const name    = row.querySelector('.menu-row__name').textContent.toLowerCase();
      const matches = query === '' || name.includes(query);
      row.hidden    = !matches;
      if (matches) sectionHasMatch = true;
    });

    // Hide the whole category block (heading + list) when none of its items match
    section.hidden = !sectionHasMatch;
    if (sectionHasMatch) anyVisible = true;
  });

  // Show the empty-state message only when nothing at all matched
  emptyState.hidden = anyVisible || query === '';
}

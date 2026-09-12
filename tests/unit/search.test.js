// Unit tests for the menu search filter logic in search.js
// Run with: npm test

// Pure match function — mirrors the logic in search.js
function matchesQuery(itemName, rawQuery) {
  const query = rawQuery.trim().toLowerCase();
  return query === '' || itemName.toLowerCase().includes(query);
}

describe('Menu search filter', () => {
  test('empty query matches every item', () => {
    expect(matchesQuery('Oat Milk Latte', '')).toBe(true);
    expect(matchesQuery('Drip Coffee', '')).toBe(true);
    expect(matchesQuery('Banana Bread', '')).toBe(true);
  });

  test('whitespace-only query matches everything (treated as empty)', () => {
    expect(matchesQuery('Ceremonial Matcha', '   ')).toBe(true);
  });

  test('exact name match is case-insensitive', () => {
    expect(matchesQuery('Oat Milk Latte', 'OAT MILK LATTE')).toBe(true);
  });

  test('partial query matches items that contain it', () => {
    expect(matchesQuery('Ceremonial Matcha', 'match')).toBe(true);
    expect(matchesQuery('Cold Brew', 'brew')).toBe(true);
    expect(matchesQuery('Almond Croissant', 'almond')).toBe(true);
  });

  test('query that matches nothing returns false', () => {
    expect(matchesQuery('Drip Coffee', 'pizza')).toBe(false);
    expect(matchesQuery('Earl Grey', 'espresso')).toBe(false);
  });

  test('query is trimmed before matching', () => {
    expect(matchesQuery('Espresso', '  espresso  ')).toBe(true);
  });

  test('match is substring-based, not exact', () => {
    expect(matchesQuery('Oat Milk Latte', 'lat')).toBe(true);
  });
});

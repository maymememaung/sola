// Unit tests for the isValid() logic in contact-form.js
// Run with: npm test

// isValid() is a pure function — extract it here so it can be tested without a DOM.
function isValid(field) {
  const value = field.value.trim();
  if (field.id === 'name')    return value.length > 0;
  if (field.id === 'email')   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (field.id === 'message') return value.length >= 10;
  return true;
}

// Helper: create a minimal fake field object
function fakeField(id, value) {
  return { id, value };
}

describe('Contact form validation', () => {
  test('name: rejects an empty string', () => {
    expect(isValid(fakeField('name', ''))).toBe(false);
  });

  test('name: rejects whitespace-only input', () => {
    expect(isValid(fakeField('name', '   '))).toBe(false);
  });

  test('name: accepts any non-empty string', () => {
    expect(isValid(fakeField('name', 'Alex'))).toBe(true);
  });

  test('email: rejects a string with no @ symbol', () => {
    expect(isValid(fakeField('email', 'notanemail'))).toBe(false);
  });

  test('email: rejects a string missing the domain part', () => {
    expect(isValid(fakeField('email', 'user@'))).toBe(false);
  });

  test('email: accepts a well-formed address', () => {
    expect(isValid(fakeField('email', 'alex@example.com'))).toBe(true);
  });

  test('message: rejects text shorter than 10 characters', () => {
    expect(isValid(fakeField('message', 'Hi'))).toBe(false);
  });

  test('message: accepts text of exactly 10 characters', () => {
    expect(isValid(fakeField('message', '1234567890'))).toBe(true);
  });

  test('message: rejects whitespace that trims to under 10 chars', () => {
    expect(isValid(fakeField('message', '   Hi   '))).toBe(false);
  });

  test('unknown field id: always returns true (no validation rule)', () => {
    expect(isValid(fakeField('unknown', ''))).toBe(true);
  });
});

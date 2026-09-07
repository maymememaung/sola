// Unit tests for contact form validation
// Run with: npm test
//
// Once you export validate() from contact-form.js, uncomment the import below.
// import { validate } from '../../js/contact-form.js';

describe('Contact form validation', () => {
  test('returns invalid when name is empty', () => {
    // const result = validate('', 'test@example.com', 'Hello there!');
    // expect(result.name).toBe(false);
  });

  test('returns invalid for a malformed email', () => {
    // const result = validate('Alex', 'not-an-email', 'Hello there!');
    // expect(result.email).toBe(false);
  });

  test('returns invalid when message is shorter than 10 characters', () => {
    // const result = validate('Alex', 'a@b.com', 'Hi');
    // expect(result.message).toBe(false);
  });

  test('returns valid when all fields are correctly filled', () => {
    // const result = validate('Alex', 'alex@example.com', 'Looking forward to visiting!');
    // expect(result.name).toBe(true);
    // expect(result.email).toBe(true);
    // expect(result.message).toBe(true);
  });

  test('trims whitespace before validating', () => {
    // A name of only spaces should still fail
    // const result = validate('   ', 'a@b.com', 'Some message here');
    // expect(result.name).toBe(false);
  });
});

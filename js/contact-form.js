// Contact form — enhanced client-side validation
// Progressive enhancement: the form has native HTML validation attributes
// (required, type="email") so it works without JS. This script adds a richer
// experience: inline error messages per field and a success state on submit.

const form       = document.querySelector('.contact-form');
const successMsg = document.querySelector('.form-success');

if (!form) throw new Error('contact-form.js loaded on a page with no .contact-form');

// Add novalidate now that JS is running — we take over from the browser
form.setAttribute('novalidate', '');

// --- Submit ---
form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateAll()) {
    form.hidden = true;
    successMsg.classList.add('is-visible');
    successMsg.focus(); // move focus to the confirmation so screen readers announce it
  }
});

// --- Blur validation (instant per-field feedback after leaving a field) ---
form.querySelectorAll('input, textarea').forEach(field => {
  field.addEventListener('blur', () => validateField(field));
});

// --- Helpers ---

function validateAll() {
  const fields  = [...form.querySelectorAll('input, textarea')];
  const results = fields.map(validateField);
  // If any field failed, move focus to the first error
  const firstError = form.querySelector('.form-group--error input, .form-group--error textarea');
  if (firstError) firstError.focus();
  return results.every(Boolean);
}

function validateField(field) {
  const group = field.closest('.form-group');
  const valid = isValid(field);
  group.classList.toggle('form-group--error', !valid);
  return valid;
}

function isValid(field) {
  const value = field.value.trim();
  if (field.id === 'name')    return value.length > 0;
  if (field.id === 'email')   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (field.id === 'message') return value.length >= 10;
  return true;
}

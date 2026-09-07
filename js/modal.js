// Photo lightbox modal
// Progressive enhancement: each photo is wrapped in <a href="images/photo-X.jpg">.
// Without JS — clicking navigates directly to the image file. Fully usable.
// With JS    — click is intercepted; the image opens in an overlay instead.

const modal      = document.getElementById('photo-modal');
const modalImage = document.getElementById('modal-image');
const caption    = document.getElementById('modal-caption');
const closeBtn   = document.querySelector('.modal__close');
const backdrop   = document.querySelector('.modal__backdrop');

let lastTrigger = null; // remember which link opened the modal so we can return focus

// Intercept every photo link
document.querySelectorAll('.photo-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // stop the browser from navigating to the image file
    openModal(link);
  });
});

function openModal(trigger) {
  lastTrigger = trigger;

  const img = trigger.querySelector('img');
  modalImage.src = trigger.href;   // full-size source from the <a href>
  modalImage.alt = img.alt;
  caption.textContent = img.alt;

  modal.hidden = false;
  document.body.style.overflow = 'hidden'; // prevent background scroll

  // Move focus into the modal so keyboard users don't stay behind the overlay
  closeBtn.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';

  // Return focus to the link that opened the modal
  if (lastTrigger) lastTrigger.focus();
}

// --- Close triggers ---
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});

// --- Focus trap ---
// While the modal is open, Tab and Shift+Tab must not leave it.
modal.addEventListener('keydown', e => {
  if (e.key !== 'Tab' || modal.hidden) return;

  // Collect every focusable element currently inside the modal
  const focusable = [
    ...modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ].filter(el => !el.disabled && !el.hidden);

  const first = focusable[0];
  const last  = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    // Shift+Tab on the first element → wrap to last
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    // Tab on the last element → wrap to first
    e.preventDefault();
    first.focus();
  }
});

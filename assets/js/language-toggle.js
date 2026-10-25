(() => {
  const control = document.querySelector('#language-switch a');
  if (!control) return;

  // Only the selector is implemented for now; translated pages come next.
  const storageKey = 'preferred-language';
  let language = 'en';
  try {
    if (localStorage.getItem(storageKey) === 'ko') language = 'ko';
  } catch (_) { /* The control still works when storage is unavailable. */ }

  function render() {
    const nextLabel = language === 'en' ? 'Select Korean' : 'Select English';
    control.textContent = language.toUpperCase();
    control.setAttribute('aria-label', nextLabel);
    control.setAttribute('title', nextLabel);
  }

  function toggle() {
    language = language === 'en' ? 'ko' : 'en';
    try { localStorage.setItem(storageKey, language); } catch (_) {}
    render();
  }

  control.addEventListener('click', toggle);
  control.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  });
  render();
})();

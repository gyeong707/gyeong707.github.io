(() => {
  const control = document.querySelector('#language-switch a');
  if (!control) return;

  // The label and destination are rendered from the actual page language.
  // Native links also work without JavaScript and preserve open-in-new-tab.
  control.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      event.preventDefault();
      control.click();
    }
  });
})();

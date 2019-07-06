window.addEventListener('load', () => {
  setupAside();
  setupForm();
  setupRecipes();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('sw registered'));
}

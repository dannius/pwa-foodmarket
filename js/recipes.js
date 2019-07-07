function setupRecipes() {
  const recipes = document.querySelector('.recipes__list');

  if (!recipes) {
    return;
  }

  recipes.addEventListener('click', e => {
    if (!e.target.closest('.remove-recipe')) {
      return;
    }
  });
}

window.addEventListener('load', () => {
  setupRecipes();
});

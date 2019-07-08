function setupRecipes() {
  const recipes = document.querySelector('.recipes__list');

  if (!recipes) {
    return;
  }

  recipes.addEventListener('click', e => {
    if (!e.target.closest('.remove-recipe')) {
      return;
    }

    const recipe = e.target.closest('.recipes__item');
    db.collection('recipes').doc(recipe.id).delete();
  });
}

window.addEventListener('load', () => {
  setupRecipes();
});

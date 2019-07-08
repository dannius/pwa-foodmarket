function setupForm() {
  const form = document.querySelector('#form');

  form.addEventListener('submit' , e => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const ingredients = form.ingredients.value;

    db.collection('recipes').add({ title, ingredients })
      .catch(err => console.log(err));

    form.title.value = '';
    form.ingredients.value = '';
  });
}

window.addEventListener('load', () => {
  setupForm();
});

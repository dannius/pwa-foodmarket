function removeRecipeFromDom({ id }) {
  var recipe = document.getElementById(id);
  recipe.parentNode.removeChild(recipe);
}

function addRecipeToDom(recipe) {
  const list = document.querySelector('#recipes__list');
  
  const html = `
    <div class="card recipes__item d-inline-flex" id="${recipe.id}">
      <img class="m-auto" src="https://via.placeholder.com/150">

      <div class="mt-3 recipes__item-title">${recipe.title}</div>  
      <div class="mt-1 recipes__item-ingredients">${recipe.ingredients}</div>
      
      <div class="mt-1 ml-auto recipes__item-actions">
        <button class="btn btn-danger remove-recipe d-inline-flex">
          <i class="material-icons">delete</i>
        </button>
      </div>
    </div>
  `;

  list.innerHTML += html;
}

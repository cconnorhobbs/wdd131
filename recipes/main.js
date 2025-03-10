import recipes from './recipes.mjs'; 

function displayAppleCrispRecipe() {

  console.log('Apple Crisp Recipe:', appleCrisp);

  const recipeContainer = document.getElementById('recipe-container');

  const appleCrisp = recipes.find(recipe => recipe.name === 'Apple Crisp'); 

  if (appleCrisp) {
    const recipeHTML = `
      <h1>${appleCrisp.name}</h1>
      <img src="${appleCrisp.image}" alt="${appleCrisp.name}" style="max-width: 500px;">
      <p><strong>Author:</strong> ${appleCrisp.author}</p>
      <p><strong>Prep Time:</strong> ${appleCrisp.prepTime}</p>
      <p><strong>Cook Time:</strong> ${appleCrisp.cookTime}</p>
      <p><strong>Description:</strong> ${appleCrisp.description}</p>
      <p><strong>Yield:</strong> ${appleCrisp.recipeYield}</p>
      <p><strong>Rating:</strong> ${appleCrisp.rating} stars</p>
      
      <h3>Ingredients:</h3>
      <ul>
        ${appleCrisp.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>
      
      <h3>Instructions:</h3>
      <ol>
        ${appleCrisp.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
      </ol>
      
      <p><a href="${appleCrisp.url}" target="_blank">Full Recipe Link</a></p>
    `;
    
    recipeContainer.innerHTML = recipeHTML; 
  }
}

displayAppleCrispRecipe();

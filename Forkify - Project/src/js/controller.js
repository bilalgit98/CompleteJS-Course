import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// loading Recipe from API
const controlRecipes = async function () {
  try {
    //Listening For load and hashchange Events
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;

    //loading recipe from API
    recipeView.renderSpinner();
    await model.loadRecipe(id);

    //rendering recipe
    recipeView.render(model.state.recipe);
  } catch (errors) {
    alert(errors);
    console.error(errors);
  }
};

const init = function () {
  recipeView.addHandelerRender(controlRecipes);
};
init();

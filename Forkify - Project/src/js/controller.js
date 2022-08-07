import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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

fetch(
  'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
);

controlRecipes();

//Listening For load and hashchange Events

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

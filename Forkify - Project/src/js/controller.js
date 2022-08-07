import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

// loading Recipe from API
const controlRecipes = async function () {
  try {
    //Listening For load and hashchange Events
    const id = window.location.hash.slice(1);

    //loading recipe from API
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);

    //rendering recipe
    recipeView.render(model.state.recipe);
  } catch (errors) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // get the search query
    const query = searchView.getQuery();
    if (!query) return;
    //load the search results
    await model.loadSearchResults(query);

    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    //render pagination buttons
    paginationView.render(model.state.search);

    //render result
  } catch (errors) {
    console.log(errors);
  }
};

const conrtolPagination = function (goToPage) {
  // console.log(goToPage);
  //render new results
  // resultsView.render(model.state.search.results);
  resultsView.render(model.getSearchResultsPage(goToPage));

  //render new pagination buttons
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandelerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addhandlerCLick(conrtolPagination);
};
init();

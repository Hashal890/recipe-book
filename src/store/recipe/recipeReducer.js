import {
  GET_RANDOM_RECIPES,
  GET_SEARCH_RECIPE,
  GET_RECIPE_BY_ID,
  SAVE_RECIPE_PROFILE,
} from "./recipe.types";

const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

let initData = {
  savedRecipes: savedRecipes,
  data: [],
  singleRecipe: {},
};

const recipeReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case GET_RANDOM_RECIPES: {
      // console.log(payload, "inside reducer");
      return {
        ...state,
        data: payload,
      };
    }
    case GET_RECIPE_BY_ID: {
      // console.log(payload, "inside reducer");
      return {
        ...state,
        singleRecipe: payload,
      };
    }
    case GET_SEARCH_RECIPE: {
      return {
        ...state,
        data: payload,
      };
    }
    case SAVE_RECIPE_PROFILE: {
      const newSavedRecipe = [...state.savedRecipes, payload];
      localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipe));
      return {
        ...state,
        savedRecipes: newSavedRecipe,
      };
    }
    default: {
      return state;
    }
  }
};

export default recipeReducer;

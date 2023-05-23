import {
  GET_RANDOM_RECIPES,
  GET_SEARCH_RECIPE,
  GET_RECIPE_BY_ID,
  SAVE_RECIPE_PROFILE,
} from "./recipe.types";

const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

const initData = {
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
      return {
        ...state,
        savedRecipes: [...state.savedRecipes, payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default recipeReducer;

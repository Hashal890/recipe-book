import axios from "axios";
import {
  GET_RANDOM_RECIPES,
  GET_SEARCH_RECIPE,
  GET_RECIPE_BY_ID,
  SAVE_RECIPE_PROFILE,
  REMOVE_SAVE_RECIPE_PROFILE,
} from "./recipe.types";

export const getRandomRecipies = () => async (dispatch) => {
  try {
    let arr = [];
    while (arr.length < 40) {
      let res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      let isPresent = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].idMeal === res.data.meals[0].idMeal) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        arr.push(res.data.meals[0]);
      }
    }
    dispatch({ type: GET_RANDOM_RECIPES, payload: arr });
    return;
  } catch (err) {
    return console.log(err);
  }
};

export const getSearchRecipies = (searchText) => async (dispatch) => {
  try {
    let res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    );
    // console.log(res);
    dispatch({ type: GET_SEARCH_RECIPE, payload: res.data.meals });
    return;
  } catch (err) {
    return console.log(err);
  }
};

export const getRecipiesByID = (id) => async (dispatch) => {
  try {
    let res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    // console.log(res, "actions");
    dispatch({ type: GET_RECIPE_BY_ID, payload: res.data.meals[0] });
    return;
  } catch (err) {
    return console.log(err);
  }
};

export const saveRecipeToProfile = (recipe) => (dispatch) => {
  try {
    dispatch({ type: SAVE_RECIPE_PROFILE, payload: recipe });
    return;
  } catch (err) {
    return console.log(err);
  }
};

export const removeRecipeFromProfile = (id) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_SAVE_RECIPE_PROFILE, payload: id });
    return;
  } catch (err) {
    return console.log(err);
  }
};

import axios from "axios";
import {
  GET_RANDOM_RECIPES,
  GET_SEARCH_RECIPE,
  GET_RECIPE_BY_ID,
  SAVE_RECIPE_PROFILE,
} from "./recipe.types";

export const getRandomRecipies = () => async (dispatch) => {
  try {
    const arr = new Array(30);
    for (let i = 0; i < 30; i++) {
      let res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      // .then((res) => res.json())
      // .then((res) => (arr[i] = res.data.meals[0]))
      // .catch((err) => console.log(err));
      arr[i] = res.data.meals[0];
    }
    // console.log(arr);
    dispatch({ type: GET_RANDOM_RECIPES, payload: arr });
    return;
  } catch (err) {
    return console.log(err);
  }
};

export const getSearchRecipies = (searchText) => async (dispatch) => {
  try {
    let res = await axios.get(
      `www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    );
    dispatch({ type: GET_SEARCH_RECIPE, payload: res.data });
    return;
  } catch (err) {
    return console.log(err);
  }
};

export const getRecipiesByID = (id) => async (dispatch) => {
  try {
    let res = await axios.get(
      `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    dispatch({ type: GET_RECIPE_BY_ID, payload: res.data });
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

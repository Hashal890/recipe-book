import axios from "axios";
import {
  GET_RANDOM_RECIPES,
  GET_SEARCH_RECIPE,
  GET_RECIPE_BY_ID,
  SAVE_RECIPE_PROFILE,
} from "./recipe.types";

export const getRandomRecipies = () => (dispatch) => {
  try {
    let arr = new Array(30);
    for (let i = 0; i < arr.length; i++) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => (arr[i] = res.data.meals[0]));
    }
    //   console.log(arr);
    dispatch({ type: GET_RANDOM_RECIPES, payload: arr });
    return;
  } catch (err) {
    console.log(err);
  }
};

export const getSearchRecipies = (searchText) => (dispatch) => {
  try {
    axios
      .get(`www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => dispatch({ type: GET_SEARCH_RECIPE, payload: res.data }))
      .catch((err) => console.log(err))
      .finally(() => {
        return;
      });
  } catch (err) {
    console.log(err);
  }
};

export const getRecipiesByID = (id) => (dispatch) => {
  try {
    axios
      .get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => dispatch({ type: GET_RECIPE_BY_ID, payload: res.data }))
      .catch((err) => console.log(err))
      .finally(() => {
        return;
      });
  } catch (err) {
    console.log(err);
  }
};

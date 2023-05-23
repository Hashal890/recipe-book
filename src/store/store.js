import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/authReducer";
import recipeReducer from "./recipe/recipeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

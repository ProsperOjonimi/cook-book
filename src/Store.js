import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/SearchSlice";
import recipeReducer from "./features/recipes/RecipesSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    recipes: recipeReducer,
  },
});

export default store;

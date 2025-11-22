import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/SearchSlice";
import favoriteReducer from "./features/favorites/FavoritesMealSlice";
const store = configureStore({
  reducer: {
    search: searchReducer,
    favorites: favoriteReducer,
  },
});

export default store;

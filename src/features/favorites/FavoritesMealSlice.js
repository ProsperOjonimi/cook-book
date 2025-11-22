import { createSlice } from "@reduxjs/toolkit";

const storedFavorites = localStorage.getItem("favoritesMeals");
const initialState = storedFavorites ? JSON.parse(storedFavorites) : [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites(state, action) {
      const exists = state.find((s) => s.idMeal === action.payload);
      if (!exists) state.push(action.payload);
      localStorage.setItem("favoritesMeals", JSON.stringify(state));
    },
    removeFavorites(state, action) {
      const newState = state.filter((s) => s.idMeal !== action.payload);
      localStorage.setItem("favoritesMeals", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { setFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

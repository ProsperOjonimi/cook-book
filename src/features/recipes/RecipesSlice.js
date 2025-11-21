import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRecipesData: [],
  id: "",
};
const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    saveRecipe(state, action) {
      state.currentRecipesData.push(action.payload);
    },
    saveID(state, action) {
      state.id = action.payload;
    },
  },
});

export default recipeSlice.reducer;
export const { saveRecipe, saveID } = recipeSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  query: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchRecipe(state, action) {
      state.query = action.payload;
    },
  },
});

export const { searchRecipe } = searchSlice.actions;

export default searchSlice.reducer;

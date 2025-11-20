import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/SearchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;

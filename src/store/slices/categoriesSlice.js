import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    addCategories(state, action) {
      return [...state, ...action.payload];
    },
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const { addCategories } = categoriesSlice.actions;

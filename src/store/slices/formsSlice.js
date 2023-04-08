import { createSlice } from "@reduxjs/toolkit";

const formsSlice = createSlice({
  name: "form",
  initialState: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
    changeConfirmPassword(state, action) {
      state.confirmPassword = action.payload;
    },
  },
});

export const formsReducer = formsSlice.reducer;
export const { changeEmail, changePassword, changeConfirmPassword } =
  formsSlice.actions;

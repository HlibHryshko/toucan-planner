import { createSlice } from "@reduxjs/toolkit";
import { hashSync } from "bcryptjs";
import { salt } from "../..";

const formsSlice = createSlice({
  name: "form",
  initialState: {
    email: "",
    oldPassword: "",
    password: "",
    confirmPassword: "",
    hashedPassword: "",
  },
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeOldPassword(state, action) {
      state.oldPassword = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
    changeConfirmPassword(state, action) {
      state.confirmPassword = action.payload;
    },
    resetPasswords(state, action) {
      return { ...state, password: "", confirmPassword: "" };
    },
    hashPassword(state, action) {
      state.hashedPassword = hashSync(state.password, salt);
    },
    resetForm(state, action) {
      return { ...state, email: "", password: "", confirmPassword: "" };
    },
  },
});

export const formsReducer = formsSlice.reducer;
export const {
  changeEmail,
  changeOldPassword,
  changePassword,
  changeConfirmPassword,
  resetPasswords,
  hashPassword,
  resetForm,
} = formsSlice.actions;

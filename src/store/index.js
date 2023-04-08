import { configureStore } from "@reduxjs/toolkit";
import {
  changeConfirmPassword,
  changeEmail,
  changePassword,
  formsReducer,
} from "./slices/formsSlice";

const store = configureStore({
  reducer: {
    form: formsReducer,
  },
});

export { store };
export { changeConfirmPassword, changeEmail, changePassword };

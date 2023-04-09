import { configureStore } from "@reduxjs/toolkit";
import {
  changeConfirmPassword,
  changeEmail,
  changePassword,
  resetPasswords,
  resetForm,
  hashPassword,
  changeOldPassword,
  formsReducer,
} from "./slices/formsSlice";
import {
  usersApi,
  useSignUpMutation,
  useSignInMutation,
} from "./apis/usersApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  categoriesApi,
  useFetchNextCategoriesQuery,
} from "./apis/categoriesApi";
import { usersReducer, signIn } from "./slices/usersSlice";
import { calendarApi, useFetchCalendarDataQuery } from "./apis/calendarApi";
import { categoriesReducer, addCategories } from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    form: formsReducer,
    users: usersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [calendarApi.reducerPath]: calendarApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(calendarApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export {
  changeConfirmPassword,
  changeEmail,
  changePassword,
  changeOldPassword,
  resetForm,
  resetPasswords,
  hashPassword,
  signIn,
  addCategories,
  useSignUpMutation,
  useSignInMutation,
  useFetchNextCategoriesQuery,
  useFetchCalendarDataQuery,
};

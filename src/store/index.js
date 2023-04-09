import { configureStore } from "@reduxjs/toolkit";
import {
  changeConfirmPassword,
  changeEmail,
  changePassword,
  resetPasswords,
  resetForm,
  hashPassword,
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

const store = configureStore({
  reducer: {
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
  resetForm,
  resetPasswords,
  hashPassword,
  signIn,
  useSignUpMutation,
  useSignInMutation,
  useFetchNextCategoriesQuery,
  useFetchCalendarDataQuery,
};

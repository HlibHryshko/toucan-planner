import { configureStore } from "@reduxjs/toolkit";
import {
  changeConfirmPassword,
  changeEmail,
  changePassword,
  formsReducer,
} from "./slices/formsSlice";
import { usersApi, useSignUpMutation, useSingInQuery } from "./apis/usersApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  categoriesApi,
  useFetchNextCategoriesQuery,
} from "./apis/categoriesApi";

const store = configureStore({
  reducer: {
    form: formsReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(categoriesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export { changeConfirmPassword, changeEmail, changePassword };

export { useSignUpMutation, useSingInQuery, useFetchNextCategoriesQuery };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://89.105.243.157:80/",
  }),
  endpoints(builder) {
    return {
      singIn: builder.query({
        query: (form) => {
          return {
            url: "/login",
            params: {
              email: form.email,
              password: form.password,
            },
            method: "get",
          };
        },
      }),
      signUp: builder.mutation({
        query: (form) => {
          return {
            url: "/signup",
            params: {
              email: form.email,
              password: form.password,
            },
            method: "post",
          };
        },
      }),
    };
  },
});

export const { useSingInQuery, useSignUpMutation } = usersApi;
export { usersApi };

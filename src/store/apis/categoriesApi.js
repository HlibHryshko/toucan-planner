const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query/react");

const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "url",
  }),
  endpoints(builder) {
    return {
      fetchNextCategories: builder.query({
        query: (parentCategoryId) => {
          return {
            url: "/categories",
            params: {
              id: parentCategoryId,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchNextCategoriesQuery } = categoriesApi;
export { categoriesApi };

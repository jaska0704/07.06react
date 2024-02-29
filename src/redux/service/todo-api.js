import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL,
    headers: { Autorization: "adfgsrgeeger" },
  }),

  endpoints: (build) => ({
    getTodo: build.query({
      query: (page=1) => {
        return {
          url: "/todos",
          params: { _page: page, _limit: 4 },
        };
      },
      providesTags: ["get-todos"],
      transformResponse: (data, res) => {
        const totalCount = res?.response?.headers?.get("X-total-count");
        const pageSize = parseInt(Number(totalCount)/4) + 1;
        return {data, pageSize};
      },
    }),
    getSingleData: build.query({
      query: (id) => {
        return {
          url: `/todos/${id}`,
        };
      },
    }),
    postTodosData: build.mutation({
      query: (data) => {
        return {
          url: "/todos",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["get-todos"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  useGetSingleDataQuery,
  usePostTodosDataMutation,
} = todoApi;

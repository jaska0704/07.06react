import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL,
    headers: { Autorization: "adfgsrgeeger" },
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: (page = 1) => {
        return {
          url: "/users",
          params: { _page: page, _limit: 5 },
        };
      },
      providesTags: ["get-users"],
      transformResponse: (data, res) => {
        const totalCount = res?.response?.headers?.get("X-total-count");
        const pageSize = parseInt(Number(totalCount) / 5) + 1;
        return { data, pageSize };
      },
    }),
    getSingleUser: build.query({
      query: (data) => {
        return {
          url: `/usersingle`,
        };
      },
    }),
    postUsers: build.mutation({
      query: (data) => {
        return {
          url: "/users",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["get-users"],
    }),
  }),
});

export const {useGetUserQuery, useGetSingleUserQuery, usePostUsersMutation} = userApi;
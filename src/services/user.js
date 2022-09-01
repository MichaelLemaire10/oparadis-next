import { api } from "./index";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => "/users/me",
    }),

    updateUser: build.mutation({
      query: (data) => ({
        url: "/users",
        method: "PATCH",
        body: data,
      }),
    }),

    updatePwd: build.mutation({
      query: (data) => ({
        url: "/users/password",
        method: "PATCH",
        body: data,
      }),
    }),

    deleteUser: build.mutation({
      query: () => ({
        url: "/users",
        method: "DELETE",
      }),
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdatePwdMutation,
  useDeleteUserMutation,
} = userApi;

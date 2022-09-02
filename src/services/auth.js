import { api } from "./index";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    setSignup: build.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),

    setSignin: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    setLogout: build.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),

  }),
  overrideExisting: false,
});

export const {
  useSetSignupMutation,
  useSetSigninMutation,
  useSetLogoutMutation,
} = authApi;

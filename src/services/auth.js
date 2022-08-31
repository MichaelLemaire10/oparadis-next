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
    
  }),
  overrideExisting: false,
});

export const { useSetSignupMutation, useSetSigninMutation } = authApi;

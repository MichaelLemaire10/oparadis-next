import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLogged } from "../reducers/auth/slice";

// BaseQuery accessToken
const baseQueryAuth = fetchBaseQuery({
  baseUrl: process.env.URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    headers.set("Authorization", token ? `Bearer ${token}` : "");
    return headers;
  },
});
// BaseQuery resfreshToken
const baseQueryAuthRefreshToken = fetchBaseQuery({
  baseUrl: process.env.URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("refreshToken");
    headers.set("Authorization", token ? `Bearer ${token}` : "");
    return headers;
  },
});
// BaseQuery basic
const baseQuery = fetchBaseQuery({ baseUrl: process.env.URL });

// BaseQuery Main
const baseQueryWithReauth = async (args, api, extraOptions) => {
  // Route not protected by a token
  if (
    api.endpoint === "getHouses" ||
    api.endpoint === "setSignin" ||
    api.endpoint === "setSignup"
  ) {
    let result = await baseQuery(args, api, extraOptions);
    if (api.endpoint === "setSignin") {
      // dispatch result.data in the store
      if (result.data) {
        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("refreshToken", result.data.refreshToken);
        return result;
      } else {
        return result;
      }
    } else {
      return result;
    }
  } else {
    if (api.endpoint === "setLogout") {
      console.log("logout");
      await baseQueryAuthRefreshToken(args, api, extraOptions);
      localStorage.clear();
      api.dispatch(setLogged(false));
      window.location.replace(process.env.NEXT_PUBLIC_HOME);
    } else {

      // Route protected by a token
      console.log("route auth");

      const refreshToken = localStorage.getItem("refreshToken");
      let result = await baseQueryAuth(args, api, extraOptions);
      // console.log("result Auth =>", result);

      // if accessToken isn't valide
      if (
        refreshToken !== null &&
        result?.error?.status === 401 &&
        result.data.message ===
        'Unauthorized'
      ) {
        console.log("sending refresh token");
        // send refresh token to get new access token
        const refreshResult = await baseQueryAuthRefreshToken(
          "/auth/refreshToken",
          api,
          extraOptions
        );
        console.log("refreshResult =>", refreshResult);

        if (refreshResult?.data) {
          console.log("refreshResult =>", refreshResult);
          const refreshToken = localStorage.getItem("refreshToken");
          const accessToken = refreshResult.data;

          localStorage.setItem("accessToken", ...accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          // retry the original query with new access token
          result = await baseQueryAuth(args, api, extraOptions);
        } else {
          // console.log("/auth/logout");
          await baseQueryAuthRefreshToken(args, api, extraOptions);
          localStorage.clear();
          api.dispatch(setLogged(false));
          window.location.replace(process.env.NEXT_PUBLIC_HOME);
        }
        // if accessToken is valide return result
        return result;
      }
      return result;
    }
  }
};

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../reducers/auth/slice";

const baseQueryAuth = fetchBaseQuery({
  baseUrl: process.env.url,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      // console.log("headers/token =>", headers);
    } else {
      // console.log("headers =>", headers);
      return headers;
    }
  },
});

const baseQuery = fetchBaseQuery({ baseUrl: process.env.url });

const baseQueryWithReauth = async (args, api, extraOptions) => {
  // console.log("api =>", api.endpoint);

  //! added endpoint auth
  if (api.endpoint === "getHouses") {
    let result = await baseQuery(args, api, extraOptions);
    return result;
  } else {
    let result = await baseQueryAuth(args, api, extraOptions);
    console.log("result Auth =>", result);
    if (result?.error?.status && result.error === 403) {
      console.log("sending refresh token");
      // send refresh token to get new access token
      const refreshResult = await baseQuery( "/auth/refreshToken", api, extraOptions);
      console.log("refreshResult =>", refreshResult);

      if (refreshResult?.data) {
        console.log("refreshResult =>", refreshResult);
        const refreshToken = api.getState().auth.refreshToken;

        //! peut etre besoin du await devant api
        api.dispatch(setCredentials({ ...refreshResult.data, refreshToken }));
        // retry the original query with new access token
        result = await baseQueryAuth(args, api, extraOptions);
      } else {
        api.dispatch(logOut());
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

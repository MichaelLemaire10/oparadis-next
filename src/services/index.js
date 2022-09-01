import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut, setLogged } from "../reducers/auth/slice";

const baseQueryAuth = fetchBaseQuery({
  baseUrl: process.env.url,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
      headers.set('Authorization', token ? `Bearer ${token}` : '');
      return headers;
  },
});

const baseQueryAuthRefreshToken = fetchBaseQuery({
  baseUrl: process.env.url,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.refreshToken;
    headers.set('Authorization', token ? `Bearer ${token}` : '');
      return headers;
  },
});

const baseQuery = fetchBaseQuery({ baseUrl: process.env.url });

const baseQueryWithReauth = async (args, api, extraOptions) => {
  if (
    api.endpoint === "getHouses" || api.endpoint === "setSignin" || 
    api.endpoint === "setSignup"
   ) {
    let result = await baseQuery(args, api, extraOptions);
    if (api.endpoint === "setSignin") {
      // dispatch result.data in the store
      if (result.data) {
        api.dispatch(setCredentials(result.data));
        return result;
      } else {
        return result;
      };
    } else {
      return result;
    };
  } else {
    // Route protected by a token
    // console.log('route auth');
    let result = await baseQueryAuth(args, api, extraOptions);
    // console.log("result Auth =>", result);

    // if accessToken isn't valide
    if (result?.error?.status && result.error === 403) {
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
        const refreshToken = api.getState().auth.refreshToken;
        const accessToken = refreshResult.data;

        //! peut etre besoin du await devant api
        api.dispatch(setCredentials({ ...accessToken, refreshToken }));
        // retry the original query with new access token
        result = await baseQueryAuth(args, api, extraOptions);
      } else {
        console.log("/auth/logout");
        await baseQueryAuthRefreshToken("/auth/logout", api, extraOptions);
        api.dispatch(logOut());
        api.dispatch(setLogged(false));
      };
      // if accessToken is valide return result
      return result;
    };
    return result;
  };
};

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

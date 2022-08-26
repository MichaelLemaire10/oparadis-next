import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from "../reducers/auth/slice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token){ 
      headers.set("authorization", `Bearer ${token}`);
      console.log('headers/token =>', headers);
    };
    console.log('headers =>', headers);
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log('result=>', result);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    // send refresh token to get new accesse token
    const refreshResult = await baseQuery(
      "/auth/refreshToken",
      api,
      extraOptions
    );
    console.log("refreshResult =>", refreshResult);
    if (refreshResult?.data) {
      const refreshToken = api.getState().auth.refreshToken;
      api.dispatch(setCredentials({ ...refreshResult.data, refreshToken }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  //? baseQuery: baseQueryWithReauth,
  //?! baseQuery: fetchBaseQuery({ baseUrl: process.env.URL }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: () => ({}),
});
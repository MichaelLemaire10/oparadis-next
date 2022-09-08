import { api } from "./index";

const houseApi = api.injectEndpoints({
  // not auth
  endpoints: (build) => ({
    getHome: build.query({
      query: () => "/",
    }),
    getHouses: build.query({
      query: () => "/houses",
    }),
    // auth
    setHouse: build.mutation({
      query: (data) => ({
        url: "/houses",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetHomeQuery, useGetHousesQuery, useSetHouseMutation } =
  houseApi;

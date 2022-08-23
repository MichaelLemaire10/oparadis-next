import { api } from "./index";

const houseApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHome: build.query({
      query: () => "/",
    }),
    getHouses: build.query({
      query: () => "/houses",
    }),
  }),
  overrideExisting: false,
});

export const { useGetHomeQuery, useGetHousesQuery } = houseApi;

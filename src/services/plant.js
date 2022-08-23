import { api } from './index';

const plantApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHouses: build.query({
      query: () => '/',
    }),
  }),
  overrideExisting: false,
});

export const { useGetHousesQuery } = plantApi;
import { api } from './index';

const animalApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHouses: build.query({
      query: () => '/',
    }),
  }),
  overrideExisting: false,
});

export const { useGetHousesQuery } = animalApi;

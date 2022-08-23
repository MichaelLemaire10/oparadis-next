import { api } from './index';

const photoApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHouses: build.query({
      query: () => '/',
    }),
  }),
  overrideExisting: false,
});

export const { useGetHousesQuery } = photoApi;
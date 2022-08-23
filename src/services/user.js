import { api } from './index';

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => '/',
    }),
  }),
  overrideExisting: false,
});

export const { useGetHousesQuery } = userApi;
import { api } from './index';

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query({
      query: () => '/users/me',
    }),

  }),
  overrideExisting: false,
});

export const { useGetMeQuery } = userApi;
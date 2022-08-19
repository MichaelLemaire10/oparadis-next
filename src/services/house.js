import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const houseApi = createApi({
  reducerPath: 'houseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: builder => ({
    getHome: builder.query({
      query: () => '/'
      .then((res) => console.log('USER api', res))
      .catch((err) => console.log('err', err)),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHomeQuery } = houseApi
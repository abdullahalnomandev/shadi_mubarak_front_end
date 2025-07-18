import { createApi } from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '@/helpers/config/envConfig'
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  tagTypes: ['user'],
  endpoints: () => ({  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

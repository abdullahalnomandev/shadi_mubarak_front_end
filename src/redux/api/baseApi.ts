import { createApi } from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '@/helpers/config/envConfig'
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { TagTypesList } from '../tag-types'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  tagTypes:TagTypesList,
  endpoints: () => ({  }),
})
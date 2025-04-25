import { TagTypes } from '../tag-types';
import { baseApi } from './baseApi'

const AUTH_URL = '/auth';

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: 'POST',
        data: loginData
      }),
      invalidatesTags: [TagTypes.user],
    }),
  }),
  overrideExisting: false,
})

export const {  useUserLoginMutation} = authApi
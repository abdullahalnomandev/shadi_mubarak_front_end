import { IMeta, IUser } from '@/types';
import { TagTypes } from '../tag-types';
import { baseApi } from './baseApi';

const USER_API = '/users';

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (arg:Record<string,any>) => ({
        url: USER_API,
        method: 'GET',
        params: arg
      }),
      transformResponse: (response: IUser,meta:IMeta) => {
        return {
          users: response,
          meta:meta,
        };
      },
      providesTags: [TagTypes.user]
    }),

  }),
  overrideExisting: false,
});

export const { 
  useGetUsersQuery
} = userApi;
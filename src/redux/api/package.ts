import { TagTypes } from '../tag-types';
import { baseApi } from './baseApi'

const PACKAGE_URL = '/package';

const packageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPackage: build.mutation({
      query: (data) => ({
        url: PACKAGE_URL,
        method: 'POST',
        data
      }),
      invalidatesTags: [TagTypes.package],
    }),
    getPackages: build.query({
      query: () => ({
        url: PACKAGE_URL,
        method: 'GET'
      }),
    }),
  }),
  overrideExisting: false,
})

export const {  useGetPackagesQuery , useCreatePackageMutation} = packageApi;
import { IMeta, IPackage } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PACKAGE_URL = "/package";

const packageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPackage: build.mutation({
      query: (data) => ({
        url: PACKAGE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [TagTypes.package],
    }),
    getPackages: build.query({
      query: () => ({
        url: PACKAGE_URL,
        method: "GET",
      }),
      transformResponse: (response: IPackage, meta: IMeta) => {
        return {
          packages: response,
          meta: meta,
        };
      },
      providesTags: [TagTypes.package],
    }),
  }),
  overrideExisting: false,
});

export const { useGetPackagesQuery, useCreatePackageMutation } = packageApi;

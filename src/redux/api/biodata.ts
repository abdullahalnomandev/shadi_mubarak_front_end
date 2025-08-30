import { IMeta } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BIO_DATA_API = "/biodata";

const biodataApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBioDataByNo: build.query({
      query: ({ bioDataNo }: Record<string, any>) => ({
        url: `${BIO_DATA_API}/${bioDataNo}`,
        method: "GET",
        // params: arg,
      }),
      transformResponse: (response) => {
        return {
          biodata: response,
        };
      },
      providesTags: [TagTypes.biodata],
    }),

    getALlBiodatas: build.query({
      query: (arg: Record<string, any>) => ({
        url: BIO_DATA_API,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          biodatas: response,
          meta: meta,
        };
      },
      providesTags: [TagTypes.biodata],
    }),

    getBiodataByStep: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${BIO_DATA_API}/step/${arg?.stepNumber}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          biodata: response,
          meta: meta,
        };
      },
      providesTags: [TagTypes.biodata],
    }),
    updateBiodata: build.mutation({
      query: ({ stepNumber, biodataStepInfo }) => {
        return {
          url: `${BIO_DATA_API}/step/${stepNumber}`,
          method: "PATCH",
          data: biodataStepInfo, // ✅ Use 'data' instead of 'body'
        };
      },
      invalidatesTags: [TagTypes.biodata, TagTypes.user],
    }),

    updateProfile: build.mutation({
      query: (payload: Partial<any>) => ({
        url: `${BIO_DATA_API}/me`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: [TagTypes.biodata, TagTypes.user],
    }),

    deleteBioData: build.mutation({
      query: () => ({
        url: BIO_DATA_API,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.biodata, TagTypes.user],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetBiodataByStepQuery,
  useUpdateBiodataMutation,
  useGetALlBiodatasQuery,
  useGetBioDataByNoQuery,
  useUpdateProfileMutation,
  useDeleteBioDataMutation,
} = biodataApi;

import { IConnection } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PURCHASE_BIODATA = "/purchase-biodata";

const packageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    purchaseBiodata: build.mutation({
      query: (data) => ({
        url: PURCHASE_BIODATA,
        method: "POST",
        data,
      }),
      invalidatesTags: [TagTypes.purchase_biodata,TagTypes.biodata],
    }),
    getConnection: build.query({
      query: () => ({
        url: PURCHASE_BIODATA,
        method: "GET",
      }),
      transformResponse: (response: IConnection) => {
        return {
          connections: response
        };
      },
      providesTags: [TagTypes.purchase_biodata],
    }),
    createPayment: build.mutation({
        query: (data) => ({
          url: "/payment",
          method: "POST",
          data,
        })
    }),
  }),
  overrideExisting: false,
});

export const { useCreatePaymentMutation, useGetConnectionQuery, usePurchaseBiodataMutation } = packageApi;

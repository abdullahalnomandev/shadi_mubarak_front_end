import { IFavorite, IMeta } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_API = "/liked-list";

const favoriteListApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFavoriteList: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${USER_API}/get-all-liked-list`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IFavorite, meta: IMeta) => {
        return {
          favorites: response,
          meta: meta,
        };
      },
      providesTags: [TagTypes.favorite],
    }),
    getFavoriteOneById: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${USER_API}/get-all-liked-list/${arg.likedPersonId}`,
        method: "GET"
      }),
      transformResponse: (response: IFavorite) => {
        return {
          favorite: response,
        };
      },
      providesTags: [TagTypes.favorite],
    }),
    addFavoriteList: build.mutation({
      query: (data) => ({
        url: USER_API,
        method: "POST",
        data,
      }),
      invalidatesTags: [TagTypes.favorite],
     }),
    deleteFavoriteList: build.mutation({
      query: ({likedPersonBioNo}) => ({
        url: `${USER_API}/delete-liked-list/${likedPersonBioNo}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.favorite],
    }),
  }),
  overrideExisting: false,
});

export const { useGetFavoriteOneByIdQuery, useAddFavoriteListMutation, useGetFavoriteListQuery, useDeleteFavoriteListMutation } =
  favoriteListApi;

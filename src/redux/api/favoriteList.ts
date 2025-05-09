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
    deleteFavoriteList: build.mutation({
      query: (id) => ({
        url: `${USER_API}/delete-liked-list/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.favorite],
    }),
  }),
  overrideExisting: false,
});

export const { useGetFavoriteListQuery, useDeleteFavoriteListMutation } =
  favoriteListApi;

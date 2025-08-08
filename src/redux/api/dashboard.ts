import { IDashboard } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DASHBOARD_API = "/dashboard";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDashboardInfo: build.query({
      query: () => ({
        url: DASHBOARD_API,
        method: "GET",
      }),
      transformResponse: (response: IDashboard) => {
        return {
          dashboard: response,
        };
      },
      providesTags: [TagTypes.dashboard],
    }),
  }),
});

export const { useGetDashboardInfoQuery  } = dashboardApi;

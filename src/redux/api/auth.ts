import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [TagTypes.user],
    }),

    userRegister: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [TagTypes.user],
    }),

    userForgetPassword: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [TagTypes.user],
    }),

    userResetPassword: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [TagTypes.user],
    }),

    userVerify: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/verify`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [TagTypes.user],
    }),
  }),

  overrideExisting: false,
});

export const {
  useUserLoginMutation,
  useUserRegisterMutation,
  useUserForgetPasswordMutation,
  useUserResetPasswordMutation,
  useUserVerifyMutation,
} = authApi;

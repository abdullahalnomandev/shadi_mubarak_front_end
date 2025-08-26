import { setAccessTokenToCookie } from "@/services/action.setTokenToCookie";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (args: { loginData: any; callbackUrl?: string }) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: args.loginData, // use loginData from args
      }),
      invalidatesTags: [TagTypes.user],
      transformResponse: (response, meta, arg) => {
        if (response?.accessToken) {
          setAccessTokenToCookie(response.accessToken, {
            redirect: arg.callbackUrl || "/", // use callbackUrl from arg here
          });
        }
        return response;
      },
    }),

    userRegister: build.mutation({
      query: (args: { loginData: any; callbackUrl?: string }) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        data: args.loginData,
      }),
      invalidatesTags: [TagTypes.user],
      transformResponse: (response, meta, arg) => {
        if (response?.accessToken) {
          setAccessTokenToCookie(response.accessToken, {
            redirect: arg.callbackUrl || "/", // use callbackUrl from arg here
          });
        }
        return response;
      },
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

    userUpdatePassword: build.mutation({
      query: (updatePassword) => ({
        url: `${AUTH_URL}/change-password`,
        method: "POST",
        data: updatePassword,
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
  useUserUpdatePasswordMutation,
} = authApi;

import { IMeta } from "@/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { instance as axiosInstance } from "./axiosInstance";

interface AxiosBaseQueryArgs {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
  contentType?: string;
  meta?: IMeta;
}

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> =>
  async ({ url, method = "GET", data, params, headers = {}, contentType }) => {
    try {
      const finalHeaders = {
        ...headers,
        "Content-Type": contentType || "application/json",
      };

      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: finalHeaders,
        withCredentials: true,
      });

      return result;
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      console.log('banlga999',err);
      return {
        error: {
          status: err.status,
          data: (err.response?.data as any)?.message || err?.message,
        },
      };
    }
  };

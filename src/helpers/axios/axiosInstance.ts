/* eslint-disable @typescript-eslint/ban-ts-comment */
import { authKey } from "@/constants/storageKey";
import { IGenericErrorMessage, ResponseSuccessType } from "@/types";
import { getFromLocalStorage } from "@/utils/logal-storage";
import axios from "axios";


const instance = axios.create();

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 6000;
  

instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  const accessToken = getFromLocalStorage(authKey);
  if(accessToken) {
    config.headers.Authorization =  accessToken ? `Bearer ${accessToken}` : "";
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

//@ts-ignore
instance.interceptors.response.use(function (response) {
  const responseObject:ResponseSuccessType = {
    data: response?.data?.data,
    meta:response?.data?.meta
  }
  
  return responseObject;
}, function (error) {
  const responseObject:IGenericErrorMessage = {
    statusCode:error?.response?.data?.statusCode || 500,
    status:error?.response?.data?.status,
    message: error?.response?.data?.message || "Something went wrong! Please try again later!",
    errorMessages: error?.response?.data?.errorMessages
  }

  return Promise.reject(responseObject);
});


export {instance};
import { JwtPayload } from "jwt-decode";
export interface IMeta {
    page: number;
    limit: number;
    total: number;
  }
  
  export type ResponseSuccessType<T = unknown> = {
    data: T;
    meta?: IMeta;
  };
  
  export type IGenericErrorMessage = {
    statusCode?: number;
    status?: string;
    message?: string;
    errorMessages?: { path: string; message: string }[];
  }

export type IUserPayload =  {
  role: string;
  bioDataNo?: string;
  email?: string;
  id?: string;
} & JwtPayload;
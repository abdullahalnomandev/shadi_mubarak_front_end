import { JwtPayload } from "jwt-decode";
export interface IMeta {
    page: number;
    limit: number;
    total: number;
  }
  
  export type ResponseSuccessType<T = any> = {
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

export type IUser = {
  _id: string;
  email: string;
  role: string;
  bioDataNo: any;
  id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
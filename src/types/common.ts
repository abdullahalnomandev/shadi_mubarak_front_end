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
};

export type IUserPayload = {
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
};

export type IFavorite = {
  _id: string;
  userId: string;
  likedPerson: {
    _id: string;
    bioDataNo: string;
    address: string;
  };
};
export type IPackage = {
  _id: string;
  name: string;
  connections: number;
  description: string;
  isSelected: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  price: number;
  effectivePrice: number;
};

export type IConnection = {
  _id: string;
  total_connections: number;
}

export type IDashboard = {
  totalProfileConnections: number;
  totalBioDataPurchased: number;
  totalBioDataFavorite: number;
  totalUsersWhoFavoriteYou: number;
  profileVisitStats: {
    visitsLast7Days: number;
    visitsLast30Days: number;
    visitsLast90Days: number;
  };
};
import { IApiRequest, IUser } from "@types";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse extends IApiRequest<IUser> {
  accessToken: string;
}
export interface SignupRequest {
  first_name: string;
  last_name: string;
  role: string;
  mobile_number: string;
  email: string;
  password: string;
}

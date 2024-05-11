import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "env";
import { LoginRequest, LoginResponse, SignupRequest } from "./auth.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${env.BASE_URL}/auth/` }),
  tagTypes: ["Login", "Signup", "LoginByToken"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => {
        console.log({ data });
        return {
          url: "login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
      invalidatesTags: ["Login"],
    }),
    signup: builder.mutation<any, SignupRequest>({
      query: (data) => {
        return {
          url: "signup",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
      invalidatesTags: ["Signup"],
    }),
    loginByToken: builder.mutation<any, { token: string }>({
      query: (data) => {
        return {
          url: "login-by-token",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
      invalidatesTags: ["LoginByToken"],
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLoginByTokenMutation } =
  authApi;

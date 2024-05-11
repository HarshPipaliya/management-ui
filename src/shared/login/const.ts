import * as yup from "yup";
import { stringRequired } from "constant";

export enum LoginInputs {
  USERNAME = "username",
  PASSWORD = "password",
}

export const loginSchema = yup.object({
  [LoginInputs.USERNAME]: stringRequired("Please enter username"),
  [LoginInputs.PASSWORD]: stringRequired("Please enter password"),
});

export interface ILoginForm {
  [LoginInputs.USERNAME]: string;
  [LoginInputs.PASSWORD]: string;
}

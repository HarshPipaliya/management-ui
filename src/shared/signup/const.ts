import * as yup from "yup";
import { stringRequired } from "constant";

export enum SignupInputs {
  FIRSTNAME = "first_name",
  LASTNAME = "last_name",
  MOBINE_NUMBER = "mobile_number",
  EMAIL = "email",
  PASSWORD = "password",
}

export const signupSchema = yup.object({
  [SignupInputs.FIRSTNAME]: stringRequired("Please enter username"),
  [SignupInputs.LASTNAME]: stringRequired("Please enter password"),
  [SignupInputs.MOBINE_NUMBER]: stringRequired("Please enter password"),
  [SignupInputs.EMAIL]: stringRequired("Please enter password"),
  [SignupInputs.PASSWORD]: stringRequired("Please enter password"),
});

export interface ISignupForm {
  [SignupInputs.FIRSTNAME]: string;
  [SignupInputs.LASTNAME]: string;
  [SignupInputs.MOBINE_NUMBER]: string;
  [SignupInputs.EMAIL]: string;
  [SignupInputs.PASSWORD]: string;
}

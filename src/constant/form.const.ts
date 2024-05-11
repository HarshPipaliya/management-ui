import * as yup from "yup";

export const stringRequired = (message?: string) =>
  yup.string().required(message);

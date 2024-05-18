import { InputHTMLAttributes } from "react";

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassname?: string;
  fullWidth?: boolean;
  label?: string;
  labelClassname?: string;
  error?: boolean;
  helperText?: string;
}

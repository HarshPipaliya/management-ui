import { ButtonHTMLAttributes } from "react";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  fullWidth?: boolean;
  variant?: "contained" | "outlined";
  color?: "primary" | "error" | "secondary" | "warning" | "info";
}

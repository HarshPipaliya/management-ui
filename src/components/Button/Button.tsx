import React from "react";
import { IProps } from "./button.props";
import { cn } from "utils";
import styles from "./button.module.scss";

const Button = React.forwardRef<HTMLButtonElement, IProps>(
  (
    {
      loading,
      children,
      className,
      fullWidth,
      variant = "contained",
      color = "primary",
      ...rest
    },
    ref
  ) => {
    const fullWidthClass = fullWidth ? "full-width" : "";
    const variantClass =
      variant === "outlined" ? styles["button-outlined"] : "";
    const colorClass = color === "error" ? styles["button-error"] : "";
    return (
      <button
        className={cn(
          styles.button,
          className,
          fullWidthClass,
          variantClass,
          colorClass
        )}
        ref={ref}
        disabled={loading}
        {...rest}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

export default Button;

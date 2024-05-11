import React from "react";
import { IProps } from "./button.props";
import { cn } from "utils";
import styles from "./button.module.scss";

const Button = React.forwardRef<HTMLButtonElement, IProps>(
  ({ loading, children, className, fullWidth, ...rest }, ref) => {
    const fullWidthClass = fullWidth ? "full-width" : "";
    return (
      <button
        className={cn(styles.button, className, fullWidthClass)}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;

import React from "react";
import { IProps } from "./input.props";
import { cn } from "utils";
import styles from "./Input.module.scss";

const Input = React.forwardRef<HTMLInputElement, IProps>(
  (
    {
      className,
      containerClassname,
      fullWidth,
      label,
      labelClassname,
      ...rest
    },
    ref
  ) => {
    const fullWidthClass: string = fullWidth ? "full-width" : "";
    return (
      <div className={cn(containerClassname, fullWidthClass)}>
        {<label className={cn(styles.label, labelClassname)}>{label}</label>}
        <input
          ref={ref}
          {...rest}
          className={cn(styles.input, className, fullWidthClass, "mt-1")}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

import React from "react";
import styles from "./AuthHeader.module.scss";

interface IProps {
  primaryText: string;
  secondaryText: string;
}

const AuthHeader: React.FC<IProps> = ({ primaryText, secondaryText }) => {
  return (
    <div className={styles.header}>
      <img alt="logo" src="/logo.png" style={{ width: "60px" }} />
      <div>
        <h1>{primaryText}</h1>
        <h5>{secondaryText}</h5>
      </div>
    </div>
  );
};

export default AuthHeader;

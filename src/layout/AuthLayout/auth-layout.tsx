import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./auth-layout.module.scss";

const AuthLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/bg-preview.png" className={styles.leftImage} />
      {/* <img src="/bg-preview.png" className={styles.rightImage} /> */}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

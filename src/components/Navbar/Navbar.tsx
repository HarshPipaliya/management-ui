import React from "react";
import styles from "./Navbar.module.scss";
import { Button } from "components/Button";
import useAuth from "hooks/useAuth";
import { Roles } from "enum";
import { organizationMenus, userMenus } from "constant";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  console.log({ user });
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles["header-left"]}>
          <div className={styles.logo}>
            <img
              alt="logo"
              src="/logo.png"
              onClick={() => navigate("/")}
              className="cursor-pointer"
            />
          </div>
          {user?.role === Roles.ORGANIZATION
            ? organizationMenus?.map(({ name, path }) => {
                return (
                  <p
                    key={path}
                    onClick={() => navigate(path)}
                    className="cursor-pointer"
                  >
                    {name}
                  </p>
                );
              })
            : user?.role === Roles.USER
            ? userMenus?.map(({ name, path }) => {
                return (
                  <p
                    key={path}
                    onClick={() => navigate(path)}
                    className="cursor-pointer"
                  >
                    {name}
                  </p>
                );
              })
            : null}
        </div>
        <div className={styles["header-left"]}>
          <Button color="error" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

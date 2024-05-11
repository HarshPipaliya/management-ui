import React from "react";
import { Route, Routes } from "react-router-dom";
import { organizationRoutes, userRoutes } from "./routes";
import useAuth from "hooks/useAuth";
import { Roles } from "enum";

const DynamicRoute: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {user?.role === Roles.ORGANIZATION ? (
        <>
          {organizationRoutes.map(({ name, path, element }) => {
            return <Route key={name} path={path} element={element} />;
          })}
        </>
      ) : user?.role === Roles.ORGANIZATION ? (
        <>
          {userRoutes.map(({ name, path, element }) => {
            return <Route key={name} path={path} element={element} />;
          })}
        </>
      ) : null}
    </Routes>
  );
};

export default DynamicRoute;

import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./private-route";
import DynamicRoute from "./dynamic-route";
import { publicRoutes } from "./routes";
import { AuthLayout } from "layout";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/*" element={<DynamicRoute />} />
      </Route>
      <Route element={<AuthLayout />}>
        {publicRoutes.map(({ name, path, element }) => {
          return <Route key={name} path={path} element={element} />;
        })}
      </Route>
    </Routes>
  );
};

export default Router;

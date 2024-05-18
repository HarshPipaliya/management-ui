import React from "react";
import { Route, Routes } from "react-router-dom";
import DynamicRoute from "./dynamic-route";
import { publicRoutes } from "./routes";
import { AuthLayout, PrivateLayout } from "layout";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/*" element={<DynamicRoute />} />
      </Route>
      <Route element={<AuthLayout />}>
        {publicRoutes.map(({ name, path, element }) => {
          return <Route key={name} path={path} element={element} />;
        })}
      </Route>
      <Route
        path="*"
        element={<h1 className="text-center">Page Not Found!</h1>}
      />
    </Routes>
  );
};

export default Router;

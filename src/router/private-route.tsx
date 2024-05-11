import { useLoginByTokenMutation } from "api";
import { SplashScreen } from "components";
import { Routes } from "enum";
import useAuth from "hooks/useAuth";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute: React.FC = () => {
  const { user, token, setUser } = useAuth();

  const [loginByToken, { isLoading }] = useLoginByTokenMutation();

  useEffect(() => {
    if (token && !user) {
      handleLogin();
    }
  }, [token, user]);

  const handleLogin = async () => {
    try {
      const res = (await loginByToken({
        token,
      })) as any;
      if (res?.error) {
        throw new Error(res?.error?.data?.message);
      }
      setUser(res?.data?.data);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  return token ? (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div>
          <p>This is navbar with layout</p>
          <Outlet />
        </div>
      )}
    </>
  ) : (
    <Navigate to={Routes.LOGIN} />
  );
};

export default PrivateRoute;

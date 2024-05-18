import { useLoginByTokenMutation } from "api";
import { Navbar, SplashScreen } from "components";
import { Routes } from "enum";
import useAuth from "hooks/useAuth";
import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateLayout: React.FC = () => {
  const navigate = useNavigate();
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
      navigate(Routes.LOGIN);
    }
  };
  return token ? (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div>
          <Navbar />
          <Outlet />
        </div>
      )}
    </>
  ) : (
    <Navigate to={Routes.LOGIN} />
  );
};

export default PrivateLayout;

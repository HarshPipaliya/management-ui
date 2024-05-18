import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginForm, LoginInputs, loginSchema } from "./const";
import styles from "./login-form.module.scss";
import { AuthHeader, Button, Input } from "components";
import { useLoginMutation } from "api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import { setLocalItem } from "utils";
import { LocalItems, Routes } from "enum";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (values: ILoginForm) => {
    try {
      const res = (await login({
        username: values?.username,
        password: values?.password,
      })) as any;
      if (res?.error) {
        throw new Error(res?.error?.data?.message);
      }
      toast.success("User Registered");
      setLocalItem(LocalItems.TOKEN, res?.data?.accessToken);
      setToken(res?.data?.accessToken);
      setUser(res?.data?.data);
      navigate("/");
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <AuthHeader
          primaryText="Sign In"
          secondaryText="Please Enter Your Credentials to Login."
        />
        <Input
          {...register(LoginInputs.USERNAME)}
          placeholder="Enter here"
          label="Username"
          fullWidth
          error={!!errors[LoginInputs.USERNAME]}
          helperText={errors[LoginInputs.USERNAME]?.message}
        />
        <Input
          {...register(LoginInputs.PASSWORD)}
          placeholder="Enter here"
          label="Password"
          fullWidth
          error={!!errors[LoginInputs.PASSWORD]}
          helperText={errors[LoginInputs.PASSWORD]?.message}
        />
        <Button fullWidth type="submit" loading={isLoading}>
          Login
        </Button>
        {/* <p className={styles["login-with"]}>Or Login With</p>
        <Button variant="outlined" fullWidth>
          Sign in with google
        </Button> */}
        <p className="text-center">
          Don't have an account? <Link to={Routes.SIGNUP}>Signup here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

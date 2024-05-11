import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginForm, LoginInputs, loginSchema } from "./const";
import styles from "./login-form.module.scss";
import { Button, Input } from "components";
import { useLoginMutation } from "api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import { setLocalItem } from "utils";
import { LocalItems } from "enum";

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

  const [login] = useLoginMutation();

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
        <div>
          <h1>SIGN IN</h1>
          <h5>Please Enter Your Credentials to Login.</h5>
        </div>
        <Input
          {...register(LoginInputs.USERNAME)}
          placeholder="Enter here"
          label="Username"
          fullWidth
        />
        <Input
          {...register(LoginInputs.PASSWORD)}
          placeholder="Enter here"
          label="Password"
          fullWidth
        />
        <Button fullWidth type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

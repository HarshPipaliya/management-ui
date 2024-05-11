import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignupForm, SignupInputs, signupSchema } from "./const";
import styles from "./signup-form.module.scss";
import { Button, Input } from "components";
import { useSignupMutation } from "api";
import { Roles, Routes } from "enum";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({
    resolver: yupResolver(signupSchema),
  });

  const [signup] = useSignupMutation();

  const onSubmit = async (values: ISignupForm) => {
    try {
      const res = (await signup({
        ...values,
        role: Roles.ORGANIZATION,
      })) as any;
      if (res?.error) {
        throw new Error(res?.error?.data?.message);
      }
      toast.success("User Registered");
      navigate(Routes.LOGIN);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className="text-center">Signup</h2>
        <Input
          {...register(SignupInputs.FIRSTNAME)}
          placeholder="Enter here"
          label="First Name"
          fullWidth
        />
        <Input
          {...register(SignupInputs.LASTNAME)}
          placeholder="Enter here"
          label="Last Name"
          fullWidth
        />
        <Input
          {...register(SignupInputs.MOBINE_NUMBER)}
          placeholder="Enter here"
          label="Mobile No."
          fullWidth
        />
        <Input
          {...register(SignupInputs.EMAIL)}
          placeholder="Enter here"
          label="Email"
          fullWidth
        />
        <Input
          {...register(SignupInputs.PASSWORD)}
          placeholder="Enter here"
          label="Password"
          fullWidth
        />
        <Button fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;

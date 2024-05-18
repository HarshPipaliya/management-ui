import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignupForm, SignupInputs, signupSchema } from "./const";
import styles from "./signup-form.module.scss";
import { AuthHeader, Button, Input } from "components";
import { useSignupMutation } from "api";
import { Roles, Routes } from "enum";
import { Link, useNavigate } from "react-router-dom";
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

  const [signup, { isLoading }] = useSignupMutation();

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
        <AuthHeader
          primaryText="Create an account"
          secondaryText="Please Enter Your Credentials to Signup."
        />
        <div className="flex items-start gap-3">
          <Input
            {...register(SignupInputs.FIRSTNAME)}
            placeholder="Enter here"
            label="Firstname"
            fullWidth
            error={!!errors[SignupInputs.FIRSTNAME]}
            helperText={errors[SignupInputs.FIRSTNAME]?.message}
          />
          <Input
            {...register(SignupInputs.LASTNAME)}
            placeholder="Enter here"
            label="Lastname"
            fullWidth
            error={!!errors[SignupInputs.LASTNAME]}
            helperText={errors[SignupInputs.LASTNAME]?.message}
          />
        </div>
        <Input
          {...register(SignupInputs.EMAIL)}
          placeholder="Enter here"
          label="Email"
          fullWidth
          error={!!errors[SignupInputs.EMAIL]}
          helperText={errors[SignupInputs.EMAIL]?.message}
        />
        <Input
          {...register(SignupInputs.MOBINE_NUMBER)}
          placeholder="Enter here"
          label="Mobile No."
          fullWidth
          error={!!errors[SignupInputs.MOBINE_NUMBER]}
          helperText={errors[SignupInputs.MOBINE_NUMBER]?.message}
        />
        <Input
          {...register(SignupInputs.PASSWORD)}
          placeholder="Enter here"
          label="Password"
          fullWidth
          error={!!errors[SignupInputs.PASSWORD]}
          helperText={errors[SignupInputs.PASSWORD]?.message}
        />
        <Button fullWidth type="submit" loading={isLoading}>
          Let's go
        </Button>
        <p className="text-center">
          Already have an account? <Link to={Routes.LOGIN}>Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;

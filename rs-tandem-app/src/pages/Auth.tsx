import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginType } from "../types/LoginType/LoginType";
import BackButton from "../components/ui/BackButton";
import SignInBtn from "../components/features/Auth/SignInBtn";
import AuthInput from "../components/features/Auth/AuthInput";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();
  const onSubmit: SubmitHandler<LoginType> = (data) => {
    console.log(`${data}`);
  };
  return (
    <>
      <div className=" min-h-[400px] min-w-[500px] w-[50%] items-center flex flex-col rounded-[57px] mx-auto my-0  px-0 py-[20px] gap-[10px] bg-japanese-indigo justify-center relative">
        <BackButton />
        <h2 className="font-figtree text-5xl font-extrabold mx-auto">Login</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[10px]  w-[70%]"
        >
          <AuthInput
            label="Email"
            id="authEmail"
            type="email"
            placeholder="Enter your email"
            error={errors.authEmail}
            register={register("authEmail", {
              required: "This field is required",
            })}
          />
          <AuthInput
            label="Password"
            id="auth_password"
            type="password"
            placeholder="Enter your password"
            error={errors.authPassword}
            register={register("authPassword", {
              required: "This field is required",
              minLength: {
                value: 7,
                message: "The password must contain at least 7 characters",
              },
              validate: {
                hasUpperCase: (value) =>
                  /[A-Z]/.test(value) ||
                  "The password must contain at least ONE uppercase letter",
                hasNumber: (value) =>
                  /[0-9]/.test(value) ||
                  "The password must contain at least ONE number",
              },
            })}
          />

          <SignInBtn />
        </form>
      </div>
    </>
  );
};

export default Auth;

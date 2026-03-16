import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginType } from "../../../types/LoginType/LoginType";
import BackButton from "../../ui/BackButton";
import AuthInput from "./AuthInput";
import SignInBtn from "./SignInBtn";
import type { FieldConfigType } from "../../../types/LoginType/AuthPropsType";
type propsAuth = {
  dataArray: FieldConfigType<LoginType>[];
  label: string;
  btnContent: string;
};
const Auth: React.FC<propsAuth> = ({ dataArray, label, btnContent }) => {
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
        <div className="relative flex items-center justify-center w-full mb-[20px]">
          <div className="absolute left-0">
            <BackButton />
          </div>
          <h2 className="font-figtree text-5xl font-extrabold mx-auto">
            {label}
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[10px]  w-[70%]"
        >
          {dataArray.map((field) => (
            <AuthInput
              key={field.id}
              label={field.label}
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              error={errors[field.name]}
              register={register(field.name, field.rules)}
            />
          ))}

          <SignInBtn btnContent={btnContent} />
        </form>
      </div>
    </>
  );
};

export default Auth;

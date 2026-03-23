import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginType } from "../../../types/LoginType/LoginType";
import BackButton from "../../ui/BackButton";
import AuthInput from "./AuthInput";
import SignInBtn from "./SignInBtn";
import type { FieldConfigType } from "../../../types/LoginType/AuthPropsType";
import { auth } from "../../../features/auth/api/firebase";
import {
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

import { getFirebaseErrorMessage } from "../../../features/auth/api//firebaseErrors";

async function SignInUser(
  email: string,
  password: string,
  displayName: string,
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName });

    console.log("Пользователь создан и имя установлено:", displayName);
    toast.success("Пользователь успешно создан!");
  } catch (error) {
    console.error(error);
    toast.error(getFirebaseErrorMessage((error as { code: string }).code));
  }
}

async function LoginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    console.log("Вход выполнен:", user.email);
    toast.success("Успешный вход! Пользователь " + user.displayName);
    console.log("Текущее имя:", user.displayName || "не установлено");

    return user;
  } catch (error) {
    console.error("Ошибка входа:", error);
    toast.error(getFirebaseErrorMessage((error as { code: string }).code));
    throw error;
  }
}

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
    if (label === "Registration") {
      SignInUser(
        data.authEmail,
        data.authPassword,
        data.authName?.toString() || "",
      );
      console.log(`${data}`);
    } else if (label === "Login") {
      LoginUser(data.authEmail, data.authPassword)
        .then((loggedInUser) => {
          const user = loggedInUser;
          console.log("Пользователь вошел в систему:", user);
        })
        .catch((error) => {
          console.error("Ошибка входа:", error);
        });
    }
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

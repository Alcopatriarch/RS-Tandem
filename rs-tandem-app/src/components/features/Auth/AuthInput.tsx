import React from "react";
import type { AuthPropsType } from "../../../types/LoginType/AuthPropsType";

const AuthInput = ({label,id,type = "text",placeholder,register,error}: AuthPropsType) => {
  return (
    <div className="flex flex-col items-start gap-[15px] w-full">
      <label htmlFor={id} className="font-figtree text-3xl font-bold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="font-figtree text-2xl w-full font-semibold placeholder-japanese-indigo text-japanese-indigo h-15 p-2 rounded-xl max-w-[680px] border-american-blue border-2 bg-american-silver focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...register}
      />
      {error?.message && (
        <p className="text-[red] text-xl font-bold">{String(error.message)}</p>
      )}
    </div>
  );
};

export default AuthInput;

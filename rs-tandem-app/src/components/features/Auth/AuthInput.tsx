import type { AuthPropsType } from "../../../types/LoginType/AuthPropsType";

const AuthInput = ({
  label,
  id,
  type = "text",
  placeholder,
  register,
  error,
}: AuthPropsType) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label htmlFor={id} className="font-figtree text-xl font-bold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="font-figtree text-lg w-full font-semibold placeholder-japanese-indigo text-japanese-indigo h-[50px] p-2 rounded-xl max-w-[680px] border-american-blue border-2 bg-american-silver focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...register}
      />
      <p className="text-[red] text-base font-bold h-5">
        {error?.message ? String(error.message) : " "}
      </p>
    </div>
  );
};

export default AuthInput;
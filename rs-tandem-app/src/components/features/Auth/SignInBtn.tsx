import React from "react";

const SignInBtn = ({btnContent}:{btnContent:string}) => {
  return (
    <div>
      <button
        type="submit"
        className="mx-auto my-0 w-[250px] h-[60px] bg-deep-space-sparke rounded-xl text-3xl font-regular cursor-pointer"
      >
       {btnContent}
      </button>
    </div>
  );
};

export default SignInBtn;

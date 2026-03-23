import { useState, useEffect } from "react";
import Loading from "../components/common/Loading.tsx";
import Auth from "../components/features/Auth/Auth";
import { emailFieldConfig } from "../components/features/Auth/config/authFields/emailFieldConfig";
import { passwordFieldConfig } from "../components/features/Auth/config/authFields/passwordFieldConfig";

const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <Loading />;
  const dataArray = [emailFieldConfig, passwordFieldConfig];
  return <Auth dataArray={dataArray} label="Login" btnContent="Sign In" />;
};

export default Login;

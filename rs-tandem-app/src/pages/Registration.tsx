import { nameFieldConfig } from "../components/features/Auth/config/authFields/nameFieldConfig";
import { emailFieldConfig } from "../components/features/Auth/config/authFields/emailFieldConfig";
import { passwordFieldConfig } from "../components/features/Auth/config/authFields/passwordFieldConfig";
import Auth from "../components/features/Auth/Auth";
import { useState, useEffect } from "react";
import Loading from "../components/common/Loading.tsx";

const Registration = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <Loading />;
  const dataArray = [nameFieldConfig, emailFieldConfig, passwordFieldConfig];
  return (
    <Auth dataArray={dataArray} label="Registration" btnContent="Sign Up" />
  );
};

export default Registration;

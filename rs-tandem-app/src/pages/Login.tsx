import Auth from "../components/features/Auth/Auth";
import { emailFieldConfig } from "../components/features/Auth/config/authFields/emailFieldConfig";
import { passwordFieldConfig } from "../components/features/Auth/config/authFields/passwordFieldConfig";

const Login = () => {
  const dataArray = [emailFieldConfig, passwordFieldConfig];
  return <Auth dataArray={dataArray} label="Login" btnContent = "Sign In"/>;
};

export default Login;

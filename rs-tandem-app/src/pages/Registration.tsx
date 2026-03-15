import { nameFieldConfig } from '../components/features/Auth/config/authFields/nameFieldConfig';
import { emailFieldConfig } from '../components/features/Auth/config/authFields/emailFieldConfig';
import { passwordFieldConfig } from '../components/features/Auth/config/authFields/passwordFieldConfig';
import Auth from '../components/features/Auth/Auth';

const Registration = () => {
  const dataArray = [nameFieldConfig ,emailFieldConfig,passwordFieldConfig];
  return (
      <Auth dataArray={dataArray} label="Registration" btnContent = "Sign Up"/> 
  )
}

export default Registration
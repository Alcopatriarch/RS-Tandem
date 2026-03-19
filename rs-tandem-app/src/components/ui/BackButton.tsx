import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-2  items-center self-start ml-[30px] cursor-pointer"
      onClick={() => navigate("/")}
    >
      <KeyboardBackspaceIcon sx={{ fontSize: "31px" }} />
      <p className="text-2xl font-[inherit]">Back</p>
    </div>
  );
};

export default BackButton;

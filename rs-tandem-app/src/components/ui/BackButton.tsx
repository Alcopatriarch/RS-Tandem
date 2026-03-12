import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const BackButton = () => {
  return (
    <div className="flex gap-2  items-center self-start ml-[30px] cursor-pointer">
      <KeyboardBackspaceIcon sx={{ fontSize: "31px" }} />
      <p className="text-2xl font-[inherit]">Back</p>
    </div>
  );
};

export default BackButton;

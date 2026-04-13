import React from "react";
import { Button } from "@mui/material";
import lightImg from "../assets/welcome_light.png";
import darkImg from "../assets/welcome_dark.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/common/Loading.tsx";
import { useTranslation } from "react-i18next";
type HeaderProps = {
  darkMode?: boolean;
};
export const Welcome: React.FC<HeaderProps> = ({ darkMode = false }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <Loading />;
  return (
    <section className="w-full bg-milk  dark:bg-dark-gunmetal flex flex-col items-center justify-center text-center px-6">
      <img
        src={darkMode ? darkImg : lightImg}
        className="w-110 mb-12"
        alt="logo"
      />

      <h1 className="text-[80px] text-dark-gunmetal  dark:text-american-silver font-(--font-figtree) mb-6">
        {t("home.welcomeTitle")}
      </h1>

      <p className="text-[45px] text-dark-gunmetal  dark:text-american-silver mb-20">
        {t("home.subtitle")}
      </p>

      <div className="flex gap-20">
        <Button
          variant="contained"
          sx={{
            width: 281,
            height: 114,
            background: "#433667",
            borderRadius: "15px",
            fontSize: "40px",
            textTransform: "none",
            color: "#CCD0CF",
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign In
        </Button>

        <Button
          variant="outlined"
          sx={{
            width: 281,
            height: 114,
            background: "#D9D9D9",
            border: "1px solid #433667",
            borderRadius: "15px",
            fontSize: "40px",
            textTransform: "none",
            color: "#433667",
          }}
          onClick={() => {
            navigate("/signUp");
          }}
        >
          Register
        </Button>
      </div>
      <div className="w-110 h-[97px]"> </div>
    </section>
  );
};

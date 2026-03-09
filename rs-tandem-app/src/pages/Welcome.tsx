import React from "react";
import { Button } from "@mui/material";
import lightImg from "../assets/welcome_light.png";
import darkImg from "../assets/welcome_dark.png";

type HeaderProps = {
  darkMode?: boolean;
};
export const Welcome: React.FC<HeaderProps> = ({ darkMode = false }) => {
  return (
    <section className="w-full bg-[var(--color-dark-gunmetal)] dark:bg-[var(--color-milk)] flex flex-col items-center justify-center text-center px-6">
      <img
        src={darkMode ? lightImg : darkImg}
        className="w-[440px] mb-12"
        alt="logo"
      />

      <h1 className="text-[80px] text-[var(--color-american-silver)] dark:text-[var(--color-dark-gunmetal)] font-[var(--font-figtree)] mb-6">
        Welcome to the Tandem App
      </h1>

      <p className="text-[45px] text-[var(--color-american-silver)] dark:text-[var(--color-dark-gunmetal)] mb-20">
        Learn. Create. Conquer.
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
        >
          Register
        </Button>
      </div>
      <div className="w-[440px] h-[97px]"> </div>
    </section>
  );
};

import { Button } from "@mui/material";
import logo from "../assets/logo.png";

export const Welcome = () => {
  return (
    <section className="w-full bg-[var(--color-dark-gunmetal)] flex flex-col items-center justify-center text-center px-6">
      <img src={logo} className="w-[440px] mb-12" alt="logo" />

      <h1 className="text-[80px] text-[var(--color-american-silver)] font-[var(--font-figtree)] mb-6">
        Welcome to the Tandem App
      </h1>

      <p className="text-[45px] text-[var(--color-american-silver)] mb-20">
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
    </section>
  );
};

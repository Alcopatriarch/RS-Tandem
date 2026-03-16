import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";

type HeaderProps = {
  darkMode?: boolean;
  lang?: "RU" | "EN";
  onLangChange?: (newLang: "RU" | "EN") => void;
  onThemeChange: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  darkMode = true,
  lang = "RU",
  onLangChange,
  onThemeChange,
}) => {
  return (
    <header
      className={`
        shrink-0
        h-14 sm:h-16
        bg-eerie-black  dark:bg-gainsboro
        border-b-[0.5px] border-[var(--color-american-silver)]
        px-4 sm:px-6
        flex items-center justify-between
        text-american-silver dark:text-dark-gunmetal
        font-['Figtree'] weight-medium
        select-none
      `}
    >
      <div className="text-base sm:text-lg tracking-tight ">Tandem App</div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Select
          value={lang}
          onChange={(e) => onLangChange?.(e.target.value as "RU" | "EN")}
          size="small"
          variant="outlined"
          sx={{
            minWidth: 64,
            height: 34,
            fontSize: "0.875rem",
            color: "var(--color-american-silver)",
            borderColor: "var(--color-deep-space-sparke)",
            borderRadius: "6px",
            backgroundColor: "var(--color-rich-black)",
            "& .MuiSelect-icon": {
              color: "var(--color-cadet-grey)",
            },

            "&:hover": {
              backgroundColor: "var(--color-japanese-indigo)",
              borderColor: "var(--color-cadet-grey)",
            },

            "&.Mui-focused": {
              borderColor: "var(--color-teal)",
              boxShadow: "0 0 0 2px rgba(86,124,189,0.25)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--color-deep-space-sparke)",
            },
          }}
        >
          <MenuItem value="RU">RU</MenuItem>
          <MenuItem value="EN">EN</MenuItem>
        </Select>

        <IconButton onClick={() => onThemeChange()}>
          {darkMode ? (
            <LightModeIcon
              fontSize="small"
              sx={{ color: "var(--color-cadet-grey)" }}
            />
          ) : (
            <DarkModeIcon
              fontSize="small"
              sx={{ color: "var(--color-cadet-grey)" }}
            />
          )}
        </IconButton>
      </div>
    </header>
  );
};

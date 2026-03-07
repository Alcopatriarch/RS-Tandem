import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

type HeaderProps = {
  darkMode?: boolean;
  lang?: "RU" | "EN";
  onLangChange?: (newLang: "RU" | "EN") => void;
  onThemeChange?: (newMode: boolean) => void;
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
        h-14 sm:h-16
        bg-[var(--color-eerie-black)]
        border-b border-[var(--color-deep-space-sparke)/0.5]
        px-4 sm:px-6
        flex items-center justify-between
        text-[var(--color-american-silver)]
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

        <Select
          value={darkMode}
          sx={{
            minWidth: 44,
            height: 34,
            padding: "0 8px",
            color: "var(--color-american-silver)",
            borderColor: "var(--color-deep-space-sparke)",
            borderRadius: "6px",
            backgroundColor: "var(--color-rich-black)",
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
          <MenuItem value={false}>
            <LightModeIcon
              fontSize="small"
              sx={{ color: "var(--color-cadet-grey)" }}
            />
          </MenuItem>
          <MenuItem value={true}>
            <DarkModeIcon
              fontSize="small"
              sx={{ color: "var(--color-cadet-grey)" }}
            />
          </MenuItem>
        </Select>
      </div>
    </header>
  );
};

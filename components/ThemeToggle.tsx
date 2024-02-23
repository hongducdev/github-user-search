import React from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <button
          className="text-ctp-surface2 hover:text-ctp-text duration-300 ease-in-out transition-all flex items-center gap-4"
          onClick={() => setTheme("light")}
        >
          <span className="font-bold text-[13px] uppercase">Light</span>
          <RiSunFill className="text-xl" />
        </button>
      ) : (
        <button
          className="text-ctp-surface2 hover:text-ctp-text duration-300 ease-in-out transition-all flex items-center gap-4"
          onClick={() => setTheme("dark")}
        >
          <span className="font-bold text-[13px] uppercase">Dark</span>
          <RiMoonFill className="text-xl" />
        </button>
      )}
    </>
  );
};

export default ThemeToggle;

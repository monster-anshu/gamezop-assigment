"use client";
import { setTheme } from "@web-utils/theme-action";
import { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

type IThemeSwitchProps = {
  isLightTheme: boolean;
};

const ThemeSwitch: React.FC<IThemeSwitchProps> = ({ isLightTheme }) => {
  const handleClick = async () => {
    const theme = isLightTheme ? "dark" : "light";
    await setTheme(theme);
  };

  return (
    <button onClick={handleClick}>
      {isLightTheme ? <CiLight size={20} /> : <CiDark size={20} />}
    </button>
  );
};

export default ThemeSwitch;

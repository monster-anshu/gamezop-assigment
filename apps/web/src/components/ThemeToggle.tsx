"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const nextTheme = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={() =>
        nextTheme.setTheme(
          nextTheme.resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      {nextTheme.resolvedTheme === "light" ? (
        <CiLight size={20} />
      ) : (
        <CiDark size={20} />
      )}
    </button>
  );
};

export default ThemeSwitch;

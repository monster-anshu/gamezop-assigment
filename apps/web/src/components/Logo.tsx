"use client";
import { LOGO } from "@web-const/images";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

type ILogoProps = {
  size?: "sm" | "md" | "lg";
};

const config = {
  sm: {
    width: 108,
    height: 28,
  },
  md: {
    width: 140,
    height: 39,
  },
  lg: {
    width: 140,
    height: 39,
  },
};

const Logo: FC<ILogoProps> = ({ size = "md" }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const element = document.querySelector("html");

    if (!element) return;

    setIsLightTheme(!element.classList.contains("dark"));

    // Create a MutationObserver instance
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          setIsLightTheme(!element.classList.contains("dark"));
        }
      }
    });

    observer.observe(element, { attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Image
      src={isLightTheme ? LOGO.light : LOGO.dark}
      alt="Gamezop"
      priority
      suppressHydrationWarning
      {...config[size]}
    />
  );
};

export default Logo;

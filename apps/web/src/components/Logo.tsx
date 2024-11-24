"use client";
import { LOGO } from "@web-const/images";
import { useTheme } from "next-themes";
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
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Image
      src={isMounted && resolvedTheme === "light" ? LOGO.light : LOGO.dark}
      alt="Gamezop"
      priority
      suppressHydrationWarning
      {...config[size]}
    />
  );
};

export default Logo;

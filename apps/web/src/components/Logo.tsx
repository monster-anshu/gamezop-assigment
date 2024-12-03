"use client";
import { LOGO } from "@web-const/images";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

type ILogoProps = {
  size?: "sm" | "md" | "lg";
  disableLink?: boolean;
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

const Logo: FC<ILogoProps> = ({ size = "md", disableLink }) => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ImageComponent = (
    <Image
      src={isMounted && resolvedTheme === "light" ? LOGO.light : LOGO.dark}
      alt="Gamezop"
      priority
      suppressHydrationWarning
      {...config[size]}
    />
  );

  if (disableLink) return ImageComponent;

  return <Link href={"/"}>{ImageComponent}</Link>;
};

export default Logo;

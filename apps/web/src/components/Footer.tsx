import Image from "next/image";
import React, { FC } from "react";
import ThemeToggle from "./ThemeToggle";
import { LOGO } from "@web-const/images";
import LanguageSelector from "./LanguageSelector";

type IFooterProps = {};

const Footer: FC<IFooterProps> = () => {
  return (
    <footer className="bg-footer py-4">
      <div className="container">
        <div>
          <Image
            src={LOGO.dark}
            alt="Gamezop"
            width={108}
            height={28}
            priority
          />
        </div>
        <div>
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

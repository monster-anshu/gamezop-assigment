import Image from "next/image";
import React, { FC } from "react";
import ThemeToggle from "./ThemeToggle";
import { LOGO } from "@web-const/images";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";
import Separator from "@repo/ui/separator";
import Link from "next/link";

type IFooterProps = {};

const linkes = [
  {
    label: "Terms of Use",
    link: "https://static.gamezop.com/legal/terms-of-use/",
  },
  {
    label: "Privacy Policy",
    link: "https://static.gamezop.com/legal/privacy/",
  },
  {
    label: "About",
    link: "https://business.gamezop.com/about-us",
  },
  {
    label: "Jobs",
    link: "https://wellfound.com/company/gamezop/jobs",
  },
  {
    label: "Partner with Us",
    link: "https://business.gamezop.com/",
  },
];

const Footer: FC<IFooterProps> = () => {
  return (
    <footer className="bg-footer py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Logo size="sm" />
          </div>
          <div className="flex gap-2">
            <ThemeToggle />
            <Separator />
            <LanguageSelector />
          </div>
        </div>

        <hr className="border-primary-foreground my-4" />

        <div>
          {linkes.map((link) => (
            <Link
              href={link.link}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mr-3 text-sm underline dark:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="pt-2 text-sm">
          Gamezop is a plug-and-play gaming platform that any app or website can
          integrate to bring casual gaming for its users. Gamezop also operates
          Quizzop, a quizzing platform, that digital products can add as a
          trivia section.
          <br />
          <br />
          Over 5,000 products from more than 70 countries have integrated
          Gamezop and Quizzop. These include Amazon, Samsung Internet, Snap,
          Tata Play, AccuWeather, Paytm, Gulf News, and Branch.
          <br />
          <br />
          Games and trivia increase user engagement significantly within all
          kinds of apps and websites, besides opening a new stream of
          advertising revenue. Gamezop and Quizzop take 30 minutes to integrate
          and can be used for free: both by the products integrating them and
          end users
          <br />
          <br />
          Increase ad revenue and engagement on your app / website with games,
          quizzes, astrology, and cricket content. Visit: business.gamezop.com
          <br />
          <br />
          <span className="font-medium">
            © 2024 Advergame Technologies Pvt. Ltd. ("ATPL"). Gamezop ® &
            Quizzop ® are registered trademarks of ATPL.
          </span>
        </p>
      </div>
      <hr className="border-primary-foreground my-4" />
      <div className="container text-sm">Property ID: cfuucl7YgA</div>
    </footer>
  );
};

export default Footer;

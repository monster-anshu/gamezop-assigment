"use client";
import Image from "next/image";
import Separator from "@repo/ui/separator";
import React, { FC, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";

const SearchDropDown = dynamic(() => import("./SaerchDropdown"), {
  ssr: false,
});

type ISearchBoxProps = {
  isMobile?: boolean;
};

const SearchBox: FC<ISearchBoxProps> = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const SearchComponent = (
    <button
      className="bg-primary rounded-full p-2"
      onClick={() => setIsOpen((curr) => !curr)}
      aria-label="Search"
    >
      <CiSearch size={20} className="text-background dark:text-foreground" />
    </button>
  );

  return (
    <div
      className={twMerge(
        "relative ml-auto items-center gap-2",
        isMobile ? "flex md:hidden" : "hidden md:flex"
      )}
    >
      {!isMobile && <Separator />}
      <React.Suspense fallback={SearchComponent}>
        {isOpen ? (
          <SearchDropDown onHide={() => setIsOpen(false)} />
        ) : (
          SearchComponent
        )}
      </React.Suspense>

      <Image
        src={"https://static.gamezop.com/comet/assets/img/criczop/icon.svg"}
        width={40}
        height={40}
        alt="CricZop"
      />
    </div>
  );
};

export default SearchBox;

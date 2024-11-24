"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Separator from "@repo/ui/separator";
import React, { FC, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

type ISearchBoxProps = {
  isMobile?: boolean;
};

const SearchBox: FC<ISearchBoxProps> = ({ isMobile }) => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  const [Search, setSearch] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setSearch("");
    } else {
      ref.current?.focus();
    }
  }, [isOpen]);

  return (
    <div
      className={twMerge(
        "ml-auto items-center gap-2",
        isMobile ? "flex md:hidden" : "hidden md:flex"
      )}
    >
      {!isMobile && <Separator />}
      {isOpen ? (
        <div
          className="outline-primary bg-primary/10 dark:bg-primary flex items-center gap-1 rounded-3xl px-2 outline-1 focus-within:outline dark:outline-white"
          onClick={() => ref.current?.focus()}
        >
          <CiSearch size={18} />
          <input
            type="text"
            ref={ref}
            placeholder={t("search.placeholder")}
            className="w-44 bg-transparent px-1 py-2 text-sm focus:outline-0"
          />
          <button
            className="bg-secondary rounded-full p-1 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            <RxCross2 size={16} />
          </button>
        </div>
      ) : (
        <button
          className="bg-primary rounded-full p-2 text-white"
          onClick={() => setIsOpen((curr) => !curr)}
        >
          <CiSearch size={20} />
        </button>
      )}
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

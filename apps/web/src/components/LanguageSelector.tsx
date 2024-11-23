"use client";
import React, { FC } from "react";
import { setLocale } from "./actions";

type ILanguageSelectorProps = {};

const LanguageSelector: FC<ILanguageSelectorProps> = () => {
  return (
    <div className="flex gap-4">
      <button onClick={() => setLocale("en")}>EN</button>
      <button onClick={() => setLocale("de")}>DE</button>
    </div>
  );
};

export default LanguageSelector;

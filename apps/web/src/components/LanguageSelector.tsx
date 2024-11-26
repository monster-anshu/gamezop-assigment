"use client";
import React, { FC } from "react";
import { setLocale } from "./actions";

type ILanguageSelectorProps = {};

const LanguageSelector: FC<ILanguageSelectorProps> = () => {
  return (
    <div className="flex gap-4">
      <button onClick={() => setLocale("en")}>English</button>
      <button onClick={() => setLocale("hi")}>Hindi</button>
      <button onClick={() => setLocale("de")}>German</button>
    </div>
  );
};

export default LanguageSelector;

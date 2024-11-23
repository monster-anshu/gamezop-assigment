"use server";

import { isLangSupported, SUPPORTED_LANGUAGE } from "@web-const/locales";
import { cookies } from "next/headers";

export const setLocale = async (lang: string) => {
  if (!isLangSupported(lang)) {
    return {
      error: "unsupported language",
    };
  }
  const cookie = await cookies();
  cookie.set("locale", lang);
};

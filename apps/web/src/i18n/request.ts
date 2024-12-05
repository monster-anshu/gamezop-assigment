import { isLangSupported } from "@web-const/locales";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

import de from "../locales/de.json";
import en from "../locales/en.json";
import hi from "../locales/hi.json";

const messages = {
  en,
  hi,
  de,
};

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookie = await cookies();
  let locale = cookie.get("locale")?.value || "en";

  if (locale && !isLangSupported(locale)) {
    locale = "en";
  }

  if (!(locale in messages)) {
    locale = "en";
  }

  return {
    locale,
    messages: messages[locale as keyof typeof messages],
  };
});

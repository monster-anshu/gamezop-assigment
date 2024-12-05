import { isLangSupported } from "@web-const/locales";
import de from "../locales/de.json";
import en from "../locales/en.json";
import hi from "../locales/hi.json";
import { cookies } from "next/headers";

const messages = {
  en,
  hi,
  de,
};

export const getMessages = async () => {
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
};

import { isLangSupported } from "@web-const/locales";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookie = await cookies();
  let locale = cookie.get("locale")?.value || "en";

  if (locale && !isLangSupported(locale)) {
    locale = "en";
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});

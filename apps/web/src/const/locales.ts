export const SUPPORTED_LANGUAGE = ["en", "de"] as const;

export const isLangSupported = (lang: string) =>
  SUPPORTED_LANGUAGE.includes(lang as never);

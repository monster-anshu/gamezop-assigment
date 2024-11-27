"use server";

import { cookies } from "next/headers";

export const setTheme = async (theme: string) => {
  if (!["dark", "light"].includes(theme)) return;

  const cookieStore = await cookies();
  cookieStore.set("theme", theme);
};

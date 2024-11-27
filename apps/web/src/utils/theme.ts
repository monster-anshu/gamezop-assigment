import { cookies } from "next/headers";

export const isLightTheme = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("theme")?.value === "light";
};

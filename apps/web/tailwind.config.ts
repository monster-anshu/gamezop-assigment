import type { Config } from "tailwindcss";
import sharedConfig from "@repo/config-tailwind";

const config: Pick<Config, "content" | "presets" | "theme"> = {
  content: [
    "./src/app/**/*.tsx",
    "./src/components/**/*.tsx",
    "../../packages/ui/src/**/*.{tsx,ts,jsx,js,html,mjs}",
  ],
  presets: [sharedConfig],
};

export default config;

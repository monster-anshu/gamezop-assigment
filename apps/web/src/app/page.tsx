import { Button } from "@repo/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Hero");

  return (
    <div>
      <h1>{t("title")}</h1>
      <Button appName="web">Click me</Button>
    </div>
  );
}

"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FC } from "react";

type IPushNotificationProps = {};

const PushNotification: FC<IPushNotificationProps> = () => {
  const t = useTranslations("Installation.notification");
  const handleClick = async () => {
    const result = await Notification.requestPermission();
    if (result === "granted") {
      new Notification("Subscribed successfully");
    }
  };

  return (
    <div
      className="flex h-64 w-[650px] items-start justify-between rounded-2xl"
      style={{
        backgroundImage: "url('/images/a2hs-bg.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="pl-10 pt-10 text-white">
        <p className="text-3xl font-bold">{t("title")}</p>
        <p className="text-2xl font-medium">{t("subTitle")}</p>
        <button
          onClick={handleClick}
          className="mt-5 rounded-3xl bg-yellow-300 px-8 py-1 text-xl font-bold text-orange-600"
        >
          {t("buttonLabel")}
        </button>
      </div>
      <Image src={"/images/bell.png"} alt="bell" width={200} height={208} />
    </div>
  );
};

export default PushNotification;

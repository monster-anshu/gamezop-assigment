"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FC } from "react";

type IPushNotificationProps = {};

const aspectRatio = 650 / 256;

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
      className="flex h-32 items-start justify-between rounded-2xl md:h-64"
      style={{
        backgroundImage: "url('/images/a2hs-bg.png')",
        backgroundSize: "cover",
        aspectRatio,
      }}
    >
      <div className="pl-4 pt-4 text-white md:pl-10 md:pt-10">
        <p className="font-bold md:text-3xl">{t("title")}</p>
        <p className="font-medium md:text-2xl">{t("subTitle")}</p>
        <button
          onClick={handleClick}
          className="mt-5 rounded-3xl bg-yellow-300 px-6 py-1 font-bold text-orange-600 md:px-8 md:text-xl"
        >
          {t("buttonLabel")}
        </button>
      </div>
      <Image
        src={"/images/bell.png"}
        className="h-24 w-24 md:h-52 md:w-52"
        alt="bell"
        width={200}
        height={208}
      />
    </div>
  );
};

export default PushNotification;

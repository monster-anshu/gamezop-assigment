"use client";
import { useTranslations } from "next-intl";
import React, { FC, useEffect, useRef } from "react";

type IPwaInstallationProps = {};

const aspectRatio = 650 / 256;

const PwaInstallation: FC<IPwaInstallationProps> = () => {
  const t = useTranslations("Installation.pwa");
  const installEvent = useRef<null | Event>(null);

  const handleClick = async () => {
    const installPrompt = installEvent.current;
    if (!installPrompt) {
      return;
    }
    // @ts-ignore
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
  };

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }

    const listener = (e: Event) => {
      installEvent.current = e;
      e.preventDefault();
    };

    window.addEventListener("beforeinstallprompt", listener);

    return () => {
      window.removeEventListener("beforeinstallprompt", listener);
    };
  }, []);

  return (
    <div
      className="relative h-32 overflow-hidden rounded-2xl md:h-64"
      style={{
        aspectRatio,
      }}
    >
      <video
        poster="/images/a2hs-bg.png"
        className="w-full"
        autoPlay
        playsInline
        loop
        muted
        ref={(videoElement) => {
          videoElement?.play();
        }}
      >
        <source src="/videos/a2hs-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute left-4 top-4 text-white md:left-10 md:top-10">
        <p className="font-bold md:text-3xl">{t("title")}</p>
        <p className="font-medium md:text-2xl">{t("subTitle")}</p>
        <button
          onClick={handleClick}
          className="mt-5 rounded-3xl bg-yellow-300 px-6 py-1 font-bold text-orange-600 md:px-8 md:text-xl"
        >
          {t("buttonLabel")}
        </button>
      </div>
    </div>
  );
};

export default PwaInstallation;

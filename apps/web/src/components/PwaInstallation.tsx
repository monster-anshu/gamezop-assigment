"use client";
import { useTranslations } from "next-intl";
import React, { FC, useEffect, useRef } from "react";

type IPwaInstallationProps = {};

const PwaInstallation: FC<IPwaInstallationProps> = () => {
  const t = useTranslations("Installation.pwa");
  const installEvent = useRef<null | Event>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
      // e.preventDefault();
    };

    window.addEventListener("beforeinstallprompt", listener);

    return () => {
      window.removeEventListener("beforeinstallprompt", listener);
    };
  }, []);

  return (
    <div className="relative h-64 w-[650px] overflow-hidden rounded-2xl">
      <video
        src="/videos/a2hs-video.mp4"
        poster="/images/a2hs-bg.png"
        className="w-full"
        autoPlay
        playsInline
        loop
        onLoad={() => videoRef.current?.play()}
        ref={videoRef}
      />
      <div className="absolute left-10 top-10 text-white">
        <p className="text-3xl font-bold">{t("title")}</p>
        <p className="text-2xl font-medium">{t("subTitle")}</p>
        <button
          onClick={handleClick}
          className="mt-5 rounded-3xl bg-orange-600 px-8 py-1 text-xl font-bold"
        >
          {t("buttonLabel")}
        </button>
      </div>
    </div>
  );
};

export default PwaInstallation;

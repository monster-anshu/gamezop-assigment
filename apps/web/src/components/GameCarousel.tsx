"use client";
import { Game } from "@web-types/game";
import { getIconForCategory } from "@web-utils/icon";
import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useTranslations } from "next-intl";

type IGameCarouselProps = {
  games: Game[];
  category: string;
};

const NextButton = () => {
  const swiper = useSwiper();
  const [last, setLast] = useState(swiper.isEnd);
  const [first, setFirst] = useState(swiper.isBeginning);

  useEffect(() => {
    const litener = () => {};

    swiper.on("slideChange", () => {
      setLast(swiper.isEnd);
      setFirst(swiper.isBeginning);
    });
    return () => {
      swiper.off("slideChange", litener);
    };
  }, [swiper]);

  return (
    <>
      {!first && (
        <button
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2"
          onClick={() => swiper.slideTo(swiper.activeIndex - 1)}
        >
          <MdOutlineNavigateBefore
            size={22}
            className="font-medium text-black"
          />
        </button>
      )}
      {!last && (
        <button
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2"
          onClick={() => swiper.slideTo(swiper.activeIndex + 1)}
        >
          <MdOutlineNavigateNext size={22} className="font-medium text-black" />
        </button>
      )}
    </>
  );
};

const GameCarousel: FC<IGameCarouselProps> = ({ category, games }) => {
  const t = useTranslations("GameCarousel");
  return (
    <div className="container">
      <div className="bg-secondary border-primary-foreground rounded-2xl border p-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-semibold">
            {getIconForCategory(category)}
            <p>{category}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-xl font-semibold uppercase">
              <p className="text-primary dark:text-foreground">
                {t("view-all")}
              </p>
              <button className="rounded-full bg-yellow-300 p-1">
                <MdOutlineNavigateNext
                  size={20}
                  className="font-medium text-black"
                />
              </button>
            </div>
          </div>
        </div>

        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            slidesPerGroupAuto
            modules={[FreeMode, Pagination]}
          >
            {games.map((game, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={game.image}
                    alt={game.name}
                    width={188}
                    height={188}
                    className="rounded-2xl"
                  />
                  <p className="mt-2 text-center text-lg font-medium">
                    {game.name}
                  </p>
                </SwiperSlide>
              );
            })}
            <NextButton />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default GameCarousel;

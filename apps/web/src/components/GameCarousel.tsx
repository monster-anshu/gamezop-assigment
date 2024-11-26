import { Game } from "@web-types/game";
import { getIconForCategory } from "@web-utils/icon";
import React, { FC } from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";
import Carousel from "./Carousel";
import { MdOutlineNavigateNext } from "react-icons/md";

type IGameCarouselProps = {
  games: Game[];
  category: string;
};

const GameCarousel: FC<IGameCarouselProps> = ({ category, games }) => {
  const t = useTranslations("GameCarousel");
  return (
    <div className="md:container">
      <div className="md:bg-secondary border-primary-foreground rounded-2xl md:border md:p-4">
        <div className="mb-6 flex items-center justify-between px-3 md:px-0">
          <div className="flex items-center gap-2 px-2 text-xl font-semibold">
            {getIconForCategory(category)}
            <p>{category}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 font-semibold uppercase md:text-xl">
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
          <Carousel>
            {games.map((game, index) => {
              return (
                <div className="relative w-40" key={index}>
                  <Image
                    src={game.image}
                    alt={game.name}
                    width={176}
                    height={176}
                    className="mx-auto h-40 w-40 rounded-2xl md:h-44 md:w-44"
                  />
                  <p className="mt-2 line-clamp-1 text-center text-lg font-medium">
                    {game.name}
                  </p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default GameCarousel;

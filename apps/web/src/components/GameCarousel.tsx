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
          <Carousel>
            {games.map((game, index) => {
              return (
                <React.Fragment key={index}>
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
                </React.Fragment>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default GameCarousel;

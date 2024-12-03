import { Game } from "@web-types/game";
import { getIconForCategory } from "@web-utils/icon";
import React, { FC } from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";
import Carousel from "./Carousel";
import { MdOutlineNavigateNext } from "react-icons/md";
import Link from "next/link";
import GameCard from "./GameCard";

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
            <Link
              href={`/category/${category}`}
              className="flex items-center gap-2 font-semibold uppercase md:text-xl"
            >
              <p className="text-primary dark:text-foreground">
                {t("view-all")}
              </p>
              <button className="rounded-full bg-yellow-300 p-1">
                <MdOutlineNavigateNext
                  size={20}
                  className="font-medium text-black"
                />
              </button>
            </Link>
          </div>
        </div>

        <div>
          <Carousel>
            {games.map((game, index) => {
              return <GameCard game={game} key={game.id} />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default GameCarousel;

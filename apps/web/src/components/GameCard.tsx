import { Game } from "@web-types/game";
import Image from "next/image";
import React, { FC } from "react";
import GameHeart from "./GameHeart";
import { twMerge } from "tailwind-merge";

type IGameCardProps = {
  game: Game;
  className?: string;
};

const GameCard: FC<IGameCardProps> = ({ game, className }) => {
  return (
    <div className={twMerge("relative w-36 md:w-[188px]", className)}>
      <Image
        src={game.image}
        alt={game.name}
        width={188}
        height={188}
        className="aspect-square w-full rounded-2xl object-cover"
      />
      <p className="mt-2 line-clamp-1 text-center text-lg font-medium">
        {game.name}
      </p>
      <GameHeart game={game} />
    </div>
  );
};

export default GameCard;

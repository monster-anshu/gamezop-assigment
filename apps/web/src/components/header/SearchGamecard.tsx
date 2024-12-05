import { Game } from "@web-types/game";
import Image from "next/image";
import React, { FC } from "react";

type ISearchGamecardProps = {
  game: Game;
};

const SearchGamecard: FC<ISearchGamecardProps> = ({ game }) => {
  return (
    <div className="hover:bg-background flex items-start gap-2 px-2 py-2">
      <Image
        src={game.image}
        width={48}
        height={48}
        alt={game.name}
        className="rounded-lg"
      />
      <div className="flex-1 leading-5">
        <p className="font-bold">{game.name}</p>
        <span className="text-xs">{game.category}</span>
      </div>
    </div>
  );
};

export default SearchGamecard;